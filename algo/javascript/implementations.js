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
} 
//see "Cocktail Sort" for more optimization`,
    'selection': `see "Minmax Sort"`,

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
}`
}