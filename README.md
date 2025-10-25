<h1>Recursion Algorithms</h1>

A JavaScript implementation of classic recursive algorithms - Fibonacci sequence and Merge Sort.

<h2>Overview</h2>

This project demonstrates the power of recursion through two fundamental computer science problems:

- Fibonacci Sequence: Generating Fibonacci numbers using both iterative and recursive approaches

- Merge Sort: A efficient sorting algorithm using the divide-and-conquer strategy

<h2>Features</h2>

<h3>Fibonacci Sequence</h3>

- Iterative Implementation (fibs): Generates Fibonacci sequence using loops

- Recursive Implementation (fibsRec): Generates Fibonacci sequence using recursion

- Returns arrays containing the sequence rather than single numbers

<h3>Merge Sort</h3>

- Recursive Divide & Conquer: Splits arrays into smallest units then merges them back sorted

- Efficient Sorting: O(n log n) time complexity

- Stable Algorithm: Maintains relative order of equal elements

<h2>Algorithms</h2>

<h3>Fibonacci</h3>

The Fibonacci sequence is a series where each number is the sum of the two preceding ones:

<pre>
  0, 1, 1, 2, 3, 5, 8, 13, 21, ...
</pre>

<h3>Merge Sort</h3>

Merge sort works by:

1. Dividing the array into halves recursively until single elements remain

2. Merging the sorted halves back together in order

3. Comparing elements from both halves to build the final sorted array

<h2>Installation</h2>

1. Clone the repository:

<pre>
  git clone https://github.com/Basliel-Sisay/Recursion-.git
</pre>

2. Navigate to the project directory:

<pre>
  cd Recursion-
</pre>

<h2>Usage</h2>

<h3>Running the Algorithms</h3>

Fibonacci Sequence:

<pre>
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
</pre>

Merge Sort:

<pre>
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
// [0, 1, 1, 2, 3, 5, 8, 13]
</pre>

<h2>File Structure</h2>

<pre>
  Recursion-/
├── fibonacci.js      # Fibonacci sequence implementations
├── merge-sort.js     # Merge sort algorithm
└── README.md         # Project documentation
</pre>

<h3>Examples</h3>

<pre>
  // Fibonacci examples
fibs(5)    // Returns [0, 1, 1, 2, 3]
fibsRec(6) // Returns [0, 1, 1, 2, 3, 5]

// Merge Sort examples
mergeSort([])                 // Returns []
mergeSort([105, 79, 100, 110]) // Returns [79, 100, 105, 110]
mergeSort([3, 2, 1, 13, 8, 5, 0, 1]) // Returns [0, 1, 1, 2, 3, 5, 8, 13]
</pre>

<h2>Technical Details</h2>

<h3>Time Complexity</h3>

- Fibonacci Iterative: O(n)

- Fibonacci Recursive: O(2^n) - inefficient for large n

- Merge Sort: O(n log n) in all cases

<h3> Space Complexity</h3>

- Fibonacci Iterative: O(n)

- Fibonacci Recursive: O(n) - due to call stack and array storage

- Merge Sort: O(n) - for the temporary arrays during merging

<h2>Learning Objectives</h2>

This project helps understand:

- Recursive thinking and problem solving

- Divide and conquer algorithms

- Base cases and recursive cases

- Algorithm efficiency and complexity analysis

- Array manipulation in recursive contexts

<h2>Contributing</h2>

Feel free to contribute to this project by:

- Adding more recursive algorithms

- Improving code efficiency

- Adding tests and benchmarks

- Enhancing documentation

<h2>License</h2>

This project is open source and available under the MIT License.

