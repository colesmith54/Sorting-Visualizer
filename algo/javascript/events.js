// Event handlers for buttons
function startButtonHandler() {
    algorithm = document.getElementById('algorithm').value;
    if (!currentSortGenerator) {
        currentSortGenerator = sortGenerators[algorithm]();
        updateButtonState('pause', 'btn-warning', false, 'Pause');
        disableInputs(true);
        nextSortStep();
    } else if (isPaused) {
        isPaused = false;
        nextSortStep();
    }
    updateButtonState('start', 'btn-primary', true, 'Start');
    updateButtonState('pause', 'btn-warning', false, 'Pause');
}

function pauseButtonHandler() {
    if (!isPaused) {
        isPaused = true;
        updateButtonState('pause', 'btn-warning', false, 'Next');
        updateButtonState('start', 'btn-success', false, 'Resume');
    } else {
        nextSortStep(true);
    }
}

function resetButtonHandler() {

    verified = [];
    bars = [];
    output = [];

    currentSortGenerator = null;
    isPaused = false;
    isVerifying = false;

    updateArrayDetails();
    updateButtonState('start', 'btn btn-primary', false, 'Start');
    updateButtonState('pause', 'btn btn-secondary', true, 'Pause');
    disableInputs(false);
    document.getElementById('array-output').value = "";
}

// Helper function to update button state
function updateButtonState(buttonid, className, disabled, innerText) {
    let btn = document.getElementById(buttonid);
    btn.className = `btn ${className}`;
    btn.disabled = disabled;
    btn.innerText = innerText;
}

// Helper function to disable inputs
function disableInputs(isDisable) {
    document.getElementById('algorithm').disabled = isDisable;
    document.getElementById('array-type').disabled = isDisable;
    document.getElementById('size').disabled = isDisable;
}

function muteButtonHandler() {
    isMuted = !isMuted;
    this.innerHTML = isMuted ? mutedIcon : volumeUpIcon;
}

function arrayInputHandler() {
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
}

// Event listeners
document.getElementById('algorithm').addEventListener('change', function () {
    updateAlgorithmDetails(this.value);
});

document.getElementById('array-type').addEventListener('change', function () {
    arrayType = this.value;
    updateArrayDetails();
});

document.getElementById('start').addEventListener('click', startButtonHandler);
document.getElementById('pause').addEventListener('click', pauseButtonHandler);
document.getElementById('reset').addEventListener('click', resetButtonHandler);
document.getElementById('speed').addEventListener('input', function () {
    speed = 1000 / (0.01 * this.value + 1) - 100;
});
document.getElementById('size').addEventListener('input', function () {
    size = this.value;
    generateArrayByType();
    renderArray();
});
document.getElementById('mute-button').addEventListener('click', muteButtonHandler);
document.getElementById("array-input").addEventListener("input", arrayInputHandler);
document.getElementById('copy-code').addEventListener('click', function () {
    navigator.clipboard.writeText(algoSortCode[algorithm]);
});
document.getElementById('copy-optimized-code').addEventListener('click', function () {
    navigator.clipboard.writeText(optimizedAlgoSortCode[algorithm]);
});

window.addEventListener('load', function () {
    updateAlgorithmDetails('bubble');
    generateArrayByType();
    shuffleArray();
    renderArray();
    updateButtonState('pause', 'btn btn-secondary', true, 'Pause');
});