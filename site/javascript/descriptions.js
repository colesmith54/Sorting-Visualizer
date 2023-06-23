const descriptions = {
    'bubble': {
        description: 'Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.',
        bestTime: 'n',
        avgTime: 'n^2',
        worstTime: 'n^2',
        space: '1'
    },
    'selection': {
        description: 'Selection Sort is a simple sorting algorithm that divides the input list into a sorted and an unsorted region, and repeatedly picks the smallest element from the unsorted region and moves it to the beginning of the sorted region.',
        bestTime: 'n^2',
        avgTime: 'n^2',
        worstTime: 'n^2',
        space: '1'
    },
    'insertion': {
        description: 'Insertion Sort is a simple sorting algorithm that builds the final sorted list one item at a time. For each item, insertion sort will iterate back through the previous items until the correct position is found.',
        bestTime: 'n',
        avgTime: 'n^2',
        worstTime: 'n^2',
        space: '1'
    },
    'minMax': {
        description: 'MinMax Sort is a comparison sorting algorithm where the maximum and minimum are found simultaneously, and then put in their proper places. The process is repeated for the remaining sublist.',
        bestTime: 'n^2',
        avgTime: 'n^2',
        worstTime: 'n^2',
        space: '1'
    },
    'cocktail': {
        description: 'Cocktail Sort, also known as bidirectional bubble sort, is a variation of bubble sort. It differs in that it sorts in both directions each pass through the list, which usually results in a quicker sort.',
        bestTime: 'n',
        avgTime: 'n^2',
        worstTime: 'n^2',
        space: '1'
    },
    'heap': {
        description: 'Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. The algorithm orders the elements by first building a max heap and then repeatedly extracts the maximum from the heap and swaps it with the last unsorted element, reducing the size of the heap by one each time.',
        bestTime: 'n log(n)',
        avgTime: 'n log(n)',
        worstTime: 'n log(n)',
        space: '1'
    },
    'quick': {
        description: 'Quick Sort is an efficient, recursive, comparison-based sorting algorithm. It operates by dividing the input into two smaller arrays around a chosen pivot element. The process is then repeated for the smaller arrays.',
        bestTime: 'n log(n)',
        avgTime: 'n log(n)',
        worstTime: 'n^2',
        space: 'log(n)'
    },
    'merge': {
        description: 'Merge Sort is an efficient, stable, comparison-based sorting algorithm. It operates by dividing the unsorted list into n sublists, each containing one element, and then repeatedly merging sublists to produce newly sorted sublists until there is only one sublist remaining. This process results in a list that is sorted.',
        bestTime: 'n log(n)',
        avgTime: 'n log(n)',
        worstTime: 'n log(n)',
        space: 'n'
    }
};