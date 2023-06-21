// Event listener for algorithm selection
document.getElementById('algorithm').addEventListener('change', function () {
    updateAlgorithmDetails(this.value);
});

// Event listener for array-type selection
document.getElementById('array-type').addEventListener('change', function () {
    bars = [];
    if (this.value === 'custom') {
        inputArray = document.getElementById('array-input').value.split(',').map(Number);
        if (document.getElementById('array-input').value != '') {
            for (let i = 0; i < size; i++) {
                bars.push(map(inputArray[i], Math.min(...inputArray), Math.max(...inputArray), 5, 100));
            }
        }
        document.getElementById('size').disabled = true;
        document.getElementById('array-io').style.display = 'unset';
    } else {
        bars = [];
        document.getElementById('array-io').style.display = 'none';
        generateArrayByType();
    }
    renderArray();
});


// Event listeners for buttons
document.getElementById('start').addEventListener('click', function () {
    algorithm = document.getElementById('algorithm').value;
    if (!currentSortGenerator) {
        if (algorithm === 'bubble') currentSortGenerator = bubbleSort();
        if (algorithm === 'selection') currentSortGenerator = selectionSort();
        if (algorithm === 'insertion') currentSortGenerator = insertionSort();

        this.className = 'btn btn-secondary';
        this.disabled = true;

        document.getElementById('pause').innerText = 'Pause';
        document.getElementById('pause').disabled = false;
        document.getElementById('pause').className = 'btn btn-warning';

        document.getElementById('algorithm').disabled = true;
        document.getElementById('array-type').disabled = true;
        document.getElementById('size').disabled = true;

        nextSortStep();
    } else if (isPaused) {
        isPaused = false;
        this.innerText = 'Start';
        this.className = 'btn btn-primary';
        nextSortStep();
    }
});

document.getElementById('pause').addEventListener('click', function () {
    if (!isPaused) {
        isPaused = true;
        this.innerText = 'Next';
        document.getElementById('start').innerText = 'Resume';
        document.getElementById('start').className = 'btn btn-success';
        document.getElementById('start').disabled = false;
    } else {
        nextSortStep(true);
    }
});

document.getElementById('reset').addEventListener('click', function () {
    verified = [];
    bars = [];
    output = [];

    if (document.getElementById('array-type').value === 'custom') {
        size = inputArray.length;
        for (let i = 0; i < size; i++) {
            bars.push(map(inputArray[i], Math.min(...inputArray), Math.max(...inputArray), 5, 100));
        }
    } else {
        inputArray = [];
        generateArrayByType();
    }

    renderArray();

    document.getElementById('start').innerText = 'Start';
    document.getElementById('start').className = 'btn btn-primary';
    document.getElementById('start').disabled = false;

    document.getElementById('pause').innerText = 'Pause';
    document.getElementById('pause').disabled = true;
    document.getElementById('pause').className = 'btn btn-secondary';

    document.getElementById('array-output').value = "";

    document.getElementById('algorithm').disabled = false;
    document.getElementById('array-type').disabled = false;
    document.getElementById('size').disabled = false;

    currentSortGenerator = null;
    isPaused = false;
    isVerifying = false;
});

// Change the speed of the sorting process
document.getElementById('speed').addEventListener('input', function () {
    speed = 1000 / (0.01 * this.value + 1) - 100;
});

document.getElementById('size').addEventListener('input', function () {
    size = this.value;
    generateArrayByType();
    renderArray();
});

document.getElementById('mute-button').addEventListener('click', function () {
    isMuted = !isMuted;

    if (isMuted) {
        this.innerHTML = mutedIcon;
    } else {
        this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" fill="currentColor" class="bi bi-volume-up" viewBox="0 0 16 16">
            <path
                d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
            <path
                d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
            <path
                d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z" />
        </svg>`
    }
});

document.getElementById("array-input").addEventListener("input", function() {

    inputArray = this.value.split(',').map(Number);
    let isValid = inputArray.every(Number.isFinite);
    bars = [];

    if (isValid) {
        size = inputArray.length;
        for (let i = 0; i < size; i++) {
            bars.push(map(inputArray[i], Math.min(...inputArray), Math.max(...inputArray), 5, 100));
        }
        renderArray();
        document.getElementById("error").textContent = "";
    } else {
        document.getElementById("error").textContent = "Please enter valid numbers separated by commas.";
    }
});

document.getElementById('copy-code').addEventListener('click', function () {
    navigator.clipboard.writeText(algoSortCode[algorithm]);
});

document.getElementById('copy-optimized-code').addEventListener('click', function () {
    navigator.clipboard.writeText(optimizedAlgoSortCode[algorithm]);
});

// Default algorithm details and array generation on page load
window.onload = function () {
    updateAlgorithmDetails('bubble');
    generateArrayByType();
    shuffleArray();
    renderArray();

    document.getElementById('pause').disabled = true;
    document.getElementById('pause').className = 'btn btn-secondary';
};