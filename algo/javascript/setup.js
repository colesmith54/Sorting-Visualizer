function setupAudio() {
    audioContext = new AudioContext();
    oscillator = audioContext.createOscillator();
    gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
}

function setupSortGenerators() {
    sortGenerators = {
        bubble: bubbleSort,
        selection: selectionSort,
        insertion: insertionSort
    };
}

// Function to update array details on array-type selection
function updateArrayDetails() {
    bars = [];
    if (arrayType === 'custom') {
        handleCustomArrayInput();
    } else {
        handleGeneratedArrayInput();
    }
    renderArray();
}

// Handle Custom Array Input
function handleCustomArrayInput() {
    inputArray = document.getElementById('array-input').value.split(',').map(Number);
    if (document.getElementById('array-input').value != '') {
        for (let i = 0; i < size; i++) {
            bars.push(map(inputArray[i], Math.min(...inputArray), Math.max(...inputArray), 5, 100));
        }
    }
    document.getElementById('size').disabled = true;
    document.getElementById('array-io').style.display = 'unset';
}

// Handle Generated Array Input
function handleGeneratedArrayInput() {
    bars = [];
    document.getElementById('array-io').style.display = 'none';
    generateArrayByType();
}

window.onload = function () {
    setupAudio();
    setupSortGenerators();
    updateAlgorithmDetails('bubble');
    generateArrayByType();
    shuffleArray();
    renderArray();
    document.getElementById('pause').disabled = true;
    document.getElementById('pause').className = 'btn btn-secondary';
};