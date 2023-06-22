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
}`,
    'selection': `function selectionSort(arr) {

    const len = arr.length;

    for(let i = 0; i < len; i++) {

        // Assume the minimum is the first element
        let min = i;

        for (let j = i + 1; j < len; j++) {

            // Check for new minimum value
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        // Swap min element into position
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    return arr;
}`,

'insertion': `function insertionSort(arr) {

    const len = arr.length;

    // Loop through every element
    for(let i = 1; i < len; i++) {

        let j = i;

        // Swap adjacent elements until the correct 
        // position is found for the current item
        while (j > 0 && arr[j - 1] > arr[j]) {
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j--;
        }
    }

    return arr;
}`,

'minMax': `function minmaxSort(arr) {

    const len = arr.length;

    for(let i = 0; i < Math.floor(len/2); i++) {

        let min = i, max = i;

        for(let j = i + 1; j < len - i; j++) {

            if(arr[j] < arr[min]) {
                min = j;
            }
            if(arr[j] > arr[max]) {
                max = j;
            }
        }

        // Swap min and max into place
        if(min != i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
        // If max was moved when min was moved, update its index
        if(max === i) {
            max = min;
        }
        if(max != len - i - 1) {
            let temp = arr[len - i - 1];
            arr[len - i - 1] = arr[max];
            arr[max] = temp;
        }
    }

    return arr;
}`,
'cocktail': `function cocktailSort(arr) {

    const len = arr.length;

    let swapped = true;

    while(swapped) {

        swapped = false;

        // Forward pass
        for(let i = 0; i < len; i++) {
            if(arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }

        if(!swapped) {
            break;
        }

        swapped = false;
        end--;

        // Backward pass
        for(let i = len - 1; i >= 0; i--) {
            if(arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }

        start++;
    }

    return arr;
}`,
'heap': `function heapSort(arr) {

    const len = arr.length;

    // Function to heapify a subtree rooted at node i
    function heapify(i, size) {
        let max = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < size && arr[left] > arr[max]) {
            max = left;
        }

        if (right < size && arr[right] > arr[max]) {
            max = right;
        }

        if (max != i) {
            let temp = arr[i];
            arr[i] = arr[max];
            arr[max] = temp;

            // Recursively heapify the affected subtree
            heapify(max, size);
        }
    }

    // Build the max heap (rearrange the array)
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        heapify(i, len);
    }

    // Extract elements from heap one by one
    for (let i = len - 1; i >= 0; i--) {
        // Move current root to the end
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // Call heapify on the reduced heap
        heapify(0, i);
    }

    return arr;
}`,
'quick': `function quickSort(arr) {
    function partition(start, end) {
        let pivotValue = arr[end];
        let pivotIndex = start;

        for (let i = start; i < end; i++) {
            if (arr[i] < pivotValue) {
                // Swap elements at indices i and pivotIndex
                let temp = arr[i];
                arr[i] = arr[pivotIndex];
                arr[pivotIndex] = temp;
                pivotIndex++;
            }
        }

        // Swap pivot element with element on pivot index
        let temp = arr[end];
        arr[end] = arr[pivotIndex];
        arr[pivotIndex] = temp;

        return pivotIndex;
    }

    function quickSortHelper(start, end) {
        if (start < end) {
            let pivotIndex = partition(start, end);

            // Recursively call the helper for elements on
            // the left of pivot and on the right of pivot
            quickSortHelper(start, pivotIndex - 1);
            quickSortHelper(pivotIndex + 1, end);
        }
    }

    quickSortHelper(0, arr.length - 1);
    return arr;
}
// Always using the end element can produce consistently
// bad pivots when the array is already almost sorted.
// See optimized code for use of the median element as a pivot.`
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
} 
// See "Cocktail Sort" for more optimization`,
'selection': `// see "Minmax Sort"
// see "Heap Sort"`,

'insertion': `function insertionSort(arr) {

    const len = arr.length;

    for (let i = 1; i < len; i++) {

        // Store the current value so it can be placed correctly
        let current = arr[i];

        // Instead of swapping every time, find the
        // correct location and then perform the swap
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place the current item in the correct spot
        arr[j + 1] = current;
    }
    return arr;
}`,
'minMax': `// See "Heap Sort"`,
'cocktail': `function optimizedCocktailSort(arr) {

    const len = arr.length;

    // Optimized by remembering which elements are
    // already sorted, as to not pass over them again
    let start = 0;
    let end = len - 1;
    let swapped = true;

    while(swapped) {

        swapped = false;

        // Forward pass
        for(let i = start; i < end; i++) {
            if(arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }

        if(!swapped) {
            break;
        }

        swapped = false;
        end--;

        // Backward pass
        for(let i = end - 1; i >= start; i--) {
            if(arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }

        start++;
    }

    return arr;
}`,
'heap': `// Only minor optimizations with context`,
'quick': `function optimizedQuickSort(arr) {
    function medianOfThree(a, b, c) {
        if ((arr[a] - arr[b]) * (arr[c] - arr[a]) >= 0) {
            return a;
        } else if ((arr[b] - arr[a]) * (arr[c] - arr[b]) >= 0) {
            return b;
        } else {
            return c;
        }
    }

    function partition(start, end) {
        let mid = Math.floor((start + end) / 2);
        let pivotIndex = medianOfThree(start, mid, end);
        let pivotValue = arr[pivotIndex];

        // Move the pivot to the end
        [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
        pivotIndex = start;

        for (let i = start; i < end; i++) {
            if (arr[i] < pivotValue) {
                [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
                pivotIndex++;
            }
        }

        // Move pivot to its final place
        [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
        return pivotIndex;
    }

    function quickSortHelper(start, end) {
        if (start >= end) {
            return;
        }

        let pivotIndex = partition(start, end);

        quickSortHelper(start, pivotIndex - 1);
        quickSortHelper(pivotIndex + 1, end);
    }

    quickSortHelper(0, arr.length - 1);
    return arr;
}`
}