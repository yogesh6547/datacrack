export const mlTopics = [
  {
    slug: 'basic-statistics',
    title: 'Basic Statistics',
    order: 1,
    content: `
## Mean, Median, and Mode

These are the three fundamental measures of central tendency in statistics.

### Mean (Average)

The **mean** is the sum of all values divided by the number of values.

$$\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i$$

**Example:** For the dataset [2, 4, 6, 8, 10]:
- Mean = (2 + 4 + 6 + 8 + 10) / 5 = **6**

### Median

The **median** is the middle value when data is sorted in ascending order.

- If n is odd: median = middle value
- If n is even: median = average of two middle values

**Example:** For [1, 3, 5, 7, 9], median = **5**

### Mode

The **mode** is the most frequently occurring value in the dataset.

**Example:** For [1, 2, 2, 3, 4], mode = **2**

> **💡 Interview Tip:** The mean is sensitive to outliers. The median is more robust. Always check the distribution before choosing which to report.

---

## Variance and Standard Deviation

These measure how spread out your data is.

### Variance

Population variance:

$$\\sigma^2 = \\frac{1}{N} \\sum_{i=1}^{N} (x_i - \\mu)^2$$

Sample variance (unbiased):

$$s^2 = \\frac{1}{n-1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2$$

> **Why n-1?** We use n-1 (Bessel's correction) for sample variance to get an unbiased estimate of the population variance.

### Standard Deviation

The standard deviation is simply the square root of variance:

$$\\sigma = \\sqrt{\\sigma^2}$$

**Example:** For [2, 4, 6, 8, 10]:
- Mean = 6
- Variance = [(2-6)² + (4-6)² + (6-6)² + (8-6)² + (10-6)²] / 5 = 8
- Standard Deviation = √8 ≈ **2.83**

> **⚠️ Common Mistake:** Confusing population variance (1/N) with sample variance (1/(n-1)). In interviews, always clarify which one you're computing.

---

## Covariance and Correlation

### Covariance

Covariance measures how two variables change together:

$$Cov(X,Y) = \\frac{1}{n-1} \\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})$$

- Positive covariance: variables tend to increase together
- Negative covariance: one increases while the other decreases

### Pearson Correlation Coefficient

Correlation is the standardized version of covariance:

$$r = \\frac{Cov(X,Y)}{\\sigma_X \\cdot \\sigma_Y}$$

- r ranges from -1 to 1
- r = 1: perfect positive correlation
- r = 0: no correlation
- r = -1: perfect negative correlation

> **💡 Interview Tip:** Correlation does NOT imply causation. This is one of the most commonly tested concepts in data science interviews.
`,
  },
  {
    slug: 'probability',
    title: 'Probability Fundamentals',
    order: 2,
    content: `
## Basic Probability Rules

### Addition Rule

$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$

### Multiplication Rule

$$P(A \\cap B) = P(A) \\cdot P(B|A)$$

### Conditional Probability

$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$

---

## Bayes' Theorem

One of the most important concepts in statistics and ML:

$$P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}$$

Where:
- P(A|B) = posterior probability
- P(B|A) = likelihood
- P(A) = prior probability
- P(B) = marginal probability

**Classic Example — Medical Testing:**

If a disease affects 1% of people, and a test has 95% sensitivity and 90% specificity:

$$P(Disease|Positive) = \\frac{0.95 \\times 0.01}{0.95 \\times 0.01 + 0.10 \\times 0.99} = \\frac{0.0095}{0.1085} \\approx 8.8\\%$$

> **⚠️ Key Insight:** Even with a seemingly accurate test, if the disease is rare, most positive results are false positives!

---

## Probability Distributions

### Normal (Gaussian) Distribution

$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$

- Bell-shaped curve
- 68-95-99.7 rule: 68% within 1σ, 95% within 2σ, 99.7% within 3σ

### Binomial Distribution

Models the number of successes in n independent trials:

$$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$$

### Poisson Distribution

Models the number of events in a fixed interval:

$$P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$$
`,
  },
  {
    slug: 'linear-regression',
    title: 'Linear Regression',
    order: 3,
    content: `
## Simple Linear Regression

Fits a straight line to data:

$$\\hat{y} = \\beta_0 + \\beta_1 x$$

### Finding Optimal Parameters

Using Ordinary Least Squares (OLS):

$$\\beta_1 = \\frac{\\sum(x_i - \\bar{x})(y_i - \\bar{y})}{\\sum(x_i - \\bar{x})^2}$$

$$\\beta_0 = \\bar{y} - \\beta_1 \\bar{x}$$

---

## Multiple Linear Regression

Extends to multiple features:

$$\\hat{y} = \\beta_0 + \\beta_1 x_1 + \\beta_2 x_2 + ... + \\beta_n x_n$$

In matrix form: **ŷ = Xβ**

---

## Assumptions of Linear Regression

1. **Linearity** — Relationship between X and Y is linear
2. **Independence** — Observations are independent
3. **Homoscedasticity** — Constant variance of residuals
4. **Normality** — Residuals are normally distributed
5. **No multicollinearity** — Features are not highly correlated with each other

> **💡 Interview Tip:** If assumptions are violated, consider: polynomial features, log transforms, regularization (Ridge/Lasso), or switching to a non-linear model.

---

## Model Evaluation

### R-squared (Coefficient of Determination)

$$R^2 = 1 - \\frac{SS_{res}}{SS_{tot}} = 1 - \\frac{\\sum(y_i - \\hat{y}_i)^2}{\\sum(y_i - \\bar{y})^2}$$

- R² = 1: perfect fit
- R² = 0: model explains none of the variance

### Adjusted R-squared

$$R^2_{adj} = 1 - \\frac{(1-R^2)(n-1)}{n-p-1}$$

Penalizes adding features that don't improve the model.

---

## Regularization

### Ridge Regression (L2)

$$J(\\beta) = \\sum(y_i - \\hat{y}_i)^2 + \\alpha \\sum \\beta_j^2$$

### Lasso Regression (L1)

$$J(\\beta) = \\sum(y_i - \\hat{y}_i)^2 + \\alpha \\sum |\\beta_j|$$

Lasso can drive coefficients to exactly zero, performing feature selection.
`,
  },
  {
    slug: 'logistic-regression',
    title: 'Logistic Regression',
    order: 4,
    content: `
## The Sigmoid Function

Logistic regression uses the sigmoid (logistic) function to map any real number to [0, 1]:

$$\\sigma(z) = \\frac{1}{1 + e^{-z}}$$

where z = β₀ + β₁x₁ + ... + βₙxₙ

---

## Decision Boundary

- If P(y=1|x) ≥ 0.5 → predict class 1
- If P(y=1|x) < 0.5 → predict class 0

---

## Cost Function (Binary Cross-Entropy)

$$J(\\theta) = -\\frac{1}{m} \\sum_{i=1}^{m} [y_i \\log(\\hat{y}_i) + (1-y_i) \\log(1-\\hat{y}_i)]$$

> **💡 Why not use MSE?** With the sigmoid function, MSE creates a non-convex cost function with many local minima. Cross-entropy gives a convex optimization landscape.

---

## Gradient Descent Update

$$\\theta_j := \\theta_j - \\alpha \\frac{\\partial J}{\\partial \\theta_j}$$

$$\\frac{\\partial J}{\\partial \\theta_j} = \\frac{1}{m} \\sum_{i=1}^{m} (\\hat{y}_i - y_i) x_{ij}$$

---

## Multiclass Extension

### One-vs-Rest (OvR)
- Train K binary classifiers (one per class)
- Class with highest probability wins

### Softmax Regression (Multinomial)
$$P(y=k|x) = \\frac{e^{z_k}}{\\sum_{j=1}^{K} e^{z_j}}$$
`,
  },
  {
    slug: 'classification-metrics',
    title: 'Classification Metrics',
    order: 5,
    content: `
## The Confusion Matrix

The confusion matrix is the 2x2 foundation table that compares predicted labels against actual labels. Every single classification metric is derived from these four numbers.

|   | **Predicted Positive** | **Predicted Negative** |
|---|---|---|
| **Actual Positive** | TP (True Positive) | FN (False Negative) |
| **Actual Negative** | FP (False Positive) | TN (True Negative) |

### Understanding Each Cell

**True Positive (TP):** The model predicted positive, and it was actually positive. These are correct catches. Example: The spam filter correctly marks a spam email as spam.

**True Negative (TN):** The model predicted negative, and it was actually negative. Also correct. Example: The spam filter correctly lets an important email through.

**False Positive (FP) = Type I Error = "False Alarm":** The model predicted positive, but it was actually negative. Example: The spam filter marks an important work email as spam. This is costly because the user might miss critical information.

**False Negative (FN) = Type II Error = "Miss":** The model predicted negative, but it was actually positive. Example: The spam filter lets a phishing email through to the inbox. This is dangerous because the user is now exposed to the threat.

> **Key Distinction:** Type I Error (FP) = "crying wolf" — seeing something that is not there. Type II Error (FN) = "missing the boat" — failing to detect something that is there.

### Cancer Detection Example

Consider a cancer detection model with 100 patients. The model is tested against known diagnoses:

|   | **Predicted Cancer** | **Predicted Healthy** |
|---|---|---|
| **Actually has Cancer** | TP = 45 | FN = 5 |
| **Actually Healthy** | FP = 10 | TN = 40 |

Reading this table: Out of 50 actual cancer patients, the model correctly identified 45 (TP) but missed 5 (FN). Out of 50 healthy patients, the model correctly cleared 40 (TN) but incorrectly flagged 10 as cancer (FP). The 5 missed cancers are the most dangerous outcome.

---

## Accuracy

Accuracy measures the fraction of all predictions that were correct.

$$Accuracy = \\frac{TP + TN}{TP + TN + FP + FN}$$

**Example:** Accuracy = (45 + 40) / (100) = 85%. This means 85 out of 100 predictions were correct.

### Why Accuracy Is Misleading

Consider a dataset with 95 healthy patients and 5 cancer patients. A model that predicts EVERYONE is healthy achieves 95% accuracy, but catches ZERO cancers.

$$Accuracy = \\frac{0 + 95}{0 + 95 + 0 + 5} = 95\\%$$

The model looks great on paper but is completely useless for its intended purpose. This is why accuracy alone is dangerous, especially with imbalanced datasets.

> **Interview Tip:** Always ask "What is the class distribution?" before reporting accuracy. If 99% of samples are negative, a model that predicts "all negative" gets 99% accuracy but has zero predictive power for the positive class.

---

## Precision

Precision answers: "Of all the times the model said YES, how often was it actually right?"

$$Precision = \\frac{TP}{TP + FP}$$

**Example:** Precision = 45 / (45 + 10) = 81.8%. Out of 55 times the model flagged cancer, 45 were correct.

### When to Optimize for Precision

- **Spam filtering:** Marking an important email as spam (FP) means the user misses critical information. High precision ensures few legitimate emails get caught.
- **Content recommendation:** Recommending irrelevant content (FP) frustrates users and reduces engagement. High precision means recommendations are relevant.
- **Legal document review:** False matches in e-discovery (FP) waste expensive lawyer time reviewing irrelevant documents.

### The Precision Trade-off

Increasing precision means the model is more "cautious" about predicting positive. It raises the classification threshold, which means fewer false alarms but also more missed true positives (lower recall). It is a fundamental trade-off: you cannot maximize both precision and recall simultaneously.

---

## Recall (Sensitivity / True Positive Rate)

Recall answers: "Of all the actual positive cases, how many did the model find?"

$$Recall = \\frac{TP}{TP + FN}$$

**Example:** Recall = 45 / (45 + 5) = 90%. The model found 90% of all actual cancer cases.

### When to Optimize for Recall

- **Cancer detection:** Missing a cancer case (FN) can be fatal. It is better to flag a healthy person for further testing (FP) than to miss a real cancer (FN).
- **Fraud detection:** Every missed fraud (FN) costs money directly. Banks prefer to investigate some false alarms rather than let fraud slip through.
- **Airport security:** Missing a genuine threat (FN) has catastrophic consequences. Security systems are designed for maximum recall even at the cost of many false alarms.
- **Disease screening during pandemics:** Missing an infected person (FN) leads to further spreading. Mass screening prioritizes recall.

### The Recall Trade-off

Increasing recall means the model is more "aggressive" about predicting positive. It lowers the classification threshold, catching more true positives but also generating more false alarms (lower precision).

---

## F1 Score

The F1 score is the harmonic mean of precision and recall, providing a single metric that balances both concerns.

$$F1 = 2 \\times \\frac{Precision \\times Recall}{Precision + Recall}$$

### Why Harmonic Mean Instead of Arithmetic Mean?

The harmonic mean punishes extreme values much more than the arithmetic mean. Consider these scenarios:

| Precision | Recall | Arithmetic Mean | F1 Score |
|---|---|---|---|
| 100% | 50% | 75% | 66.7% |
| 90% | 90% | 90% | 90% |
| 100% | 1% | 50.5% | 2% |

Notice that when precision is 100% but recall is only 1%, the arithmetic mean says 50.5% (seems okay), but F1 says 2% (accurately reflecting that the model is nearly useless). F1 requires BOTH precision AND recall to be good, making it a much stricter and more honest metric.

### F-beta Score

The F-beta score generalizes F1 by allowing you to weight precision or recall more heavily:

$$F_{\\beta} = (1 + \\beta^2) \\times \\frac{Precision \\times Recall}{\\beta^2 \\times Precision + Recall}$$

- **beta = 1:** Standard F1 (equal weight to precision and recall)
- **beta = 2:** F2 score (recall is weighted twice as much as precision — use when missing positives is worse than false alarms)
- **beta = 0.5:** F0.5 score (precision is weighted twice as much as recall — use when false alarms are worse than misses)

---

## Specificity and True Negative Rate

Specificity measures: "Of all actual negative cases, how many did the model correctly identify?"

$$Specificity = \\frac{TN}{TN + FP}$$

It is the complement of the False Positive Rate:

$$FPR = 1 - Specificity = \\frac{FP}{TN + FP}$$

### When Specificity Matters

- **Disease diagnosis:** Telling a healthy person they are sick (FP) causes unnecessary anxiety, expensive follow-up tests, and potential harmful treatments. High specificity avoids this.
- **Product quality control on a production line:** Flagging a good product as defective (FP) means unnecessary rework, wasted materials, and reduced throughput.
- **Spam filtering (from the receiving side):** Losing real emails to spam (FP from the filter's perspective) means missing important communications.

---

## ROC Curve

The Receiver Operating Characteristic (ROC) curve visualizes model performance across ALL possible classification thresholds, not just a single one.

### How It Works Step by Step

1. A trained classifier outputs a probability score for each sample (e.g., 0.73 chance of cancer)
2. We apply a threshold (e.g., 0.5) to convert probabilities to binary labels
3. At each threshold, we compute the True Positive Rate (TPR) and False Positive Rate (FPR)
4. We plot TPR on the Y-axis versus FPR on the X-axis for every possible threshold
5. The resulting curve shows the full trade-off profile of the model

**X-axis:** False Positive Rate = FP / (FP + TN) = 1 - Specificity

**Y-axis:** True Positive Rate = TP / (TP + FN) = Recall

### Interpreting the Curve Shape

- **Perfect classifier:** The curve goes straight up to (0, 1) then straight across to (1, 1). Area Under Curve (AUC) = 1.0. The model perfectly separates classes.
- **Random classifier:** The curve is a diagonal line from (0, 0) to (1, 1). AUC = 0.5. The model is no better than flipping a coin.
- **Good classifier:** The curve bows toward the top-left corner. The further from the diagonal, the better.
- **Worse than random:** The curve dips below the diagonal. AUC < 0.5. The model's predictions are actually inverted (swap its predictions and it becomes good).

### Area Under the Curve (AUC)

AUC provides a single number summary of the ROC curve. It represents the probability that the model ranks a randomly chosen positive example higher than a randomly chosen negative example.

| AUC Range | Model Quality | Interpretation |
|---|---|---|
| 0.9 - 1.0 | Excellent | The model almost perfectly separates the classes |
| 0.8 - 0.9 | Good | The model has strong discriminative ability |
| 0.7 - 0.8 | Acceptable | The model is useful but could be improved |
| 0.6 - 0.7 | Poor | The model has weak discriminative ability |
| 0.5 - 0.6 | Random | The model has no useful discriminative ability |

> **Pitfall:** AUC can be misleading with very imbalanced datasets. A model can achieve high AUC while still producing mostly false positives at any practically useful threshold. Always look at the full ROC curve, not just the AUC number.

---

## Precision-Recall (PR) Curve

For imbalanced datasets where the positive class is rare, the PR curve is often more informative than the ROC curve. It plots Precision (Y-axis) versus Recall (X-axis).

| Use ROC-AUC When | Use PR-AUC When |
|---|---|
| Classes are roughly balanced (e.g., 50/50) | Classes are imbalanced (e.g., 1% positive) |
| False positives and false negatives are equally costly | False negatives are much more costly than false positives |
| You want a threshold-independent overview | You specifically care about performance on the rare positive class |

> **Interview Tip:** If someone asks "Is accuracy a good metric?", always respond: "It depends on the class distribution and the relative costs of different errors." Then walk through the confusion matrix and explain why F1 or AUC is more appropriate for imbalanced data.

---

## Log-Loss (Cross-Entropy Loss)

Log-Loss measures the quality of predicted probabilities, not just binary predictions. It penalizes confident wrong predictions exponentially.

$$LogLoss = -\\frac{1}{N} \\sum_{i=1}^{N} \\left[ y_i \\log(p_i) + (1-y_i) \\log(1-p_i) \\right]$$

Where p_i is the predicted probability that sample i belongs to the positive class.

### How the Penalty Works

- A model predicting 0.99 probability for a negative sample (very confident and wrong): penalty = -log(0.01) = 4.6
- A model predicting 0.6 probability for a negative sample (slightly wrong): penalty = -log(0.4) = 0.92
- A model predicting 0.01 probability for a negative sample (confident and correct): penalty = -log(0.99) = 0.01

The key insight: Log-Loss does not just care whether the prediction was right or wrong, it cares HOW CONFIDENT the model was. A model that says "I am 51% sure this is positive" when it is wrong is much better than one that says "I am 99% sure this is positive" when it is wrong, even though both get the same accuracy.

### Why Use Log-Loss Instead of Accuracy?

- Accuracy treats all wrong predictions equally (51% wrong is the same as 99% wrong)
- Log-Loss considers the confidence of the prediction
- Log-Loss is differentiable, making it suitable as a loss function for gradient-based optimization
- Lower is better (0 = perfect predictions)

---

## Cohen's Kappa

Cohen's Kappa measures how much better your model is compared to random guessing. It accounts for the agreement that would happen by chance.

$$\\kappa = \\frac{p_o - p_e}{1 - p_e}$$

Where p_o is the observed accuracy and p_e is the expected accuracy by chance (based on class proportions).

| Kappa Value | Interpretation | What It Means |
|---|---|---|
| 0.81 - 1.00 | Almost perfect agreement | The model is excellent |
| 0.61 - 0.80 | Substantial agreement | The model is good |
| 0.41 - 0.60 | Moderate agreement | The model is fair |
| 0.21 - 0.40 | Fair agreement | The model is poor |
| 0.00 - 0.20 | Slight agreement | The model barely beats random chance |
| Below 0.00 | Less than chance | The model is worse than random guessing |

Use Cohen's Kappa when you have class imbalance and want to know if your model is actually learning something or just exploiting the class distribution.

---

## Matthews Correlation Coefficient (MCC)

MCC is widely considered the single best metric for binary classification because it uses all four confusion matrix values and is balanced even with extreme class imbalance.

$$MCC = \\frac{TP \\times TN - FP \\times FN}{\\sqrt{(TP+FP)(TP+FN)(TN+FP)(TN+FN)}}$$

- MCC = +1: Perfect prediction (all samples classified correctly)
- MCC = 0: No better than random guessing
- MCC = -1: Total disagreement (every prediction is wrong — the model is inverted)

Unlike accuracy or F1, MCC provides a symmetric measure that treats all classes equally, making it the most reliable single metric for imbalanced datasets.

---

## Decision Threshold Optimization

The default classification threshold of 0.5 is almost never optimal. The right threshold depends on the specific costs of different error types in your application.

### Four Strategies for Choosing a Threshold

1. **Maximize F1-score:** Try every possible threshold from 0 to 1, compute F1 at each, and pick the threshold that gives the highest F1.
2. **Youden's J statistic:** Find the threshold that maximizes (TPR - FPR) on the ROC curve. This balances sensitivity and specificity.
3. **Cost-sensitive thresholding:** Assign real-world costs to FP and FN. If a false negative costs $1000 and a false positive costs $10, choose the threshold that minimizes total expected cost.
4. **Business requirement:** If the business says "we need at least 95% recall," find the lowest threshold that achieves 95% recall and use that.

### Threshold Impact Example

| Threshold | Precision | Recall | F1 | When to Use |
|---|---|---|---|---|
| 0.3 (low) | 60% | 95% | 73.6% | Cancer screening — catching every case matters most |
| 0.5 (default) | 82% | 80% | 81.0% | General purpose — balanced trade-off |
| 0.7 (high) | 95% | 55% | 69.7% | Legal review — false positives are very expensive |

Notice how the same model produces very different behavior depending on the threshold. The "best" threshold depends entirely on the application.

---

## Which Metric Should You Report?

| Business Situation | Primary Metric | Why | Secondary Metric |
|---|---|---|---|
| Balanced classes, equal error costs | Accuracy | Simple, interpretable | F1 Score |
| Imbalanced classes | F1 Score or MCC | Accuracy is misleading | AUC-ROC |
| False positives are very costly (e.g., spam filter) | Precision | Minimize false alarms | AUC-PR |
| False negatives are very costly (e.g., cancer detection) | Recall | Minimize misses | AUC-PR |
| You need probability estimates | Log-Loss | Measures probability quality | AUC-ROC |
| Comparing against a baseline model | Cohen's Kappa | Shows improvement over chance | MCC |

> **Interview Gold Standard Answer:** Start with "It depends on the business context and class distribution." Then: (1) describe the confusion matrix for the problem, (2) identify which error type is more costly, (3) recommend the appropriate metric, and (4) mention that you would also look at the ROC curve for a complete picture.
`,
  },
  {
    slug: 'decision-trees',
    title: 'Decision Trees',
    order: 6,
    content: `
## How Decision Trees Work

A decision tree recursively splits the data based on feature values to create homogeneous groups.

---

## Splitting Criteria

### Information Gain (Entropy)

**Entropy** measures impurity:

$$H(S) = -\\sum_{i=1}^{c} p_i \\log_2(p_i)$$

- H = 0: pure node (all same class)
- H = 1: maximum impurity (binary classification, 50/50 split)

**Information Gain:**

$$IG(S, A) = H(S) - \\sum_{v \\in Values(A)} \\frac{|S_v|}{|S|} H(S_v)$$

### Gini Impurity

$$Gini(S) = 1 - \\sum_{i=1}^{c} p_i^2$$

Most algorithms (like CART) use Gini by default.

---

## Pruning

### Pre-pruning (Early Stopping)
- Limit max depth
- Set minimum samples per leaf
- Set minimum information gain threshold

### Post-pruning
- Grow full tree, then remove branches that don't improve validation performance
- Reduced Error Pruning
- Cost Complexity Pruning

> **💡 Interview Tip:** Decision trees are prone to overfitting. Always mention pruning or ensemble methods as solutions.

---

## Advantages and Disadvantages

**✅ Advantages:**
- Easy to interpret and visualize
- No feature scaling needed
- Handles both numerical and categorical data
- Captures non-linear relationships

**❌ Disadvantages:**
- Prone to overfitting
- Unstable (small data changes → different tree)
- Biased toward features with more levels
`,
  },
  {
    slug: 'ensemble-methods',
    title: 'Ensemble Methods',
    order: 7,
    content: `
## Random Forest

An ensemble of decision trees trained on different subsets of data and features.

### Key Concepts
- **Bagging (Bootstrap Aggregating):** Train each tree on a random sample with replacement
- **Feature Randomness:** At each split, consider only √p features (classification) or p/3 (regression)
- **Prediction:** Average (regression) or majority vote (classification)

### Why It Works
- Reduces variance without increasing bias
- Each tree overfits differently → errors average out

---

## Gradient Boosting

Sequentially builds trees, where each new tree corrects the errors of the previous ones.

### Algorithm
1. Start with initial prediction (e.g., mean)
2. Compute residuals (errors)
3. Fit a tree to the residuals
4. Add the tree's predictions to the ensemble
5. Repeat steps 2-4

### Key Hyperparameters
- **Learning Rate (η):** Shrinkage parameter (lower = more robust)
- **n_estimators:** Number of trees
- **max_depth:** Usually shallow (3-8)

### Popular Implementations
- **XGBoost:** Regularized gradient boosting
- **LightGBM:** Leaf-wise growth, faster
- **CatBoost:** Handles categorical features natively

---

## AdaBoost

Adaptive Boosting — focuses on misclassified samples by increasing their weights.

### Algorithm
1. Initialize equal weights for all samples
2. Train weak classifier
3. Increase weights of misclassified samples
4. Train next weak classifier on reweighted data
5. Combine classifiers with weighted votes

---

## Bagging vs Boosting

| Aspect | Bagging | Boosting |
|--------|---------|----------|
| Training | Parallel | Sequential |
| Focus | Reduce variance | Reduce bias |
| Overfitting | Less prone | More prone |
| Example | Random Forest | XGBoost |
`,
  },
  {
    slug: 'knn-kmeans',
    title: 'KNN and K-Means',
    order: 8,
    content: `
## K-Nearest Neighbors (KNN)

A non-parametric, instance-based learning algorithm.

### How It Works
1. Store all training data
2. For a new point, find the K nearest neighbors
3. Classification: majority vote
4. Regression: average of K neighbors

### Distance Metrics

**Euclidean Distance:**
$$d(x, y) = \\sqrt{\\sum_{i=1}^{n}(x_i - y_i)^2}$$

**Manhattan Distance:**
$$d(x, y) = \\sum_{i=1}^{n}|x_i - y_i|$$

**Minkowski Distance:**
$$d(x, y) = (\\sum_{i=1}^{n}|x_i - y_i|^p)^{1/p}$$

### Choosing K
- Small K → low bias, high variance (overfitting)
- Large K → high bias, low variance (underfitting)
- Typically choose odd K to avoid ties
- Use cross-validation to find optimal K

> **💡 Interview Tip:** KNN suffers from the curse of dimensionality. Feature selection/PCA is important before using KNN.

---

## K-Means Clustering

An unsupervised algorithm that partitions data into K clusters.

### Algorithm
1. Initialize K centroids randomly
2. Assign each point to nearest centroid
3. Recompute centroids as mean of assigned points
4. Repeat steps 2-3 until convergence

### Objective Function (Inertia)

$$J = \\sum_{k=1}^{K} \\sum_{x_i \\in C_k} ||x_i - \\mu_k||^2$$

### Choosing K
- **Elbow Method:** Plot inertia vs K, look for the "elbow"
- **Silhouette Score:** Measures cluster cohesion vs separation

$$s(i) = \\frac{b(i) - a(i)}{\\max(a(i), b(i))}$$

### Limitations
- Assumes spherical clusters
- Sensitive to initialization (use K-Means++)
- Sensitive to outliers
- Must specify K beforehand

---

## When to Use Which?

| KNN | K-Means |
|-----|---------|
| Supervised | Unsupervised |
| Classification/Regression | Clustering |
| Lazy learner | Eager learner |
| Uses all features | Can work with any distance metric |
`,
  },
  {
    slug: 'dimensionality-reduction',
    title: 'Dimensionality Reduction',
    order: 9,
    content: `
## Why Reduce Dimensionality?

- **Curse of dimensionality:** Performance degrades with many features
- **Visualization:** Can't plot >3 dimensions
- **Computational efficiency:** Fewer features = faster training
- **Noise reduction:** Remove irrelevant features

---

## PCA (Principal Component Analysis)

The most popular linear dimensionality reduction technique.

### Algorithm
1. **Standardize** the data (mean=0, std=1)
2. Compute the **covariance matrix**
3. Compute **eigenvalues** and **eigenvectors**
4. Sort eigenvectors by eigenvalues (descending)
5. Select top k eigenvectors
6. **Project** data onto the new k-dimensional space

### Mathematical Foundation

Covariance matrix:
$$C = \\frac{1}{n-1} X^T X$$

The eigenvectors of C are the principal components, and eigenvalues indicate the variance explained by each component.

### Explained Variance Ratio

$$\\text{Explained Variance}_k = \\frac{\\lambda_k}{\\sum_{i=1}^{p} \\lambda_i}$$

Choose k such that cumulative explained variance ≥ 95%.

---

## t-SNE

A non-linear technique for visualization (2D/3D).

### Key Ideas
- Preserves local structure (nearby points stay nearby)
- Uses probability distributions in high and low dimensions
- Minimizes KL divergence between distributions

### Limitations
- Slow for large datasets
- Non-deterministic
- Not suitable for new data points (no transform method)

---

## LDA (Linear Discriminant Analysis)

Supervised dimensionality reduction — maximizes class separability.

$$J(w) = \\frac{w^T S_B w}{w^T S_W w}$$

Where S_B is between-class scatter and S_W is within-class scatter.
`,
  },
  {
    slug: 'cross-validation',
    title: 'Cross-Validation & Model Selection',
    order: 10,
    content: `
## Why Cross-Validation?

A single train-test split can be unreliable. Cross-validation provides a more robust estimate of model performance.

---

## K-Fold Cross-Validation

1. Split data into K equal folds
2. For each fold:
   - Train on K-1 folds
   - Validate on the remaining fold
3. Average the K validation scores

Typically K=5 or K=10.

### Stratified K-Fold
Ensures each fold has the same class distribution as the full dataset. **Always use this for classification tasks.**

---

## Leave-One-Out Cross-Validation (LOOCV)

K = N (number of samples). Each fold is a single sample.
- Pros: Nearly unbiased estimate
- Cons: Computationally expensive, high variance

---

## Time Series Cross-Validation

**Never** use random K-fold for time series! Use expanding or sliding window:

1. Train: [1,2,3] → Test: [4]
2. Train: [1,2,3,4] → Test: [5]
3. Train: [1,2,3,4,5] → Test: [6]

---

## Bias-Variance Tradeoff

$$Expected\\ Error = Bias^2 + Variance + Irreducible\\ Error$$

| High Bias | High Variance |
|-----------|---------------|
| Underfitting | Overfitting |
| Simple model | Complex model |
| Solution: more features, less regularization | Solution: more data, regularization, simpler model |

---

## Hyperparameter Tuning

### Grid Search
- Exhaustive search over specified parameter grid
- Pros: Guaranteed to find best combination
- Cons: Computationally expensive

### Random Search
- Randomly sample parameter combinations
- Often finds good results faster than grid search
- Better for high-dimensional parameter spaces

### Bayesian Optimization
- Uses past results to guide next parameter selection
- More efficient than grid/random search
- Tools: Optuna, Hyperopt
`,
  },
  {
    slug: 'feature-engineering',
    title: 'Feature Engineering',
    order: 11,
    content: `
## Why Feature Engineering Matters

> "Applied ML is basically feature engineering." — Andrew Ng

The quality of your features often matters more than the choice of algorithm.

---

## Numerical Features

### Scaling
- **Min-Max Scaling:** X_scaled = (X - X_min) / (X_max - X_min)
- **Standard Scaling (Z-score):** z = (X - μ) / σ
- **Robust Scaling:** Uses median and IQR (robust to outliers)

### Transformations
- **Log transform:** For right-skewed data
- **Box-Cox transform:** Finds optimal power transformation
- **Polynomial features:** Capture non-linear relationships

---

## Categorical Features

### One-Hot Encoding
Creates binary columns for each category. Use when categories have no order.

### Label Encoding
Assigns integer to each category. Use for ordinal features.

### Target Encoding
Replace category with the mean of the target variable. Risk of overfitting — use with cross-validation.

---

## Text Features

- **Bag of Words:** Word counts
- **TF-IDF:** Term frequency × inverse document frequency
- **Word Embeddings:** Word2Vec, GloVe, FastText

---

## Missing Value Strategies

1. **Drop** rows/columns with too many missing values
2. **Mean/Median/Mode** imputation
3. **KNN imputation** — use similar samples
4. **Model-based imputation** — predict missing values
5. **Add indicator column** — flag which values were missing

---

## Feature Selection Methods

### Filter Methods
- Correlation threshold
- Chi-squared test
- Mutual information

### Wrapper Methods
- Forward selection
- Backward elimination
- Recursive Feature Elimination (RFE)

### Embedded Methods
- L1 regularization (Lasso) → feature selection
- Feature importance from tree-based models
`,
  },
  {
    slug: 'ml-system-design',
    title: 'ML System Design & Interview Tips',
    order: 12,
    content: `
## ML System Design Framework

Use this framework when asked to design an ML system in interviews:

### 1. Problem Framing
- Define the objective (what metric are we optimizing?)
- Define the prediction target
- Determine the ML task type (classification, regression, etc.)

### 2. Data
- What data is available?
- Data collection and labeling strategy
- Data quality and potential biases
- Feature engineering ideas

### 3. Model Selection
- Start simple (baseline: logistic regression, decision tree)
- Gradually increase complexity
- Consider latency and compute constraints

### 4. Evaluation
- Offline metrics (AUC, F1, RMSE, etc.)
- Online metrics (A/B testing)
- Business metrics (revenue impact, user engagement)

### 5. Deployment & Monitoring
- Model serving architecture
- A/B testing strategy
- Monitoring for data drift and model degradation
- Retraining strategy

---

## Common Interview Topics

### Data Leakage
- When information from outside the training dataset leaks into the model
- Common sources: future data, target-related features, test data contamination

### Imbalanced Data
- **Resampling:** SMOTE, undersampling, oversampling
- **Algorithm-level:** Class weights, focal loss
- **Metrics:** Precision, Recall, F1, AUC-PR

### Feature Importance
- Permutation importance
- SHAP values
- Partial Dependence Plots

---

## Quick Reference: Algorithm Selection

| Scenario | Recommended Algorithms |
|----------|----------------------|
| Binary classification | Logistic Regression, XGBoost, LightGBM |
| Multi-class classification | Random Forest, XGBoost, Neural Networks |
| Regression | Linear Regression, Ridge/Lasso, XGBoost |
| Clustering | K-Means, DBSCAN, Hierarchical |
| Anomaly Detection | Isolation Forest, LOF, Autoencoders |
| Recommendation | Collaborative Filtering, Content-Based |
| Time Series | ARIMA, Prophet, LSTM |
`,
  },
]