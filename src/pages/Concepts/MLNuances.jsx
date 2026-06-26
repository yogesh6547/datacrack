/**
 * ML Nuances & Critical Decisions — Hidden knowledge from production ML systems.
 *
 * Covers data leakage, cross-validation strategy, hyperparameter tuning,
 * model evaluation pitfalls, imbalanced data, feature engineering,
 * ensemble methods, deployment, A/B testing, cold starts, error analysis,
 * production monitoring, and advanced model-specific nuances.
 */
const MLNuances = {
  slug: 'ml-nuances',
  title: 'ML Nuances & Critical Decisions',
  order: 7,
  content: `
## Overview

This page covers the hidden knowledge that only comes from hands-on experience building production ML systems. These are the nuances, decision points, and pitfalls that separate junior from senior ML engineers.

**Prerequisites:** Understanding of basic ML concepts, model training, and evaluation.

---

## 1. Data Leakage: The Silent Killer

Data leakage is the #1 cause of models that look great in development but fail in production. It occurs when information from outside the training dataset influences the model during training.

### The Three Types of Data Leakage

#### 1. Train-Test Contamination

\`\`\`python
# WRONG: Fitting scaler on entire dataset before splitting
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)  # LEAKS test statistics into training
X_train, X_test = train_test_split(X_scaled)

# RIGHT: Fit on training data only
X_train, X_test = train_test_split(X)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)  # Uses training statistics
\`\`\`

#### 2. Target Leakage (Most Dangerous)

\`\`\`python
# WRONG: Feature derived from target
df['loan_default_risk'] = df['loan_default']  # Direct leakage!
df['payment_delayed'] = df['days_past_due'] > 30  # Leakage if computed after default

# RIGHT: Use only features available at prediction time
df['payment_delayed'] = (df['due_date'] - df['payment_date']).dt.days
# This is computed BEFORE we know if they default
\`\`\`

#### 3. Temporal Leakage

\`\`\`python
# WRONG: Random split for time series
X_train, X_test = train_test_split(data, test_size=0.2)  # Future data leaks into training

# RIGHT: Temporal split
train = data[data['date'] < '2023-01-01']
test = data[data['date'] >= '2023-01-01']
\`\`\`

### Leakage Detection Checklist

| Check | How to Detect | Fix |
|---|---|---|
| Feature correlation with target > 0.95 | Check before modeling | Verify feature is computed before target |
| Model performance drops in production | Compare train vs prod metrics | Audit feature pipeline for temporal issues |
| Cross-validation scores vary wildly | Check CV strategy | Use proper CV (time series, stratified, group) |
| Feature importance includes "future" features | Review feature definitions | Remove features using future information |

> **⚠️ Critical Nuance:** A model with 99% accuracy that fails in production almost always has leakage. Always audit features for temporal validity before celebrating high metrics.

---

## 2. Cross-Validation: Strategy Selection Framework

Cross-validation is not one-size-fits-all. The wrong CV strategy gives overly optimistic or pessimistic performance estimates.

### CV Strategy Decision Tree

\`\`\`python
# Question 1: Is your data time-ordered?
if is_time_series:
    # Use TimeSeriesSplit
    from sklearn.model_selection import TimeSeriesSplit
    cv = TimeSeriesSplit(n_splits=5, gap=0)
    # NEVER use random KFold for time series!

# Question 2: Are there groups that should not be split?
elif has_groups:  # e.g., same user in multiple samples
    # Use GroupKFold
    from sklearn.model_selection import GroupKFold
    cv = GroupKFold(n_splits=5)
    # Prevents data from same group appearing in train and test

# Question 3: Is the target imbalanced?
elif is_imbalanced:
    # Use StratifiedKFold
    from sklearn.model_selection import StratifiedKFold
    cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
    # Maintains class distribution in each fold

# Default: Standard KFold
else:
    from sklearn.model_selection import KFold
    cv = KFold(n_splits=5, shuffle=True, random_state=42)
\`\`\`

### Critical CV Nuances

#### Nested Cross-Validation (for hyperparameter tuning):

\`\`\`python
from sklearn.model_selection import cross_val_score, GridSearchCV

# WRONG: Tuning on same CV folds used for evaluation
# This leaks information from test folds into hyperparameter selection

# RIGHT: Nested CV
param_grid = {'max_depth': [3, 5, 7], 'min_samples_leaf': [1, 5, 10]}
inner_cv = StratifiedKFold(n_splits=3)  # For hyperparameter tuning
outer_cv = StratifiedKFold(n_splits=5)  # For performance estimation

clf = GridSearchCV(estimator=DecisionTreeClassifier(),
                   param_grid=param_grid, cv=inner_cv)
scores = cross_val_score(clf, X, y, cv=outer_cv)  # Unbiased estimate
\`\`\`

**Why nested CV matters:** If you tune hyperparameters on the same folds you evaluate on, you're implicitly selecting the best hyperparameters for that specific test set. The performance estimate is optimistically biased. Nested CV gives an unbiased estimate of how the model will perform on truly unseen data.

### CV Strategy Cheat Sheet

| Scenario | CV Strategy | Why |
|---|---|---|
| Time series data | TimeSeriesSplit | Prevents future data leakage |
| Multiple samples per user/group | GroupKFold | Prevents overfitting to specific groups |
| Imbalanced classification | StratifiedKFold | Maintains class distribution |
| Small dataset (<1K samples) | LeaveOneOut | Maximizes training data |
| Standard tabular data | KFold (shuffled) | General purpose |

---

## 3. Hyperparameter Tuning: Decision Framework

Hyperparameter tuning is expensive. The key insight: not all hyperparameters are equally important.

### Hyperparameter Importance Hierarchy

**Tier 1: Always tune (high impact)**
- XGBoost/LightGBM: learning_rate, n_estimators, max_depth, min_child_weight
- Random Forest: n_estimators, max_depth, min_samples_leaf
- SVM: C, gamma, kernel

**Tier 2: Tune if Tier 1 insufficient (medium impact)**
- XGBoost/LightGBM: subsample, colsample_bytree, reg_alpha, reg_lambda
- Random Forest: max_features, min_samples_split

**Tier 3: Fine-tuning (low impact)**
- XGBoost/LightGBM: gamma, scale_pos_weight (if imbalanced)
- Random Forest: bootstrap, oob_score

### Tuning Strategy Selection

\`\`\`python
# Grid Search: Exhaustive, guaranteed best in grid
# WHEN: Small parameter space (<50 combinations), need exact best
# PRO: Guaranteed to find best combination in grid
# CON: Exponential time complexity
from sklearn.model_selection import GridSearchCV
grid = GridSearchCV(model, param_grid={'max_depth': [3,5,7], 'lr': [0.01, 0.1]}, cv=5)

# Random Search: Sample random combinations
# WHEN: Large parameter space, limited time budget
# PRO: Often finds good results faster than grid search
# CON: No guarantee of finding optimal
from sklearn.model_selection import RandomizedSearchCV
random = RandomizedSearchCV(model, param_distributions=..., n_iter=50, cv=5)

# Bayesian Optimization: Learns from past trials
# WHEN: Expensive model training, need optimal with few evaluations
# PRO: Most efficient for expensive models
# CON: More complex setup
from optuna import create_study
study = create_study(direction='maximize')
study.optimize(objective, n_trials=100)
\`\`\`

### Critical Tuning Nuances

#### 1. Learning Rate vs N_Estimators Tradeoff:

\`\`\`python
# Rule of thumb: halve learning_rate → double n_estimators
# Lower learning_rate = more robust, needs more trees
xgb_low_lr = XGBClassifier(learning_rate=0.01, n_estimators=1000)  # Slower, better
xgb_high_lr = XGBClassifier(learning_rate=0.3, n_estimators=100)   # Faster, riskier
\`\`\`

#### 2. Early Stopping as Regularization:

\`\`\`python
# Always use early stopping with gradient boosting
# It automatically finds optimal n_estimators, preventing overfitting
xgb.fit(X_train, y_train,
        eval_set=[(X_test, y_test)],
        early_stopping_rounds=20,  # Stop if no improvement in 20 rounds
        verbose=False)
print(f"Best iteration: {xgb.best_iteration}")  # Use this, not n_estimators
\`\`\`

#### 3. The "Free Lunch" in Random Forest:

\`\`\`python
# Random Forest does NOT overfit with more trees (unlike boosting)
# Just increase n_estimators until OOB score plateaus
rf = RandomForestClassifier(n_estimators=1000, oob_score=True)  # Safe to overshoot
\`\`\`

> **💡 Interview Nuance:** When asked about hyperparameter tuning, always mention: (1) start with defaults, (2) tune learning_rate and n_estimators first for boosting, (3) use early stopping, (4) use random search for large spaces, (5) never tune on test set.

---

## 4. Model Evaluation: Hidden Pitfalls

### The Multiple Comparison Problem

If you try 100 different models and report the best one, your performance estimate is optimistically biased.

\`\`\`python
# WRONG: Reporting best of 100 models without correction
for i in range(100):
    model = train_random_model()
    scores.append(model.score(X_test, y_test))
print(f"Best model accuracy: {max(scores):.4f}")  # Overestimated!

# RIGHT: Use a holdout set for final evaluation
# Split data into: train (60%), validation (20%), test (20%)
# Use validation for model selection
# Use test ONCE for final unbiased estimate
X_train, X_temp, y_train, y_temp = train_test_split(X, y, test_size=0.4)
X_val, X_test, y_val, y_test = train_test_split(X_temp, y_temp, test_size=0.5)
\`\`\`

### The Accuracy Illusion with Imbalanced Data

\`\`\`python
# Scenario: 99% negative, 1% positive
# Model that predicts "all negative" achieves 99% accuracy

# WRONG metric: Accuracy
accuracy = model.score(X_test, y_test)  # 99% - looks great!

# RIGHT metrics for imbalanced data
from sklearn.metrics import f1_score, roc_auc_score, average_precision_score
f1 = f1_score(y_test, y_pred)  # Will be 0 for "all negative"
auc_roc = roc_auc_score(y_test, y_pred_proba)  # Will be 0.5 for random
auc_pr = average_precision_score(y_test, y_pred_proba)  # Most informative
\`\`\`

### When to Use Which Metric

| Scenario | Primary Metric | Why |
|---|---|---|
| Balanced classes | Accuracy | Simple, interpretable |
| Imbalanced, care about both FP/FN | F1-score | Balances precision and recall |
| Imbalanced, care about ranking | AUC-ROC | Threshold-independent |
| Highly imbalanced (>100:1) | AUC-PR | More sensitive to minority class |
| Cost-sensitive (FP ≠ FN cost) | Custom cost function | Reflects business reality |

### The Confidence Calibration Problem

\`\`\`python
# A model can have high accuracy but poorly calibrated probabilities
# Calibration: predicted probability should match actual frequency

from sklearn.calibration import calibration_curve
import matplotlib.pyplot as plt

prob_true, prob_pred = calibration_curve(y_test, y_pred_proba, n_bins=10)
plt.plot(prob_pred, prob_true, marker='o')
plt.plot([0, 1], [0, 1], linestyle='--')  # Perfect calibration
plt.xlabel('Mean predicted probability')
plt.ylabel('Fraction of positives')
\`\`\`

**Critical nuance:** XGBoost and Random Forest tend to be overconfident. If you need well-calibrated probabilities (e.g., for risk scoring), apply Platt scaling (sigmoid calibration) or isotonic regression.

---

## 5. Imbalanced Data: Decision Framework

### When to Use Which Technique

\`\`\`python
# Decision tree for imbalanced data handling:

# Step 1: Always start with class weights (fastest, safest)
model = XGBClassifier(scale_pos_weight=99)  # For 1:99 imbalance

# Step 2: If class weights insufficient, try SMOTE (only on training data!)
from imblearn.over_sampling import SMOTE
smote = SMOTE(random_state=42)
X_train_balanced, y_train_balanced = smote.fit_resample(X_train, y_train)

# Step 3: If SMOTE creates too much noise, try undersampling
from imblearn.under_sampling import RandomUnderSampler
rus = RandomUnderSampler(random_state=42)
X_train_balanced, y_train_balanced = rus.fit_resample(X_train, y_train)

# Step 4: For extreme imbalance (>1000:1), use anomaly detection
from sklearn.ensemble import IsolationForest
iso = IsolationForest(contamination=0.001)
\`\`\`

### SMOTE Pitfalls

**Critical nuance:** SMOTE creates synthetic samples by interpolating between existing minority samples. This can:

- **Help:** When minority class has clear structure
- **Hurt:** When minority class is noisy or has outliers (amplifies noise)
- **Never apply:** To test data or before splitting (data leakage)

**Better alternative for noisy data:** Use SMOTE-ENN (SMOTE + Edited Nearest Neighbors) which removes noisy synthetic samples.

---

## 6. Feature Engineering: Hidden Decision Points

### The "Feature Pipeline" Problem

In production, features must be computed identically in training and serving. This is harder than it sounds.

\`\`\`python
# WRONG: Ad-hoc feature computation
# Training:
df['feature'] = df['col'].apply(lambda x: complex_function(x))

# Production (different implementation, different results):
df['feature'] = df['col'].map(some_other_function)

# RIGHT: Serialize the entire pipeline
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import FunctionTransformer

def complex_feature(X):
    return X.apply(lambda x: complex_function(x))

pipeline = Pipeline([
    ('feature_eng', FunctionTransformer(complex_feature)),
    ('scaler', StandardScaler()),
    ('model', XGBClassifier())
])

pipeline.fit(X_train, y_train)
# Save entire pipeline
import joblib
joblib.dump(pipeline, 'model.pkl')

# In production: load and predict
model = joblib.load('model.pkl')
predictions = model.predict(X_production)  # Identical feature computation
\`\`\`

### Feature Engineering Decision Framework

| Feature Type | Encoding | When to Create | Pitfall |
|---|---|---|---|
| Numerical | StandardScaler (for linear models), none (for trees) | Always | Forgetting to fit scaler on train only |
| Categorical (low cardinality) | One-hot | <20 categories | Explodes feature count |
| Categorical (high cardinality) | Target encoding | >20 categories | Data leakage without CV |
| Text | TF-IDF or embeddings | Always | Using raw text with tree models |
| Date/Time | Extract components | Always | Using future information (e.g., day of week from future) |
| Interactions | Multiply/divide features | When domain knowledge suggests | Creating too many (curse of dimensionality) |
| Aggregations | Group statistics | When group behavior matters | Leakage if computed on full dataset |

### The "Feature Store" Necessity

For production systems with >100 features, manual feature computation is error-prone. A feature store (Feast, Tecton, Redis) provides:

- **Point-in-time correctness:** Features computed as-of the prediction time
- **Consistency:** Same computation in training and serving
- **Reusability:** Features shared across models
- **Monitoring:** Track feature distributions and data quality

> **⚠️ Critical Nuance:** The most common production failure is training-serving skew — features computed differently in training vs. production. Always use a feature pipeline that is serialized and versioned.

---

## 7. Ensemble Methods: Selection Nuances

### Bagging vs Boosting: Beyond the Basics

| Aspect | Bagging (RF) | Boosting (XGBoost) |
|---|---|---|
| **When to choose** | Noisy data, need robustness | Clean data, need max accuracy |
| **Overfitting behavior** | Does not overfit with more trees | Overfits without early stopping |
| **Error correction** | Parallel (no error correction) | Sequential (corrects previous errors) |
| **Bias reduction** | Minimal | Significant |
| **Variance reduction** | Significant | Moderate |
| **Training speed** | Parallelizable (fast) | Sequential (slower) |
| **Interpretability** | More stable feature importance | Less stable importance |

### When to Use Stacking vs Single Model

\`\`\`python
# Stacking: Train multiple models, use their predictions as features for meta-learner
# WHEN: You have diverse models with different strengths
# PRO: Can capture complementary patterns
# CON: Complex, prone to overfitting, slow inference

from sklearn.ensemble import StackingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from xgboost import XGBClassifier

stack = StackingClassifier(
    estimators=[
        ('rf', RandomForestClassifier(n_estimators=100)),
        ('xgb', XGBClassifier(n_estimators=100))
    ],
    final_estimator=LogisticRegression(),  # Meta-learner
    cv=5
)
\`\`\`

**Critical nuance:** Stacking helps when base models make different types of errors. If all base models are decision trees, stacking provides minimal benefit. Diversity (different algorithms) is key.

### The "Wisdom of Crowds" Threshold

For ensembles to work, base models must be:

1. **Accurate:** Better than random (AUC > 0.5)
2. **Diverse:** Make different errors (correlation < 1.0)

If base models are highly correlated (e.g., 10 XGBoost models with same hyperparameters), the ensemble provides diminishing returns.

---

## 8. Model Serialization and Deployment

### Serialization Options

| Method | Pros | Cons | When to Use |
|---|---|---|---|
| **Pickle** | Native Python, easy | Not secure, version-dependent | Quick prototyping |
| **Joblib** | Faster for large numpy arrays | Same as pickle | Production with sklearn |
| **ONNX** | Language-agnostic, optimized | Conversion overhead | Cross-platform deployment |
| **PMML** | Standard format | Limited model support | Enterprise systems |

\`\`\`python
# WRONG: Saving only the model
import pickle
with open('model.pkl', 'wb') as f:
    pickle.dump(model, f)  # Missing preprocessing!

# In production:
model = pickle.load(open('model.pkl', 'rb'))
# ERROR: model expects scaled features, but you forgot to save the scaler!

# RIGHT: Save entire pipeline
from sklearn.pipeline import Pipeline
pipeline = Pipeline([
    ('imputer', SimpleImputer()),
    ('scaler', StandardScaler()),
    ('model', XGBClassifier())
])

pipeline.fit(X_train, y_train)
joblib.dump(pipeline, 'pipeline.pkl')  # Includes preprocessing

# In production:
pipeline = joblib.load('pipeline.pkl')
predictions = pipeline.predict(X_production)  # Preprocessing included
\`\`\`

### Model Versioning

\`\`\`python
# Critical: Track model version, training data version, hyperparameters
import mlflow

mlflow.set_experiment("fraud_detection")
with mlflow.start_run(run_name="xgb_v2"):
    mlflow.log_params({
        'learning_rate': 0.05,
        'max_depth': 4,
        'n_estimators': 200
    })
    mlflow.log_metrics({'auc': 0.95, 'f1': 0.88})
    mlflow.sklearn.log_model(model, "model")
\`\`\`

**Why versioning matters:** When a model fails in production, you need to know:

- Which hyperparameters were used?
- What data was it trained on?
- What was the validation performance?
- Has the code changed since training?

---

## 9. A/B Testing ML Models

### The Paired Comparison Problem

You cannot simply compare two models on the same test set if they are evaluated sequentially. User behavior changes over time.

\`\`\`python
# WRONG: Compare Model A on Jan data, Model B on Feb data
# User behavior may have changed between months!

# RIGHT: Randomly assign users to Model A or Model B
# This controls for temporal effects

# A/B test setup:
# - 10% traffic → Model A (champion)
# - 10% traffic → Model B (challenger)
# - 80% traffic → Current production model

# Metrics to track:
# 1. Business metrics: conversion rate, revenue, user engagement
# 2. Model metrics: AUC, F1, calibration
# 3. Latency metrics: p50, p95, p99 response times
\`\`\`

### Statistical Significance

\`\`\`python
from scipy import stats

# After A/B test, check if improvement is statistically significant
model_a_scores = [0.85, 0.87, 0.84, ...]  # Daily AUC scores
model_b_scores = [0.88, 0.89, 0.87, ...]

t_stat, p_value = stats.ttest_rel(model_a_scores, model_b_scores)

if p_value < 0.05:
    print("Model B is significantly better")
else:
    print("No significant difference — keep Model A to avoid change risk")
\`\`\`

**Critical nuance:** Always run A/B tests for at least 1-2 weeks to capture weekly seasonality. A test that runs for 1 day may show improvement that disappears on weekends.

---

## 10. Cold Start Problems

### The Four Cold Start Scenarios

#### 1. New User (no historical data)

\`\`\`python
# Problem: User just signed up, no click/purchase history
# Solutions:
# - Use demographic features (age, location, device)
# - Use onboarding survey responses
# - Start with popular items (exploration)
# - Use meta-learning: train on user cohorts, not individuals
\`\`\`

#### 2. New Item (no interaction data)

\`\`\`python
# Problem: New product listed, no user interactions
# Solutions:
# - Use content features: category, price, description embeddings
# - Use image features: pretrained CNN embeddings
# - Transfer learning from similar items
\`\`\`

#### 3. New Feature (not in training data)

\`\`\`python
# Problem: New feature added in production, model wasn't trained on it
# Solutions:
# - Retrain model with new feature
# - Use feature hashing to handle unseen categories
# - Fall back to model without the new feature
\`\`\`

#### 4. New Class (unseen category in target)

\`\`\`python
# Problem: New fraud pattern emerges, not in training data
# Solutions:
# - Anomaly detection: flag as "unknown" instead of forcing classification
# - Continual learning: update model with new labeled examples
# - Confidence threshold: if max probability < 0.7, flag for human review
\`\`\`

### Cold Start Decision Framework

| Scenario | Immediate Solution | Long-term Solution |
|---|---|---|
| New user | Popular items, demographics | Meta-learning, few-shot learning |
| New item | Content-based features | Transfer learning from similar items |
| New feature | Retrain model | Online learning, feature stores |
| New class | Anomaly detection | Continual learning pipeline |

---

## 11. Error Analysis: Systematic Debugging

### The Error Analysis Framework

When model performance is unsatisfactory, follow this systematic approach:

\`\`\`python
# Step 1: Quantify the error
# - Is it overfitting (train >> test) or underfitting (train ≈ test, both low)?
# - Which metric is failing? (Accuracy, F1, AUC, calibration)

# Step 2: Segment analysis
# Break down errors by subgroups
for segment in ['age_group', 'location', 'product_category']:
    segment_errors = errors[data[segment] == segment_value]
    print(f"{segment}: error_rate={segment_errors.mean():.2f}")

# Step 3: Error pattern detection
# - Are errors concentrated in specific feature ranges?
# - Are errors correlated with data quality issues (missing values, outliers)?
# - Are errors systematic (model is biased) or random (high variance)?

# Step 4: Feature importance on errors
# Train a model to predict "is_error" and check which features predict errors
from sklearn.ensemble import RandomForestClassifier
error_predictor = RandomForestClassifier()
error_predictor.fit(X, is_error)
importances = pd.Series(error_predictor.feature_importances_, index=feature_names)
\`\`\`

### Common Error Patterns and Fixes

| Error Pattern | Diagnosis | Fix |
|---|---|---|
| High train, low test | Overfitting | Reduce model complexity, add regularization, more data |
| Low train, low test | Underfitting | Increase model complexity, better features |
| Errors concentrated in subgroup | Bias | Collect more data for subgroup, use group-aware training |
| Errors on edge cases | Extrapolation failure | Add more edge case examples, use models that handle extrapolation |
| Inconsistent errors | High variance | More data, ensemble methods, reduce features |
| Systematic bias | Label noise | Clean labels, use robust loss functions |

---

## 12. Production Monitoring: Beyond Accuracy

### The Four Types of Model Degradation

#### 1. Data Drift
- **What:** Input feature distribution changes
- **Detection:** PSI (Population Stability Index), KS test
- **Example:** More young users in production than training
- **Fix:** Retrain on recent data, or use domain adaptation

#### 2. Concept Drift
- **What:** Relationship between features and target changes
- **Detection:** Monitor prediction accuracy on labeled data
- **Example:** Fraud patterns change as fraudsters adapt
- **Fix:** Retrain model with recent labeled data

#### 3. Feature Pipeline Drift
- **What:** Feature computation code changes
- **Detection:** Monitor feature distributions, compare training vs serving
- **Example:** Bug in feature engineering causes different values
- **Fix:** Version control feature pipeline, use feature store

#### 4. Infrastructure Drift
- **What:** Model served in different environment
- **Detection:** Compare predictions on same input in train vs prod
- **Example:** Different library versions, different hardware
- **Fix:** Containerize model, use ONNX for consistency

### Monitoring Implementation

\`\`\`python
# Calculate Population Stability Index (PSI)
def calculate_psi(expected, actual, buckets=10):
    """PSI > 0.2 indicates significant drift"""
    breakpoints = np.arange(0, 110, 100/buckets)
    expected_percents = np.histogram(expected, breakpoints)[0] / len(expected)
    actual_percents = np.histogram(actual, breakpoints)[0] / len(actual)
    
    # Avoid division by zero
    expected_percents = np.where(expected_percents == 0, 0.001, expected_percents)
    actual_percents = np.where(actual_percents == 0, 0.001, actual_percents)
    
    psi = np.sum((actual_percents - expected_percents) * np.log(actual_percents / expected_percents))
    return psi

# Monitor daily
psi = calculate_psi(train_feature_dist, today_feature_dist)
if psi > 0.2:
    alert("Feature drift detected! Consider retraining.")
\`\`\`

### Monitoring Checklist

| Monitor | Frequency | Alert Threshold | Action |
|---|---|---|---|
| Prediction distribution | Daily | PSI > 0.2 | Investigate feature drift |
| Feature distributions | Daily | PSI > 0.2 | Retrain or adapt model |
| Model performance | Weekly | AUC drop > 5% | Retrain with new data |
| Latency (p95) | Real-time | > SLA | Scale infrastructure |
| Error rate | Real-time | > threshold | Rollback to previous model |
| Data quality | Daily | Missing > 10% | Fix data pipeline |

---

## 13. Advanced Nuances by Model Type

### XGBoost/LightGBM Specific

#### 1. Handling Imbalanced Data:

\`\`\`python
# scale_pos_weight = (negative_count / positive_count)
# This makes the model penalize misclassifying minority class more
xgb = XGBClassifier(scale_pos_weight=99)  # For 1:99 imbalance
\`\`\`

#### 2. Missing Value Handling:

\`\`\`python
# XGBoost/LightGBM learn the optimal direction for missing values
# During training, they try sending missing values left and right, choose best
# This often outperforms manual imputation
\`\`\`

#### 3. Monotonic Constraints:

\`\`\`python
# Enforce business logic: "higher income → lower default risk"
xgb = XGBClassifier(monotone_constraints={'income': -1, 'age': 1})
\`\`\`

### Random Forest Specific

#### 1. OOB Score as Validation:

\`\`\`python
# OOB samples (~37% of data) serve as built-in validation
# No need for separate validation set during training
rf = RandomForestClassifier(n_estimators=300, oob_score=True)
rf.fit(X_train, y_train)
print(f"OOB Score: {rf.oob_score_:.4f}")  # Reliable validation estimate
\`\`\`

#### 2. When to Increase N_estimators:

\`\`\`python
# Random Forest does NOT overfit with more trees
# Keep increasing until OOB score plateaus
for n in [100, 200, 500, 1000]:
    rf = RandomForestClassifier(n_estimators=n, oob_score=True)
    rf.fit(X, y)
    print(f"n={n}, OOB={rf.oob_score_:.4f}")
# Stop when improvement < 0.001
\`\`\`

### Linear Models Specific

#### 1. Feature Scaling is Mandatory:

\`\`\`python
# L1/L2 regularization penalizes coefficient magnitudes
# Without scaling, features with large ranges get penalized more
# ALWAYS scale before linear models with regularization
\`\`\`

#### 2. Multicollinearity Detection:

\`\`\`python
# Check VIF (Variance Inflation Factor)
from statsmodels.stats.outliers_influence import variance_inflation_factor

vif = pd.DataFrame()
vif['Feature'] = X.columns
vif['VIF'] = [variance_inflation_factor(X.values, i) for i in range(X.shape[1])]

# VIF > 10 indicates severe multicollinearity
# Fix: Remove features, use PCA, or use tree models (robust to multicollinearity)
\`\`\`

---

## 14. The "Senior Engineer" Decision Checklist

Before deploying any model, answer these questions:

### Data Quality
- [ ] Have I checked for data leakage (target leakage, temporal leakage)?
- [ ] Are missing values handled consistently in training and production?
- [ ] Have I validated feature distributions in production match training?

### Model Selection
- [ ] Did I start with a baseline (logistic regression) before complex models?
- [ ] Is the model complexity justified by the data size?
- [ ] Have I considered inference latency requirements?

### Evaluation
- [ ] Am I using the right metric for the business problem?
- [ ] Have I used proper cross-validation (not random KFold for time series)?
- [ ] Is my test set truly held out (never used for tuning)?
- [ ] Have I checked for class imbalance and used appropriate metrics?

### Production Readiness
- [ ] Is the entire pipeline (preprocessing + model) serialized?
- [ ] Have I set up monitoring for data drift, concept drift, and performance?
- [ ] Is there a rollback plan if the model fails?
- [ ] Have I versioned the model, data, and code?

### Interpretability
- [ ] Can I explain why the model made a specific prediction?
- [ ] Have I checked for unexpected biases (e.g., discriminating by gender)?
- [ ] Is the model compliant with regulations (GDPR, ECOA)?

---

## 15. Interview Questions: The Nuance Level

### Q: "Your model has 95% accuracy in development but 70% in production. What happened?"

**Junior answer:** "The model is overfitting."

**Senior answer:** "I would systematically investigate: (1) Data leakage — did I accidentally use future information or target-derived features? (2) Distribution shift — do production features have different distributions than training? Check PSI. (3) Feature pipeline — are features computed identically in training and production? (4) Temporal issues — if time series, did I use random splits instead of temporal splits? (5) Label quality — are production labels collected differently? I would start by comparing feature distributions and checking for leakage, as those are the most common causes."

### Q: "How do you handle a model that's biased against a protected group?"

**Junior answer:** "Remove the protected attribute from features."

**Senior answer:** "Removing the protected attribute is insufficient because of proxy variables (e.g., zipcode correlates with race). I would: (1) Measure bias using fairness metrics (disparate impact, equal opportunity difference). (2) Check for proxy variables using correlation analysis. (3) Apply preprocessing (reweighing, disparate impact remover), in-processing (fairness constraints), or post-processing (threshold adjustment). (4) Validate that fixing bias doesn't drastically reduce overall performance. (5) Document the fairness-accuracy tradeoff for stakeholders."

### Q: "When would you NOT use gradient boosting?"

**Junior answer:** "When the dataset is small."

**Senior answer:** "Gradient boosting is not my choice when: (1) I need real-time training (online learning) — boosting is inherently sequential. (2) The data has strong temporal patterns and I cannot set up proper temporal CV — boosting can memorize temporal leakage. (3) I need strong interpretability — while SHAP works, it's slower than interpreting a single decision tree or linear model. (4) The data is extremely noisy — boosting can overfit to noise because it focuses on hard examples. (5) Inference latency is <1ms — logistic regression is faster. I would use Random Forest for robustness, or Logistic Regression for speed and interpretability."

---

## Quick Reference: Decision Trees for Common Scenarios

| Scenario | Decision | Rationale |
|---|---|---|
| Model performs great in CV, terrible in prod | Check data leakage first | #1 cause of train-prod gap |
| Imbalanced data (1:100) | Start with class weights, then SMOTE | Class weights are free, SMOTE risks overfitting |
| 1000 features, 10K rows | Feature selection before modeling | Curse of dimensionality |
| Time series data | TimeSeriesSplit CV, temporal features | Random splits leak future data |
| Need model explainability | SHAP + tree model or logistic regression | SHAP works with any model |
| Production latency <10ms | Logistic regression or small tree | Fast inference |
| Model needs weekly retraining | LightGBM with early stopping | Fast training, automatic regularization |
| Cold start (new user) | Content-based + popular items | No historical data available |
| Multiple models to compare | A/B test with statistical significance | Avoid selection bias |

> **💡 Interview Gold Standard:** "The nuances I've covered — data leakage, proper CV strategy, hyperparameter importance hierarchy, production monitoring, and cold start solutions — are what separate models that work in notebooks from models that work in production. The key mindset shift is: always think about the entire ML system, not just the model training step. Data quality, feature pipelines, monitoring, and deployment constraints are often harder than model selection."
`,
}

export default MLNuances