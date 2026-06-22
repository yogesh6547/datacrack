export const categories = [
  { id: 'list', label: 'List', color: 'emerald' },
  { id: 'dict', label: 'Dictionary', color: 'blue' },
  { id: 'pandas', label: 'Pandas', color: 'purple' },
  { id: 'ml', label: 'ML Programming', color: 'amber' },
]

export const pythonQuestions = [
  // ==================== LIST (12 Questions) ====================
  {
    id: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    category: 'list',
    description: `Given a list of integers \`nums\` and an integer \`target\`, return the **indices** of the two numbers that add up to \`target\`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

Return the answer as a list of two integers.`,
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.',
    ],
    examples: [
      {
        input: 'nums = [2, 7, 11, 15], target = 9',
        output: '[0, 1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
      },
      {
        input: 'nums = [3, 2, 4], target = 6',
        output: '[1, 2]',
        explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].',
      },
      {
        input: 'nums = [3, 3], target = 6',
        output: '[0, 1]',
        explanation: 'Because nums[0] + nums[1] == 6, we return [0, 1].',
      },
    ],
    starterCode: `def two_sum(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    # Write your solution here
    pass`,
    testCases: [
      { input: '[[2,7,11,15], 9]', expected: '[0, 1]' },
      { input: '[[3,2,4], 6]', expected: '[1, 2]' },
      { input: '[[3,3], 6]', expected: '[0, 1]' },
    ],
    functionName: 'two_sum',
  },
  {
    id: 2,
    title: 'Remove Duplicates from Sorted Array',
    difficulty: 'Easy',
    category: 'list',
    description: `Given a sorted list of integers \`nums\`, remove the duplicates **in-place** such that each element appears only once and return the new length.

Do not allocate extra space for another list. You must do this by modifying the input list **in-place** with O(1) extra memory.

Return the number of unique elements.`,
    constraints: [
      '1 <= nums.length <= 3 * 10^4',
      '-10^4 <= nums[i] <= 10^4',
      'nums is sorted in non-decreasing order.',
    ],
    examples: [
      {
        input: 'nums = [1, 1, 2]',
        output: '2',
        explanation: 'The first two elements are [1, 2].',
      },
      {
        input: 'nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]',
        output: '5',
        explanation: 'The first five elements are [0, 1, 2, 3, 4].',
      },
    ],
    starterCode: `def remove_duplicates(nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    # Write your solution here
    pass`,
    testCases: [
      { input: '[[1,1,2]]', expected: '2' },
      { input: '[[0,0,1,1,1,2,2,3,3,4]]', expected: '5' },
    ],
    functionName: 'remove_duplicates',
  },
  {
    id: 3,
    title: 'Best Time to Buy and Sell Stock',
    difficulty: 'Easy',
    category: 'list',
    description: `You are given a list \`prices\` where \`prices[i]\` is the price of a given stock on the \`ith\` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return the **maximum profit** you can achieve. If you cannot achieve any profit, return \`0\`.`,
    constraints: [
      '1 <= prices.length <= 10^5',
      '0 <= prices[i] <= 10^4',
    ],
    examples: [
      {
        input: 'prices = [7, 1, 5, 3, 6, 4]',
        output: '5',
        explanation: 'Buy on day 2 (price = 1) and sell on day 5 (price = 6). Profit = 6 - 1 = 5.',
      },
      {
        input: 'prices = [7, 6, 4, 3, 1]',
        output: '0',
        explanation: 'No transactions are done, max profit = 0.',
      },
    ],
    starterCode: `def max_profit(prices):
    """
    :type prices: List[int]
    :rtype: int
    """
    # Write your solution here
    pass`,
    testCases: [
      { input: '[[7,1,5,3,6,4]]', expected: '5' },
      { input: '[[7,6,4,3,1]]', expected: '0' },
    ],
    functionName: 'max_profit',
  },
  {
    id: 4,
    title: 'Rotate Array',
    difficulty: 'Medium',
    category: 'list',
    description: `Given an integer list \`nums\` and an integer \`k\`, rotate the list to the **right** by \`k\` steps.

For example, with \`nums = [1, 2, 3, 4, 5, 6, 7]\` and \`k = 3\`, the result should be \`[5, 6, 7, 1, 2, 3, 4]\`.`,
    constraints: [
      '1 <= nums.length <= 10^5',
      '-2^31 <= nums[i] <= 2^31 - 1',
      '0 <= k <= 10^5',
    ],
    examples: [
      {
        input: 'nums = [1, 2, 3, 4, 5, 6, 7], k = 3',
        output: '[5, 6, 7, 1, 2, 3, 4]',
        explanation: 'Rotate right by 3 steps.',
      },
      {
        input: 'nums = [-1, -100, 3, 99], k = 2',
        output: '[3, 99, -1, -100]',
        explanation: 'Rotate right by 2 steps.',
      },
    ],
    starterCode: `def rotate(nums, k):
    """
    :type nums: List[int]
    :type k: int
    :rtype: None Do not return anything, modify nums in-place instead.
    """
    # Write your solution here
    pass`,
    testCases: [
      { input: '[[1,2,3,4,5,6,7], 3]', expected: '[5, 6, 7, 1, 2, 3, 4]' },
      { input: '[[-1,-100,3,99], 2]', expected: '[3, 99, -1, -100]' },
    ],
    functionName: 'rotate',
  },
  {
    id: 5,
    title: 'Sliding Window Maximum',
    difficulty: 'Hard',
    category: 'list',
    description: `You are given an array of integers \`nums\`, there is a sliding window of size \`k\` which is moving from the very left of the array to the very right. You can only see the \`k\` numbers in the window. Each time the sliding window moves right by one position.

Return the **max sliding window** as a list of integers.`,
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4',
      '1 <= k <= nums.length',
    ],
    examples: [
      {
        input: 'nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3',
        output: '[3, 3, 5, 5, 6, 7]',
        explanation: 'Window position and maximum:\n[1  3  -1] -3  5  3  6  7  →  3\n 1 [3  -1  -3] 5  3  6  7  →  3\n 1  3 [-1  -3  5] 3  6  7  →  5\n 1  3  -1 [-3  5  3] 6  7  →  5\n 1  3  -1  -3 [5  3  6] 7  →  6\n 1  3  -1  -3  5 [3  6  7] →  7',
      },
      {
        input: 'nums = [1], k = 1',
        output: '[1]',
      },
    ],
    starterCode: `def max_sliding_window(nums, k):
    """
    :type nums: List[int]
    :type k: int
    :rtype: List[int]
    """
    # Write your solution here
    pass`,
    testCases: [
      { input: '[[1,3,-1,-3,5,3,6,7], 3]', expected: '[3, 3, 5, 5, 6, 7]' },
      { input: '[[1], 1]', expected: '[1]' },
    ],
    functionName: 'max_sliding_window',
  },
  {
    id: 6,
    title: 'Merge Two Sorted Lists',
    difficulty: 'Easy',
    category: 'list',
    description: 'Merge two sorted lists into one sorted list. Return the head of the merged linked list represented as a list.',
    constraints: ['The number of nodes in both lists is in [0, 50].', '-100 <= Node.val <= 100'],
    examples: [
      { input: 'l1 = [1,2,4], l2 = [1,3,4]', output: '[1,1,2,3,4,4]' },
    ],
    starterCode: `def merge_two_lists(l1, l2):\n    # Write your solution here\n    pass`,
    testCases: [
      { input: '[[1,2,4], [1,3,4]]', expected: '[1, 1, 2, 3, 4, 4]' },
    ],
    functionName: 'merge_two_lists',
  },
  {
    id: 7,
    title: 'Container With Most Water',
    difficulty: 'Medium',
    category: 'list',
    description: 'Find two lines that together with the x-axis form a container that holds the most water.',
    constraints: ['n >= 2', '1 <= heights[i] <= 10^4'],
    examples: [
      { input: 'height = [1,8,6,2,5,4,8,3,7]', output: '49' },
    ],
    starterCode: `def max_area(height):\n    # Write your solution here\n    pass`,
    testCases: [
      { input: '[[1,8,6,2,5,4,8,3,7]]', expected: '49' },
    ],
    functionName: 'max_area',
  },
  {
    id: 8,
    title: '3Sum',
    difficulty: 'Medium',
    category: 'list',
    description: 'Find all unique triplets in the list which give the sum of zero.',
    constraints: ['0 <= nums.length <= 3000', '-10^5 <= nums[i] <= 10^5'],
    examples: [
      { input: 'nums = [-1,0,1,2,-1,-4]', output: '[[-1,-1,2],[-1,0,1]]' },
    ],
    starterCode: `def three_sum(nums):\n    # Write your solution here\n    pass`,
    testCases: [
      { input: '[[-1,0,1,2,-1,-4]]', expected: '[[-1,-1,2],[-1,0,1]]' },
    ],
    functionName: 'three_sum',
  },
  {
    id: 9,
    title: 'Product of Array Except Self',
    difficulty: 'Medium',
    category: 'list',
    description: 'Return an array where each element is the product of all other elements without using division.',
    constraints: ['2 <= nums.length <= 10^5', 'No division allowed'],
    examples: [
      { input: 'nums = [1,2,3,4]', output: '[24,12,8,6]' },
    ],
    starterCode: `def product_except_self(nums):\n    # Write your solution here\n    pass`,
    testCases: [
      { input: '[[1,2,3,4]]', expected: '[24, 12, 8, 6]' },
    ],
    functionName: 'product_except_self',
  },
  {
    id: 10,
    title: 'Trapping Rain Water',
    difficulty: 'Hard',
    category: 'list',
    description: 'Compute how much water it can trap after raining.',
    constraints: ['n == height.length', '1 <= n <= 2 * 10^4'],
    examples: [
      { input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', output: '6' },
    ],
    starterCode: `def trap(height):\n    # Write your solution here\n    pass`,
    testCases: [
      { input: '[[0,1,0,2,1,0,1,3,2,1,2,1]]', expected: '6' },
    ],
    functionName: 'trap',
  },
  {
    id: 11,
    title: 'Find All Anagrams in a String',
    difficulty: 'Medium',
    category: 'list',
    description: 'Find all start indices of p\'s anagrams in s.',
    constraints: ['1 <= s.length, p.length <= 3 * 10^4'],
    examples: [
      { input: 's = "cbaebabacd", p = "abc"', output: '[0,6]' },
    ],
    starterCode: `def find_anagrams(s, p):\n    # Write your solution here\n    pass`,
    testCases: [
      { input: '["cbaebabacd", "abc"]', expected: '[0, 6]' },
    ],
    functionName: 'find_anagrams',
  },
  {
    id: 12,
    title: 'Kth Largest Element',
    difficulty: 'Medium',
    category: 'list',
    description: 'Find the kth largest element in an unsorted list.',
    constraints: ['1 <= k <= nums.length <= 10^5'],
    examples: [
      { input: 'nums = [3,2,1,5,6,4], k = 2', output: '5' },
    ],
    starterCode: `def find_kth_largest(nums, k):\n    # Write your solution here\n    pass`,
    testCases: [
      { input: '[[3,2,1,5,6,4], 2]', expected: '5' },
    ],
    functionName: 'find_kth_largest',
  },

  // ==================== DICTIONARY (10 Questions) ====================
  {
    id: 13,
    title: 'Valid Anagram',
    difficulty: 'Easy',
    category: 'dict',
    description: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
    constraints: ['1 <= s.length, t.length <= 5 * 10^4', 's and t consist of lowercase English letters.'],
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: 'True' },
      { input: 's = "rat", t = "car"', output: 'False' },
    ],
    starterCode: `def is_anagram(s, t):\n    # Write your solution here\n    pass`,
    testCases: [
      { input: '["anagram", "nagaram"]', expected: 'True' },
      { input: '["rat", "car"]', expected: 'False' },
    ],
    functionName: 'is_anagram',
  },
  {
    id: 14,
    title: 'Group Anagrams',
    difficulty: 'Medium',
    category: 'dict',
    description: 'Group strings that are anagrams of each other.',
    constraints: ['1 <= strs.length <= 10^4', '0 <= strs[i].length <= 100'],
    examples: [
      { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["eat","tea","ate"],["tan","nat"],["bat"]]' },
    ],
    starterCode: `def group_anagrams(strs):\n    # Write your solution here\n    pass`,
    testCases: [
      { input: '[["eat","tea","tan","ate","nat","bat"]]', expected: '[["eat","tea","ate"],["tan","nat"],["bat"]]' },
    ],
    functionName: 'group_anagrams',
  },
  {
    id: 15,
    title: 'Top K Frequent Elements',
    difficulty: 'Medium',
    category: 'dict',
    description: 'Return the k most frequent elements.',
    constraints: ['1 <= nums.length <= 10^5', '1 <= k <= number of unique elements'],
    examples: [
      { input: 'nums = [1,1,1,2,2,3], k = 2', output: '[1,2]' },
    ],
    starterCode: `def top_k_frequent(nums, k):\n    # Write your solution here\n    pass`,
    testCases: [
      { input: '[[1,1,1,2,2,3], 2]', expected: '[1, 2]' },
    ],
    functionName: 'top_k_frequent',
  },
  {
    id: 16,
    title: 'LRU Cache',
    difficulty: 'Hard',
    category: 'dict',
    description: 'Design and implement a data structure for Least Recently Used (LRU) cache.',
    constraints: ['1 <= capacity <= 3000'],
    examples: [
      { input: 'LRUCache(2), put(1,1), put(2,2), get(1), put(3,3), get(2)', output: '1, -1' },
    ],
    starterCode: `class LRUCache:\n    def __init__(self, capacity):\n        pass\n    def get(self, key):\n        pass\n    def put(self, key, value):\n        pass`,
    testCases: [
      { input: 'capacity=2, ops=[["put",1,1],["put",2,2],["get",1],["put",3,3],["get",2]]', expected: '[None,None,1,None,-1]' },
    ],
    functionName: 'LRUCache',
  },
  {
    id: 17,
    title: 'Word Frequency',
    difficulty: 'Easy',
    category: 'dict',
    description: 'Count the frequency of each word in a given text and return the top k frequent words.',
    constraints: ['1 <= words.length <= 500'],
    examples: [
      { input: 'words = "the cat sat on the mat the cat", k = 2', output: '["the", "cat"]' },
    ],
    starterCode: `def word_frequency(text, k):\n    # Write your solution here\n    pass`,
    testCases: [
      { input: '["the cat sat on the mat the cat", 2]', expected: '["the", "cat"]' },
    ],
    functionName: 'word_frequency',
  },
  {
    id: 18,
    title: 'Two Sum (Dictionary)',
    difficulty: 'Easy',
    category: 'dict',
    description: 'Solve Two Sum using a dictionary/hashmap for O(n) solution.',
    constraints: ['2 <= nums.length <= 10^4'],
    examples: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]' },
    ],
    starterCode: `def two_sum_dict(nums, target):\n    # Write your solution using a dictionary\n    pass`,
    testCases: [
      { input: '[[2,7,11,15], 9]', expected: '[0, 1]' },
    ],
    functionName: 'two_sum_dict',
  },
  {
    id: 19,
    title: 'Longest Consecutive Sequence',
    difficulty: 'Medium',
    category: 'dict',
    description: 'Find the length of the longest consecutive elements sequence.',
    constraints: ['0 <= nums.length <= 10^5', '-10^9 <= nums[i] <= 10^9'],
    examples: [
      { input: 'nums = [100,4,200,1,3,2]', output: '4' },
    ],
    starterCode: `def longest_consecutive(nums):\n    # Write your solution here\n    pass`,
    testCases: [
      { input: '[[100,4,200,1,3,2]]', expected: '4' },
    ],
    functionName: 'longest_consecutive',
  },
  {
    id: 20,
    title: 'Subarray Sum Equals K',
    difficulty: 'Medium',
    category: 'dict',
    description: 'Count the number of continuous subarrays whose sum equals k.',
    constraints: ['1 <= nums.length <= 2 * 10^4'],
    examples: [
      { input: 'nums = [1,1,1], k = 2', output: '2' },
    ],
    starterCode: `def subarray_sum(nums, k):\n    # Write your solution here\n    pass`,
    testCases: [
      { input: '[[1,1,1], 2]', expected: '2' },
    ],
    functionName: 'subarray_sum',
  },
  {
    id: 21,
    title: 'Sort Characters By Frequency',
    difficulty: 'Medium',
    category: 'dict',
    description: 'Sort characters by frequency in descending order.',
    constraints: ['1 <= s.length <= 5 * 10^5'],
    examples: [
      { input: 's = "tree"', output: '"eert"' },
    ],
    starterCode: `def frequency_sort(s):\n    # Write your solution here\n    pass`,
    testCases: [
      { input: '["tree"]', expected: '"eert"' },
    ],
    functionName: 'frequency_sort',
  },
  {
    id: 22,
    title: 'Isomorphic Strings',
    difficulty: 'Easy',
    category: 'dict',
    description: 'Determine if two strings are isomorphic.',
    constraints: ['1 <= s.length <= 5 * 10^4'],
    examples: [
      { input: 's = "egg", t = "add"', output: 'True' },
      { input: 's = "foo", t = "bar"', output: 'False' },
    ],
    starterCode: `def is_isomorphic(s, t):\n    # Write your solution here\n    pass`,
    testCases: [
      { input: '["egg", "add"]', expected: 'True' },
      { input: '["foo", "bar"]', expected: 'False' },
    ],
    functionName: 'is_isomorphic',
  },

  // ==================== PANDAS (13 Questions) ====================
  {
    id: 23,
    title: 'DataFrame Filtering',
    difficulty: 'Easy',
    category: 'pandas',
    description: 'Given a DataFrame of employees with columns [name, department, salary, age], filter employees who are in the "Engineering" department and have a salary greater than 80000.',
    constraints: ['DataFrame has at least 1 row', 'All columns are present'],
    examples: [
      { input: 'df = pd.DataFrame({"name":["A","B","C"], "dept":["Engineering","Sales","Engineering"], "salary":[90000,75000,95000]})', output: 'DataFrame with rows A and C' },
    ],
    starterCode: `import pandas as pd\n\ndef filter_engineering(df):\n    # Filter Engineering department with salary > 80000\n    pass`,
    testCases: [
      { input: 'pd.DataFrame({"name":["A","B","C"], "dept":["Engineering","Sales","Engineering"], "salary":[90000,75000,95000]})', expected: '2 rows: A, C' },
    ],
    functionName: 'filter_engineering',
  },
  {
    id: 24,
    title: 'GroupBy Aggregation',
    difficulty: 'Easy',
    category: 'pandas',
    description: 'Given a sales DataFrame with columns [product, region, sales], group by product and calculate the total sales for each product.',
    constraints: ['DataFrame has at least 1 row'],
    examples: [
      { input: 'df = pd.DataFrame({"product":["A","B","A"], "sales":[100,200,150]})', output: 'A: 250, B: 200' },
    ],
    starterCode: `import pandas as pd\n\ndef total_sales_by_product(df):\n    # Group by product and sum sales\n    pass`,
    testCases: [
      { input: 'pd.DataFrame({"product":["A","B","A"], "sales":[100,200,150]})', expected: 'A: 250, B: 200' },
    ],
    functionName: 'total_sales_by_product',
  },
  {
    id: 25,
    title: 'Handle Missing Values',
    difficulty: 'Easy',
    category: 'pandas',
    description: 'Given a DataFrame with missing values (NaN), fill numeric columns with the column mean and string columns with "Unknown".',
    constraints: ['DataFrame may contain mixed types'],
    examples: [
      { input: 'df with NaN values', output: 'DataFrame with filled values' },
    ],
    starterCode: `import pandas as pd\nimport numpy as np\n\ndef fill_missing(df):\n    # Fill NaN values appropriately\n    pass`,
    testCases: [
      { input: 'pd.DataFrame({"a":[1,np.nan,3], "b":["x",None,"z"]})', expected: 'a: [1,2,3], b: [x,Unknown,z]' },
    ],
    functionName: 'fill_missing',
  },
  {
    id: 26,
    title: 'Merge DataFrames',
    difficulty: 'Medium',
    category: 'pandas',
    description: 'Merge two DataFrames on a common key using an inner join.',
    constraints: ['Both DataFrames have the key column'],
    examples: [
      { input: 'df1 with orders, df2 with customers', output: 'Merged DataFrame' },
    ],
    starterCode: `import pandas as pd\n\ndef merge_dataframes(df1, df2, key):\n    # Merge on common key\n    pass`,
    testCases: [
      { input: 'df1(id=[1,2], val=["a","b"]), df2(id=[2,3], val2=["c","d"])', expected: 'Inner join on id=2' },
    ],
    functionName: 'merge_dataframes',
  },
  {
    id: 27,
    title: 'Pivot Table',
    difficulty: 'Medium',
    category: 'pandas',
    description: 'Create a pivot table from a sales DataFrame with products as rows, regions as columns, and sales as values.',
    constraints: ['DataFrame has product, region, and sales columns'],
    examples: [
      { input: 'Sales data', output: 'Pivot table with products x regions' },
    ],
    starterCode: `import pandas as pd\n\ndef create_pivot(df):\n    # Create pivot table\n    pass`,
    testCases: [
      { input: 'pd.DataFrame({"product":["A","A","B"],"region":["E","W","E"],"sales":[100,200,150]})', expected: 'Pivot table' },
    ],
    functionName: 'create_pivot',
  },
  {
    id: 28,
    title: 'Data Type Conversion',
    difficulty: 'Easy',
    category: 'pandas',
    description: 'Convert columns to appropriate data types: date strings to datetime, numeric strings to float.',
    constraints: ['DataFrame has string columns that should be other types'],
    examples: [
      { input: 'DataFrame with string dates and numbers', output: 'DataFrame with proper types' },
    ],
    starterCode: `import pandas as pd\n\ndef convert_types(df):\n    # Convert date and numeric columns\n    pass`,
    testCases: [
      { input: 'pd.DataFrame({"date":["2024-01-01"],"value":["42.5"]})', expected: 'datetime64 and float64 types' },
    ],
    functionName: 'convert_types',
  },
  {
    id: 29,
    title: 'Apply Function',
    difficulty: 'Medium',
    category: 'pandas',
    description: 'Use the apply method to create a new column that categorizes values into bins (e.g., "Low", "Medium", "High").',
    constraints: ['DataFrame has a numeric column'],
    examples: [
      { input: 'DataFrame with scores', output: 'DataFrame with grade column' },
    ],
    starterCode: `import pandas as pd\n\ndef categorize_scores(df):\n    # Apply categorization function\n    pass`,
    testCases: [
      { input: 'pd.DataFrame({"score":[25,50,75,90]})', expected: 'Categories: Low, Medium, High, High' },
    ],
    functionName: 'categorize_scores',
  },
  {
    id: 30,
    title: 'Time Series Resampling',
    difficulty: 'Medium',
    category: 'pandas',
    description: 'Resample daily sales data to monthly averages.',
    constraints: ['DataFrame has a datetime index and numeric values'],
    examples: [
      { input: 'Daily sales data', output: 'Monthly average sales' },
    ],
    starterCode: `import pandas as pd\n\ndef monthly_average(df):\n    # Resample to monthly frequency\n    pass`,
    testCases: [
      { input: 'Daily data with dates', expected: 'Monthly aggregated data' },
    ],
    functionName: 'monthly_average',
  },
  {
    id: 31,
    title: 'String Operations',
    difficulty: 'Easy',
    category: 'pandas',
    description: 'Clean a column of names: strip whitespace, convert to lowercase, and extract first names.',
    constraints: ['Column contains string values'],
    examples: [
      { input: '["  John Doe ", "Jane Smith"]', output: '["john", "jane"]' },
    ],
    starterCode: `import pandas as pd\n\ndef clean_names(df):\n    # Clean the name column\n    pass`,
    testCases: [
      { input: 'pd.DataFrame({"name":["  John Doe ","Jane Smith"]})', expected: 'First names in lowercase' },
    ],
    functionName: 'clean_names',
  },
  {
    id: 32,
    title: 'Rolling Window Calculation',
    difficulty: 'Medium',
    category: 'pandas',
    description: 'Calculate a 7-day rolling average of stock prices.',
    constraints: ['DataFrame has price column'],
    examples: [
      { input: 'Daily stock prices', output: 'Rolling 7-day average' },
    ],
    starterCode: `import pandas as pd\n\ndef rolling_average(prices, window=7):\n    # Calculate rolling average\n    pass`,
    testCases: [
      { input: 'pd.DataFrame({"price":[100,102,98,105,110,108,112,115]})', expected: '7-day rolling mean' },
    ],
    functionName: 'rolling_average',
  },
  {
    id: 33,
    title: 'Get Dummies (One-Hot Encoding)',
    difficulty: 'Easy',
    category: 'pandas',
    description: 'Convert categorical variables into dummy/indicator variables using one-hot encoding.',
    constraints: ['DataFrame has categorical columns'],
    examples: [
      { input: 'DataFrame with "color" column', output: 'DataFrame with color_red, color_blue, etc.' },
    ],
    starterCode: `import pandas as pd\n\ndef one_hot_encode(df, column):\n    # Apply one-hot encoding\n    pass`,
    testCases: [
      { input: 'pd.DataFrame({"color":["red","blue","red"]})', expected: 'color_red, color_blue columns' },
    ],
    functionName: 'one_hot_encode',
  },
  {
    id: 34,
    title: 'Correlation Matrix',
    difficulty: 'Medium',
    category: 'pandas',
    description: 'Calculate the correlation matrix for all numeric columns in a DataFrame and find the most correlated pair.',
    constraints: ['DataFrame has multiple numeric columns'],
    examples: [
      { input: 'DataFrame with columns A, B, C', output: 'Correlation matrix and most correlated pair' },
    ],
    starterCode: `import pandas as pd\n\ndef most_correlated(df):\n    # Calculate correlation and find most correlated pair\n    pass`,
    testCases: [
      { input: 'pd.DataFrame({"a":[1,2,3,4,5],"b":[2,4,5,4,5],"c":[1,3,2,5,4]})', expected: 'Most correlated pair' },
    ],
    functionName: 'most_correlated',
  },
  {
    id: 35,
    title: 'Data Aggregation with Multiple Functions',
    difficulty: 'Medium',
    category: 'pandas',
    description: 'Group data by category and apply multiple aggregation functions (mean, median, std) to each group.',
    constraints: ['DataFrame has group and value columns'],
    examples: [
      { input: 'Sales by category', output: 'Multiple stats per category' },
    ],
    starterCode: `import pandas as pd\n\ndef multi_aggregate(df):\n    # Apply multiple aggregation functions\n    pass`,
    testCases: [
      { input: 'pd.DataFrame({"cat":["A","A","B","B"],"val":[10,20,30,40]})', expected: 'Stats per category' },
    ],
    functionName: 'multi_aggregate',
  },

  // ==================== ML PROGRAMMING (15 Questions) ====================
  {
    id: 36,
    title: 'Manual Train-Test Split',
    difficulty: 'Easy',
    category: 'ml',
    description: 'Implement a train-test split function from scratch without using sklearn. The function should randomly split data into training and testing sets.',
    constraints: ['test_size should be between 0 and 1', 'Data can be lists or numpy-like'],
    examples: [
      { input: 'data = [1,2,3,4,5,6,7,8,9,10], test_size=0.3', output: '7 train, 3 test items' },
    ],
    starterCode: `import random\n\ndef train_test_split(data, test_size=0.2, seed=42):\n    """\n    Split data into train and test sets.\n    :param data: list of data points\n    :param test_size: fraction for test set\n    :param seed: random seed for reproducibility\n    :return: (train_data, test_data)\n    """\n    # Implement your own train_test_split\n    pass`,
    testCases: [
      { input: '[[1,2,3,4,5,6,7,8,9,10], 0.3, 42]', expected: 'len(train)=7, len(test)=3' },
    ],
    functionName: 'train_test_split',
  },
  {
    id: 37,
    title: 'Mean Squared Error from Scratch',
    difficulty: 'Easy',
    category: 'ml',
    description: 'Implement Mean Squared Error (MSE) from scratch.\n\n$$MSE = \\frac{1}{n} \\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2$$',
    constraints: ['Both lists must have the same length', 'n > 0'],
    examples: [
      { input: 'y_actual = [3, -0.5, 2, 7], y_predicted = [2.5, 0.0, 2, 8]', output: '0.375' },
    ],
    starterCode: `def mean_squared_error(y_actual, y_predicted):\n    """\n    Calculate MSE from scratch.\n    :param y_actual: list of actual values\n    :param y_predicted: list of predicted values\n    :return: float MSE value\n    """\n    # Implement MSE formula\n    pass`,
    testCases: [
      { input: '[[3,-0.5,2,7], [2.5,0.0,2,8]]', expected: '0.375' },
    ],
    functionName: 'mean_squared_error',
  },
  {
    id: 38,
    title: 'KNN from Scratch',
    difficulty: 'Medium',
    category: 'ml',
    description: 'Implement K-Nearest Neighbors classifier from scratch. Given training data and a test point, classify it based on the k nearest neighbors using Euclidean distance.',
    constraints: ['k >= 1', 'Training data is non-empty'],
    examples: [
      { input: 'Train: [[1,2],[2,3],[3,1],[6,7],[7,8]], Test: [3,3], k=3', output: 'Class of majority of 3 nearest neighbors' },
    ],
    starterCode: `def knn_predict(train_data, train_labels, test_point, k=3):\n    """\n    Predict class using KNN.\n    :param train_data: list of feature vectors\n    :param train_labels: list of class labels\n    :param test_point: feature vector to classify\n    :param k: number of neighbors\n    :return: predicted class label\n    """\n    # Implement KNN\n    pass`,
    testCases: [
      { input: '[[[1,2],[2,3],[3,1],[6,7],[7,8]], [0,0,0,1,1], [3,3], 3]', expected: '0 (majority class)' },
    ],
    functionName: 'knn_predict',
  },
  {
    id: 39,
    title: 'Gradient Descent Implementation',
    difficulty: 'Medium',
    category: 'ml',
    description: 'Implement simple gradient descent to find the optimal parameters for a linear model.\n\n$$\\theta_{new} = \\theta_{old} - \\alpha \\cdot \\nabla J(\\theta)$$',
    constraints: ['Learning rate > 0', 'Iterations > 0'],
    examples: [
      { input: 'X = [1,2,3,4,5], y = [2,4,5,4,5], lr=0.01, epochs=1000', output: 'Optimal weight and bias' },
    ],
    starterCode: `def gradient_descent(X, y, lr=0.01, epochs=1000):\n    """\n    Implement gradient descent for linear regression.\n    :return: (weight, bias) tuple\n    """\n    # Initialize parameters\n    # Loop for epochs\n    # Compute predictions, loss, gradients\n    # Update parameters\n    pass`,
    testCases: [
      { input: '[[1,2,3,4,5], [2,4,5,4,5], 0.01, 1000]', expected: 'weight near 0.6, bias near 2.2' },
    ],
    functionName: 'gradient_descent',
  },
  {
    id: 40,
    title: 'Logistic Regression from Scratch',
    difficulty: 'Hard',
    category: 'ml',
    description: 'Implement logistic regression with sigmoid function and binary cross-entropy loss.\n\n$$\\sigma(z) = \\frac{1}{1 + e^{-z}}$$\n$$J = -\\frac{1}{n}\\sum[y\\log(\\hat{y}) + (1-y)\\log(1-\\hat{y})]$$',
    constraints: ['Binary classification only', 'Features should be normalized'],
    examples: [
      { input: 'Simple 2D classification data', output: 'Trained weights and bias' },
    ],
    starterCode: `import math\n\ndef sigmoid(z):\n    return 1 / (1 + math.exp(-z))\n\ndef logistic_regression(X, y, lr=0.1, epochs=1000):\n    """\n    Train logistic regression from scratch.\n    :return: (weights, bias)\n    """\n    # Implement logistic regression\n    pass`,
    testCases: [
      { input: 'Simple linearly separable data', expected: 'Accuracy > 0.8' },
    ],
    functionName: 'logistic_regression',
  },
  {
    id: 41,
    title: 'Confusion Matrix from Scratch',
    difficulty: 'Easy',
    category: 'ml',
    description: 'Implement a confusion matrix and calculate accuracy, precision, recall, and F1 score.',
    constraints: ['Binary classification', 'y_true and y_pred have same length'],
    examples: [
      { input: 'y_true = [1,0,1,1,0], y_pred = [1,0,0,1,1]', output: 'TP=2, TN=1, FP=1, FN=1' },
    ],
    starterCode: `def confusion_matrix(y_true, y_pred):\n    """\n    Calculate confusion matrix and metrics.\n    :return: dict with TP, TN, FP, FN, accuracy, precision, recall, f1\n    """\n    # Implement confusion matrix\n    pass`,
    testCases: [
      { input: '[[1,0,1,1,0], [1,0,0,1,1]]', expected: 'TP=2, TN=1, FP=1, FN=1, acc=0.6' },
    ],
    functionName: 'confusion_matrix',
  },
  {
    id: 42,
    title: 'Cross-Validation from Scratch',
    difficulty: 'Medium',
    category: 'ml',
    description: 'Implement k-fold cross-validation to evaluate a model.',
    constraints: ['k >= 2', 'Data length >= k'],
    examples: [
      { input: 'data with 10 samples, k=5', output: '5 folds with average score' },
    ],
    starterCode: `def k_fold_cross_validation(data, labels, k=5, model_fn=None):\n    """\n    Implement k-fold cross-validation.\n    :return: list of scores and average\n    """\n    # Split data into k folds\n    # For each fold, train on remaining, test on current\n    pass`,
    testCases: [
      { input: '[[1,2,3,4,5,6,7,8,9,10], [0,0,0,0,0,1,1,1,1,1], 5]', expected: 'Average score across 5 folds' },
    ],
    functionName: 'k_fold_cross_validation',
  },
  {
    id: 43,
    title: 'Linear Regression from Scratch',
    difficulty: 'Medium',
    category: 'ml',
    description: 'Implement simple linear regression using the normal equation or gradient descent.\n\n$$\\hat{y} = wx + b$$\n$$w = \\frac{\\sum(x_i - \\bar{x})(y_i - \\bar{y})}{\\sum(x_i - \\bar{x})^2}$$',
    constraints: ['X is a list of floats', 'y is a list of floats of same length'],
    examples: [
      { input: 'X = [1,2,3,4,5], y = [2,4,5,4,5]', output: 'weight=0.6, bias=2.2' },
    ],
    starterCode: `def linear_regression(X, y):\n    """\n    Fit linear regression using closed form.\n    :return: (weight, bias)\n    """\n    # Implement using the formula\n    pass`,
    testCases: [
      { input: '[[1,2,3,4,5], [2,4,5,4,5]]', expected: 'weight=0.6, bias=2.2' },
    ],
    functionName: 'linear_regression',
  },
  {
    id: 44,
    title: 'R² Score from Scratch',
    difficulty: 'Easy',
    category: 'ml',
    description: 'Implement R-squared (coefficient of determination) from scratch.\n\n$$R^2 = 1 - \\frac{\\sum(y_i - \\hat{y}_i)^2}{\\sum(y_i - \\bar{y})^2}$$',
    constraints: ['Both lists have same length'],
    examples: [
      { input: 'y_actual = [3,-0.5,2,7], y_predicted = [2.5,0.0,2,8]', output: 'R² score' },
    ],
    starterCode: `def r_squared(y_actual, y_predicted):\n    """\n    Calculate R² score.\n    :return: float R² value\n    """\n    # Implement R² formula\n    pass`,
    testCases: [
      { input: '[[3,-0.5,2,7], [2.5,0.0,2,8]]', expected: 'R² close to 0.948' },
    ],
    functionName: 'r_squared',
  },
  {
    id: 45,
    title: 'Standard Scaler from Scratch',
    difficulty: 'Easy',
    category: 'ml',
    description: 'Implement StandardScaler (z-score normalization) from scratch.\n\n$$z = \\frac{x - \\mu}{\\sigma}$$',
    constraints: ['Input is a list of numbers', 'Standard deviation > 0'],
    examples: [
      { input: 'data = [1, 2, 3, 4, 5]', output: '[-1.41, -0.71, 0, 0.71, 1.41]' },
    ],
    starterCode: `def standard_scale(data):\n    """\n    Apply z-score normalization.\n    :return: list of scaled values\n    """\n    # Calculate mean and std\n    # Apply z-score formula\n    pass`,
    testCases: [
      { input: '[[1,2,3,4,5]]', expected: 'Mean=0, Std=1 for scaled data' },
    ],
    functionName: 'standard_scale',
  },
  {
    id: 46,
    title: 'Decision Tree (Simple)',
    difficulty: 'Hard',
    category: 'ml',
    description: 'Implement a simple decision tree classifier using information gain (entropy) for splitting.',
    constraints: ['Binary features', 'Binary labels'],
    examples: [
      { input: 'Simple XOR-like dataset', output: 'Trained decision tree' },
    ],
    starterCode: `import math\n\ndef entropy(labels):\n    """Calculate entropy of a label list."""\n    pass\n\ndef information_gain(feature, labels):\n    """Calculate information gain."""\n    pass\n\ndef build_tree(X, y, features):\n    """Build a decision tree recursively."""\n    pass`,
    testCases: [
      { input: 'XOR dataset', expected: 'Tree that can classify XOR' },
    ],
    functionName: 'build_tree',
  },
  {
    id: 47,
    title: 'Random Forest (Concept)',
    difficulty: 'Hard',
    category: 'ml',
    description: 'Implement a basic random forest using bootstrap sampling and majority voting.',
    constraints: ['Uses decision trees as base learners'],
    examples: [
      { input: 'Training data', output: 'Ensemble predictions' },
    ],
    starterCode: `import random\n\ndef bootstrap_sample(X, y):\n    """Create a bootstrap sample."""\n    pass\n\ndef random_forest_predict(X_train, y_train, X_test, n_trees=10):\n    """Make predictions using random forest."""\n    pass`,
    testCases: [
      { input: 'Simple classification data', expected: 'Majority vote predictions' },
    ],
    functionName: 'random_forest_predict',
  },
  {
    id: 48,
    title: 'Naive Bayes from Scratch',
    difficulty: 'Medium',
    category: 'ml',
    description: 'Implement Naive Bayes classifier for text classification using bag of words.',
    constraints: ['Text data', 'Multiple classes'],
    examples: [
      { input: 'Text documents with labels', output: 'Predicted class for new text' },
    ],
    starterCode: `def naive_bayes_train(texts, labels):\n    """Train Naive Bayes model."""\n    pass\n\ndef naive_bayes_predict(model, text):\n    """Predict class for a text document."""\n    pass`,
    testCases: [
      { input: '["spam text", "ham text"], ["spam", "ham"]', expected: 'Correct class probabilities' },
    ],
    functionName: 'naive_bayes_train',
  },
  {
    id: 49,
    title: 'ROC Curve and AUC',
    difficulty: 'Medium',
    category: 'ml',
    description: 'Implement ROC curve computation and AUC (Area Under the Curve) calculation.',
    constraints: ['Binary classification probabilities'],
    examples: [
      { input: 'y_true = [0,0,1,1], y_scores = [0.1,0.4,0.35,0.8]', output: 'AUC value' },
    ],
    starterCode: `def roc_curve(y_true, y_scores):\n    """Compute ROC curve points."""\n    pass\n\ndef auc_score(y_true, y_scores):\n    """Calculate AUC using trapezoidal rule."""\n    pass`,
    testCases: [
      { input: '[[0,0,1,1], [0.1,0.4,0.35,0.8]]', expected: 'AUC between 0 and 1' },
    ],
    functionName: 'roc_curve',
  },
  {
    id: 50,
    title: 'PCA from Scratch',
    difficulty: 'Hard',
    category: 'ml',
    description: 'Implement Principal Component Analysis (PCA) from scratch for dimensionality reduction.\n\n1. Center the data\n2. Compute covariance matrix\n3. Compute eigenvalues/eigenvectors\n4. Project data onto top k components',
    constraints: ['Data is a 2D list (matrix)', 'k <= number of features'],
    examples: [
      { input: 'data = [[2.5,2.4],[0.5,0.7],[2.2,2.9],[1.9,2.2],[3.1,3.0]], k=1', output: 'Reduced 1D data' },
    ],
    starterCode: `def pca(data, k=1):\n    """\n    Implement PCA from scratch.\n    :param data: list of lists (2D matrix)\n    :param k: number of principal components\n    :return: reduced data\n    """\n    # Step 1: Center the data (subtract mean)\n    # Step 2: Compute covariance matrix\n    # Step 3: Compute eigenvalues and eigenvectors\n    # Step 4: Select top k eigenvectors\n    # Step 5: Project data\n    pass`,
    testCases: [
      { input: '[[2.5,2.4],[0.5,0.7],[2.2,2.9],[1.9,2.2],[3.1,3.0]], 1', expected: '1D reduced data' },
    ],
    functionName: 'pca',
  },
]