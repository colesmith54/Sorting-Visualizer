function generateArrayByType() {
    bars = [];
    inputArray = Array.from({ length: size }, (_, i) => i + 1);
    switch (arrayType) {
        case "randomWO":
            for (let i = 1; i <= size; i++) {
                bars.push(map(i, 0, size, 1, 100));
            }
            shuffleArray();
            break;
        case "randomW":
            for (let i = 0; i < size; i++) {
                value = Math.floor(Math.random() * size + 1);
                bars.push(map(value, 0, size, 1, 100));
            }
            break;
        case "almost-sorted":
            for (let i = 1; i <= size; i++) {
                bars.push(map(i, 0, size, 1, 100));
            }
            // Swap a few neighboring bars
            for (let i = 0; i < size; i++) {
                let index = Math.floor(Math.random() * (size - 1));
                swapElements(bars, index, index + 1);
            }
            break;
        case "reverse":
            for (let i = size; i >= 1; i--) {
                bars.push(map(i, 0, size, 1, 100));
            }
            break;
        default:
            break;
    }
}


// Randomizes position of each element
function shuffleArray() {
    for (let i = bars.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        swapElements(bars, i, j);
    }
}

// Render bars array to HTML
function renderArray() {
    const visualizer = document.getElementById('visualizer');
    visualizer.innerHTML = bars.map((num, index) => `<div class="bar flex-fill" style="margin:${(-0.004 * size + 0.4).toFixed(2)}%; height:${num}%; background-color: ${verified.includes(index) ? '#FFB347' : '#007bff'};" id="bar-${index}"></div>`).join("");
}

function initializeArray(arrayType) {
    if (arrayType === 'custom') {
        return handleCustomArrayInput();
    } else {
        return handleGeneratedArrayInput();
    }
}

function updateArrayDetails() {
    bars = [];
    isPivot = false;
    initializeArray(arrayType);
    renderArray();
}

function getInputArray(arrayInputField) {
    if (arrayInputField.value !== '') {
        return arrayInputField.value.split(',').filter(item => item.trim() !== '').map(Number);
    } else {
        return [];
    }
}

function convertToBars(inputArray) {
    let bars = [];
    for (let i = 0; i < inputArray.length; i++) {
        bars.push(map(inputArray[i], 0, Math.max(...inputArray), 1, 100));
    }
    return bars;
}

function updateUI(size, isValid) {
    if (size > 1 && isValid) {
        updateButtonState('start', 'btn btn-primary', false, 'Start');
    } else {
        updateButtonState('start', 'btn btn-secondary', true, 'Start');
    }

    document.getElementById('size').disabled = true;
    document.getElementById('array-io').style.display = 'unset';
}

function handleCustomArrayInput() {
    let arrayInputField = document.getElementById('array-input');
    let inputArray = getInputArray(arrayInputField);
    let isValid = inputArray.every(Number.isFinite);
    let size = inputArray.length;

    bars = convertToBars(inputArray);
    
    if (isValid) {
        renderArray();
        document.getElementById("error").textContent = "";
    } else {
        if (size > 0) {
            document.getElementById("error").textContent = "Please enter valid numbers separated by commas.";
        }
    }

    updateUI(size, isValid);
}

function handleGeneratedArrayInput() {
    bars = [];
    size = document.getElementById('size').value;
    document.getElementById('array-io').style.display = 'none';
    updateButtonState('start', 'btn btn-primary', false, 'Start');
    generateArrayByType();
}
