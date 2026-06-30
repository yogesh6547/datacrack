/**
 * SQL Topics — Comprehensive SQL concepts, nuances, and interview questions.
 *
 * Covers: JOINs, subqueries, window functions, CTEs, indexes, transactions,
 * normalization, ACID properties, query optimization, and common pitfalls.
 */
const SQLTopics = {
  slug: 'sql-topics',
  title: 'SQL Topics',
  order: 3,
  content: `
## SQL Fundamentals and Data Model

SQL (Structured Query Language) is the standard language for relational database management systems. Understanding SQL deeply is critical for data analysts, data scientists, and backend engineers.

### The Relational Model

A relational database organizes data into **tables (relations)** consisting of **rows (tuples)** and **columns (attributes)**. Each table has a **primary key** that uniquely identifies each row, and **foreign keys** that establish relationships between tables.

> **💡 Interview Tip:** Always clarify whether a question asks about SQL in general or a specific dialect (PostgreSQL, MySQL, SQL Server, BigQuery). Syntax and features vary significantly.

---

## JOINs — The Most Tested SQL Topic

JOINs combine rows from two or more tables based on a related column.

### INNER JOIN
Returns only matching rows from both tables.

\`\`\`sql
SELECT 
    e.employee_id,
    e.name,
    d.department_name
FROM employees e
INNER JOIN departments d 
    ON e.department_id = d.department_id;
\`\`\`

**Use case:** You only want employees who have a valid department.

### LEFT JOIN (LEFT OUTER JOIN)
Returns all rows from the left table, plus matched rows from the right table. Unmatched rows from the right table return NULL.

\`\`\`sql
SELECT 
    e.employee_id,
    e.name,
    d.department_name
FROM employees e
LEFT JOIN departments d 
    ON e.department_id = d.department_id;
\`\`\`

**Use case:** List all employees, even those without a department (NULL department_name).

### RIGHT JOIN (RIGHT OUTER JOIN)
Opposite of LEFT JOIN — returns all rows from the right table.

\`\`\`sql
SELECT 
    e.employee_id,
    e.name,
    d.department_name
FROM employees e
RIGHT JOIN departments d 
    ON e.department_id = d.department_id;
\`\`\`

**Use case:** List all departments, even those with no employees.

### FULL OUTER JOIN
Returns all rows when there's a match in either table. Combines LEFT and RIGHT JOIN results.

\`\`\`sql
SELECT 
    e.employee_id,
    e.name,
    d.department_name
FROM employees e
FULL OUTER JOIN departments d 
    ON e.department_id = d.department_id;
\`\`\`

**Use case:** Find all unmatched records in both tables (orphaned records).

### CROSS JOIN
Returns the Cartesian product — every combination of rows from both tables.

\`\`\`sql
SELECT 
    e.name,
    s.size
FROM employees e
CROSS JOIN sizes s;
\`\`\`

**Use case:** Generate all possible combinations (e.g., product sizes × colors).

### SELF JOIN
A table joined to itself. Useful for hierarchical data.

\`\`\`sql
SELECT 
    e1.name AS employee,
    e2.name AS manager
FROM employees e1
LEFT JOIN employees e2 
    ON e1.manager_id = e2.employee_id;
\`\`\`

**Use case:** Organizational hierarchies, parent-child relationships.

> **⚠️ Common Pitfall:** Forgetting that INNER JOIN filters out non-matching rows. If you see NULL values unexpectedly, check if you should use LEFT JOIN instead.

---

## Subqueries and Nested Queries

A subquery is a query nested inside another query. It can appear in SELECT, FROM, WHERE, or HAVING clauses.

### Subquery in WHERE Clause

\`\`\`sql
-- Find employees with salary above the average
SELECT 
    employee_id,
    name,
    salary
FROM employees
WHERE salary > (
    SELECT AVG(salary) 
    FROM employees
);
\`\`\`

### Correlated Subquery

A correlated subquery references columns from the outer query. It executes once per row in the outer query.

\`\`\`sql
-- Find employees whose salary is above their department average
SELECT 
    e1.employee_id,
    e1.name,
    e1.salary,
    e1.department_id
FROM employees e1
WHERE e1.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.department_id = e1.department_id  -- References outer query
);
\`\`\`

**Performance note:** Correlated subqueries can be slow on large datasets. Consider using JOINs or window functions instead.

### Subquery in FROM Clause (Derived Tables)

\`\`\`sql
SELECT 
    dept_avg.department_name,
    dept_avg.avg_salary
FROM (
    SELECT 
        d.department_name,
        AVG(e.salary) AS avg_salary
    FROM employees e
    JOIN departments d ON e.department_id = d.department_id
    GROUP BY d.department_name
) dept_avg
WHERE dept_avg.avg_salary > 70000;
\`\`\`

### EXISTS vs. IN

\`\`\`sql
-- Using EXISTS (preferred for large datasets)
SELECT 
    e.name
FROM employees e
WHERE EXISTS (
    SELECT 1 
    FROM projects p 
    WHERE p.employee_id = e.employee_id
);

-- Using IN
SELECT 
    name
FROM employees
WHERE employee_id IN (
    SELECT employee_id 
    FROM projects
);
\`\`\`

> **⚖️ EXISTS vs. IN:** EXISTS stops processing after finding the first match (short-circuits), making it generally faster for large datasets. IN evaluates all values first. However, modern query optimizers often treat them similarly.

---

## Window Functions — Advanced Analytics

Window functions perform calculations across a set of table rows related to the current row, without collapsing them into a single output row (unlike GROUP BY).

### ROW_NUMBER(), RANK(), and DENSE_RANK()

\`\`\`sql
SELECT 
    employee_id,
    name,
    department_id,
    salary,
    -- Assigns unique sequential numbers (no ties)
    ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS row_num,
    
    -- Assigns same rank for ties, skips next rank
    RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rank,
    
    -- Assigns same rank for ties, does NOT skip next rank
    DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS dense_rank
FROM employees;
\`\`\`

**Key difference:**
- ROW_NUMBER: 1, 2, 3, 4 (no ties)
- RANK: 1, 2, 2, 4 (gaps after ties)
- DENSE_RANK: 1, 2, 2, 3 (no gaps)

### LAG() and LEAD() — Accessing Adjacent Rows

\`\`\`sql
SELECT 
    employee_id,
    name,
    salary,
    hire_date,
    -- Previous employee's salary in the same department
    LAG(salary, 1) OVER (PARTITION BY department_id ORDER BY hire_date) AS prev_salary,
    
    -- Next employee's salary
    LEAD(salary, 1) OVER (PARTITION BY department_id ORDER BY hire_date) AS next_salary,
    
    -- Calculate salary difference from previous
    salary - LAG(salary, 1) OVER (PARTITION BY department_id ORDER BY hire_date) AS salary_diff
FROM employees;
\`\`\`

**Use case:** Calculate month-over-month growth, find gaps in sequences.

### Running Totals with SUM() OVER()

\`\`\`sql
SELECT 
    order_id,
    order_date,
    amount,
    -- Running total of all orders up to current row
    SUM(amount) OVER (ORDER BY order_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total,
    
    -- Running total per customer
    SUM(amount) OVER (PARTITION BY customer_id ORDER BY order_date) AS customer_running_total
FROM orders;
\`\`\`

### NTILE() — Dividing into Buckets

\`\`\`sql
-- Divide employees into 4 quartiles based on salary
SELECT 
    employee_id,
    name,
    salary,
    NTILE(4) OVER (ORDER BY salary DESC) AS salary_quartile
FROM employees;
\`\`\`

> **🎯 Interview Gold:** Window functions are tested heavily because they demonstrate advanced SQL thinking. Always mention: "Window functions let you perform calculations across related rows without collapsing the result set like GROUP BY does."

---

## Common Table Expressions (CTEs)

CTEs are temporary result sets that improve query readability and enable recursion.

### Basic CTE

\`\`\`sql
WITH department_stats AS (
    SELECT 
        department_id,
        COUNT(*) AS emp_count,
        AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department_id
)
SELECT 
    d.department_name,
    ds.emp_count,
    ds.avg_salary
FROM departments d
JOIN department_stats ds ON d.department_id = ds.department_id
WHERE ds.avg_salary > 80000;
\`\`\`

### Recursive CTE (Hierarchical Data)

\`\`\`sql
-- Traverse an employee hierarchy
WITH RECURSIVE employee_hierarchy AS (
    -- Anchor: Top-level managers (no manager above them)
    SELECT 
        employee_id,
        name,
        manager_id,
        1 AS level,
        CAST(name AS VARCHAR(1000)) AS path
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    -- Recursive: Employees who report to the previous level
    SELECT 
        e.employee_id,
        e.name,
        e.manager_id,
        eh.level + 1,
        CAST(eh.path || ' > ' || e.name AS VARCHAR(1000))
    FROM employees e
    INNER JOIN employee_hierarchy eh 
        ON e.manager_id = eh.employee_id
)
SELECT * FROM employee_hierarchy
ORDER BY level, name;
\`\`\`

**Use case:** Organizational charts, category hierarchies, bill of materials.

> **💡 Interview Tip:** CTEs improve readability and can be referenced multiple times in a query. They're part of the SQL:1999 standard and supported in PostgreSQL, SQL Server, MySQL 8.0+, and BigQuery.

---

## Indexes — Query Performance Optimization

Indexes are data structures (typically B-trees) that speed up data retrieval at the cost of slower writes and additional storage.

### How Indexes Work

Without an index on \`department_id\`, a query must perform a **full table scan** (O(n)):
\`\`\`sql
SELECT * FROM employees WHERE department_id = 5;
\`\`\`

With an index, the database performs a **B-tree lookup** (O(log n)):
\`\`\`sql
CREATE INDEX idx_emp_dept ON employees(department_id);
\`\`\`

### Types of Indexes

| Index Type | Description | Use Case |
|------------|-------------|----------|
| **B-Tree** | Balanced tree, default in most DBs | Equality and range queries |
| **Hash** | Hash-based, O(1) lookup | Equality only (no range) |
| **Composite** | Index on multiple columns | Queries filtering on multiple columns |
| **Covering** | Index includes all query columns | Avoids table lookup entirely |
| **Full-Text** | For text search | Searching within text columns |

### Composite Index and Column Order

\`\`\`sql
-- Composite index: (last_name, first_name)
-- Efficient for: WHERE last_name = 'Smith' AND first_name = 'John'
-- Efficient for: WHERE last_name = 'Smith'
-- NOT efficient for: WHERE first_name = 'John' (leftmost prefix rule)
CREATE INDEX idx_name ON employees(last_name, first_name);
\`\`\`

> **⚠️ Common Pitfall:** Creating too many indexes slows down INSERT/UPDATE/DELETE operations. Each index must be updated on every write. Index only columns frequently used in WHERE, JOIN, or ORDER BY clauses.

---

## ACID Properties — Transaction Fundamentals

ACID ensures reliable processing of database transactions.

| Property | Definition | Example |
|----------|-------------|---------|
| **Atomicity** | Transaction completes entirely or not at all | If a money transfer fails halfway, the entire transaction rolls back |
| **Consistency** | Database remains in a valid state before and after | A foreign key constraint must hold after every transaction |
| **Isolation** | Concurrent transactions don't interfere | Two users can't book the same seat simultaneously |
| **Durability** | Committed data survives system failures | After a successful payment, the record persists even if the server crashes |

### Transaction Example

\`\`\`sql
BEGIN TRANSACTION;

-- Deduct from account A
UPDATE accounts 
SET balance = balance - 1000 
WHERE account_id = 'A';

-- Add to account B
UPDATE accounts 
SET balance = balance + 1000 
WHERE account_id = 'B';

-- If both succeed, commit. If either fails, rollback.
COMMIT;
\`\`\`

### Isolation Levels

| Level | Dirty Reads | Non-Repeatable Reads | Phantom Reads | Performance |
|-------|-------------|----------------------|---------------|-------------|
| **Read Uncommitted** | ✅ Possible | ✅ Possible | ✅ Possible | Fastest |
| **Read Committed** | ❌ Prevented | ✅ Possible | ✅ Possible | Fast |
| **Repeatable Read** | ❌ Prevented | ❌ Prevented | ✅ Possible | Moderate |
| **Serializable** | ❌ Prevented | ❌ Prevented | ❌ Prevented | Slowest |

> **🎯 Interview Gold:** "ACID ensures database reliability. Atomicity means all-or-nothing. Consistency maintains data integrity rules. Isolation prevents concurrent transaction conflicts. Durability guarantees committed data survives crashes."

---

## Normalization — Database Design

Normalization organizes data to reduce redundancy and improve integrity.

### Normal Forms

**1NF (First Normal Form):**
- Atomic values only (no arrays or nested structures)
- Each column contains a single value
- Each row is unique

\`\`\`sql
-- ❌ Bad: Multiple phone numbers in one column
-- employee_id | name | phone_numbers
-- 1           | John | "123-4567, 987-6543"

-- ✅ Good: One phone number per row
-- employee_id | name   | phone_number
-- 1           | John   | 123-4567
-- 1           | John   | 987-6543
\`\`\`

**2NF (Second Normal Form):**
- Must be in 1NF
- No partial dependencies (non-key columns depend on the entire primary key)

**3NF (Third Normal Form):**
- Must be in 2NF
- No transitive dependencies (non-key columns depend only on the primary key, not other non-key columns)

\`\`\`sql
-- ❌ Bad: employee_department depends on department_id, not employee_id
-- employee_id | name | department_id | department_name | department_location

-- ✅ Good: Separate tables
-- employees: employee_id, name, department_id
-- departments: department_id, department_name, department_location
\`\`\`

> **💡 Interview Tip:** In practice, 3NF is the sweet spot. Over-normalization (BCNF, 4NF, 5NF) can lead to excessive JOINs and performance issues. Denormalization is sometimes intentional for read-heavy workloads.

---

## Query Optimization Techniques

### 1. Use EXPLAIN to Analyze Queries

\`\`\`sql
EXPLAIN ANALYZE
SELECT 
    e.name,
    d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE e.salary > 80000;
\`\`\`

**Look for:**
- **Seq Scan** (full table scan) → Consider adding an index
- **Nested Loop** with high row estimates → Consider JOIN optimization
- **Hash Join** → Usually efficient for large datasets

### 2. Avoid SELECT *

\`\`\`sql
-- ❌ Bad: Fetches unnecessary columns
SELECT * FROM employees;

-- ✅ Good: Fetch only what you need
SELECT employee_id, name, salary FROM employees;
\`\`\`

### 3. Use WHERE Before JOIN

\`\`\`sql
-- ❌ Bad: Joins all rows, then filters
SELECT * FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE e.salary > 80000;

-- ✅ Good: Filter first, then join (reduces join size)
WITH high_earners AS (
    SELECT * FROM employees WHERE salary > 80000
)
SELECT * FROM high_earners e
JOIN departments d ON e.department_id = d.department_id;
\`\`\`

### 4. Avoid Functions on Indexed Columns

\`\`\`sql
-- ❌ Bad: Function prevents index usage
SELECT * FROM employees 
WHERE YEAR(hire_date) = 2023;

-- ✅ Good: Range query allows index usage
SELECT * FROM employees 
WHERE hire_date >= '2023-01-01' 
  AND hire_date < '2024-01-01';
\`\`\`

### 5. Use UNION ALL Instead of UNION (if duplicates are acceptable)

\`\`\`sql
-- ❌ UNION: Removes duplicates (requires sorting)
SELECT employee_id FROM employees_2023
UNION
SELECT employee_id FROM employees_2024;

-- ✅ UNION ALL: Keeps duplicates (faster, no sorting)
SELECT employee_id FROM employees_2023
UNION ALL
SELECT employee_id FROM employees_2024;
\`\`\`

> **⚠️ Common Pitfall:** Using DISTINCT or GROUP BY when unnecessary. These operations require sorting/hashing and slow down queries. Only use them when you truly need to eliminate duplicates.

---

## GROUP BY and HAVING

### GROUP BY Basics

\`\`\`sql
SELECT 
    department_id,
    COUNT(*) AS employee_count,
    AVG(salary) AS avg_salary,
    MIN(salary) AS min_salary,
    MAX(salary) AS max_salary
FROM employees
GROUP BY department_id;
\`\`\`

### HAVING vs. WHERE

- **WHERE** filters rows **before** grouping
- **HAVING** filters groups **after** grouping

\`\`\`sql
SELECT 
    department_id,
    COUNT(*) AS emp_count,
    AVG(salary) AS avg_salary
FROM employees
WHERE hire_date >= '2020-01-01'  -- Filters individual rows first
GROUP BY department_id
HAVING COUNT(*) > 10;  -- Filters groups after aggregation
\`\`\`

> **💡 Interview Tip:** A common interview question is "What's the difference between WHERE and HAVING?" Answer: WHERE filters rows before GROUP BY; HAVING filters groups after GROUP BY. WHERE cannot use aggregate functions; HAVING can.

---

## CASE Statements — Conditional Logic

\`\`\`sql
SELECT 
    employee_id,
    name,
    salary,
    CASE 
        WHEN salary >= 100000 THEN 'High'
        WHEN salary >= 70000 THEN 'Medium'
        ELSE 'Low'
    END AS salary_band
FROM employees;
\`\`\`

### CASE in Aggregations

\`\`\`sql
SELECT 
    department_id,
    COUNT(*) AS total_employees,
    SUM(CASE WHEN salary > 80000 THEN 1 ELSE 0 END) AS high_earners,
    SUM(CASE WHEN salary <= 80000 THEN 1 ELSE 0 END) AS other_earners
FROM employees
GROUP BY department_id;
\`\`\`

---

## Important SQL Interview Questions

### Q1: What's the difference between DELETE, TRUNCATE, and DROP?

| Operation | Removes | Logs | Can Rollback | Removes Structure |
|-----------|---------|------|--------------|-------------------|
| **DELETE** | Rows (can filter with WHERE) | Yes (row-by-row) | Yes | No |
| **TRUNCATE** | All rows | Minimal (deallocates pages) | No (in some DBs) | No |
| **DROP** | Entire table | No | No | Yes |

### Q2: What are the different types of keys?

- **Primary Key:** Uniquely identifies each row, cannot be NULL, one per table
- **Foreign Key:** References a primary key in another table, can be NULL
- **Composite Key:** Primary key consisting of multiple columns
- **Candidate Key:** Any column(s) that could serve as a primary key
- **Surrogate Key:** Artificial key (e.g., auto-increment ID) with no business meaning
- **Natural Key:** Business-meaningful key (e.g., SSN, email)

### Q3: What's the difference between UNION and UNION ALL?

- **UNION:** Combines results and removes duplicates (uses DISTINCT)
- **UNION ALL:** Combines results and keeps duplicates (faster)

### Q4: What is a correlated subquery?

A subquery that references columns from the outer query. It executes once per row in the outer query, making it potentially slow on large datasets.

### Q5: What are window functions and when would you use them?

Window functions perform calculations across a set of rows related to the current row without collapsing them. Use cases: running totals, rankings, moving averages, accessing previous/next rows.

### Q6: What is the difference between RANK() and DENSE_RANK()?

- **RANK():** Assigns same rank for ties, skips next rank (1, 2, 2, 4)
- **DENSE_RANK():** Assigns same rank for ties, does NOT skip (1, 2, 2, 3)

### Q7: What is a CTE and how is it different from a subquery?

- **CTE (WITH clause):** Temporary named result set, improves readability, can be referenced multiple times, supports recursion
- **Subquery:** Inline, can only be used once, harder to read for complex logic

### Q8: What is an index and why is it important?

An index is a data structure (usually B-tree) that speeds up data retrieval. It allows the database to find rows without scanning the entire table (O(log n) vs O(n)). Trade-off: faster reads, slower writes.

### Q9: What are ACID properties?

- **Atomicity:** All-or-nothing transactions
- **Consistency:** Database remains in a valid state
- **Isolation:** Concurrent transactions don't interfere
- **Durability:** Committed data survives failures

### Q10: What is normalization? Why is it important?

Normalization organizes data to reduce redundancy and improve integrity. It prevents update anomalies (changing data in one place but not another). 3NF is the most common practical form.

> **🎯 Interview Gold Standard:** "SQL is about understanding data relationships, optimizing queries for performance, and ensuring data integrity. I always start by understanding the schema, then write queries that leverage indexes, avoid unnecessary operations, and use appropriate JOINs. For complex analytics, I prefer window functions over subqueries for better performance and readability."

---

## Practical SQL Patterns

### Finding Duplicates

\`\`\`sql
SELECT 
    email,
    COUNT(*) AS duplicate_count
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
\`\`\`

### Finding the Second Highest Salary

\`\`\`sql
-- Method 1: Using LIMIT/OFFSET
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;

-- Method 2: Using subquery
SELECT MAX(salary)
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);

-- Method 3: Using window function (most flexible)
SELECT DISTINCT salary
FROM (
    SELECT 
        salary,
        DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
    FROM employees
) ranked
WHERE rnk = 2;
\`\`\`

### Calculating Percentage of Total

\`\`\`sql
SELECT 
    department_id,
    COUNT(*) AS emp_count,
    ROUND(
        100.0 * COUNT(*) / SUM(COUNT(*)) OVER(), 
        2
    ) AS percentage_of_total
FROM employees
GROUP BY department_id;
\`\`\`

### Filling Gaps in Sequences

\`\`\`sql
-- Find missing dates in a sequence
WITH date_series AS (
    SELECT generate_series(
        '2024-01-01'::DATE, 
        '2024-01-31'::DATE, 
        '1 day'::INTERVAL
    ) AS date
)
SELECT 
    ds.date
FROM date_series ds
LEFT JOIN orders o ON ds.date = DATE(o.order_date)
WHERE o.order_id IS NULL;
\`\`\`

---

## SQL Dialects — Key Differences

| Feature | PostgreSQL | MySQL | SQL Server | BigQuery |
|---------|-----------|-------|------------|----------|
| **String concatenation** | \`\`\` || \`\`\` | CONCAT() | + | CONCAT() |
| **Date truncation** | DATE_TRUNC() | DATE_FORMAT() | DATETRUNC() | DATE_TRUNC() |
| **LIMIT** | LIMIT | LIMIT | TOP | LIMIT |
| **Full outer join** | ✅ | ❌ (workaround) | ✅ | ✅ |
| **Recursive CTE** | ✅ | ✅ (8.0+) | ✅ | ✅ |
| **Arrays** | ✅ Native | Limited | ❌ | ✅ ARRAY() |

> **💡 Interview Tip:** If asked about a specific SQL dialect you're not familiar with, be honest but demonstrate you understand the core concepts. Say: "I'm most comfortable with PostgreSQL, but SQL fundamentals are universal. I can quickly adapt to any dialect."

---

## Summary: SQL Best Practices

1. **Always use explicit JOINs** instead of implicit joins in WHERE clause
2. **Use CTEs** for complex queries — improves readability
3. **Prefer window functions** over correlated subqueries for analytics
4. **Index strategically** — on frequently filtered/joined columns
5. **Avoid SELECT *** — fetch only needed columns
6. **Use parameterized queries** to prevent SQL injection
7. **Test with EXPLAIN** to verify query performance
8. **Consider data volume** — techniques that work on 1K rows may fail on 100M rows
9. **Use appropriate data types** — INT for integers, VARCHAR(n) for strings, TIMESTAMP for dates
10. **Document complex queries** — future you will thank present you

> **🎯 Final Interview Answer:** "SQL is foundational for data work. I focus on writing clean, efficient queries using JOINs, window functions, and CTEs. I always consider performance by using indexes, avoiding unnecessary operations, and validating with EXPLAIN. I'm comfortable with complex analytics, data transformations, and database design principles including normalization and ACID compliance."
`,
}

export default SQLTopics