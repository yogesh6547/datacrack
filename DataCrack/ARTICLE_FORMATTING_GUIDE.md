# DataCrack ML Article Formatting Guide

This guide documents the exact formatting conventions used in the Classification Metrics page (and other ML topics) so you can create new pages with the same look and feel.

---

## File Location

Content lives in: `src/data/mlConcepts.js`

Each topic is an object in the `mlTopics` array:
```javascript
{
  slug: 'my-topic-url',        // URL-friendly slug
  title: 'My Topic Title',     // Display title
  order: 1,                    // Ordering in roadmap
  content: `                    // Markdown-like content string
    Your content here...
  `
}
```

---

## Content Syntax Reference

### Section Headers (## Level)

Each major section uses `##`. These render with an emoji icon on the left and a gradient divider line below.

```markdown
## The Confusion Matrix

The confusion matrix is the foundation of all classification metrics.
```

**CSS:** `.ml-section-header` — flex layout, emoji icon, border-bottom, 12px top margin, 6px bottom margin.

### Subsection Headers (### Level)

Sub-sections use `###`. These render with a purple left border accent.

```markdown
### When Precision Matters

- **Spam detection:** High FP cost
- **Content recommendation:** User experience
```

**CSS:** `.ml-subsection-header` — 3px purple left border, 12px padding-left, 16px font size.

### Paragraphs

Plain text lines become paragraphs.

```markdown
This is a paragraph explaining a concept in detail. It should be readable
and well-spaced from surrounding elements.
```

**CSS:** `.ml-paragraph` — 14px font, 1.8 line height, gray-600 text color.

### Bold Text

Use `**text**` for emphasis.

```markdown
**True Positive (TP):** The model predicted positive, and it was correct.
```

### Inline Code

Use backticks for code references.

```markdown
The function `precision_score()` computes precision.
```

**CSS:** `.ml-inline-code` — purple background, purple text, border, monospace font.

---

## Tables

Tables use standard markdown pipe syntax. The parser splits on `|`, removes leading/trailing pipes, and renders with styled headers.

### Standard Table Format

```markdown
| Column 1 | Column 2 | Column 3 |
|---|---|---|
| Row 1 Col 1 | Row 1 Col 2 | Row 1 Col 3 |
| Row 2 Col 1 | Row 2 Col 2 | Row 2 Col 3 |
```

### Confusion Matrix Style (3-column with empty first cell)

```markdown
|   | Predicted Positive | Predicted Negative |
|---|---|---|
| Actual Positive | TP | FN |
| Actual Negative | FP | TN |
```

**Important:** The first cell in each row is empty (just pipes with nothing between). The parser handles this via `slice(1, -1)`.

### Two-Column Comparison Tables

```markdown
| Use This When | Use That When |
|---|---|
| Classes are balanced | Classes are imbalanced |
| Equal error costs | Unequal error costs |
```

### Tables with Interpretation Columns (3+ columns)

```markdown
| AUC Range | Model Quality | Interpretation |
|---|---|---|
| 0.9 - 1.0 | Excellent | The model almost perfectly separates classes |
| 0.8 - 0.9 | Good | Strong discriminative ability |
| 0.7 - 0.8 | Acceptable | Useful but could be improved |
```

**CSS:** `.ml-table-wrapper` — rounded-xl, shadow, border. `.ml-table` — table-layout: fixed, gradient header, alternating rows, hover effect.

---

## Math Formulas (KaTeX)

### Block Formulas (Display Mode)

Use `$$` delimiters for standalone formulas that appear on their own line:

```markdown
$$Accuracy = \\frac{TP + TN}{TP + TN + FP + FN}$$
```

**Note:** Backslashes must be double-escaped in JavaScript template strings (`\\frac` not `\frac`).

### Common KaTeX Commands

