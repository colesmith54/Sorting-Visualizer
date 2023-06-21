const descriptions = {
    'bubble': {
        description: 'Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.',
        bestTime: '\u03A9(n)',
        avgTime: '\u03B8(n^2)',
        worstTime: 'O(n^2)',
        space: 'O(1)'
    },
    'selection': {
        description: 'Selection Sort is a simple sorting algorithm that divides the input list into a sorted and an unsorted region, and repeatedly picks the smallest element from the unsorted region and moves it to the beginning of the sorted region.',
        bestTime: '\u03A9(n^2)',
        avgTime: '\u03B8(n^2)',
        worstTime: 'O(n^2)',
        space: 'O(1)'
    },
    'insertion': {
        description: 'Insertion Sort is a simple sorting algorithm that builds the final sorted list one item at a time. For each item, insertion sort will iterate back through the previous items until the correct position is found.',
        bestTime: '\u03A9(n)',
        avgTime: '\u03B8(n^2)',
        worstTime: 'O(n^2)',
        space: 'O(1)'
    },
    'minMax': {
        description: 'MinMax Sort is a comparison sorting algorithm where the maximum and minimum are found simultaneously, and then put in their proper places. The process is repeated for the remaining sublist.',
        bestTime: '\u03A9(n^2)',
        avgTime: '\u03B8(n^2)',
        worstTime: 'O(n^2)',
        space: 'O(1)'
    },
    'cocktail': {
        description: 'Cocktail Sort, also known as bidirectional bubble sort, is a variation of bubble sort. It differs in that it sorts in both directions each pass through the list, which usually results in a quicker sort.',
        bestTime: '\u03A9(n)',
        avgTime: '\u03B8(n^2)',
        worstTime: 'O(n^2)',
        space: 'O(1)'
    }

};
