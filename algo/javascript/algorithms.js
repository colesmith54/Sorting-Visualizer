const swapElements = (arr, idx1, idx2) => {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
};

// Bubble sort algorithm
function* bubbleSort() {
    const len = bars.length;
    for (let i = 0; i < len; i++) {
        let swapped = true;
        for (let j = 0; j < len - i - 1; j++) {
            playSound((bars[j] + bars[j + 1]) / 2);
            yield { current: j, compare: j + 1 };
            if (bars[j] > bars[j + 1]) {
                swapped = true;
                swapElements(bars, j, j+1);
            }
        }
        handleVerifiedBar(len - i - 1);
        if (!swapped) {
            break;
        }
    }
}

// Cocktail sort algorithm
function* cocktailSort() {
    const len = bars.length;
    let start = 0;
    let end = len - 1;
    let swapped = true;
    
    while (swapped) {
        for (let i = start; i < end; i++) {
            playSound((bars[i] + bars[i + 1]) / 2);
            yield { current: i, compare: i + 1 };
            if (bars[i] > bars[i + 1]) {
                swapped = true;
                swapElements(bars, i, i+1);
            }
        }
        handleVerifiedBar(end);

        if (!swapped) {
            break;
        }

        swapped = false;
        end--;
        for (let i = end - 1; i >= start; i--) {
            playSound((bars[i] + bars[i + 1]) / 2);
            yield { current: i + 1, compare: i };
            if (bars[i] > bars[i + 1]) {
                swapElements(bars, i, i+1);
                swapped = true;
            }
        }
        handleVerifiedBar(start);
        start++;
    }
}

// Selection sort algorithm
function* selectionSort() {
    const len = bars.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            yield { current: j, compare: min };
            if (bars[min] > bars[j]) {
                min = j;
            }
            playSound((bars[min] + bars[j]) / 2);
        }
        if (min !== i) {
            swapElements(bars, i, min);
        }
        handleVerifiedBar(i);
        playSound((bars[i] + bars[min]) / 2);
        yield { current: i, compare: min };
    }
}

// Minmax sort algorithm
function* minMaxSort() {
    const len = bars.length;
    for (let i = 0; i < len / 2; i++) {
        let min = i, max = i;
        for (let j = i + 1; j < len - i; j++) {
            playSound((bars[j] + bars[min]) / 2);
            yield { current: j, compare: [min, max] };
            if (bars[j] < bars[min]) {
                min = j;
            }
            if (bars[j] > bars[max]) {
                max = j;
            }
        }
        if (min != i) {
            swapElements(bars, i, min);
        }

        // update max index if it was swapped when min was moved
        if (max === i) {
            max = min;
        }
        handleVerifiedBar(i);
        if (max != len - i - 1) {
            swapElements(bars, len - i - 1, max);
        }
        handleVerifiedBar(len - i - 1);
    }
}

// Insertion sort algorithm
function* insertionSort() {
    const len = bars.length;
    for (let i = 1; i < len; i++) {
        let key = i;
        let keybar = bars[i];
        let j = i - 1;

        while (j >= 0 && bars[j] > keybar) {
            playSound((bars[key] + bars[j]) / 2);
            if (key !== i) {
                yield { current: key, compare: j, position: i };
            } else {
                yield { current: key, compare: j };
            }
            swapElements(bars, key, j);
            key--;
            j--;
        }

        if (j >= 0) {
            playSound((bars[key] + bars[j]) / 2);
            yield { current: key, compare: j, position: i };
        }
        bars[j + 1] = keybar;
    }
}

function* heapify(n, i) {
    let max = i;
    let leftChild = 2 * i + 1;
    let rightChild = 2 * i + 2;

    // If left child is larger than root
    if (leftChild < n && bars[leftChild] > bars[max]) {
        max = leftChild;
    }

    // If right child is larger than max
    if (rightChild < n && bars[rightChild] > bars[max]) {
        max = rightChild;
    }

    // If max is not root
    if (max !== i) {
        swapElements(bars, i, max);
        playSound((bars[i] + bars[leftChild]) / 2);
        yield { current: i, compare: [leftChild, rightChild] };

        // Heapify the affected sub-tree
        yield* heapify(n, max);
    }
}

function* heapSort() {
    const len = bars.length;
    // Build max heap
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        yield* heapify(len, i);
    }
    
    // Heap sort
    for (let i = len - 1; i >= 0; i--) {
        swapElements(bars, 0, i);
        handleVerifiedBar(i);
        yield* heapify(i, 0);
    }
}

function medianOfThree(a, b, c) {
    if ((bars[a] - bars[b]) * (bars[c] - bars[a]) >= 0) {
        return a;
    } else if ((bars[b] - bars[a]) * (bars[c] - bars[b]) >= 0) {
        return b;
    } else {
        return c;
    }
}

function* quickSortHelper(start, end) {
    if (start >= end) {
        if (start == end) {
            handleVerifiedBar(start);
        }
        return;
    }

    let mid = Math.floor((start + end) / 2);
    let pivotIndex = medianOfThree(start, mid, end);
    let pivotValue = bars[pivotIndex];

    // Move the pivot to the end
    swapElements(bars, pivotIndex, end);
    pivotIndex = start;
    indexPivot = end;

    for (let i = start; i < end; i++) {
        playSound((bars[i] + bars[end]) / 2);
        yield { current: i, compare: end, position: pivotIndex };
        if (bars[i] < pivotValue) {
            swapElements(bars, i, pivotIndex);
            pivotIndex++;
        }
    }

    swapElements(bars, pivotIndex, end);
    handleVerifiedBar(pivotIndex); // Pivot is at its correct position now

    if (pivotIndex > 0) {
        yield* quickSortHelper(start, pivotIndex - 1);
    }
    if (pivotIndex < end) {
        yield* quickSortHelper(pivotIndex + 1, end);
    }
}

function* quickSort() {
    yield* quickSortHelper(0, bars.length - 1);
}

function* verifySort() {
    const len = bars.length;
    for (let i = 0; i < len - 1; i++) {
        playSound((bars[i] + bars[i + 1]) / 2);
        yield { current: i, compare: i + 1 };
        if (bars[i] <= bars[i + 1]) {
            handleVerifiedBar(i);
            if (i === len - 2) {
                handleVerifiedBar(i + 1);
            }
        }
    }
}