```markdown
# Fractions
$$\\frac{numerator}{denominator}$$

# Summation
$$\\sum_{i=1}^{n} x_i$$

# Square root
$$\\sqrt{x}$$

# Greek letters
$$\\alpha, \\beta, \\gamma, \\theta, \\sigma, \\mu, \\lambda$$

# Subscripts and superscripts
$$x_i, x^2, \\beta_0, \\hat{y}$$

# Multiplication
$$\\times$$ or $$\\cdot$$

# Logarithm
$$\\log(p_i)$$

# Fractions with large expressions
$$F_{\\beta} = (1 + \\beta^2) \\times \\frac{Precision \\times Recall}{\\beta^2 \\times Precision + Recall}$$
```

**CSS:** `.katex-display-wrapper` — centered, overflow-x-auto.

---

## Callout Boxes

Callout boxes start with `>` and are automatically styled based on content keywords.

### Tip Callout (Green)

Triggered by: contains "💡", "tip", or "interview"

```markdown
> **💡 Interview Tip:** Always ask about class distribution before reporting accuracy.
```

**CSS:** `.ml-callout-tip` — emerald green border, emerald green background, green text.

### Warning Callout (Amber)

Triggered by: contains "⚠️", "common mistake", "pitfall", "never"

```markdown
> **⚠️ Common Pitfall:** AUC can be misleading with very imbalanced datasets.
```

**CSS:** `.ml-callout-warning` — amber border, amber background, amber text.

### Gold Callout (Orange Gradient)

Triggered by: contains "🎯" or "gold"

```markdown
> **🎯 Interview Gold:** Always start with "It depends on the business context."
```

**CSS:** `.ml-callout-gold` — orange gradient background, amber text.

### Info Callout (Blue)

Triggered by: any `>` line without the above keywords

```markdown
> Note: This metric requires probability predictions, not just class labels.
```

**CSS:** `.ml-callout-info` — blue border, blue background, blue text.

---

## Lists

### Bullet Lists

```markdown
- **Spam detection:** You do not want important emails going to spam
- **Content recommendation:** Irrelevant content frustrates users
- **Legal document review:** False matches waste lawyer time
```

**CSS:** `.ml-list-item` — purple bullet (•), 12px gap, aligned items.

### Numbered Lists

```markdown
1. **Maximize F1-score:** Try all thresholds, pick the one with highest F1
2. **Youden's J statistic:** Maximize (TPR - FPR) on the ROC curve
3. **Cost-sensitive:** If FP costs $10 and FN costs $100, minimize total cost
4. **Business requirement:** Find threshold that achieves required recall
```

**CSS:** `.ml-numbered-item` — purple circle badge with number, 12px gap.

---

## Section Dividers

Use `---` for horizontal dividers between major sections:

```markdown
---

## Next Section Title
```

**CSS:** `.ml-divider` — gradient line from transparent → gray → transparent, 40px top/bottom margin.

---

## Full Page Template

Here is a complete template for a new article:

```markdown
`## Section Title With Icon Keyword

Brief introductory paragraph explaining what this section covers.

### Subsection

Detailed explanation with examples.

| Column A | Column B | Column C |
|---|---|---|
| Data 1 | Data 2 | Data 3 |
| Data 4 | Data 5 | Data 6 |

$$Formula = \\frac{numerator}{denominator}$$

Explanation of the formula with a worked example.

- **Use case 1:** Explanation
- **Use case 2:** Explanation

> **💡 Interview Tip:** Practical advice for interviews.

---

## Next Section

More content following the same patterns...

$$AnotherFormula = \\sum_{i=1}^{n} x_i$$

| Metric | Value | Interpretation |
|---|---|---|
| Good | 0.9+ | Excellent |
| Okay | 0.7-0.9 | Acceptable |
| Bad | <0.7 | Needs work |

> **⚠️ Common Pitfall:** Warning about a common mistake.

---

## Summary Section

| Situation | Primary Metric | Secondary Metric |
|---|---|---|
| Case A | Metric 1 | Metric 2 |
| Case B | Metric 3 | Metric 4 |

