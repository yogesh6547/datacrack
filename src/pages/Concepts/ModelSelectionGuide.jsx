/**
 * Model Selection, Feature Engineering, and Production ML in the Real World.
 * Rewritten as a logical lifecycle flow with "why" explanations at every step.
 */
const ModelSelectionGuide = {
  slug: 'model-selection-guide',
  title: 'Model Selection & Real-World ML',
  order: 5,
  content: `
## The ML Project Lifecycle: The Complete Flow

Building a production ML model is a sequence of dependent decisions. Each step constrains the next. Understanding this flow prevents the most common ML mistakes: choosing a model before understanding the data, engineering features after model selection, or deploying without monitoring.

**The 8-step lifecycle:**

1. **Problem Definition** — What are we solving? What does success look like?
2. **Data Understanding** — What do we have? What is missing? What is the scale?
3. **Data Preprocessing** — Handle missing values, outliers, encoding
4. **Feature Engineering** — Create new features from raw data
5. **Feature Selection** — Remove irrelevant or redundant features
6. **Model Selection & Training** — Choose algorithm, tune, validate
7. **Evaluation & Error Analysis** — Does it meet the business threshold?
8. **Deployment & Monitoring** — Serve predictions, track performance, retrain

**Critical timing rules:**
- Feature engineering happens **before** model selection, but iterates **after** initial model results reveal which features matter.
- Feature selection happens **after** initial feature engineering but **before** final model tuning. Running it too early leaks test information. Running it too late wastes compute.
- Model selection is the **middle** of the pipeline, not the beginning. Choosing XGBoost before understanding your data is like choosing a car before knowing if you need to drive on water.

> **💡 Interview Tip:** The biggest differentiator between junior and senior ML engineers is that seniors spend 70% of their time on steps 1-5 (problem through feature selection) and only 30% on steps 6-8 (model through deployment). Juniors do the reverse.

---

## Step 1-2: Understanding Your Data Before Choosing Anything

### The Data Assessment Checklist

Before touching any model, answer these questions. Each answer constrains your downstream choices:

**Scale questions (determine which algorithms are feasible):**
- How many rows? (<1K → simple models. 1K-100K → most models. 100K-10M → gradient boosting. >10M → LightGBM or distributed.)
- How many features? (<50 → use all. 50-500 → consider selection. >500 → must reduce.)
- What is the memory footprint? (If >80% of RAM, you need sampling or streaming.)

**Quality questions (determine preprocessing needs):**
- What percentage of values are missing per feature? (<5% → median. 5-30% → KNN/imputation. >30% → drop or indicator.)
- Are there outliers? (Tree models: robust. Linear models/svm: must handle.)
- What are the feature types? (Continuous, categorical, text, images — each needs different encoding.)

**Target questions (determine metrics and model type):**
- What is the class distribution? (Balanced → accuracy OK. Imbalanced → need F1/AUC.)
- Is the target variable well-defined? (Ambiguous labels → clean data first.)
- Is there data leakage? (Features derived from the target or from the future.)

**Constraint questions (determine deployment architecture):**
- What is the inference latency requirement? (<1ms → LR. <10ms → small trees. <100ms → any tree model. No limit → any model.)
- Must the model be interpretable? (Regulated industries → LR/DT. Unregulated → any.)
- How often does the data change? (Static → train once. Streaming → online learning.)

> **⚠️ Common Pitfall:** Skipping data understanding and jumping to model selection. A data scientist who picks XGBoost without checking class distribution, missing values, or data leakage will build a model that looks great in training but fails in production.

### Dataset Size: What Changes at Each Tier

| Dataset Size | Characteristics | Recommended Approach | Why |
|---|---|---|---|
| **<1K rows** | Very limited signal, high overfitting risk | Logistic Regression, small Decision Tree, k-NN | Simple models have fewer parameters to overfit. Complex models need more data to generalize. |
| **1K - 100K rows** | Moderate signal, most algorithms work | Random Forest, XGBoost, LightGBM, SVM | Enough data for tree ensembles and kernel methods. Cross-validation is reliable. |
| **100K - 10M rows** | Strong signal, training time matters | LightGBM (histogram splitting), XGBoost with early stopping | LightGBM's GOSS + EFB make it 10x faster than XGBoost at this scale. |
| **>10M rows** | Abundant signal, compute is the bottleneck | LightGBM with distributed training (Dask/Spark), deep learning | LightGBM can handle 10M rows in minutes. For >100M, use Spark or GPU training. |

**Why dataset size matters for model choice:**
- **Small datasets** have high variance — complex models memorize rather than learn. Bias is acceptable; variance is the enemy. Use simple models.
- **Large datasets** have low variance — complex models can learn genuine patterns without overfitting. Bias becomes the enemy. Use complex models.

---

## Step 3-4: Feature Engineering — Building the Right Inputs

### The Feature Engineering Flow

The correct order of operations:

1. **Handle missing values** (before anything else — models cannot process NaN)
2. **Encode categoricals** (convert text categories to numbers)
3. **Create derived features** (interactions, aggregations, domain-specific)
4. **Scale numerical features** (only for distance-based models: SVM, KNN, neural networks)
5. **Handle temporal features** (lags, rolling windows, calendar)
6. **Iterate based on model results** (check feature importance, engineer new features)

**Why this order:** Each step depends on the previous. You cannot create interaction features from unencoded categoricals. You cannot scale features that still contain NaN. And you should not finalize feature engineering until you see which features the model actually uses.

### Handling Missing Values: The Decision Tree

**First, understand WHY values are missing:**

| Mechanism | Example | What It Means | Strategy |
|---|---|---|---|
| **MCAR** (random) | Lab equipment malfunction | Missingness is unrelated to anything | Any imputation works. Even deletion is OK if <5% missing. |
| **MAR** (depends on observed data) | Older patients skip certain tests | Missingness depends on other features you have | Use KNN or iterative imputation (predict missing values from other features). |
| **MNAR** (depends on the missing value itself) | Rich people do not report income | The missingness IS the signal | Create a binary "is_missing" feature AND impute. The missingness itself is informative. |

**Practical rules:**
- <5% missing: Median imputation is fine. The impact is negligible.
- 5-30% missing: Use KNN imputation or \`IterativeImputer\`. Simple median loses relationships between features.
- >30% missing: Create an "is_missing" indicator column, then impute. Or consider dropping the feature if it has no predictive power.
- For XGBoost/LightGBM: Let the algorithm handle it natively. It learns the optimal handling from the data, often outperforming manual imputation.

> **💡 Why this matters:** Incorrect imputation can introduce bias. If rich people do not report income (MNAR), imputing with the median income biases the model toward middle-income predictions. The "is_missing" flag captures the signal that income was not reported.

### Encoding Categorical Features: Why Method Matters

The encoding method determines how the model perceives categories:

| Method | What It Does | When It Works | When It Fails |
|---|---|---|---|
| **One-hot encoding** | Creates binary column per category | Low cardinality (<20 categories) | High cardinality: 1000 categories = 1000 sparse columns. Tree models waste splits on irrelevant columns. |
| **Label encoding** | Assigns integer per category | Ordinal features (low < medium < high) | Nominal features: forces arbitrary order. Tree models learn "Red=0, Blue=1, Green=2" implies Red < Blue < Green. |
| **Target encoding** | Replaces category with mean of target | High cardinality, tree models | Without regularization: overfits. Always use smoothing + cross-validation. |
| **Frequency encoding** | Replaces category with its count | When frequency correlates with target | When rare categories are important (they get the same low frequency). |
| **Embedding encoding** | Learns dense vector per category | Very high cardinality (100K+ categories) | Requires neural network architecture. Not compatible with tree models directly. |

**Why target encoding is the best default for tree models with high cardinality:**
- It compresses N categories into 1 numerical feature.
- Similar categories (with similar target means) get similar values.
- Tree models can immediately split on this feature, unlike one-hot where they must find the right column among 1000.

> **⚠️ Common Pitfall:** Target encoding without cross-validation causes data leakage. The encoded feature leaks information about the target variable. Always compute target means using only the training fold during cross-validation.

### Creating Derived Features: The Art of Feature Engineering

The most impactful feature engineering creates features that capture **domain knowledge**:

**Interaction features (capture combined effects):**
- \`age * income\` — A 25-year-old earning \$200K is different from a 65-year-old earning \$200K.
- \`price * discount_pct\` — A \$100 item at 50% off (\$50 effective) vs. a \$10 item at 50% off (\$5 effective).
- \`visit_count * days_since_last_visit\` — Frequent recent visitors vs. infrequent old visitors.

**Aggregation features (capture patterns across groups):**
- \`avg_purchase_amount_per_user\` — User spending behavior.
- \`days_since_last_transaction\` — Recency (strongest predictor in many domains).
- \`num_transactions_last_7d\` — Velocity (detects sudden behavior changes).

**Domain-specific features:**
- **E-commerce:** Cart abandonment rate, browse-to-purchase ratio, price sensitivity score.
- **Healthcare:** Medication interaction count, lab trend slope, visit frequency.
- **Finance:** Debt-to-income ratio, credit utilization, payment history streak.

> **💡 Why feature engineering often matters more than model choice:** A well-engineered feature set with Logistic Regression frequently outperforms a raw feature set with XGBoost. Features determine what the model CAN learn. The algorithm determines HOW it learns.

### Time Series Feature Engineering: Why Standard Approaches Fail

Time series data has a fundamental constraint: **you cannot use future information to predict the past.** This eliminates many standard feature engineering approaches.

**Correct approach (point-in-time features):**
\`\`\`python
# WRONG: Using today's data to predict today
df['avg_sales_today'] = df['sales'].rolling(7).mean()  # LEAKS FUTURE DATA

# RIGHT: Using yesterday's data to predict today
df['avg_sales_7d'] = df['sales'].shift(1).rolling(7).mean()  # NO LEAKAGE
\`\`\`

**Essential time series features:**
- **Lag features:** What was the value 1 day, 7 days, 30 days ago? (Captures autocorrelation.)
- **Rolling statistics:** Mean, std, min, max over sliding windows. (Smooths noise, reveals trends.)
- **Calendar features:** Day of week, month, is_weekend, is_holiday. (Captures seasonality.)
- **Trend features:** Slope of recent values, rate of change. (Captures direction of movement.)
- **Seasonality:** Fourier features for daily, weekly, yearly patterns.

> **💡 Interview Tip:** For time series, always emphasize that you must use **temporal splits** (train on past, validate on future) — never random splits. Random splits cause data leakage from the future into the past, producing artificially high accuracy.

### Feature Engineering for Massive Datasets (>10M rows)

When you have millions of rows, feature engineering becomes a **compute problem**:

1. **Pre-compute in batch:** Run feature engineering on a schedule (daily/weekly) and store results in a feature store.
2. **Use efficient operations:** Vectorized pandas operations, not row-by-row loops. For >100M rows, use Dask or Spark.
3. **Feature hashing:** For high-cardinality categoricals, hash into a fixed number of buckets. Trade some accuracy for massive memory savings.
4. **Subsample for prototyping:** Develop features on 100K rows, then scale to full data once the pipeline is validated.
5. **Feature store:** Centralized repository (Feast, Tecton, Redis) that serves pre-computed features at prediction time. This eliminates training-serving skew.

> **⚠️ Common Pitfall:** Computing features differently in training vs. production. In training, you use the full dataset. In production, you only have data up to the current moment. Always use point-in-time features during training to simulate production conditions.

---

## Step 5: Feature Selection — Reducing Dimensionality

### When Feature Selection Happens

Feature selection happens **after** initial feature engineering and **before** final model tuning:

1. Engineer features (create interactions, encode, aggregate)
2. Train a quick baseline model (Random Forest or XGBoost with all features)
3. **Run feature selection** (identify which features matter)
4. Retrain the final model with selected features
5. Iterate if results are unsatisfactory

**Why this timing:** Running feature selection before feature engineering means you are selecting from incomplete features. Running it after final model tuning wastes compute on irrelevant features.

### Methods by Dataset Size

**<50 features:** Do NOT run feature selection. Use all features. The risk of removing a useful feature outweighs the marginal benefit of removal.

**50-500 features:** Start with correlation filter (remove pairs with >0.95 correlation). Then use tree-based importance to rank features. Keep top 50-100.

**500-5000 features:** Use L1 regularization (Lasso) to automatically select features. Or use PCA for dimensionality reduction. Then apply tree importance on the reduced set.

**>5000 features (text, genomics):** Use domain-specific selection first (TF-IDF for text, statistical tests for genomics). Then apply model-based selection on the reduced set.

### The Golden Rule of Feature Selection

**NEVER run feature selection on the entire dataset before splitting into train/test.** This leaks information from the test set into the feature selection process, causing overly optimistic evaluation. Always perform feature selection **within** cross-validation folds.

---

## Step 6: Model Selection — Choosing the Right Algorithm

### The Baseline-First Approach

Always start simple and add complexity only when needed:

**Step 6a: Establish a baseline (30 minutes)**

Train Logistic Regression (classification) or Linear Regression (regression). This takes 5 minutes and tells you:
- What accuracy floor to expect
- Which features are most predictive (coefficients)
- Whether the problem is learnable at all

If the baseline is already good enough for the business, **stop here.** Do not add complexity for marginal gains.

**Step 6b: Try tree-based models (1-2 hours)**

If the baseline is insufficient, try Random Forest. RF requires minimal tuning, does not overfit with more trees, and provides feature importance. If RF is good enough, stop here.

**Step 6c: Try gradient boosting (2-4 hours)**

If RF is not sufficient, try XGBoost or LightGBM. These typically achieve the highest accuracy for tabular data but require more tuning and are prone to overfitting without early stopping.

**Step 6d: Try deep learning (if applicable)**

Only when the data is unstructured (text, images, audio) or when tabular models are genuinely insufficient. Deep learning requires large datasets, GPU compute, and significant engineering effort.

### Why Each Model Is Chosen Over Alternatives

**Logistic Regression — Why start here:**
- Trains in seconds on any dataset size
- Coefficients directly tell you feature importance and direction
- Interpretable: "Each additional year of age increases default risk by 3%"
- Regularization (L1/L2) provides automatic feature selection and overfitting control
- Serves as a performance floor — no complex model should perform worse

**Random Forest — Why try it next:**
- Handles mixed feature types (continuous + categorical) without preprocessing
- Does not overfit with more trees (converges to a limit)
- Built-in OOB validation (no need for a separate validation set)
- Robust to outliers and noisy features
- Feature importance reveals which features matter

**XGBoost/LightGBM — Why use them for maximum accuracy:**
- Sequential error correction captures patterns that parallel bagging misses
- Built-in L1/L2 regularization prevents overfitting
- Early stopping automatically finds the optimal number of trees
- Consistently wins Kaggle tabular competitions
- Handles missing values natively (XGBoost, LightGBM)

**Deep Learning — Why use it (and when not to):**
- **Use when:** Data is unstructured (text, images, audio), or you need to learn complex non-linear representations automatically
- **Do not use when:** Data is tabular with <100K rows, you need interpretability, or inference latency must be <10ms
- **Why:** Neural networks have millions of parameters. They need massive data to generalize. On tabular data with moderate size, gradient boosting usually wins.

### The Latency vs Accuracy Tradeoff

| Inference Budget | Best Choice | Why |
|---|---|---|
| <1ms | Logistic Regression | Dot product + sigmoid is a single CPU instruction |
| <5ms | Small Decision Tree (depth 3-5) | Traversing 5 nodes is trivially fast |
| <10ms | Random Forest (100 trees, depth 10) | Parallel tree traversal |
| <50ms | XGBoost/LightGBM (100-500 trees) | Sequential but optimized |
| <100ms | Any tree ensemble | Including larger ensembles |
| No limit | Deep learning, large ensembles | Full model complexity |

---

## Step 7: Complex Real-World Scenarios

### Scenario: 1000+ Features, 50K Rows (High-Dimensional, Small Dataset)

**The problem:** More features than samples means extreme overfitting risk. Every model will find patterns in noise.

**The flow:**

1. **Variance threshold:** Remove features with near-zero variance (constant or near-constant values). These provide no information.
2. **Correlation filter:** Remove features with >0.95 pairwise correlation. Keep the one with higher individual correlation to the target.
3. **Statistical tests:** Run mutual information or chi-squared tests to rank features by relevance to the target.
4. **L1 regularization:** Train a Logistic Regression with L1 penalty. Features with zero weights are irrelevant. This typically reduces 1000 features to 50-100.
5. **Tree importance validation:** Train a Random Forest on the L1-selected features. Compare importance rankings. If they agree, the selection is robust.
6. **Final model:** Train XGBoost/LightGBM on the selected 50-100 features.

**Why this order:** Each step reduces the feature space further, making the next step more effective. L1 regularization on 1000 features with 50K rows is feasible. XGBoost on 1000 features with 50K rows would overfit badly.

### Scenario: 10M+ Rows (Massive Dataset)

**The problem:** Training time becomes the bottleneck. A single XGBoost training run might take hours.

**The flow:**

1. **Start with LightGBM:** Histogram-based splitting + GOSS + EFB makes it 10x faster than XGBoost on large datasets.
2. **Subsample for prototyping:** Train on 1M rows first. If results are good, scale to full data. If not, the issue is likely features or labels, not data size.
3. **Feature engineering in batch:** Pre-compute features using Dask or Spark. Store in Parquet format for fast loading.
4. **Distributed training:** If LightGBM on a single machine is too slow, use Dask-LightGBM or Spark MLlib for distributed training across multiple machines.
5. **Online learning:** If new data arrives continuously (e.g., clickstream), consider SGDClassifier or online variants of tree models that update incrementally.

**Why LightGBM over XGBoost at this scale:** LightGBM's histogram-based splitting evaluates only 255 bin boundaries instead of sorting all unique values. GOSS reduces the number of data points processed. EFB reduces the number of features scanned. Combined, these give 10-100x speedup on large datasets.

### Scenario: Live Streaming Data (Real-Time Predictions)

**The problem:** Features must be computed in real-time from a data stream. You cannot use future data. The model must score each event in <10ms.

**The flow:**

1. **Feature store:** Pre-compute batch features (user history, aggregates) and store in Redis/Kafka. These are served in <1ms.
2. **Streaming features:** Compute real-time features (velocity, recency) using a streaming framework (Flink, Kafka Streams). These update with each new event.
3. **Point-in-time correctness:** During training, use only features that would have been available at prediction time. Never use future aggregates.
4. **Model serving:** Deploy a lightweight model (Logistic Regression or small tree) via ONNX Runtime for <5ms inference.
5. **Concept drift monitoring:** Track prediction distributions daily. If the distribution shifts significantly, retrain the model.

**Why a feature store is essential:** Without a feature store, you compute features differently in training (batch, full history) vs. production (streaming, partial history). This training-serving skew causes the model to perform well in testing but fail in production.

### Scenario: Mixed Data Types (Tabular + Text + Images)

**The problem:** No single model handles all modalities. Text needs transformers, images need CNNs, tabular needs tree models.

**The flow (feature-level fusion — the most practical approach):**

1. **Process text separately:** Use TF-IDF or DistilBERT to extract text features (e.g., sentiment score, topic distribution, keyword counts).
2. **Process images separately:** Use a pre-trained CNN (ResNet) to extract image features (e.g., embedding vectors).
3. **Combine with tabular features:** Concatenate text features + image features + tabular features into a single feature vector.
4. **Train a tree model on the combined vector:** XGBoost or LightGBM handles the mixed feature types and learns interactions across modalities.

**Why this works better than end-to-end multi-modal models:**
- Each modality is processed by the best model for that data type.
- The tree model can handle the heterogeneous feature types (some are probabilities, some are embeddings, some are raw numbers).
- Easier to debug: if text features are not helping, you can remove them without retraining the image model.

---

## Step 8: Deployment and Production Constraints

### The Real-World Constraints Checklist

Every production model must satisfy these constraints. Failing any one of them can cause the project to fail:

| Constraint | What to Check | Consequence of Ignoring |
|---|---|---|
| **Inference latency** | Can the model score predictions within the SLA? | Slow predictions → user frustration, lost revenue |
| **Memory footprint** | Does the model fit in production server memory? | Out-of-memory errors,无法 deploy |
| **Training time** | Can the model retrain within the maintenance window? | Cannot update the model, performance degrades |
| **Interpretability** | Can you explain every prediction to a stakeholder? | Regulatory fines, loss of trust |
| **Missing value handling** | Can the model handle NaN in production features? | Crashes at prediction time |
| **Distribution shift** | Will the model perform well when data changes? | Silent performance degradation |
| **Reproducibility** | Can you reproduce the exact same model from the same data? | Cannot debug, cannot audit |
| **Cost** | Is the compute/training cost within budget? | Project gets cancelled |

### Training-Serving Skew: The Silent Killer

The most common cause of production ML failures is **training-serving skew** — when the model performs differently in production than in testing.

**Common causes:**
1. **Feature computation differences:** Training uses batch features with full history. Production uses streaming features with partial history.
2. **Data preprocessing differences:** Training uses \`StandardScaler.fit_transform()\` on the full dataset. Production uses a different scaler fitted on different data.
3. **Timestamp leakage:** Training uses future data to predict the past. Production only has past data.
4. **Version mismatches:** Training uses sklearn 1.2. Production has sklearn 1.3, which changed a default parameter.

**Prevention:** Always use the same feature pipeline, the same preprocessing objects, and the same model version in training and production. Use a feature store to serve pre-computed features.

### Concept Drift and Data Drift

**Data drift:** The distribution of input features changes over time (e.g., more young users in production than training). The model still works, but the features it sees are different.

**Concept drift:** The relationship between features and target changes over time (e.g., what constitutes "fraud" evolves as fraudsters adapt). The model's learned patterns become obsolete.

**Monitoring strategy:**
1. Log prediction distributions daily. Alert if the mean or variance shifts significantly.
2. Monitor feature distributions using PSI (Population Stability Index). PSI > 0.2 indicates significant drift.
3. Track model performance on labeled data as it becomes available (weekly/monthly).
4. Set up automatic retraining triggers when performance drops below a threshold.

---

## Real-World Examples: Full Pipeline Walkthroughs

### Example 1: E-Commerce Product Recommendation

**Business:** Show personalized product recommendations on the homepage. Must load in <200ms. 50M users, 10M products.

**Why a two-stage architecture:** No single model can search 10M products in <200ms. Split into retrieval (find 1000 candidates fast) and ranking (score 1000 candidates accurately).

**Pipeline:**
1. **Feature engineering:** User embeddings (purchase history, demographics), item embeddings (category, price, reviews). Pre-computed offline.
2. **Retrieval:** Two-tower deep model + FAISS approximate nearest neighbor. Finds 1000 candidates in <10ms.
3. **Ranking:** XGBoost re-ranks 1000 candidates using rich features. In <50ms.
4. **Post-processing:** Business rules (diversity, freshness, inventory).

**Why XGBoost for ranking (not deep learning):** XGBoost handles mixed feature types (user features + item features + interaction features), is faster to retrain weekly, and its tree structure naturally captures non-linear interactions.

### Example 2: Hospital Readmission (Interpretability-First)

**Business:** Predict 30-day readmission. Must be explainable to doctors. 40% missing lab values.

**Why Logistic Regression over XGBoost:** FDA requires explainable models. LR coefficients directly say "each additional medication increases risk by X%." XGBoost cannot provide this without SHAP, which is not yet FDA-approved as a primary explanation method.

**Pipeline:**
1. **Imputation:** IterativeImputer for labs (predicts missing values from other features, preserving correlations).
2. **Feature engineering:** Interaction features (age x medications, lab_trend x visit_frequency).
3. **Model:** Logistic Regression with L1 regularization (feature selection + interpretability).
4. **Validation:** XGBoost + SHAP as a "second opinion" to verify LR findings.

### Example 3: Real-Time Fraud Detection (Latency-Critical)

**Business:** Score 50K transactions/second in <10ms. FP cost \$10, FN cost \$500. Fraud patterns shift weekly.

**Why Logistic Regression for real-time scoring:** LR inference is <1ms (dot product + sigmoid). XGBoost takes 5-20ms. At 50K TPS, even 5ms creates a 250-second backlog.

**Pipeline:**
1. **Feature engineering:** Velocity features (transactions in last 1h/24h/7d), geographic features, merchant risk scores. Pre-computed.
2. **Real-time scoring:** Logistic Regression. <1ms per transaction.
3. **Batch retraining:** XGBoost trained weekly. Its predictions become features for the real-time model.
4. **Anomaly detection:** Isolation Forest on 1-hour sliding window catches novel fraud patterns.

### Example 4: Credit Scoring (Regulatory Compliance)

**Business:** Approve/deny loans in real-time. Must explain every denial. ECOA regulatory requirement.

**Why Scorecard + LR over XGBoost:** XGBoost's AUC is 5% higher, but it cannot generate the plain-English adverse action notices regulators require. The 5% accuracy sacrifice is worth legal compliance.

### Example 5: NLP Sentiment (Cascade Architecture)

**Business:** Classify 10M reviews. Must handle sarcasm and slang. Batch processing overnight.

**Why a cascade over using BERT for everything:** BERT on 10M reviews = 13.9 hours of GPU. LR on 10M reviews = 1.4 hours of CPU. The cascade (LR first, BERT for uncertain cases) achieves 99.2% agreement with BERT-on-all at 10% of the cost.

### Example 6: Manufacturing Quality Control (Cost-Driven)

**Business:** Detect wafer defects. FN costs \$50K, FP costs \$50. Must achieve >99.5% recall.

**Why ResNet ensemble over YOLO:** YOLO is faster (10ms vs 45ms) but has 97% recall vs 99.5%. The 2.5% recall difference = 2.5 more missed defects/day = \$125K/day in avoided defect escapes.

---

## Quick Reference: Model Selection by Scenario

| Scenario | Best Choice | Why | Avoid |
|---|---|---|---|
| **Baseline needed fast** | Logistic Regression | 5-minute train, interpretable, sets performance floor | Deep learning (overkill) |
| **Tabular, max accuracy** | XGBoost/LightGBM | Sequential error correction + regularization | Neural networks (overkill for tabular) |
| **Large dataset (>10M rows)** | LightGBM | Histogram splitting + GOSS = 10x faster than XGBoost | XGBoost (too slow) |
| **Interpretability required** | LR + SHAP | Coefficients + per-instance explanations | Black-box ensembles |
| **Real-time (<10ms)** | Logistic Regression | <1ms inference | Deep learning (too slow) |
| **Text data** | TF-IDF + LR (simple) or DistilBERT (complex) | Right tool for the data type | Tree models on raw text |
| **Image data** | Fine-tuned ResNet/EfficientNet | Pre-trained features capture visual patterns | Hand-crafted features |
| **Time series** | LightGBM + temporal features | Tree models with lag/rolling features outperform ARIMA | Random splits (data leakage) |
| **Extreme imbalance** | Anomaly detection framing | Isolation Forest does not need balanced labels | Standard classifiers |
| **Streaming data** | Feature store + LR | Pre-computed features + fast inference | Real-time deep learning |

> **🎯 Interview Gold Standard Answer:** "My approach follows a structured lifecycle: I start with data understanding, then feature engineering, then feature selection, then baseline modeling, then iterative improvement. I never pick an algorithm before understanding the data. For tabular data, I start with Logistic Regression as a baseline, move to Random Forest for robustness, then XGBoost/LightGBM for maximum accuracy. I only use deep learning for unstructured data. Every choice is driven by the business constraints: latency, interpretability, cost, and data scale."
`,
}

export default ModelSelectionGuide