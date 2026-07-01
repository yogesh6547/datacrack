# DataCrack - Git Workflow Guide

## Quick Start

```bash
git add .
git commit -m "Your message"
git push origin main
```

Wait 2-3 minutes for deployment.

---

## Standard Workflow

1. Edit files in `DataCrack/src/`
2. `git add .`
3. `git commit -m "Descriptive message"`
4. `git push origin main`
5. GitHub Actions auto-deploys

---

## Common Commands

| Command | Purpose |
|---------|---------|
| `git status` | See changed files |
| `git add .` | Stage all changes |
| `git commit -m "msg"` | Save changes |
| `git push origin main` | Push to GitHub |
| `git log --oneline -5` | View recent commits |

---

## Examples

```bash
# Update content
git add DataCrack/src/pages/Concepts/SQLTopics.jsx
git commit -m "Update SQL Topics"
git push origin main

# Add new page
git add DataCrack/src/pages/Concepts/NewTopic.jsx
git commit -m "Add Linear Regression page"
git push origin main

# Fix styling
git add DataCrack/src/index.css
git commit -m "Fix mobile table overflow"
git push origin main
```

---

## How It Works

```
You push to main → GitHub Actions builds → Deploys to gh-pages → Site updates
```

**Only work with `main` branch. GitHub handles deployment.**

---

## Monitor Deployment

- Actions: https://github.com/yogesh6547/datacrack/actions
- Site: https://yogesh6547.github.io/datacrack/

---

## If Something Goes Wrong

### Undo last commit (keep changes)
```bash
git reset --soft HEAD~1
```

### Undo last commit (discard changes)
```bash
git reset --hard HEAD~1
```

### View history
```bash
git log --oneline -10
```

---

## Best Practices

1. Commit often - small, frequent commits
2. Write clear messages
3. Check `git status` first
4. Test locally: `cd DataCrack && npm run dev`
5. Never edit gh-pages branch

---

## Local Development

```bash
cd DataCrack
npm run dev  # Opens at http://localhost:5173
```

---

**You only work with `main`. GitHub Actions handles the rest!** 🚀