/**
 * Classification Metrics — Independent concept page.
 *
 * To add a new concept, simply create a new .jsx file in this directory
 * that exports a default topic config object with { slug, title, order, content }.
 * It will be auto-discovered by the barrel index via import.meta.glob.
 */
const ClassificationMetrics = {
  slug: 'classification-metrics',
  title: 'Classification Metrics',
  order: 1,
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

> **💡 Interview Tip:** Always ask "What is the class distribution?" before reporting accuracy. If 99% of samples are negative, a model that predicts "all negative" gets 99% accuracy but has zero predictive power for the positive class.

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

> **⚠️ Pitfall:** AUC can be misleading with very imbalanced datasets. A model can achieve high AUC while still producing mostly false positives at any practically useful threshold. Always look at the full ROC curve, not just the AUC number.

---

## Precision-Recall (PR) Curve

For imbalanced datasets where the positive class is rare, the PR curve is often more informative than the ROC curve. It plots Precision (Y-axis) versus Recall (X-axis).

| Use ROC-AUC When | Use PR-AUC When |
|---|---|
| Classes are roughly balanced (e.g., 50/50) | Classes are imbalanced (e.g., 1% positive) |
| False positives and false negatives are equally costly | False negatives are much more costly than false positives |
| You want a threshold-independent overview | You specifically care about performance on the rare positive class |

> **💡 Interview Tip:** If someone asks "Is accuracy a good metric?", always respond: "It depends on the class distribution and the relative costs of different errors." Then walk through the confusion matrix and explain why F1 or AUC is more appropriate for imbalanced data.

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

> **🎯 Interview Gold Standard Answer:** Start with "It depends on the business context and class distribution." Then: (1) describe the confusion matrix for the problem, (2) identify which error type is more costly, (3) recommend the appropriate metric, and (4) mention that you would also look at the ROC curve for a complete picture.
`,
}

export default ClassificationMetrics