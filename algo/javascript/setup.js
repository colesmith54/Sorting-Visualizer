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
        heap: heapSort
    };
}

window.onload = function () {
    setupAudio();
    setupSortGenerators();
    updateAlgorithmDetails('bubble');
    generateArrayByType();
    shuffleArray();
    renderArray();
    updateButtonState('pause', 'btn btn-secondary', true, 'Pause');
};