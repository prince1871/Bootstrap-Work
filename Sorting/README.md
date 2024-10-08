# Sorting Algorithm: Insertion Sort

## Description
Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

## Algorithm
1. Each time, work only with the first `i-1` elements of the array.
2. Pick element `arr[i]` and insert it into the sorted sequence in the array from `0` to `i-1`.

## Steps
1. Start from the second element (index 1) to the last element of the array.
2. Compare the current element (`arr[i]`) with the largest value in the sorted array (from `0` to `i-1`).
3. If the current element is smaller, shift all larger elements in the sorted array one position to the right.
4. Insert the current element into its correct position in the sorted array.

## Time Complexity
- Best Case: `O(n)`
- Average Case: `O(n^2)`
- Worst Case: `O(n^2)`

## Space Complexity
- `O(1)` (in-place sorting)

## Conclusion
Insertion Sort is an efficient algorithm for small data sets or nearly sorted data. However, it is not suitable for large datasets due to its quadratic time complexity.
