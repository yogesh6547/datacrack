/**
 * MLOps with Databricks — Production ML systems, deployment patterns,
 * model registry, feature stores, monitoring, and CI/CD.
 *
 * Covers Databricks-specific tools: MLflow, Unity Catalog, Delta Lake,
 * Feature Store, Jobs, and Model Serving.
 */
const MLOps = {
  slug: 'mlops',
  title: 'MLOps & Production ML with Databricks',
  order: 8,
  content: `
## What is MLOps?

MLOps (Machine Learning Operations) is the practice of applying DevOps principles to machine learning systems. It bridges the gap between data science experimentation and production deployment, ensuring models are reliable, scalable, and maintainable.

**The core challenge:** A model that achieves 95% accuracy in a Jupyter notebook is worthless if it cannot be deployed, monitored, and updated in production.

**The MLOps maturity spectrum:**

| Level | Capability | Example |
|---|---|---|
| **Level 0** | Manual deployment, no automation | Data scientist manually exports model, hands it to engineer |
| **Level 1** | Automated training pipeline | Retrain model on schedule with new data |
| **Level 2** | CI/CD for ML | Automated testing, validation, and deployment |
| **Level 3** | Full MLOps | Automated retraining, A/B testing, canary deployments, automated rollback |

> **💡 Interview Tip:** When asked about MLOps, always emphasize that it's not just about deployment — it's about the **entire lifecycle**: data validation, feature engineering, model training, validation, deployment, monitoring, and retraining. The hardest part is often not the model, but the infrastructure around it.

---

## The ML Lifecycle on Databricks

Databricks provides a unified platform for the entire ML lifecycle. Understanding how these components fit together is critical for interviews.

### The Databricks MLOps Stack

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                    PRODUCTION LAYER                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ Model Serving │  │   Jobs API   │  │  Feature Store   │  │
│  │  (Real-time)  │  │  (Batch/Stream)│  │  (Online/Offline)│ │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│                  ORCHESTRATION LAYER                         │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         MLflow Model Registry + Unity Catalog         │   │
│  │   (Versioning, Stage Transitions, Lineage, Governance)│   │
│  └──────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│                    TRAINING LAYER                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │   Databricks  │  │   MLflow     │  │   AutoML/        │  │
│  │   Notebooks   │  │  Tracking    │  │   Hyperopt       │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│                    DATA LAYER                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │  Delta Lake  │  │   Unity      │  │   Feature        │  │
│  │  (Storage)   │  │   Catalog    │  │   Store          │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────────┘
\`\`\`

### Component Responsibilities

| Component | Purpose | When to Use |
|---|---|---|
| **Delta Lake** | ACID transactions, time travel, schema enforcement | All production data storage |
| **Unity Catalog** | Data governance, lineage, access control | Multi-workspace environments, compliance |
| **MLflow Tracking** | Experiment logging, metrics, parameters | Every training run |
| **MLflow Model Registry** | Model versioning, stage transitions, aliases | Production model management |
| **Feature Store** | Reusable features, point-in-time correctness | Shared features across multiple models |
| **Model Serving** | Real-time REST endpoint for predictions | Low-latency inference requirements |
| **Jobs** | Scheduled batch predictions or retraining | Periodic batch workflows |

---

## MLflow: The Backbone of Databricks MLOps

MLflow is an open-source platform for the ML lifecycle. Databricks provides a managed version with deep integration.

### MLflow Tracking: Experiment Management

Every training run should be logged with MLflow for reproducibility and comparison.

\`\`\`python
import mlflow
from mlflow.tracking import MlflowClient

# Set experiment (creates if doesn't exist)
mlflow.set_experiment("/Users/me@example.com/fraud_detection")

# Start a run
with mlflow.start_run(run_name="xgb_v3_optimized") as run:
    # Log parameters
    mlflow.log_params({
        "learning_rate": 0.05,
        "max_depth": 6,
        "n_estimators": 200,
        "subsample": 0.8,
        "colsample_bytree": 0.8
    })

    # Train model
    model = XGBClassifier(**params, random_state=42)
    model.fit(X_train, y_train)

    # Log metrics
    y_pred = model.predict(X_test)
    y_proba = model.predict_proba(X_test)[:, 1]

    mlflow.log_metrics({
        "accuracy": accuracy_score(y_test, y_pred),
        "f1_score": f1_score(y_test, y_pred),
        "auc_roc": roc_auc_score(y_test, y_proba),
        "auc_pr": average_precision_score(y_test, y_proba)
    })

    # Log model (includes preprocessing pipeline if using sklearn Pipeline)
    mlflow.sklearn.log_model(
        model,
        "model",
        registered_model_name="fraud-detection-xgb"  # Auto-registers
    )

    # Log artifacts (feature importance plot, confusion matrix)
    mlflow.log_artifact("feature_importance.png")
    mlflow.log_artifact("confusion_matrix.png")

    print(f"Run ID: {run.info.run_id}")
\`\`\`

**Critical nuance:** Always use \`registered_model_name\` to automatically register the model in the MLflow Model Registry. This enables versioning and stage transitions.

### MLflow Model Registry: Versioning and Deployment

The Model Registry is a centralized hub for managing model versions, promoting models through stages, and deploying to production.

**Model stages (legacy):**
- **None:** Model is registered but not deployed
- **Staging:** Model is in testing/pre-production
- **Production:** Model is serving live traffic
- **Archived:** Model is retired

**Modern approach (recommended): Model Aliases**

Databricks now recommends using aliases instead of stages for more flexible versioning:

\`\`\`python
from mlflow.tracking import MlflowClient

client = MlflowClient()

# Register a new model version
result = mlflow.sklearn.log_model(
    model,
    "model",
    registered_model_name="fraud-detection-xgb"
)
version = result.run_id  # This is the version number

# Promote to production using alias
client.set_registered_model_alias(
    name="fraud-detection-xgb",
    alias="production",
    version=version
)

# Create a champion/challenger setup
client.set_registered_model_alias(
    name="fraud-detection-xgb",
    alias="challenger",
    version=version
)

# Rollback: point production alias to previous version
client.set_registered_model_alias(
    name="fraud-detection-xgb",
    alias="production",
    version="previous_version"  # e.g., "v2"
)
\`\`\`

**Why aliases are better than stages:**
- You can have multiple aliases (production, staging, champion, challenger)
- No need to delete and re-register models
- More flexible for A/B testing and canary deployments

### Model Lineage with Unity Catalog

Unity Catalog provides end-to-end lineage tracking — you can trace a production model back to:
- The exact training code (notebook version)
- The training data (Delta table version)
- The hyperparameters and metrics
- The person who deployed it

\`\`\`python
# Enable Unity Catalog for MLflow
mlflow.set_registry_uri("databricks-uc://catalog.schema")

# Log model to Unity Catalog
mlflow.sklearn.log_model(
    model,
    "model",
    registered_model_name="catalog.schema.fraud-detection-xgb"
)
\`\`\`

**Interview gold:** Unity Catalog lineage answers the question "Why did the model make this prediction?" by tracing back through the entire chain: prediction → model version → training run → training data → data source.

---

## Feature Store: Eliminating Training-Serving Skew

The #1 cause of production ML failures is **training-serving skew** — features computed differently in training vs. production.

### The Problem

\`\`\`python
# WRONG: Ad-hoc feature computation
# Training (in notebook):
df['user_avg_purchase'] = df.groupby('user_id')['purchase_amount'].transform('mean')

# Production (in API):
# Different implementation, different results!
user_avg_purchase = compute_some_other_way(user_id)
\`\`\`

### The Solution: Databricks Feature Store

The Feature Store provides:
1. **Point-in-time correctness:** Features computed as-of the prediction time
2. **Consistency:** Same computation in training and serving
3. **Reusability:** Features shared across multiple models
4. **Monitoring:** Track feature distributions and data quality

### Creating a Feature Store

\`\`\`python
from databricks.feature_store import FeatureStoreClient

fs = FeatureStoreClient()

# Define a feature table
df_features = spark.sql("""
    SELECT
        user_id,
        AVG(purchase_amount) as avg_purchase_30d,
        COUNT(*) as transaction_count_30d,
        MAX(purchase_date) as last_purchase_date,
        DATEDIFF(CURRENT_DATE(), MAX(purchase_date)) as days_since_last_purchase
    FROM transactions
    WHERE purchase_date >= CURRENT_DATE() - INTERVAL 30 DAYS
    GROUP BY user_id
""")

# Create feature table (first time only)
fs.create_table(
    name="catalog.schema.user_transaction_features",
    primary_keys=["user_id"],
    df=df_features,
    description="User transaction features for fraud detection"
)

# Write features (updates the table)
fs.write_table(
    name="catalog.schema.user_transaction_features",
    df=df_features,
    mode="merge"  # Upsert new data
)
\`\`\`

### Using Features in Training

\`\`\`python
# Load features for training
training_df = fs.create_training_set(
    df=labels_df,  # DataFrame with user_id and target
    feature_lookups=[
        fs.create_feature_lookup(
            table_name="catalog.schema.user_transaction_features",
            feature_names=["avg_purchase_30d", "transaction_count_30d", "days_since_last_purchase"],
            lookup_key="user_id"
        )
    ],
    label="is_fraud"
)

# Train model on features
X_train = training_df.to_pandas()
model = XGBClassifier()
model.fit(X_train, y_train)

# Log model with feature store metadata
fs.log_model(
    model,
    "fraud_model",
    training_set=training_df,
    registered_model_name="catalog.schema.fraud-detection-xgb"
)
\`\`\`

### Using Features in Production

\`\`\`python
# At prediction time, features are automatically computed
batch_scoring_df = spark.table("new_transactions")

preds_df = fs.score_batch(
    model_uri="models:/catalog.schema.fraud-detection-xgb@production",
    df=batch_scoring_df
)
\`\`\`

**Critical nuance:** The Feature Store automatically handles point-in-time correctness. If you're scoring transactions from last week, it uses the feature values as-of that date, not today's values. This prevents data leakage.

> **⚠️ Common Pitfall:** Computing features on the fly in production instead of using a feature store. This leads to training-serving skew and is the #1 cause of models that work in development but fail in production.

---

## Model Deployment Patterns

Databricks supports multiple deployment patterns depending on latency requirements and data characteristics.

### Pattern 1: Batch Scoring (Most Common)

**Use case:** Score millions of records daily, latency not critical (minutes to hours)

\`\`\`python
# Databricks Job for batch scoring
df_to_score = spark.table("catalog.schema.transactions_to_score")

# Load model from registry
model_uri = "models:/catalog.schema.fraud-detection-xgb@production"
model = mlflow.pyfunc.load_model(model_uri)

# Score in batch
predictions = model.predict(df_to_score.to_pandas())

# Write results back to Delta Lake
result_df = df_to_score.to_pandas()
result_df['fraud_score'] = predictions
result_df['scored_at'] = datetime.now()

spark.createDataFrame(result_df).write.mode("overwrite").saveAsTable(
    "catalog.schema.fraud_predictions"
)
\`\`\`

**Schedule with Databricks Jobs:**
- Set up a Job to run daily at 2 AM
- Configure retries and alerting
- Monitor job runs in the Jobs UI

### Pattern 2: Real-Time Model Serving

**Use case:** Low-latency predictions (<100ms) for interactive applications

\`\`\`python
# Enable Model Serving via Databricks UI or API
# The model is exposed as a REST endpoint

# Example: Call the endpoint from an application
import requests

endpoint_url = "https://<databricks-instance>/model/fraud-detection-xgb/Production/invocations"
headers = {"Authorization": "Bearer <token>"}

response = requests.post(
    endpoint_url,
    headers=headers,
    json={
        "dataframe_split": {
            "columns": ["user_id", "amount", "merchant_category"],
            "data": [[12345, 150.00, "electronics"]]
        }
    }
)

predictions = response.json()
\`\`\`

**Serving configuration options:**
- **Auto-scaling:** Automatically scale from 1 to N workers based on traffic
- **Workload type:** CPU or GPU (GPU for deep learning models)
- **Scale to zero:** Suspend endpoint when not in use (cost savings)

### Pattern 3: Streaming Scoring

**Use case:** Score events as they arrive (e.g., real-time fraud detection)

\`\`\`python
# Read streaming data
streaming_df = spark.readStream.table("catalog.schema.live_transactions")

# Load model
model = mlflow.pyfunc.load_model("models:/catalog.schema.fraud-detection-xgb@production")

# Define scoring function
def score_batch(batch_df, batch_id):
    # Load features from feature store
    features_df = fs.score_batch(model_uri, batch_df)

    # Score
    predictions = model.predict(features_df.to_pandas())

    # Write results
    result_df = features_df.to_pandas()
    result_df['fraud_score'] = predictions
    spark.createDataFrame(result_df).write.mode("append").saveAsTable(
        "catalog.schema.fraud_predictions_streaming"
    )

# Start streaming query
query = streaming_df.writeStream.foreachBatch(score_batch).start()
\`\`\`

### Pattern 4: Edge Deployment

**Use case:** Deploy model to edge devices (IoT, mobile) with no internet connectivity

\`\`\`python
# Export model to ONNX format for cross-platform deployment
import mlflow.onnx

# Log model as ONNX
with mlflow.start_run():
    mlflow.onnx.log_model(
        model,
        "model",
        onnx_model_path="model.onnx",
        registered_model_name="catalog.schema.fraud-detection-onnx"
    )

# Download and deploy to edge device
# ONNX Runtime runs on iOS, Android, Raspberry Pi, etc.
\`\`\`

---

## CI/CD for Machine Learning

Traditional CI/CD (build → test → deploy) doesn't work for ML because models need validation beyond unit tests.

### The ML CI/CD Pipeline

\`\`\`
Code Commit
    ↓
Run Unit Tests (code quality)
    ↓
Train Model (on validation dataset)
    ↓
Validate Model (performance, fairness, bias)
    ↓
Register Model (MLflow Registry)
    ↓
Deploy to Staging (A/B test or shadow deployment)
    ↓
Monitor in Production (drift, performance)
    ↓
Promote to Production (if metrics pass)
\`\`\`

### Implementation with Databricks Repos and Jobs

**1. Code repository structure:**

\`\`\`
mlops-repo/
├── src/
│   ├── train.py              # Training script
│   ├── preprocess.py         # Feature engineering
│   └── validate.py           # Model validation
├── tests/
│   ├── test_preprocessing.py # Unit tests
│   └── test_model_quality.py # Model validation tests
├── config/
│   └── model_config.yaml     # Hyperparameters, thresholds
└── requirements.txt
\`\`\`

**2. Training script (train.py):**

\`\`\`python
import mlflow
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("--experiment_name", required=True)
parser.add_argument("--model_name", required=True)
args = parser.parse_args()

mlflow.set_experiment(args.experiment_name)

with mlflow.start_run(run_name="automated_training"):
    # Load data
    df = spark.table("catalog.schema.training_data").toPandas()

    # Preprocess
    X = preprocess(df)

    # Train
    model = XGBClassifier()
    model.fit(X_train, y_train)

    # Validate
    metrics = validate_model(model, X_test, y_test)

    # Log
    mlflow.log_params(model.get_params())
    mlflow.log_metrics(metrics)
    mlflow.sklearn.log_model(
        model,
        "model",
        registered_model_name=args.model_name
    )

    # Check if model meets quality threshold
    if metrics["auc_roc"] < 0.85:
        raise ValueError(f"Model quality below threshold: {metrics['auc_roc']}")
\`\`\`

**3. Model validation (validate.py):**

\`\`\`python
def validate_model(model, X_test, y_test):
    """Comprehensive model validation."""
    y_pred = model.predict(X_test)
    y_proba = model.predict_proba(X_test)[:, 1]

    metrics = {
        "accuracy": accuracy_score(y_test, y_pred),
        "f1_score": f1_score(y_test, y_pred),
        "auc_roc": roc_auc_score(y_test, y_proba),
        "auc_pr": average_precision_score(y_test, y_proba)
    }

    # Fairness check: ensure no protected group is discriminated against
    fairness_metrics = check_fairness(model, X_test, y_test, protected_attrs=['gender', 'race'])

    # Drift check: compare to baseline
    drift_metrics = check_drift(model, X_test, baseline_X)

    return {**metrics, **fairness_metrics, **drift_metrics}

def check_fairness(model, X, y, protected_attrs):
    """Check for disparate impact across protected groups."""
    fairness_results = {}
    for attr in protected_attrs:
        for group in X[attr].unique():
            mask = X[attr] == group
            group_preds = model.predict(X[mask])
            group_fpr = 1 - precision_score(y[mask], group_preds)
            fairness_results[f"{attr}_{group}_fpr"] = group_fpr

    return fairness_results
\`\`\`

**4. Databricks Job configuration:**

Create a Job that:
- Triggers on Git repo changes (webhook)
- Runs the training pipeline
- Validates model quality
- Registers model if validation passes
- Sends Slack/email notification with results

### Automated Retraining Triggers

**Schedule-based retraining:**
\`\`\`python
# Job runs weekly to retrain model
# Trigger: Every Monday at 2 AM
\`\`\`

**Performance-based retraining:**
\`\`\`python
# Monitor production model performance
# Trigger: If AUC drops below 0.85 for 3 consecutive days
\`\`\`

**Data drift-based retraining:**
\`\`\`python
# Monitor feature distributions
# Trigger: If PSI > 0.2 for any feature
\`\`\`

---

## Model Monitoring in Production

Deploying a model is not the end — it's the beginning. Models degrade over time due to data drift, concept drift, and infrastructure issues.

### The Four Types of Model Degradation

#### 1. Data Drift

**What:** Input feature distribution changes (e.g., more young users in production than training)

**Detection:**
\`\`\`python
from scipy.stats import ks_2samp

def detect_drift(train_features, prod_features, threshold=0.05):
    """Detect data drift using Kolmogorov-Smirnov test."""
    drift_results = {}
    for col in train_features.columns:
        statistic, p_value = ks_2samp(train_features[col], prod_features[col])
        drift_results[col] = {
            "statistic": statistic,
            "p_value": p_value,
            "drift_detected": p_value < threshold
        }
    return drift_results
\`\`\`

**Fix:** Retrain model on recent data, or use domain adaptation techniques.

#### 2. Concept Drift

**What:** The relationship between features and target changes (e.g., fraud patterns evolve)

**Detection:**
\`\`\`python
# Monitor model performance on labeled production data
# If AUC drops significantly, concept drift is occurring

def monitor_concept_drift(prod_predictions, prod_labels, window_size=1000):
    """Track rolling AUC to detect concept drift."""
    rolling_auc = []
    for i in range(0, len(prod_labels), window_size):
        window_preds = prod_predictions[i:i+window_size]
        window_labels = prod_labels[i:i+window_size]
        auc = roc_auc_score(window_labels, window_preds)
        rolling_auc.append(auc)

    return rolling_auc
\`\`\`

**Fix:** Retrain model with recent labeled data. This is more expensive than data drift fixes because it requires new labels.

#### 3. Feature Pipeline Drift

**What:** Feature computation code changes or bugs

**Detection:**
\`\`\`python
# Log feature statistics in production
# Compare to training statistics

def log_feature_stats(df, stage="production"):
    stats = df.describe().toPandas()
    stats.to_json(f"feature_stats_{stage}.json")
    # Alert if distributions differ significantly from training
\`\`\`

**Fix:** Version control feature pipeline code, use feature store for consistency.

#### 4. Infrastructure Drift

**What:** Model served in different environment (library version mismatch, hardware differences)

**Detection:**
\`\`\`python
# Compare predictions on same input in train vs prod
# If predictions differ, infrastructure drift is occurring

def validate_infrastructure(model, test_input):
    """Ensure model produces same predictions in different environments."""
    expected_pred = model.predict(test_input)

    # In production:
    prod_pred = production_model.predict(test_input)

    if not np.allclose(expected_pred, prod_pred):
        raise InfrastructureDriftError("Predictions differ between environments")
\`\`\`

**Fix:** Containerize model (Docker), use ONNX for consistency, pin library versions.

### Monitoring Implementation with Databricks

\`\`\`python
from databricks import feature_store
from databricks.feature_store import FeatureStoreClient
import pandas as pd

fs = FeatureStoreClient()

def monitor_production_model(model_name, alias="production"):
    """Comprehensive production monitoring."""

    # Load model
    model_uri = f"models:/{model_name}@{alias}"
    model = mlflow.pyfunc.load_model(model_uri)

    # Load recent production data
    prod_data = spark.table("catalog.schema.production_features").toPandas()

    # 1. Prediction distribution monitoring
    predictions = model.predict(prod_data)
    pred_mean = predictions.mean()
    pred_std = predictions.std()

    # Alert if prediction distribution shifts
    if abs(pred_mean - baseline_pred_mean) > 0.1:
        send_alert("Prediction distribution drift detected")

    # 2. Feature drift monitoring
    train_features = fs.read_table("catalog.schema.training_features").toPandas()
    drift_results = detect_drift(train_features, prod_data)

    for feature, result in drift_results.items():
        if result["drift_detected"]:
            send_alert(f"Feature drift detected: {feature}")

    # 3. Performance monitoring (if labels available)
    if has_labels(prod_data):
        auc = roc_auc_score(prod_data['label'], predictions)
        if auc < 0.80:
            send_alert(f"Model performance degraded: AUC={auc:.3f}")

    # Log metrics to MLflow
    with mlflow.start_run(run_name="production_monitoring"):
        mlflow.log_metrics({
            "pred_mean": pred_mean,
            "pred_std": pred_std,
            "drift_count": sum(1 for r in drift_results.values() if r["drift_detected"])
        })
\`\`\`

### Monitoring Checklist

| Monitor | Frequency | Alert Threshold | Action |
|---|---|---|---|
| Prediction distribution | Daily | Mean shift > 10% | Investigate feature drift |
| Feature distributions | Daily | PSI > 0.2 or KS test p < 0.05 | Retrain or adapt model |
| Model performance | Weekly | AUC drop > 5% | Retrain with new data |
| Latency (p95) | Real-time | > SLA (e.g., 100ms) | Scale infrastructure |
| Error rate | Real-time | > threshold | Rollback to previous model |
| Data quality | Daily | Missing > 10% | Fix data pipeline |

---

## Advanced MLOps Patterns

### Pattern: Shadow Deployment

Deploy a new model alongside the production model without affecting users. Compare predictions to validate the new model before promotion.

\`\`\`python
# Production model serves real traffic
production_model = load_model("models:/catalog.schema.fraud-detection-xgb@production")

# Shadow model runs in parallel, predictions logged but not used
shadow_model = load_model("models:/catalog.schema.fraud-detection-xgb@challenger")

def predict_with_shadow(features):
    # Production prediction (used)
    prod_pred = production_model.predict(features)

    # Shadow prediction (logged only)
    shadow_pred = shadow_model.predict(features)
    log_shadow_prediction(features, prod_pred, shadow_pred)

    return prod_pred

# After 1 week, compare shadow vs production metrics
# If shadow is better, promote to production
\`\`\`

### Pattern: Canary Deployment

Gradually roll out a new model to a small percentage of traffic, monitor, then gradually increase.

\`\`\`python
# Traffic splitting configuration
traffic_split = {
    "v1": 0.90,  # 90% to current production model
    "v2": 0.10   # 10% to new model
}

# Monitor v2 metrics for 24 hours
# If no degradation, increase to 50%
# If still good, promote to 100%
\`\`\`

### Pattern: A/B Testing ML Models

\`\`\`python
from scipy import stats

# Run A/B test: Model A (champion) vs Model B (challenger)
model_a_scores = []  # Daily AUC scores for Model A
model_b_scores = []  # Daily AUC scores for Model B

# After 2 weeks, test statistical significance
t_stat, p_value = stats.ttest_rel(model_a_scores, model_b_scores)

if p_value < 0.05:
    print("Model B is significantly better — promote to production")
else:
    print("No significant difference — keep Model A to avoid change risk")
\`\`\`

**Critical nuance:** Always run A/B tests for at least 1-2 weeks to capture weekly seasonality. A test that runs for 1 day may show improvement that disappears on weekends.

---

## Model Serialization and Portability

### Serialization Options

| Method | Pros | Cons | When to Use |
|---|---|---|---|
| **MLflow format** | Includes dependencies, environment | Larger file size | Databricks deployments |
| **Pickle** | Native Python, easy | Not secure, version-dependent | Quick prototyping only |
| **Joblib** | Faster for large numpy arrays | Same as pickle | Production with sklearn |
| **ONNX** | Language-agnostic, optimized | Conversion overhead | Cross-platform deployment |
| **PMML** | Standard format | Limited model support | Enterprise systems |

### Best Practice: Save Entire Pipeline

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
mlflow.sklearn.log_model(pipeline, "model")  # Includes preprocessing

# In production:
pipeline = mlflow.pyfunc.load_model("models:/catalog.schema.fraud-detection-xgb@production")
predictions = pipeline.predict(X_production)  # Preprocessing included
\`\`\`

---

## Real-World MLOps Examples

### Example 1: E-Commerce Fraud Detection

**Business:** Real-time fraud detection for 50K transactions/day. Must score in <50ms. Fraud patterns shift monthly.

**Architecture:**
1. **Feature Store:** Pre-compute user-level features (avg transaction amount, transaction velocity, days since last transaction)
2. **Model:** XGBoost trained weekly on Delta Lake
3. **Deployment:** Model Serving endpoint (real-time, <50ms latency)
4. **Monitoring:** Daily drift checks, weekly performance evaluation
5. **Retraining:** Automated weekly retraining if performance drops

**Why this works:**
- Feature Store eliminates training-serving skew
- Model Serving provides auto-scaling for traffic spikes
- Weekly retraining adapts to evolving fraud patterns
- Monitoring catches degradation before it impacts users

### Example 2: Customer Churn Prediction

**Business:** Predict which customers will churn in next 30 days. Batch scoring weekly. Sales team acts on high-risk customers.

**Architecture:**
1. **Data:** Delta Lake with customer transactions, support tickets, usage metrics
2. **Features:** Feature Store with customer aggregates (usage trends, support ticket sentiment)
3. **Model:** LightGBM trained monthly
4. **Deployment:** Databricks Job runs weekly batch scoring
5. **Output:** Churn probabilities written to Delta table, synced to Salesforce

**Why batch scoring:** Sales team acts on predictions weekly, so real-time scoring is unnecessary. Batch scoring is cheaper and easier to debug.

### Example 3: Demand Forecasting

**Business:** Forecast product demand for 10K SKUs across 500 stores. Update forecasts daily.

**Architecture:**
1. **Data:** Delta Lake with historical sales, promotions, holidays
2. **Model:** Prophet + LightGBM ensemble (trained per SKU-store pair)
3. **Deployment:** Streaming scoring with Spark Structured Streaming
4. **Feature Store:** Time-series features (lag sales, rolling averages, promotion flags)
5. **Monitoring:** Forecast accuracy tracked daily, retrain if MAPE > 15%

**Why streaming:** New sales data arrives daily, forecasts must be updated daily. Streaming enables continuous updates without full retraining.

---

## Interview Questions: MLOps & Databricks

### Q: "What is the difference between MLflow Tracking and MLflow Model Registry?"

**Junior answer:** "Tracking logs experiments, Registry stores models."

**Senior answer:** "MLflow Tracking is for experiment management — logging parameters, metrics, and artifacts during training. It's like a lab notebook for data scientists. The Model Registry is for production model management — versioning, stage transitions, and deployment. It's like a software release manager. You use Tracking during development to compare experiments, then Registry to manage the model lifecycle in production. The Registry also provides lineage (via Unity Catalog) so you can trace a production model back to the exact training run, data, and code."

### Q: "What is training-serving skew and how do you prevent it?"

**Junior answer:** "When training and production data are different."

**Senior answer:** "Training-serving skew is when features are computed differently in training vs. production, causing the model to perform well in testing but fail in production. It's the #1 cause of production ML failures. Prevention requires: (1) Using a Feature Store to ensure point-in-time correctness and consistent feature computation, (2) Serializing the entire preprocessing pipeline (not just the model), (3) Version controlling feature engineering code, (4) Monitoring feature distributions in production and comparing to training. The Feature Store is the most robust solution because it guarantees that the same feature definitions are used in both contexts."

### Q: "How do you decide between batch scoring and real-time model serving?"

**Junior answer:** "Use real-time when you need low latency, batch otherwise."

**Senior answer:** "The decision depends on three factors: (1) Latency requirement — if users wait for predictions (<100ms), use Model Serving. If predictions can be pre-computed (e.g., nightly), use batch. (2) Data velocity — if events arrive continuously (streaming), consider streaming or real-time. If data arrives in batches (daily), batch scoring is fine. (3) Cost — Model Serving costs more (always-on endpoint). Batch scoring via Jobs is cheaper for infrequent predictions. I'd use batch for 80% of use cases (daily/weekly scoring), real-time only when latency is critical, and streaming for continuous data."

### Q: "What is the difference between data drift and concept drift?"

**Junior answer:** "Data drift is when input data changes, concept drift is when the target changes."

**Senior answer:** "Data drift is when the distribution of input features changes (e.g., more young users in production than training). The model still works, but the features it sees are different. Concept drift is when the relationship between features and target changes (e.g., what constitutes 'fraud' evolves as fraudsters adapt). The model's learned patterns become obsolete. Both require monitoring, but concept drift requires retraining with new labels, while data drift can sometimes be addressed with domain adaptation or recalibration. In practice, concept drift is harder to detect because you need labeled production data, which is often delayed."

### Q: "How do you handle model rollback in Databricks?"

**Junior answer:** "Deploy the previous model version."

**Senior answer:** "Databricks Model Registry supports model aliases, which make rollback trivial. I promote the current production model to an alias like 'production'. If the new model fails, I point the 'production' alias back to the previous version using \`client.set_registered_model_alias()\`. This takes seconds and doesn't require redeploying. For critical models, I also keep the previous two versions as 'rollback_v1' and 'rollback_v2'. Additionally, I configure Model Serving to automatically rollback if error rate exceeds a threshold."

### Q: "What is the role of Unity Catalog in MLOps?"

**Junior answer:** "It manages data access and governance."

**Senior answer:** "Unity Catalog is the governance layer for the entire data stack, including ML assets. In MLOps, it provides: (1) **Lineage:** Trace a production prediction back to the model version, training run, training data, and data source. This is critical for debugging and compliance. (2) **Access control:** Control who can view, edit, or deploy models. (3) **Audit logs:** Track who deployed what model and when. (4) **Cross-workspace sharing:** Share models and features across teams without copying data. For regulated industries (finance, healthcare), Unity Catalog is essential for compliance with GDPR, ECOA, and HIPAA."

### Q: "How do you test ML models before promoting to production?"

**Junior answer:** "Check accuracy on a test set."

**Senior answer:** "Model validation goes beyond accuracy. I validate: (1) **Performance metrics:** AUC, F1, precision, recall meet business thresholds. (2) **Fairness:** No protected group is disproportionately harmed (check disparate impact, equal opportunity difference). (3) **Robustness:** Model performs well on edge cases and under distribution shift. (4) **Calibration:** Predicted probabilities match actual frequencies (important for risk scoring). (5) **Latency:** Model scores within SLA (e.g., <50ms). (6) **Explainability:** Can I explain why the model made a specific prediction? (7) **Data quality:** No data leakage, no missing values in production features. I automate these checks in a validation script that runs before model promotion."

### Q: "What is the difference between a feature table and a feature lookup?"

**Junior answer:** "A feature table stores features, a feature lookup retrieves them."

**Senior answer:** "A feature table is the physical storage (Delta table) that contains pre-computed features for a set of entities (e.g., user_transaction_features with user_id as the primary key). A feature lookup is the logical definition that tells the Feature Store how to join features from the table to your training/scoring data. When you create a training set, you define feature lookups that specify which features to pull from which tables. The Feature Store then handles the join logic, point-in-time correctness, and online/offline serving. This separation allows you to reuse the same feature table across multiple models with different lookups."

---

## Quick Reference: MLOps Decision Matrix

| Scenario | Recommended Approach | Databricks Tool |
|---|---|---|
| Need experiment tracking | MLflow Tracking | mlflow.log_param(), mlflow.log_metric() |
| Need model versioning | MLflow Model Registry | registered_model_name, aliases |
| Need feature consistency | Feature Store | create_table(), write_table(), score_batch() |
| Need governance | Unity Catalog | catalog.schema.table naming |
| Need batch predictions | Databricks Jobs | Scheduled notebook or Python wheel |
| Need real-time predictions | Model Serving | Enable via UI or API |
| Need streaming predictions | Structured Streaming | foreachBatch with model scoring |
| Need monitoring | Custom + MLflow | Log metrics, detect drift, alert |
| Need CI/CD | Databricks Repos + Jobs | Git integration, webhook triggers |
| Need A/B testing | Model aliases + custom routing | production vs challenger aliases |

---

## Common MLOps Pitfalls

### Pitfall 1: No Model Versioning

**Problem:** Deploying models without versioning makes rollback impossible and debugging a nightmare.

**Fix:** Always use MLflow Model Registry. Every model gets a version number. Use aliases for environment-specific deployments (production, staging).

### Pitfall 2: No Monitoring

**Problem:** Models degrade silently. By the time you notice performance has dropped, users have already been affected.

**Fix:** Set up automated monitoring for prediction distributions, feature drift, and model performance. Alert on threshold breaches.

### Pitfall 3: Manual Deployment

**Problem:** Manual deployment is error-prone and slow. It doesn't scale as you deploy more models.

**Fix:** Automate deployment with Databricks Jobs and CI/CD pipelines. Every code commit triggers automated training, validation, and deployment.

### Pitfall 4: Ignoring Feature Store

**Problem:** Computing features ad-hoc in training and production leads to training-serving skew.

**Fix:** Use Databricks Feature Store for all production features. It guarantees consistency and point-in-time correctness.

### Pitfall 5: No Rollback Plan

**Problem:** Deploying a new model without a rollback plan means you're stuck with a bad model if it fails.

**Fix:** Always keep the previous model version deployed (or easily deployable). Use Model Serving with traffic splitting to gradually roll out new models.

---

## The MLOps Maturity Assessment

Use this checklist to assess your organization's MLOps maturity:

| Capability | Level 0 (Manual) | Level 1 (Automated) | Level 2 (CI/CD) | Level 3 (Full MLOps) |
|---|---|---|---|---|
| **Experiment tracking** | Spreadsheets | MLflow Tracking | MLflow + automated logging | MLflow + lineage |
| **Model versioning** | Manual file naming | MLflow Registry | Automated registration | Automated promotion |
| **Feature management** | Ad-hoc in notebooks | Feature Store | Feature Store + monitoring | Feature Store + lineage |
| **Deployment** | Manual export/import | Automated Jobs | CI/CD pipeline | Canary + A/B testing |
| **Monitoring** | None | Basic metrics | Automated alerts | Automated retraining |
| **Retraining** | Manual | Scheduled | Trigger-based | Automated with validation |

> **🎯 Interview Gold Standard:** "MLOps is not a tool — it's a set of practices that ensure ML models are reliable, scalable, and maintainable in production. On Databricks, the key components are MLflow for experiment tracking and model registry, Feature Store for feature consistency, Unity Catalog for governance, and Jobs for orchestration. The hardest part is not the technology — it's building the culture and processes to treat ML like any other production system with testing, monitoring, and rollback capabilities."
`,
  
}

export default MLOps