> **🎯 Interview Gold:** How to answer this in interviews.
`
```

---

## Section Icon Mapping

The ArticleView automatically assigns emoji icons to `##` headers based on keywords:

| Keyword in Header | Icon |
|---|---|
| confusion, matrix | 🔢 |
| precision, recall, f1 | 🎯 |
| metric, evaluation, score | 📊 |
| curve, roc | 📈 |
| cost, loss, error | 📉 |
| algorithm, how | ⚙️ |
| advantage, disadvantage | ⚖️ |
| example, when to | 💡 |
| regularization | 🔧 |
| split, pruning | 🌳 |
| boost, ensemble, random forest | 🌲 |
| distance, cluster | 📍 |
| pca, dimension | 📐 |
| cross-validation, tuning | 🔄 |
| feature, scaling | 🛠️ |
| summary, which | 📋 |
| threshold | 🎚️ |
| log-loss | 📝 |
| kappa, mcc | ✅ |
| (default) | 📌 |

---

## Dark Mode Support

All CSS classes include dark mode variants using Tailwind's `dark:` prefix. The content automatically adapts to both light and dark themes. No extra work needed — just use the standard classes.

---

## Adding a New Topic

1. Add a new object to the `mlTopics` array in `src/data/mlConcepts.js`
2. Set a unique `slug`, `title`, and sequential `order`
3. Write the `content` using the markdown syntax above
4. The topic automatically appears in the roadmap sidebar and is accessible at `/ml/{slug}`

---

## Fenced Code Blocks (Python & Other Languages)

Code blocks render as dark-themed, syntax-highlighted panels with a macOS-style header (traffic-light dots + language badge).

### Syntax

Use triple backticks with an optional language tag:

````
```python
from sklearn.tree import DecisionTreeClassifier

clf = DecisionTreeClassifier(criterion='gini', max_depth=5)
clf.fit(X_train, y_train)
```
````

### How It Renders

| Element | Styling |
|---|---|
| Container | Dark slate background (`#1e293b` light / `#0f172a` dark), rounded-xl, border |
| Header | Traffic-light dots (red/amber/green) + language badge (e.g., "PYTHON") |
| Code text | Monospace font, `tab-size: 4`, light gray text on dark background |

### Python Syntax Highlighting

When `python` or `py` is specified as the language tag, the following tokens are automatically highlighted:

| Token Type | Color | Examples |
|---|---|---|
| Keywords | Purple (bold) | `def`, `class`, `import`, `from`, `if`, `return`, `True`, `False`, `None` |
| Built-in functions | Yellow | `print`, `len`, `range`, `isinstance`, `sorted` (only when followed by `(`) |
| Function names | Blue | `DecisionTreeClassifier`, `train_test_split`, `plot_tree` |
| Strings | Emerald green | `"hello"`, `'world'`, `f"formatted"` |
| Comments | Gray italic | `# This is a comment` |
| Numbers | Amber | `42`, `3.14`, `0.8` |
| Decorators | Pink | `@staticmethod` |

### Important Notes for Template Literals

Because content strings in `.jsx` files use backtick template literals, you **must escape** the fenced code block markers:

```javascript
const MyTopic = {
  slug: 'my-topic',
  title: 'My Topic',
  order: 1,
  content: `
## Section Title

Some text here.

\\\`\\\`\\\`python
import numpy as np
x = np.array([1, 2, 3])
\\\`\\\`\\\`

More text after the code block.
  `,
}
```

Each backtick in the fence must be escaped as `\``. So ` ``` ` becomes `\`\`\``.

### Adding a New Language

To add syntax highlighting for a new language (e.g., JavaScript), add a new highlighter function in `src/components/ml/ArticleView.jsx` following the same pattern as `highlightPython()`, then update `renderCodeBlock()` to call it when the language tag matches.
