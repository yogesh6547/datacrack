export const sqlQuestions = [
  {
    id: 1,
    title: 'Employees Earning More Than Their Managers',
    difficulty: 'Easy',
    description: `Write a query to find employees who earn more than their managers.

**Table: Employee**
| id | name   | salary | managerId |
|----|--------|--------|-----------|
| 1  | Joe    | 70000  | 3         |
| 2  | Henry  | 80000  | 4         |
| 3  | Sam    | 60000  | NULL      |
| 4  | Max    | 90000  | NULL      |`,
    schema: {
      name: 'Employee',
      columns: [
        { name: 'id', type: 'INT', key: 'PK' },
        { name: 'name', type: 'VARCHAR' },
        { name: 'salary', type: 'INT' },
        { name: 'managerId', type: 'INT', key: 'FK' },
      ],
    },
    sampleData: `INSERT INTO Employee VALUES (1, 'Joe', 70000, 3);
INSERT INTO Employee VALUES (2, 'Henry', 80000, 4);
INSERT INTO Employee VALUES (3, 'Sam', 60000, NULL);
INSERT INTO Employee VALUES (4, 'Max', 90000, NULL);`,
    starterCode: `SELECT e.name AS Employee
FROM Employee e
JOIN Employee m ON e.managerId = m.id
WHERE e.salary > m.salary;`,
    expectedOutput: [
      { Employee: 'Joe' },
    ],
  },
  {
    id: 2,
    title: 'Duplicate Emails',
    difficulty: 'Easy',
    description: `Write a query to find all duplicate email addresses in a table.

**Table: Person**
| id | email          |
|----|----------------|
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |`,
    schema: {
      name: 'Person',
      columns: [
        { name: 'id', type: 'INT', key: 'PK' },
        { name: 'email', type: 'VARCHAR' },
      ],
    },
    sampleData: `INSERT INTO Person VALUES (1, 'john@example.com');
INSERT INTO Person VALUES (2, 'bob@example.com');
INSERT INTO Person VALUES (3, 'john@example.com');`,
    starterCode: `SELECT email
FROM Person
GROUP BY email
HAVING COUNT(*) > 1;`,
    expectedOutput: [
      { email: 'john@example.com' },
    ],
  },
  {
    id: 3,
    title: 'Delete Duplicate Emails',
    difficulty: 'Easy',
    description: `Write a query to delete all duplicate email entries, keeping only the one with the smallest id.`,
    schema: {
      name: 'Person',
      columns: [
        { name: 'id', type: 'INT', key: 'PK' },
        { name: 'email', type: 'VARCHAR' },
      ],
    },
    sampleData: `INSERT INTO Person VALUES (1, 'john@example.com');
INSERT INTO Person VALUES (2, 'bob@example.com');
INSERT INTO Person VALUES (3, 'john@example.com');`,
    starterCode: `DELETE FROM Person
WHERE id NOT IN (
    SELECT MIN(id)
    FROM Person
    GROUP BY email
);`,
    expectedOutput: [
      { id: 1, email: 'john@example.com' },
      { id: 2, email: 'bob@example.com' },
    ],
  },
  {
    id: 4,
    title: 'Second Highest Salary',
    difficulty: 'Medium',
    description: `Write a query to find the second highest salary from the Employee table. If there is no second highest salary, return NULL.`,
    schema: {
      name: 'Employee',
      columns: [
        { name: 'id', type: 'INT', key: 'PK' },
        { name: 'salary', type: 'INT' },
      ],
    },
    sampleData: `INSERT INTO Employee VALUES (1, 100);
INSERT INTO Employee VALUES (2, 200);
INSERT INTO Employee VALUES (3, 300);`,
    starterCode: `SELECT MAX(salary) AS SecondHighestSalary
FROM Employee
WHERE salary < (SELECT MAX(salary) FROM Employee);`,
    expectedOutput: [
      { SecondHighestSalary: 200 },
    ],
  },
  {
    id: 5,
    title: 'Customers Who Never Order',
    difficulty: 'Easy',
    description: `Write a query to find all customers who never placed an order.

**Table: Customers**
| id | name  |
|----|-------|
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |

**Table: Orders**
| id | customerId |
|----|------------|
| 1  | 3          |
| 2  | 4          |`,
    schema: {
      name: 'Customers + Orders',
      columns: [
        { name: 'Customers.id', type: 'INT', key: 'PK' },
        { name: 'Customers.name', type: 'VARCHAR' },
        { name: 'Orders.id', type: 'INT', key: 'PK' },
        { name: 'Orders.customerId', type: 'INT', key: 'FK' },
      ],
    },
    sampleData: `INSERT INTO Customers VALUES (1, 'Joe');
INSERT INTO Customers VALUES (2, 'Henry');
INSERT INTO Customers VALUES (3, 'Sam');
INSERT INTO Customers VALUES (4, 'Max');
INSERT INTO Orders VALUES (1, 3);
INSERT INTO Orders VALUES (2, 4);`,
    starterCode: `SELECT c.name AS Customers
FROM Customers c
LEFT JOIN Orders o ON c.id = o.customerId
WHERE o.id IS NULL;`,
    expectedOutput: [
      { Customers: 'Joe' },
      { Customers: 'Henry' },
    ],
  },
  {
    id: 6,
    title: 'Department Top Three Salaries',
    difficulty: 'Hard',
    description: `Find the employees who are in the top three highest salaries in each department.`,
    schema: {
      name: 'Employee + Department',
      columns: [
        { name: 'Employee.id', type: 'INT' },
        { name: 'Employee.name', type: 'VARCHAR' },
        { name: 'Employee.salary', type: 'INT' },
        { name: 'Employee.departmentId', type: 'INT' },
        { name: 'Department.id', type: 'INT' },
        { name: 'Department.name', type: 'VARCHAR' },
      ],
    },
    sampleData: `INSERT INTO Department VALUES (1, 'IT');
INSERT INTO Department VALUES (2, 'Sales');
INSERT INTO Employee VALUES (1, 'Joe', 85000, 1);
INSERT INTO Employee VALUES (2, 'Henry', 80000, 2);
INSERT INTO Employee VALUES (3, 'Sam', 60000, 2);
INSERT INTO Employee VALUES (4, 'Max', 90000, 1);
INSERT INTO Employee VALUES (5, 'Janet', 69000, 1);
INSERT INTO Employee VALUES (6, 'Randy', 85000, 1);`,
    starterCode: `SELECT d.name AS Department, e.name AS Employee, e.salary
FROM Employee e
JOIN Department d ON e.departmentId = d.id
WHERE (
    SELECT COUNT(DISTINCT e2.salary)
    FROM Employee e2
    WHERE e2.departmentId = e.departmentId AND e2.salary > e.salary
) < 3
ORDER BY d.name, e.salary DESC;`,
    expectedOutput: [
      { Department: 'IT', Employee: 'Max', salary: 90000 },
      { Department: 'IT', Employee: 'Joe', salary: 85000 },
      { Department: 'IT', Employee: 'Randy', salary: 85000 },
      { Department: 'Sales', Employee: 'Henry', salary: 80000 },
    ],
  },
  {
    id: 7,
    title: 'Consecutive Numbers',
    difficulty: 'Medium',
    description: `Find all numbers that appear at least three times consecutively.`,
    schema: {
      name: 'Logs',
      columns: [
        { name: 'id', type: 'INT', key: 'PK' },
        { name: 'num', type: 'VARCHAR' },
      ],
    },
    sampleData: `INSERT INTO Logs VALUES (1, '1');
INSERT INTO Logs VALUES (2, '1');
INSERT INTO Logs VALUES (3, '1');
INSERT INTO Logs VALUES (4, '2');
INSERT INTO Logs VALUES (5, '1');
INSERT INTO Logs VALUES (6, '2');
INSERT INTO Logs VALUES (7, '2');`,
    starterCode: `SELECT DISTINCT l1.num AS ConsecutiveNums
FROM Logs l1
JOIN Logs l2 ON l1.id = l2.id - 1
JOIN Logs l3 ON l1.id = l3.id - 2
WHERE l1.num = l2.num AND l2.num = l3.num;`,
    expectedOutput: [
      { ConsecutiveNums: '1' },
    ],
  },
  {
    id: 8,
    title: 'Employees with Missing Information',
    difficulty: 'Easy',
    description: `Report the names of employees who are missing information (either missing from Employees or Salaries table).`,
    schema: {
      name: 'Employees + Salaries',
      columns: [
        { name: 'Employees.employee_id', type: 'INT' },
        { name: 'Employees.name', type: 'VARCHAR' },
        { name: 'Salaries.employee_id', type: 'INT' },
        { name: 'Salaries.salary', type: 'INT' },
      ],
    },
    sampleData: `INSERT INTO Employees VALUES (2, 'Crew');
INSERT INTO Employees VALUES (4, 'Haven');
INSERT INTO Employees VALUES (5, 'Kevin');
INSERT INTO Salaries VALUES (5, 80000);
INSERT INTO Salaries VALUES (2, 76000);
INSERT INTO Salaries VALUES (4, 65000);`,
    starterCode: `SELECT e.employee_id, e.name
FROM Employees e
LEFT JOIN Salaries s ON e.employee_id = s.employee_id
WHERE s.employee_id IS NULL
UNION
SELECT s.employee_id, e.name
FROM Salaries s
LEFT JOIN Employees e ON s.employee_id = e.employee_id
WHERE e.employee_id IS NULL;`,
    expectedOutput: [
      { employee_id: 2, name: 'Crew' },
      { employee_id: 4, name: 'Haven' },
      { employee_id: 5, name: 'Kevin' },
    ],
  },
  {
    id: 9,
    title: 'Game Play Analysis',
    difficulty: 'Medium',
    description: `Find the install date of the game and the number of players that installed the game on that day (Day 1 retention).`,
    schema: {
      name: 'Activity',
      columns: [
        { name: 'player_id', type: 'INT' },
        { name: 'device_id', type: 'INT' },
        { name: 'event_date', type: 'DATE' },
        { name: 'games_played', type: 'INT' },
      ],
    },
    sampleData: `INSERT INTO Activity VALUES (1, 2, '2016-03-01', 5);
INSERT INTO Activity VALUES (2, 3, '2016-05-01', 6);
INSERT INTO Activity VALUES (1, 2, '2016-03-02', 6);
INSERT INTO Activity VALUES (3, 1, '2016-03-01', 3);
INSERT INTO Activity VALUES (3, 4, '2016-07-01', 1);`,
    starterCode: `SELECT 
    a.event_date AS install_dt,
    COUNT(DISTINCT a.player_id) AS installs,
    ROUND(COUNT(DISTINCT ret.player_id) / COUNT(DISTINCT a.player_id), 2) AS day1_retention
FROM Activity a
LEFT JOIN Activity ret 
    ON a.player_id = ret.player_id 
    AND DATEDIFF(ret.event_date, a.event_date) = 1
WHERE a.event_date = (
    SELECT MIN(event_date) FROM Activity
)
GROUP BY a.event_date;`,
    expectedOutput: [
      { install_dt: '2016-03-01', installs: 2, day1_retention: 0.50 },
    ],
  },
  {
    id: 10,
    title: 'Triangle Classification',
    difficulty: 'Easy',
    description: `Determine if the three sides form a triangle and classify it as Equilateral, Isosceles, or Scalene.`,
    schema: {
      name: 'Triangle',
      columns: [
        { name: 'x', type: 'INT' },
        { name: 'y', type: 'INT' },
        { name: 'z', type: 'INT' },
      ],
    },
    sampleData: `INSERT INTO Triangle VALUES (13, 15, 30);
INSERT INTO Triangle VALUES (10, 20, 15);`,
    starterCode: `SELECT 
    CASE 
        WHEN x + y <= z OR x + z <= y OR y + z <= x THEN 'Not A Triangle'
        WHEN x = y AND y = z THEN 'Equilateral'
        WHEN x = y OR y = z OR x = z THEN 'Isosceles'
        ELSE 'Scalene'
    END AS triangle_type
FROM Triangle;`,
    expectedOutput: [
      { triangle_type: 'Not A Triangle' },
      { triangle_type: 'Isosceles' },
    ],
  },
  {
    id: 11,
    title: 'Department Highest Salary',
    difficulty: 'Medium',
    description: `Find the employees who have the highest salary in each department.`,
    schema: {
      name: 'Employee + Department',
      columns: [
        { name: 'Employee.id', type: 'INT' },
        { name: 'Employee.name', type: 'VARCHAR' },
        { name: 'Employee.salary', type: 'INT' },
        { name: 'Employee.departmentId', type: 'INT' },
        { name: 'Department.id', type: 'INT' },
        { name: 'Department.name', type: 'VARCHAR' },
      ],
    },
    sampleData: `INSERT INTO Department VALUES (1, 'IT');
INSERT INTO Department VALUES (2, 'Sales');
INSERT INTO Employee VALUES (1, 'Joe', 70000, 1);
INSERT INTO Employee VALUES (2, 'Jim', 90000, 2);
INSERT INTO Employee VALUES (3, 'Henry', 80000, 2);
INSERT INTO Employee VALUES (4, 'Sam', 60000, 1);`,
    starterCode: `SELECT d.name AS Department, e.name AS Employee, e.salary
FROM Employee e
JOIN Department d ON e.departmentId = d.id
WHERE e.salary = (
    SELECT MAX(salary)
    FROM Employee
    WHERE departmentId = d.id
);`,
    expectedOutput: [
      { Department: 'IT', Employee: 'Joe', salary: 70000 },
      { Department: 'Sales', Employee: 'Jim', salary: 90000 },
    ],
  },
  {
    id: 12,
    title: 'Rainfall Year Trend',
    difficulty: 'Medium',
    description: `Find the total rainfall for each year and classify it as Wet or Dry year.`,
    schema: {
      name: 'Weather',
      columns: [
        { name: 'id', type: 'INT' },
        { name: 'recordDate', type: 'DATE' },
        { name: 'rainfall', type: 'INT' },
      ],
    },
    sampleData: `INSERT INTO Weather VALUES (1, '2020-01-01', 10);
INSERT INTO Weather VALUES (2, '2020-01-02', 20);
INSERT INTO Weather VALUES (3, '2020-01-03', 30);
INSERT INTO Weather VALUES (4, '2021-01-01', 5);
INSERT INTO Weather VALUES (5, '2021-01-02', 10);`,
    starterCode: `SELECT 
    YEAR(recordDate) AS year,
    SUM(rainfall) AS total_rainfall,
    CASE 
        WHEN SUM(rainfall) > 50 THEN 'Wet'
        ELSE 'Dry'
    END AS year_type
FROM Weather
GROUP BY YEAR(recordDate)
ORDER BY year;`,
    expectedOutput: [
      { year: 2020, total_rainfall: 60, year_type: 'Wet' },
      { year: 2021, total_rainfall: 15, year_type: 'Dry' },
    ],
  },
  {
    id: 13,
    title: 'Running Total of Sales',
    difficulty: 'Medium',
    description: `Calculate a running total of sales ordered by date.`,
    schema: {
      name: 'Sales',
      columns: [
        { name: 'id', type: 'INT' },
        { name: 'sale_date', type: 'DATE' },
        { name: 'amount', type: 'INT' },
      ],
    },
    sampleData: `INSERT INTO Sales VALUES (1, '2024-01-01', 100);
INSERT INTO Sales VALUES (2, '2024-01-02', 200);
INSERT INTO Sales VALUES (3, '2024-01-03', 150);`,
    starterCode: `SELECT 
    id,
    sale_date,
    amount,
    SUM(amount) OVER (ORDER BY sale_date) AS running_total
FROM Sales
ORDER BY sale_date;`,
    expectedOutput: [
      { id: 1, amount: 100, running_total: 100 },
      { id: 2, amount: 200, running_total: 300 },
      { id: 3, amount: 150, running_total: 450 },
    ],
  },
  {
    id: 14,
    title: 'Average Salary by Department',
    difficulty: 'Easy',
    description: `Calculate the average salary for each department.`,
    schema: {
      name: 'Employee',
      columns: [
        { name: 'id', type: 'INT' },
        { name: 'name', type: 'VARCHAR' },
        { name: 'salary', type: 'INT' },
        { name: 'departmentId', type: 'INT' },
      ],
    },
    sampleData: `INSERT INTO Employee VALUES (1, 'Joe', 70000, 1);
INSERT INTO Employee VALUES (2, 'Jim', 90000, 2);
INSERT INTO Employee VALUES (3, 'Henry', 80000, 2);
INSERT INTO Employee VALUES (4, 'Sam', 60000, 1);`,
    starterCode: `SELECT 
    departmentId,
    AVG(salary) AS avg_salary
FROM Employee
GROUP BY departmentId;`,
    expectedOutput: [
      { departmentId: 1, avg_salary: 65000 },
      { departmentId: 2, avg_salary: 85000 },
    ],
  },
  {
    id: 15,
    title: 'Rank Scores',
    difficulty: 'Medium',
    description: `Write a query to rank scores. If there is a tie, both should have the same rank. No gaps in ranking.`,
    schema: {
      name: 'Scores',
      columns: [
        { name: 'id', type: 'INT' },
        { name: 'score', type: 'DECIMAL' },
      ],
    },
    sampleData: `INSERT INTO Scores VALUES (1, 3.50);
INSERT INTO Scores VALUES (2, 3.65);
INSERT INTO Scores VALUES (3, 4.00);
INSERT INTO Scores VALUES (4, 3.85);
INSERT INTO Scores VALUES (5, 4.00);
INSERT INTO Scores VALUES (6, 3.65);`,
    starterCode: `SELECT 
    score,
    DENSE_RANK() OVER (ORDER BY score DESC) AS rank
FROM Scores
ORDER BY score DESC;`,
    expectedOutput: [
      { score: 4.00, rank: 1 },
      { score: 4.00, rank: 1 },
      { score: 3.85, rank: 2 },
      { score: 3.65, rank: 3 },
      { score: 3.65, rank: 3 },
      { score: 3.50, rank: 4 },
    ],
  },
  {
    id: 16,
    title: 'Month over Month Growth',
    difficulty: 'Hard',
    description: `Calculate the month-over-month revenue growth rate.`,
    schema: {
      name: 'Revenues',
      columns: [
        { name: 'month', type: 'DATE' },
        { name: 'revenue', type: 'INT' },
      ],
    },
    sampleData: `INSERT INTO Revenues VALUES ('2024-01-01', 1000);
INSERT INTO Revenues VALUES ('2024-02-01', 1500);
INSERT INTO Revenues VALUES ('2024-03-01', 1200);
INSERT INTO Revenues VALUES ('2024-04-01', 2000);`,
    starterCode: `SELECT 
    month,
    revenue,
    LAG(revenue) OVER (ORDER BY month) AS prev_revenue,
    ROUND((revenue - LAG(revenue) OVER (ORDER BY month)) * 100.0 / LAG(revenue) OVER (ORDER BY month), 2) AS growth_pct
FROM Revenues
ORDER BY month;`,
    expectedOutput: [
      { month: '2024-01', revenue: 1000, growth_pct: null },
      { month: '2024-02', revenue: 1500, growth_pct: 50.00 },
      { month: '2024-03', revenue: 1200, growth_pct: -20.00 },
      { month: '2024-04', revenue: 2000, growth_pct: 66.67 },
    ],
  },
  {
    id: 17,
    title: 'Find Median Salary',
    difficulty: 'Hard',
    description: `Find the median salary for each department.`,
    schema: {
      name: 'Employee',
      columns: [
        { name: 'id', type: 'INT' },
        { name: 'name', type: 'VARCHAR' },
        { name: 'salary', type: 'INT' },
        { name: 'departmentId', type: 'INT' },
      ],
    },
    sampleData: `INSERT INTO Employee VALUES (1, 'Joe', 70000, 1);
INSERT INTO Employee VALUES (2, 'Jim', 90000, 1);
INSERT INTO Employee VALUES (3, 'Henry', 80000, 2);
INSERT INTO Employee VALUES (4, 'Sam', 60000, 2);`,
    starterCode: `WITH Ranked AS (
    SELECT 
        departmentId,
        salary,
        ROW_NUMBER() OVER (PARTITION BY departmentId ORDER BY salary) AS rn,
        COUNT(*) OVER (PARTITION BY departmentId) AS cnt
    FROM Employee
)
SELECT departmentId, AVG(salary) AS median_salary
FROM Ranked
WHERE rn IN (FLOOR((cnt+1)/2.0), CEIL((cnt+1)/2.0))
GROUP BY departmentId;`,
    expectedOutput: [
      { departmentId: 1, median_salary: 80000 },
      { departmentId: 2, median_salary: 70000 },
    ],
  },
  {
    id: 18,
    title: 'User Activity Summary',
    difficulty: 'Easy',
    description: `Summarize each user's total activity: total sessions and total duration.`,
    schema: {
      name: 'UserActivity',
      columns: [
        { name: 'user_id', type: 'INT' },
        { name: 'session_id', type: 'INT' },
        { name: 'duration', type: 'INT' },
      ],
    },
    sampleData: `INSERT INTO UserActivity VALUES (1, 1, 30);
INSERT INTO UserActivity VALUES (1, 2, 45);
INSERT INTO UserActivity VALUES (2, 3, 20);
INSERT INTO UserActivity VALUES (3, 4, 60);
INSERT INTO UserActivity VALUES (3, 5, 50);`,
    starterCode: `SELECT 
    user_id,
    COUNT(*) AS total_sessions,
    SUM(duration) AS total_duration,
    AVG(duration) AS avg_session_duration
FROM UserActivity
GROUP BY user_id;`,
    expectedOutput: [
      { user_id: 1, total_sessions: 2, total_duration: 75 },
      { user_id: 2, total_sessions: 1, total_duration: 20 },
      { user_id: 3, total_sessions: 2, total_duration: 110 },
    ],
  },
  {
    id: 19,
    title: 'Pairs of Products',
    difficulty: 'Medium',
    description: `Find all pairs of products that were bought together in the same order.`,
    schema: {
      name: 'OrderItems',
      columns: [
        { name: 'order_id', type: 'INT' },
        { name: 'product_id', type: 'INT' },
      ],
    },
    sampleData: `INSERT INTO OrderItems VALUES (1, 1);
INSERT INTO OrderItems VALUES (1, 2);
INSERT INTO OrderItems VALUES (1, 3);
INSERT INTO OrderItems VALUES (2, 1);
INSERT INTO OrderItems VALUES (2, 2);
INSERT INTO OrderItems VALUES (3, 1);`,
    starterCode: `SELECT 
    a.product_id AS product1,
    b.product_id AS product2,
    COUNT(*) AS times_bought_together
FROM OrderItems a
JOIN OrderItems b ON a.order_id = b.order_id AND a.product_id < b.product_id
GROUP BY a.product_id, b.product_id
ORDER BY times_bought_together DESC;`,
    expectedOutput: [
      { product1: 1, product2: 2, times_bought_together: 2 },
      { product1: 1, product2: 3, times_bought_together: 1 },
      { product1: 2, product2: 3, times_bought_together: 1 },
    ],
  },
  {
    id: 20,
    title: 'Year over Year Comparison',
    difficulty: 'Medium',
    description: `Compare each year's sales with the previous year's sales.`,
    schema: {
      name: 'Sales',
      columns: [
        { name: 'sale_id', type: 'INT' },
        { name: 'sale_date', type: 'DATE' },
        { name: 'amount', type: 'INT' },
      ],
    },
    sampleData: `INSERT INTO Sales VALUES (1, '2022-06-15', 100);
INSERT INTO Sales VALUES (2, '2023-06-20', 150);
INSERT INTO Sales VALUES (3, '2023-12-25', 200);
INSERT INTO Sales VALUES (4, '2024-06-18', 250);`,
    starterCode: `SELECT 
    YEAR(sale_date) AS sale_year,
    SUM(amount) AS total_sales,
    LAG(SUM(amount)) OVER (ORDER BY YEAR(sale_date)) AS prev_year_sales
FROM Sales
GROUP BY YEAR(sale_date)
ORDER BY sale_year;`,
    expectedOutput: [
      { sale_year: 2022, total_sales: 100, prev_year_sales: null },
      { sale_year: 2023, total_sales: 350, prev_year_sales: 100 },
      { sale_year: 2024, total_sales: 250, prev_year_sales: 350 },
    ],
  },
  {
    id: 21,
    title: 'Cohort Retention Analysis',
    difficulty: 'Hard',
    description: `Calculate user retention by cohort (signup month).`,
    schema: {
      name: 'UserSignups',
      columns: [
        { name: 'user_id', type: 'INT' },
        { name: 'signup_date', type: 'DATE' },
        { name: 'activity_date', type: 'DATE' },
      ],
    },
    sampleData: `INSERT INTO UserSignups VALUES (1, '2024-01-01', '2024-01-01');
INSERT INTO UserSignups VALUES (1, '2024-01-01', '2024-02-01');
INSERT INTO UserSignups VALUES (2, '2024-01-01', '2024-01-01');
INSERT INTO UserSignups VALUES (3, '2024-02-01', '2024-02-01');`,
    starterCode: `SELECT 
    DATE_FORMAT(signup_date, '%Y-%m') AS cohort,
    COUNT(DISTINCT user_id) AS total_users,
    COUNT(DISTINCT CASE WHEN activity_date > signup_date THEN user_id END) AS retained_users
FROM UserSignups
GROUP BY DATE_FORMAT(signup_date, '%Y-%m');`,
    expectedOutput: [
      { cohort: '2024-01', total_users: 2, retained_users: 1 },
      { cohort: '2024-02', total_users: 1, retained_users: 0 },
    ],
  },
  {
    id: 22,
    title: 'Gaps in Sequence',
    difficulty: 'Medium',
    description: `Find the gaps (missing numbers) in a sequence of IDs.`,
    schema: {
      name: 'Numbers',
      columns: [
        { name: 'num', type: 'INT' },
      ],
    },
    sampleData: `INSERT INTO Numbers VALUES (1);
INSERT INTO Numbers VALUES (2);
INSERT INTO Numbers VALUES (5);
INSERT INTO Numbers VALUES (6);
INSERT INTO Numbers VALUES (7);
INSERT INTO Numbers VALUES (9);`,
    starterCode: `SELECT 
    n1.num + 1 AS gap_start,
    n2.num - 1 AS gap_end
FROM Numbers n1
JOIN Numbers n2 ON n2.num = (
    SELECT MIN(num) FROM Numbers WHERE num > n1.num
)
WHERE n2.num - n1.num > 1;`,
    expectedOutput: [
      { gap_start: 3, gap_end: 4 },
      { gap_start: 8, gap_end: 8 },
    ],
  },
  {
    id: 23,
    title: 'Percentage of Total',
    difficulty: 'Easy',
    description: `Calculate each category's percentage of the total.`,
    schema: {
      name: 'Sales',
      columns: [
        { name: 'product', type: 'VARCHAR' },
        { name: 'category', type: 'VARCHAR' },
        { name: 'amount', type: 'INT' },
      ],
    },
    sampleData: `INSERT INTO Sales VALUES ('Laptop', 'Electronics', 1000);
INSERT INTO Sales VALUES ('Phone', 'Electronics', 800);
INSERT INTO Sales VALUES ('Shirt', 'Clothing', 50);
INSERT INTO Sales VALUES ('Pants', 'Clothing', 80);`,
    starterCode: `SELECT 
    category,
    SUM(amount) AS category_total,
    ROUND(SUM(amount) * 100.0 / (SELECT SUM(amount) FROM Sales), 2) AS pct_of_total
FROM Sales
GROUP BY category
ORDER BY category_total DESC;`,
    expectedOutput: [
      { category: 'Electronics', category_total: 1800, pct_of_total: 93.75 },
      { category: 'Clothing', category_total: 130, pct_of_total: 6.25 },
    ],
  },
  {
    id: 24,
    title: 'First and Last Purchase',
    difficulty: 'Easy',
    description: `Find each customer's first and last purchase date.`,
    schema: {
      name: 'Purchases',
      columns: [
        { name: 'customer_id', type: 'INT' },
        { name: 'purchase_date', type: 'DATE' },
        { name: 'amount', type: 'INT' },
      ],
    },
    sampleData: `INSERT INTO Purchases VALUES (1, '2024-01-01', 100);
INSERT INTO Purchases VALUES (1, '2024-03-15', 200);
INSERT INTO Purchases VALUES (2, '2024-02-10', 150);`,
    starterCode: `SELECT 
    customer_id,
    MIN(purchase_date) AS first_purchase,
    MAX(purchase_date) AS last_purchase
FROM Purchases
GROUP BY customer_id;`,
    expectedOutput: [
      { customer_id: 1, first_purchase: '2024-01-01', last_purchase: '2024-03-15' },
      { customer_id: 2, first_purchase: '2024-02-10', last_purchase: '2024-02-10' },
    ],
  },
  {
    id: 25,
    title: 'Delete Low Salary Employees',
    difficulty: 'Easy',
    description: `Delete all employees whose salary is below the company average.`,
    schema: {
      name: 'Employee',
      columns: [
        { name: 'id', type: 'INT' },
        { name: 'name', type: 'VARCHAR' },
        { name: 'salary', type: 'INT' },
      ],
    },
    sampleData: `INSERT INTO Employee VALUES (1, 'Joe', 40000);
INSERT INTO Employee VALUES (2, 'Jim', 60000);
INSERT INTO Employee VALUES (3, 'Henry', 50000);`,
    starterCode: `DELETE FROM Employee
WHERE salary < (SELECT AVG(salary) FROM Employee);`,
    expectedOutput: [
      { id: 2, name: 'Jim', salary: 60000 },
    ],
  },
  {
    id: 26,
    title: 'Nth Highest Salary',
    difficulty: 'Medium',
    description: `Write a query to find the nth highest salary. If the nth highest doesn't exist, return NULL.`,
    schema: {
      name: 'Employee',
      columns: [
        { name: 'id', type: 'INT' },
        { name: 'salary', type: 'INT' },
      ],
    },
    sampleData: `INSERT INTO Employee VALUES (1, 100);
INSERT INTO Employee VALUES (2, 200);
INSERT INTO Employee VALUES (3, 300);`,
    starterCode: `-- Find 2nd highest salary
SELECT DISTINCT salary AS getNthHighestSalary
FROM Employee
ORDER BY salary DESC
LIMIT 1 OFFSET 1;`,
    expectedOutput: [
      { getNthHighestSalary: 200 },
    ],
  },
  {
    id: 27,
    title: 'Quarterly Sales Report',
    difficulty: 'Medium',
    description: `Generate a quarterly sales report.`,
    schema: {
      name: 'Sales',
      columns: [
        { name: 'sale_id', type: 'INT' },
        { name: 'sale_date', type: 'DATE' },
        { name: 'amount', type: 'INT' },
      ],
    },
    sampleData: `INSERT INTO Sales VALUES (1, '2024-01-15', 100);
INSERT INTO Sales VALUES (2, '2024-02-20', 200);
INSERT INTO Sales VALUES (3, '2024-04-10', 150);
INSERT INTO Sales VALUES (4, '2024-07-25', 300);
INSERT INTO Sales VALUES (5, '2024-11-05', 250);`,
    starterCode: `SELECT 
    CONCAT(YEAR(sale_date), '-Q', QUARTER(sale_date)) AS quarter,
    COUNT(*) AS num_sales,
    SUM(amount) AS total_revenue
FROM Sales
GROUP BY YEAR(sale_date), QUARTER(sale_date)
ORDER BY quarter;`,
    expectedOutput: [
      { quarter: '2024-Q1', num_sales: 2, total_revenue: 300 },
      { quarter: '2024-Q2', num_sales: 1, total_revenue: 150 },
      { quarter: '2024-Q3', num_sales: 1, total_revenue: 300 },
      { quarter: '2024-Q4', num_sales: 1, total_revenue: 250 },
    ],
  },
  {
    id: 28,
    title: 'Pivot Sales by Region',
    difficulty: 'Hard',
    description: `Pivot sales data so that regions become columns.`,
    schema: {
      name: 'Sales',
      columns: [
        { name: 'product', type: 'VARCHAR' },
        { name: 'region', type: 'VARCHAR' },
        { name: 'amount', type: 'INT' },
      ],
    },
    sampleData: `INSERT INTO Sales VALUES ('Widget', 'North', 100);
INSERT INTO Sales VALUES ('Widget', 'South', 150);
INSERT INTO Sales VALUES ('Gadget', 'North', 200);
INSERT INTO Sales VALUES ('Gadget', 'South', 250);`,
    starterCode: `SELECT 
    product,
    SUM(CASE WHEN region = 'North' THEN amount ELSE 0 END) AS north,
    SUM(CASE WHEN region = 'South' THEN amount ELSE 0 END) AS south
FROM Sales
GROUP BY product;`,
    expectedOutput: [
      { product: 'Widget', north: 100, south: 150 },
      { product: 'Gadget', north: 200, south: 250 },
    ],
  },
  {
    id: 29,
    title: 'Sequential Purchase Detection',
    difficulty: 'Hard',
    description: `Find customers who made purchases on consecutive days.`,
    schema: {
      name: 'Purchases',
      columns: [
        { name: 'customer_id', type: 'INT' },
        { name: 'purchase_date', type: 'DATE' },
      ],
    },
    sampleData: `INSERT INTO Purchases VALUES (1, '2024-01-01');
INSERT INTO Purchases VALUES (1, '2024-01-02');
INSERT INTO Purchases VALUES (1, '2024-01-05');
INSERT INTO Purchases VALUES (2, '2024-01-01');
INSERT INTO Purchases VALUES (2, '2024-01-03');`,
    starterCode: `SELECT DISTINCT p1.customer_id
FROM Purchases p1
JOIN Purchases p2 
    ON p1.customer_id = p2.customer_id 
    AND DATEDIFF(p2.purchase_date, p1.purchase_date) = 1;`,
    expectedOutput: [
      { customer_id: 1 },
    ],
  },
  {
    id: 30,
    title: 'Revenue Moving Average',
    difficulty: 'Medium',
    description: `Calculate the 3-day moving average of daily revenue.`,
    schema: {
      name: 'DailyRevenue',
      columns: [
        { name: 'rev_date', type: 'DATE' },
        { name: 'revenue', type: 'INT' },
      ],
    },
    sampleData: `INSERT INTO DailyRevenue VALUES ('2024-01-01', 100);
INSERT INTO DailyRevenue VALUES ('2024-01-02', 200);
INSERT INTO DailyRevenue VALUES ('2024-01-03', 150);
INSERT INTO DailyRevenue VALUES ('2024-01-04', 300);
INSERT INTO DailyRevenue VALUES ('2024-01-05', 250);`,
    starterCode: `SELECT 
    rev_date,
    revenue,
    AVG(revenue) OVER (ORDER BY rev_date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg_3day
FROM DailyRevenue
ORDER BY rev_date;`,
    expectedOutput: [
      { rev_date: '2024-01-01', revenue: 100, moving_avg_3day: 100 },
      { rev_date: '2024-01-02', revenue: 200, moving_avg_3day: 150 },
      { rev_date: '2024-01-03', revenue: 150, moving_avg_3day: 150 },
      { rev_date: '2024-01-04', revenue: 300, moving_avg_3day: 216.67 },
      { rev_date: '2024-01-05', revenue: 250, moving_avg_3day: 233.33 },
    ],
  },
]