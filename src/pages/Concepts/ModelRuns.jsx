/**
 * Model Runs — Complete model training pipelines at different scales.
 *
 * Covers decision trees, random forests, XGBoost, feature selection,
 * big data with Parquet, and multimodal fusion.
 */
const ModelRuns = {
  slug: 'model-runs',
  title: 'Model Runs',
  order: 6,
  content: `
## Overview

This page walks through complete model training pipelines at different scales and complexity levels. Starting with standard tabular data, progressing through high-dimensional feature selection, mixed data types, big data with Parquet, and finally multimodal fusion.

**Datasets used:**
- Breast Cancer Wisconsin (Diagnostic) — 569 samples, 30 features
- Synthetic high-dimensional data — 50k rows, 1000 features
- Synthetic mixed-type data — 50k rows, 1000 features (numeric + categorical)
- Synthetic massive data — 2M rows, 30 features (Parquet format)
- Synthetic multimodal data — 500 samples (tabular + text + image)

---

## 1. Optimized Decision Tree

### Pipeline Steps

1. **Load & Split** — stratified train/test split (80/20)
2. **Grid Search** — exhaustive search over hyperparameters with 5-fold CV
3. **Evaluate** — report best parameters and test F1-score
4. **Visualize** — plot the final pruned tree structure

### Hyperparameter Grid

\`\`\`python
param_grid = {
    'criterion': ['gini', 'entropy'],
    'max_depth': [3, 4, 5, 6],
    'min_samples_leaf': [2, 5, 10]
}
\`\`\`

| Parameter | Values | Purpose |
|---|---|---|
| criterion | gini, entropy | Split quality metric |
| max_depth | 3–6 | Pre-pruning: cap tree depth |
| min_samples_leaf | 2, 5, 10 | Pre-pruning: min samples per leaf |

### Key Code

\`\`\`python
from sklearn.model_selection import GridSearchCV
from sklearn.tree import DecisionTreeClassifier

grid_search = GridSearchCV(
    estimator=DecisionTreeClassifier(random_state=42),
    param_grid=param_grid,
    cv=5,
    scoring='f1',
    n_jobs=-1
)

grid_search.fit(X_train, y_train)
best_tree = grid_search.best_estimator_

print(f"Optimal Parameters: {grid_search.best_params_}")
print(f"Optimized Test F1-Score: {best_tree.score(X_test, y_test):.4f}")
\`\`\`

### Tree Visualization

\`\`\`python
from sklearn.tree import plot_tree
import matplotlib.pyplot as plt

plt.figure(figsize=(20, 10))
plot_tree(
    best_tree,
    feature_names=data.feature_names,
    class_names=data.target_names,
    filled=True,
    rounded=True,
    fontsize=10
)
plt.title("Optimized Decision Tree Structure")
plt.show()
\`\`\`

### Interview Angles

- **Why Grid Search?** Exhaustive search guarantees finding the best combination within the specified grid. Trade-off: computationally expensive for large grids.
- **Why F1-score?** The breast cancer dataset is slightly imbalanced (~37% malignant). F1 balances precision and recall better than accuracy.
- **Pre-pruning vs Post-pruning:** This example uses pre-pruning (limiting depth/leaf samples). Post-pruning (cost-complexity pruning) often yields better generalization but requires growing the full tree first.
- **Visualization value:** Being able to explain a single tree path (e.g., "if worst area > 755, go left…") demonstrates interpretability — a key advantage over black-box models.

> **💡 Tip:** Always set random_state for reproducibility. Even with splitter='best', tie-breaking between equally good splits is random.

---

## 2. Random Forest

### Pipeline Steps

1. **Baseline** — train an untuned RF with 100 trees
2. **Tune** — GridSearchCV over a broader hyperparameter space
3. **Evaluate** — classification report on test set
4. **OOB Score** — out-of-bag estimate without a separate validation set
5. **Feature Importance** — permutation importance (more reliable than Gini)

### Hyperparameter Grid

\`\`\`python
param_grid = {
    'n_estimators': [100, 200, 300],
    'max_depth': [None, 10, 20, 30],
    'min_samples_split': [2, 5, 10],
    'min_samples_leaf': [1, 2, 4],
    'max_features': ['sqrt', 'log2'],
}
\`\`\`

| Parameter | Values | Purpose |
|---|---|---|
| n_estimators | 100–300 | Number of trees in the forest |
| max_depth | None, 10, 20, 30 | Tree depth limit |
| min_samples_split | 2, 5, 10 | Min samples to split a node |
| min_samples_leaf | 1, 2, 4 | Min samples at a leaf |
| max_features | sqrt, log2 | Features considered per split |

### Key Code

\`\`\`python
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV

# Baseline
rf_base = RandomForestClassifier(n_estimators=100, random_state=42, n_jobs=-1)
rf_base.fit(X_train, y_train)
print(f"Baseline Accuracy: {rf_base.score(X_test, y_test):.4f}")

# Tuned
grid = GridSearchCV(
    RandomForestClassifier(random_state=42),
    param_grid, cv=5, scoring='f1', n_jobs=-1
)
grid.fit(X_train, y_train)
best_rf = grid.best_estimator_
print(f"Best CV F1: {grid.best_score_:.4f}")

# Evaluate
y_pred = best_rf.predict(X_test)
print(classification_report(y_test, y_pred, target_names=data.target_names))
\`\`\`

### Out-of-Bag (OOB) Score

\`\`\`python
oob_rf = RandomForestClassifier(
    n_estimators=300, oob_score=True, random_state=42
)
oob_rf.fit(X_train, y_train)
print(f"OOB Score: {oob_rf.oob_score_:.4f}")
\`\`\`

OOB uses the ~37% of samples not included in each bootstrap sample as a built-in validation set — no need for a separate holdout set during training.

### Permutation Importance

\`\`\`python
from sklearn.inspection import permutation_importance

perm_imp = permutation_importance(
    best_rf, X_test, y_test, n_repeats=10, random_state=42
)
feat_imp = pd.Series(perm_imp.importances_mean, index=data.feature_names)
feat_imp.sort_values(ascending=False).head(15).plot(
    kind='barh', color='purple', alpha=0.7
)
plt.title('Top 15 Features (Permutation Importance)')
plt.gca().invert_yaxis()
plt.tight_layout()
plt.show()
\`\`\`

**Why permutation importance over Gini importance?**

- Gini importance is biased toward high-cardinality features
- Permutation importance measures actual performance drop when a feature is shuffled — more reliable and model-agnostic

### Interview Angles

- **Bagging intuition:** Each tree sees a different bootstrap sample. Errors average out → variance reduction without increasing bias.
- **Feature randomness:** At each split, only √p features are considered (classification). This decorrelates trees, making the ensemble more robust.
- **OOB score:** A free validation metric. If OOB score ≈ CV score, your model is stable. Large gaps suggest overfitting.
- **When to increase n_estimators:** Diminishing returns after ~200–300 trees. More trees = slower training/prediction with minimal gain.

> **⚠️ Common Pitfall:** Forgetting n_jobs=-1 in GridSearchCV. Without it, search runs single-threaded and is painfully slow.

---

## 3. XGBoost (Extreme Gradient Boosting)

### Pipeline Steps

1. **Load & Split** — same stratified split
2. **Train with Early Stopping** — monitor validation logloss, stop if no improvement for 20 rounds
3. **Evaluate** — accuracy, AUC-ROC, classification report
4. **Feature Importance** — gain-based importance plot

### Key Hyperparameters

\`\`\`python
xgb = XGBClassifier(
    n_estimators=500,        # Upper bound; early stopping will find optimal
    max_depth=4,             # Shallow trees for boosting
    learning_rate=0.05,      # Shrinkage — lower = more robust, needs more trees
    subsample=0.8,           # Row subsampling per tree
    colsample_bytree=0.8,    # Feature subsampling per tree
    reg_alpha=0.1,           # L1 regularization on leaf weights
    reg_lambda=1.0,          # L2 regularization on leaf weights
    eval_metric='logloss',
    early_stopping_rounds=20,
    random_state=42
)
\`\`\`

| Parameter | Value | Purpose |
|---|---|---|
| n_estimators | 500 | Upper bound; early stopping finds actual best iteration |
| max_depth | 4 | Shallow trees prevent overfitting in boosting |
| learning_rate | 0.05 | Lower = slower learning, better generalization |
| subsample | 0.8 | Stochastic gradient boosting — rows sampled per tree |
| colsample_bytree | 0.8 | Feature subsampling per tree |
| reg_alpha | 0.1 | L1 regularization (sparsity) |
| reg_lambda | 1.0 | L2 regularization (smoothing) |
| early_stopping_rounds | 20 | Stop if no improvement in 20 consecutive rounds |

### Key Code

\`\`\`python
from xgboost import XGBClassifier
from sklearn.metrics import roc_auc_score, classification_report

xgb.fit(
    X_train, y_train,
    eval_set=[(X_test, y_test)],
    verbose=False
)

print(f"Best iteration: {xgb.best_iteration}")
print(f"Test Accuracy: {xgb.score(X_test, y_test):.4f}")
print(f"Test AUC-ROC: {roc_auc_score(y_test, xgb.predict_proba(X_test)[:, 1]):.4f}")
print(classification_report(y_test, xgb.predict(X_test), target_names=data.target_names))
\`\`\`

### Gain-Based Feature Importance

\`\`\`python
imp = xgb.feature_importances_
feat_imp = pd.Series(imp, index=data.feature_names).sort_values(ascending=False)
feat_imp.head(15).plot(kind='barh', color='coral', alpha=0.7)
plt.title('Top 15 Features (XGBoost Gain)')
plt.gca().invert_yaxis()
plt.tight_layout()
plt.show()
\`\`\`

XGBoost's feature_importances_ is gain-based — how much each feature contributes to reducing the loss function across all trees. This is generally more informative than Gini importance.

### Interview Angles

- **Why early stopping?** Prevents overfitting by halting training when validation performance plateaus. The best_iteration attribute tells you the optimal number of trees.
- **Learning rate vs n_estimators trade-off:** Lower learning_rate → need more trees → more robust model. Rule of thumb: if you halve learning_rate, double n_estimators.
- **Subsampling:** Both row (subsample) and column (colsample_bytree) subsampling add randomness, reducing overfitting. This is XGBoost's built-in regularization.
- **Regularization parameters:** reg_alpha (L1) drives some leaf weights to zero → sparsity. reg_lambda (L2) smooths leaf weights. Together they prevent any single tree from dominating.
- **AUC-ROC vs Accuracy:** AUC measures ranking quality (probability calibration). Accuracy is threshold-dependent. Report both in interviews.

> **🎯 Interview Gold Standard:** "I would start with a baseline model (logistic regression or decision tree), then move to ensemble methods. For tabular data, XGBoost is often the best choice because it handles non-linearities, interactions, and regularization automatically. I'd use early stopping to prevent overfitting, and permutation importance for interpretability."

---

## 4. Feature Selection: Less Rows, More Columns

**Scenario:** 50,000 rows, 1,000 features (50 informative, 50 redundant, 900 noise). When features outnumber rows, feature selection is critical to avoid overfitting and reduce computational cost.

### Pipeline Steps

1. **Variance Threshold** — remove constant/near-constant features
2. **Correlation Filter** — drop highly correlated pairs (>0.95), keeping the one with stronger target correlation
3. **Statistical Tests (Mutual Information)** — remove features with near-zero relationship to target
4. **L1 Regularization (Logistic Regression)** — embedded feature selection via sparsity
5. **Tree Importance Validation (Random Forest)** — sanity check remaining features
6. **Final Model (XGBoost)** — train on the curated feature set

### Step-by-Step Implementation

\`\`\`python
from sklearn.feature_selection import VarianceThreshold, mutual_info_classif, SelectFromModel
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from xgboost import XGBClassifier

# Generate synthetic data: 50k rows, 1000 features
X, y = make_classification(
    n_samples=50000, n_features=1000,
    n_informative=50, n_redundant=50, random_state=42
)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
\`\`\`

#### Step 1: Variance Threshold

\`\`\`python
selector_var = VarianceThreshold(threshold=0.01)
selector_var.fit(X_train)
features_kept_var = X_train.columns[selector_var.get_support()]
X_train = X_train[features_kept_var]
X_test = X_test[features_kept_var]
print(f"Features remaining: {X_train.shape[1]}")
\`\`\`

Removes features with variance below threshold — catches constant columns and near-constants.

#### Step 2: Correlation Filter

\`\`\`python
corr_matrix = X_train.corr().abs()
target_corr = X_train.apply(lambda col: col.corr(y_train)).abs()

upper_tri = corr_matrix.where(np.triu(np.ones(corr_matrix.shape), k=1).astype(bool))
to_drop = set()

for col in upper_tri.columns:
    high_corr_features = upper_tri.index[upper_tri[col] > 0.95].tolist()
    for hc_feat in high_corr_features:
        if target_corr[col] > target_corr[hc_feat]:
            to_drop.add(hc_feat)
        else:
            to_drop.add(col)

X_train = X_train.drop(columns=list(to_drop))
X_test = X_test.drop(columns=list(to_drop))
\`\`\`

Highly correlated features (redundant) are reduced to one — keeps the one more correlated with the target.

#### Step 3: Mutual Information

\`\`\`python
mi_scores = mutual_info_classif(X_train, y_train, random_state=42)
mi_series = pd.Series(mi_scores, index=X_train.columns)
features_to_keep_mi = mi_series[mi_series > 0.001].index
X_train = X_train[features_to_keep_mi]
X_test = X_test[features_to_keep_mi]
\`\`\`

Mutual information captures non-linear relationships that correlation misses. Filters out pure noise features.

#### Step 4: L1 Regularization

\`\`\`python
l1_model = LogisticRegression(
    solver='saga',
    l1_ratio=1.0,
    C=0.05,
    random_state=42,
    max_iter=1000
)
l1_selector = SelectFromModel(l1_model)
l1_selector.fit(X_train, y_train)
features_kept_l1 = X_train.columns[l1_selector.get_support()]
X_train = X_train[features_kept_l1]
X_test = X_test[features_kept_l1]
\`\`\`

L1 regularization drives coefficients of irrelevant features to exactly zero — built-in feature selection. **Critical:** L1 requires scaled data (StandardScaler) to work fairly across features.

#### Step 5: Random Forest Validation

\`\`\`python
rf = RandomForestClassifier(n_estimators=100, random_state=42, n_jobs=-1)
rf.fit(X_train, y_train)
rf_importances = pd.DataFrame({
    'Feature': X_train.columns,
    'Importance': rf.feature_importances_
}).sort_values(by='Importance', ascending=False)
print(rf_importances.head(5))
\`\`\`

Sanity check: if top features make domain sense, the pipeline is trustworthy.

#### Step 6: Final XGBoost Model

\`\`\`python
xgb = XGBClassifier(n_estimators=200, learning_rate=0.05, random_state=42, n_jobs=-1)
xgb.fit(X_train, y_train)
y_pred = xgb.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Trained on {X_train.shape[1]} features. Accuracy: {accuracy:.4f}")
\`\`\`

### Interview Angles

- **Why sequential filtering?** Each step removes a different type of bad feature: variance removes constants, correlation removes redundancy, MI removes noise, L1 removes weak signals. Together they're more powerful than any single method.
- **Why L1 needs scaling:** Without StandardScaler, features with large magnitudes (e.g., salary = 60000) get penalized more than small-magnitude features (e.g., binary flags = 0/1), regardless of actual predictive power.
- **Data leakage prevention:** Split data BEFORE feature selection. Never fit selectors on the full dataset — this leaks test information into training.
- **When to stop:** After L1, you typically have 20–200 features left. Further selection is optional and domain-dependent.

> **💡 Tip:** This pipeline is called the "Six Sigma of Feature Selection" — progressively tighter filters that leave only high-quality signal.

---

## 5. Feature Selection: Complex Data (Mixed Types)

**Scenario:** 50,000 rows, 1,000 features including continuous numeric, discrete identifiers, ordinal categorical, nominal categorical, binary categorical, and constant columns.

### The Challenge

Real-world data is messy. You cannot apply a single feature selection method to all types. This pipeline handles mixed data with proper preprocessing.

### Data Composition

| Feature Type | Example | Encoding Strategy |
|---|---|---|
| Continuous Numerical | salary | StandardScaler |
| Discrete/Identifier | pincode | OrdinalEncoder (treat as categorical) |
| Ordinal Categorical | education (High School < Bachelors < Masters < PhD) | OrdinalEncoder |
| Nominal Categorical | department (Tech, Sales, HR...) | OrdinalEncoder |
| Binary Categorical | is_remote (Yes/No) | OrdinalEncoder |
| Constant | constant_col | Removed by VarianceThreshold |

### Preprocessing Pipeline

\`\`\`python
from sklearn.preprocessing import OrdinalEncoder, StandardScaler

# Identify column types
cat_cols = X_train.select_dtypes(include=['object', 'category']).columns.tolist()
num_cols = X_train.select_dtypes(include=['number']).columns.tolist()

# 1. Encode categoricals (including string pincodes)
encoder = OrdinalEncoder(handle_unknown='use_encoded_value', unknown_value=-1)
X_train[cat_cols] = encoder.fit_transform(X_train[cat_cols])
X_test[cat_cols] = encoder.transform(X_test[cat_cols])

# 2. Scale ALL features (L1 regularization REQUIRES this)
scaler = StandardScaler()
X_train = pd.DataFrame(scaler.fit_transform(X_train), columns=X_train.columns, index=X_train.index)
X_test = pd.DataFrame(scaler.transform(X_test), columns=X_test.columns, index=X_test.index)
\`\`\`

**Why OrdinalEncoder instead of OneHotEncoder?**

- OneHotEncoding would explode 5 categorical columns into potentially hundreds of binary columns
- OrdinalEncoder keeps feature count manageable (1 column per categorical)
- Tree-based models handle ordinal encoding well — they split on threshold values

**Why StandardScaler before L1?**

- L1 regularization penalizes coefficient magnitudes
- Without scaling, features with large natural ranges (salary ~60000) get penalized more than small-range features (binary 0/1)
- Scaling ensures fair regularization across all features

### Feature Selection (Same 6-Step Pipeline)

After preprocessing, apply the same sequential pipeline:

1. Variance Threshold — removes constant_col
2. Correlation Filter — drops redundant features
3. Mutual Information — filters noise
4. L1 Regularization — embedded selection
5. RF Validation — sanity check
6. XGBoost Final — train on curated features

### Key Insight: Order Matters

\`\`\`python
# WRONG ORDER — don't do this:
# 1. OneHotEncode (explodes feature count)
# 2. Try to select features (now working with 2000+ columns)

# RIGHT ORDER:
# 1. Encode smartly (OrdinalEncoder keeps count low)
# 2. Scale (required for L1)
# 3. Select features (working with manageable 1000 columns)
# 4. Train model
\`\`\`

### Interview Angles

- **Ordinal vs OneHot for trees:** Trees can split on ordinal-encoded categoricals (e.g., education ≤ 1.5 splits "High School/Bachelors" from "Masters/PhD"). OneHot creates sparse features that trees struggle with.
- **Why scale before L1:** L1 penalty is applied to coefficient magnitudes. A feature with range [0, 100000] needs a much smaller coefficient than [0, 1]. Without scaling, L1 unfairly penalizes large-range features.
- **Handling unknown categories:** handle_unknown='use_encoded_value' prevents crashes on test data with unseen categories.

> **⚠️ Common Pitfall:** Using OneHotEncoder for high-cardinality categoricals. A feature with 100 unique values becomes 100 binary columns, diluting predictive power and slowing training. Use OrdinalEncoder for tree-based models.

---

## 6. Big Data: Parquet + LightGBM + Online Learning

**Scenario:** 2 million rows, 30 features. Traditional CSV loading is slow and memory-inefficient. This section covers Parquet storage, subsampling for prototyping, full-scale LightGBM training, and online learning for incremental updates.

### Why Parquet?

| Format | Read Speed | Compression | Columnar | Schema Evolution |
|---|---|---|---|---|
| CSV | Slow | Poor | No | No |
| Parquet | Fast | Excellent | Yes | Yes |

Parquet is columnar — you can read only the columns you need without loading the entire file. For 2M rows, this difference is 10-100x faster.

### Step 0: Data Generation & Parquet Storage

\`\`\`python
import pandas as pd
import numpy as np
import lightgbm as lgb
import os

n_rows = 2_000_000
n_features = 30

# Generate data
X_array, y_array = make_classification(
    n_samples=n_rows, n_features=n_features,
    n_informative=15, random_state=42
)

df = pd.DataFrame(X_array, columns=[f"feat_{i}" for i in range(n_features)])
df = df.astype(np.float32)  # Downcast 64-bit to 32-bit to save RAM
df['target'] = y_array.astype(np.int8)

# Save as Parquet
parquet_path = "massive_dataset.parquet"
df.to_parquet(parquet_path, engine='pyarrow', index=False)
print(f"File size: {os.path.getsize(parquet_path) / (1024*1024):.2f} MB")

# Clear RAM — data is now on disk
del df, X_array, y_array
\`\`\`

**Memory optimization:** Downcasting float64 → float32 and int64 → int8 cuts memory usage by 50-75%.

### Step 1: Prototyping on Subsample

\`\`\`python
# Read only 10% of data for fast iteration
df_sample = pd.read_parquet(parquet_path).sample(frac=0.1, random_state=42)
X_proto = df_sample.drop(columns=['target'])
y_proto = df_sample['target']

# Quick prototype model
clf_proto = lgb.LGBMClassifier(n_estimators=50, random_state=42, n_jobs=-1)
clf_proto.fit(X_proto, y_proto)
print(f"Prototype trained on {len(df_sample)} rows")

del df_sample, X_proto, y_proto, clf_proto  # Free memory
\`\`\`

**Why prototype?** Training on 2M rows takes minutes. If your pipeline has bugs, you'll waste hours. Prototype on 10% (200k rows) to validate the pipeline, then scale up.

### Step 2: Full-Scale LightGBM with GOSS

\`\`\`python
# Load full dataset
df_full = pd.read_parquet(parquet_path)
X_train, X_test, y_train, y_test = train_test_split(
    df_full.drop(columns=['target']), df_full['target'],
    test_size=0.1, random_state=42
)

# LightGBM with Gradient-based One-Side Sampling (GOSS)
params = {
    'objective': 'binary',
    'metric': 'binary_error',
    'boosting_type': 'goss',  # GOSS: keeps high-gradient points, samples low-gradient
    'max_bin': 255,           # Histogram bins (hardware-efficient)
    'learning_rate': 0.05,
    'num_leaves': 63,
    'verbose': -1
}

lgb_train = lgb.Dataset(X_train, y_train)
lgb_eval = lgb.Dataset(X_test, y_test, reference=lgb_train)

bst = lgb.train(
    params,
    lgb_train,
    num_boost_round=200,
    valid_sets=[lgb_train, lgb_eval],
    callbacks=[lgb.early_stopping(stopping_rounds=10)]
)
\`\`\`

**GOSS (Gradient-based One-Side Sampling):**

- Keeps all data points with large gradients (high error, still learning)
- Randomly samples a fraction of small-gradient points (already well-learned)
- Amplifies weights of sampled small-gradient points to preserve distribution
- Result: Processes fewer data points per split → dramatically faster training

### Step 3: Online Learning (Incremental Updates)

\`\`\`python
# New data arrives (e.g., 1 month later)
X_new, y_new = make_classification(n_samples=50000, n_features=n_features, random_state=99)

lgb_new_data = lgb.Dataset(X_new, y_new)

# Update existing model — NO need to retrain from scratch!
bst_updated = lgb.train(
    params,
    lgb_new_data,
    num_boost_round=50,  # Just add 50 new trees
    init_model=bst,      # PASS EXISTING MODEL HERE
    valid_sets=[lgb_new_data]
)
\`\`\`

Online learning lets you incrementally update models with new data. Instead of retraining on 2M + 50k rows, you train 50 additional trees on just the new data. This is critical for production systems with continuous data streams.

### Interview Angles

- **Parquet vs CSV:** Parquet is columnar, compressed, and schema-aware. For big data, it's 10-100x faster to read specific columns. Always use Parquet for datasets >1GB.
- **Prototyping strategy:** Always validate on a subsample before full training. It catches pipeline bugs in minutes, not hours.
- **GOSS intuition:** Not all data points are equally informative. Points with high gradient (large errors) need attention; points with low gradient are already learned. Sampling the easy points speeds up training without losing accuracy.
- **Online learning:** In production, data distributions shift over time (concept drift). Online learning lets models adapt without full retraining. XGBoost and LightGBM both support init_model for this.

> **💡 Tip:** For massive datasets, use float32 instead of float64 and int8 instead of int64. This halves memory usage with negligible accuracy loss for most ML models.

---

## 7. Multimodal Data: Text + Image + Tabular

**Scenario:** 500 samples with three data modalities — structured tabular features, unstructured text reviews, and image data. This section demonstrates feature extraction and fusion for multimodal learning.

### Data Composition

| Modality | Raw Format | Features | Extraction Method |
|---|---|---|---|
| Tabular | age, salary, credit_score | 3 | Direct (scaled) |
| Text | Product reviews | 10 | TF-IDF → TruncatedSVD |
| Image | 224×224 RGB images | 20 | ResNet18 → PCA |

### Step 1: Text Feature Extraction (TF-IDF → SVD)

\`\`\`python
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.decomposition import TruncatedSVD

reviews = [
    "Terrible product, broke immediately.",
    "Absolutely love it, highly recommend!",
    "It's okay, nothing special but gets the job done.",
    "Fast shipping, excellent quality.",
    "Customer service was completely unhelpful."
]
text_data = [reviews[i % 5] for i in range(n_rows)]

# TF-IDF: convert text to term frequency matrix
vectorizer = TfidfVectorizer(stop_words='english')
text_tfidf = vectorizer.fit_transform(text_data)

# SVD: compress sparse TF-IDF to dense embeddings
svd = TruncatedSVD(n_components=10, random_state=42)
text_features = svd.fit_transform(text_tfidf)
df_text = pd.DataFrame(text_features, columns=[f"text_feat_{i}" for i in range(10)])
\`\`\`

**Why TF-IDF → SVD?**

- TF-IDF creates a sparse matrix (vocabulary size × samples)
- SVD (Latent Semantic Analysis) compresses to dense embeddings capturing semantic meaning
- Reduces thousands of TF-IDF dimensions to 10–50 meaningful components

### Step 2: Image Feature Extraction (ResNet → PCA)

\`\`\`python
import torch
import torchvision.models as models
import torchvision.transforms as transforms
from sklearn.decomposition import PCA

# Load pretrained ResNet18 (remove final classification layer)
resnet = models.resnet18(pretrained=True)
resnet = torch.nn.Sequential(*(list(resnet.children())[:-1]))
resnet.eval()

# Normalize images (ImageNet stats)
normalize = transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])

# Extract 512-dim embeddings from ResNet
with torch.no_grad():
    for i in range(0, n_rows, 50):
        batch = images_tensor[i:i+50]
        batch = torch.stack([normalize(img) for img in batch])
        embeddings = resnet(batch)
        embeddings = embeddings.squeeze(-1).squeeze(-1)
        image_features_list.append(embeddings.numpy())

raw_image_features = np.vstack(image_features_list)

# PCA: compress 512 → 20 components
pca = PCA(n_components=20, random_state=42)
compressed_image_features = pca.fit_transform(raw_image_features)
df_image = pd.DataFrame(compressed_image_features, columns=[f"img_pca_feat_{i}" for i in range(20)])
\`\`\`

**Why pretrained ResNet?**

- ResNet18 is trained on ImageNet (1.2M images, 1000 classes)
- The penultimate layer learns rich visual features (edges, textures, shapes)
- Transfer learning: reuse these features instead of training from scratch
- PCA reduces 512 → 20 to avoid overwhelming the tabular/text features

### Step 3: Feature Fusion

\`\`\`python
# Combine all modalities
X_combined = pd.concat([df_tabular, df_text, df_image], axis=1)
print(f"Final shape: {X_combined.shape}")  # (500, 33) = 3 tabular + 10 text + 20 image

X_train, X_test, y_train, y_test = train_test_split(X_combined, y, test_size=0.2)
\`\`\`

**Fusion strategy:** Simple concatenation works well when modalities have similar scales. For more complex scenarios, consider:

- **Early fusion:** Concatenate raw features (this example)
- **Late fusion:** Train separate models per modality, combine predictions
- **Hybrid fusion:** Intermediate-level combination with learned weights

### Step 4: Final Model (XGBoost)

\`\`\`python
xgb = XGBClassifier(
    n_estimators=100,
    learning_rate=0.1,
    max_depth=4,
    random_state=42,
    n_jobs=-1
)

xgb.fit(X_train, y_train)
y_pred = xgb.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Final Accuracy: {accuracy:.4f}")

# Check feature importance across modalities
importances = xgb.feature_importances_
print(f"Tabular 'age' importance: {importances[0]:.4f}")
print(f"Top text feature importance: {importances[3]:.4f}")
print(f"Top image feature importance: {importances[13]:.4f}")
\`\`\`

### Interview Angles

- **Why transfer learning for images?** Training a CNN from scratch requires millions of images. Pretrained ResNet18 already knows edges, textures, and shapes — we just repurpose it for our task.
- **Why PCA after ResNet?** 512-dim embeddings are overkill for 500 samples. PCA prevents the image features from dominating the tabular features in importance rankings.
- **Multimodal fusion challenges:** Different modalities have different scales, missing patterns, and noise levels. Always normalize/scale before fusion. Consider weighted fusion if one modality is clearly stronger.
- **When to use late fusion:** If modalities are independent (e.g., text reviews and X-ray images for disease diagnosis), train separate experts and combine predictions. This handles missing modalities gracefully.

> **🎯 Interview Gold Standard:** "For multimodal data, I extract features from each modality using domain-specific pretrained models — TF-IDF/SVD for text, ResNet for images, raw/scaled for tabular. Then I fuse them via concatenation and train a tree-based model like XGBoost, which handles heterogeneous features naturally. If one modality is missing at inference time, I can fall back to the remaining modalities or use late fusion for robustness."

---

## Model Comparison Summary

| Aspect | Decision Tree | Random Forest | XGBoost | LightGBM |
|---|---|---|---|---|
| **Type** | Single tree | Bagging (parallel) | Boosting (sequential) | Boosting (sequential) |
| **Primary goal** | Interpretability | Variance reduction | Bias reduction | Speed + accuracy |
| **Overfitting risk** | High | Low | Medium (early stopping) | Medium-High (leaf-wise) |
| **Training speed** | Fast | Moderate | Slower | Fastest (GOSS) |
| **Hyperparameters** | Few | Many | Many | Many |
| **Feature importance** | Gini/entropy | Permutation (reliable) | Gain-based | Gain-based |
| **Best for** | Baseline, explanation | General purpose | Competition/winning | Large datasets |

### When to Choose Which

| Scenario | Recommended Model | Why |
|---|---|---|
| Need to explain decisions | Decision Tree | Fully interpretable path |
| General purpose, robust baseline | Random Forest | Low variance, minimal tuning |
| Maximum predictive performance | XGBoost | State-of-art for tabular data |
| Very large dataset (>100K rows) | LightGBM | GOSS + histogram = fastest |
| Need probability estimates | XGBoost | Well-calibrated probabilities |
| Online learning / incremental updates | LightGBM | Supports init_model for warm starts |
| Fast inference required | Decision Tree | Single tree, O(depth) prediction |
| Multimodal data | XGBoost | Handles heterogeneous features |

---

## Practical Takeaways

1. **Always start with a baseline** — a simple model gives you a performance floor and helps debug data issues.
2. **Tune systematically** — GridSearchCV or RandomizedSearchCV with cross-validation. Never tune on the test set.
3. **Use early stopping** — for boosting models, it's the most effective regularization technique.
4. **Prefer permutation importance** — over built-in Gini/gain importance when explaining to stakeholders.
5. **Report multiple metrics** — accuracy alone is misleading. Include F1, AUC-ROC, and confusion matrix for classification.
6. **Set random_state everywhere** — ensures reproducibility in experiments and interviews.
7. **For high-dimensional data:** Sequential feature selection (variance → correlation → MI → L1) beats any single method.
8. **For mixed data types:** OrdinalEncoder + StandardScaler is the sweet spot for tree-based models.
9. **For big data:** Parquet + LightGBM GOSS + prototyping on subsamples = production-ready pipeline.
10. **For multimodal data:** Extract features with pretrained models, fuse via concatenation, train XGBoost.

> **💡 Interview Tip:** When asked "Which model would you use?", never give a single answer. Say: "It depends on the constraints — interpretability needs, dataset size, latency requirements, feature dimensionality, and whether we're optimizing for precision or recall. I'd start simple and scale complexity only when needed."
`,
}

export default ModelRuns