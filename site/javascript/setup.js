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
        cocktail: cocktailSort,
        selection: selectionSort,
        minMax: minMaxSort,
        insertion: insertionSort,
        heap: heapSort,
        quick: quickSort
    };
}

function setupPivotLine() {
    pivotLine.id = "pivot-line" 
    pivotLine.style = "position: absolute; width: 100%; border-top: 1px dashed;"
}

window.onload = function () {
    setupAudio();
    setupSortGenerators();
    setupPivotLine();
    updateAlgorithmDetails('bubble');
    generateArrayByType();
    shuffleArray();
    renderArray();
    updateButtonState('pause', 'btn btn-secondary', true, 'Pause');
};