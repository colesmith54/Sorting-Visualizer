let algorithm = 'bubble'
let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let bars = [];
let currentSortGenerator = null;
let isPaused = false;
let isVerifying = false;
let isMuted = false;
let size = 50;
let speed = 11.11
let verified = [];

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
        description: 'Insertion Sort is a simple sorting algorithm that builds the final sorted list one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.',
        bestTime: '\u03A9(n)',
        avgTime: '\u03B8(n^2)',
        worstTime: 'O(n^2)',
        space: 'O(1)'
    }
};

const algoSortCode = {
    'bubble': `function bubbleSort(arr) {

    // Calculate length first rather than
    // recalulating for each iteration
    const len = arr.length;

    for (let i = 0; i < len; i++) {

        for (var j = 0; j < len - i - 1; j++) {

            // Compare each block with its adjacent block
            if (arr[j] > arr[j + 1]) {

                //Swap the two elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}`
}

const optimizedAlgoSortCode = {
    'bubble': `function optimizedBubbleSort(arr){
    
    const len = arr.length;
    
    // Stops sorting once no swaps are made
    // for one whole iteration of the array
    do {

        // Using 'var' instead of 'let' to
        // avoid error in while condition
        var swapped = false;

        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true
            }
        }
    } while (swapped)
    return arr;
}`
}