// Bubble sort algorithm
function* bubbleSort() {
    let len = bars.length;
    for (let i = 0; i < len; i++) {
        swaps = 0;
        for (let j = 0; j < len - i - 1; j++) {
            playSound((bars[j] + bars[j + 1]) / 2);
            yield { current: j, compare: j + 1 };
            if (bars[j] > bars[j + 1]) {
                // swap
                swaps += 1;
                let tmp = bars[j];
                bars[j] = bars[j + 1];
                bars[j + 1] = tmp;
            }
        }
        verified.push(len - i - 1);
        if (swaps === 0) {
            break;
        }
    }
}

// Selection sort algorithm
function* selectionSort() {
    let len = bars.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            yield { current: min, compare: j };
            if (bars[min] > bars[j]) {
                min = j;
            }
            playSound((bars[min] + bars[j]) / 2);
        }
        if (min !== i) {
            let tmp = bars[i];
            bars[i] = bars[min];
            bars[min] = tmp;
        }
        verified.push(i);
        playSound((bars[i] + bars[min]) / 2);
        yield { current: i, compare: min };
    }
}

// Insertion sort algorithm
function* insertionSort() {
    let len = bars.length;
    for (let i = 1; i < len; i++) {
        let key = i
        let keybar = bars[i];
        let j = i - 1;

        while (j >= 0 && bars[j] > keybar) {

            playSound((bars[key] + bars[j]) / 2);
            if (key !== i) {
                yield { current: key, compare: j, position: i };
            } else {
                yield { current: key, compare: j };
            }

            let tmp = bars[key];
            bars[key] = bars[j];
            bars[j] = tmp;

            key = key - 1;
            j = j - 1;
        }

        if (j >= 0) {
            playSound((bars[key] + bars[j]) / 2);
            yield { current: key, compare: j, position: i };
        }

        bars[j + 1] = keybar;
    }
}

function* verifySort() {
    let len = bars.length;
    for (let i = 0; i < len - 1; i++) {
        playSound((bars[i] + bars[i + 1]) / 2);
        yield { current: i, compare: i + 1 };
        if (bars[i] <= bars[i + 1]) {
            verified.push(i)
            if (i === len - 2) {
                verified.push(i + 1);
            }
        }
    }
}