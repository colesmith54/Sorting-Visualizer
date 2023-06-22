const COMPLEXITY_COLORS = {
    '1': '#3CB043',
    'log(n)': '#ADFF2F',
    'n': '#FFD700',
    'n log(n)': '#FF8C00',
    'n^2': 'red'
};

function updateComplexityCell(cell, complexity) {
    cell.innerText = `O(${complexity})`;
    cell.style.border = `2px solid ${COMPLEXITY_COLORS[complexity] || COMPLEXITY_COLORS['n^2']}`;
}


function adjustBorder(firstElement, secondElement) {
    if (firstElement.style.borderColor === secondElement.style.borderColor) {
        firstElement.style.borderRightWidth = "1px";
        secondElement.style.borderLeftWidth = "1px";
    } else {
        firstElement.style.borderRightWidth = "2px";
        secondElement.style.borderLeftWidth = "2px";
    }
}

function updateAlgorithmDetails(algorithmKey) {
    const algorithmInfo = descriptions[algorithmKey];
    if (algorithmInfo) {
        document.getElementById('algorithm-title').innerText = `${algorithmKey.charAt(0).toUpperCase()}${algorithmKey.slice(1)} Sort`;
        document.getElementById('algorithm-description').innerText = algorithmInfo.description;

        const bestCaseElement = document.getElementById('best-case');
        const averageCaseElement = document.getElementById('average-case');
        const worstCaseElement = document.getElementById('worst-case');
        const spaceComplexityElement = document.getElementById('space-complexity');

        updateComplexityCell(bestCaseElement, algorithmInfo.bestTime);
        updateComplexityCell(averageCaseElement, algorithmInfo.avgTime);
        updateComplexityCell(worstCaseElement, algorithmInfo.worstTime);
        updateComplexityCell(spaceComplexityElement, algorithmInfo.space);

        adjustBorder(bestCaseElement, averageCaseElement);
        adjustBorder(averageCaseElement, worstCaseElement);
        adjustBorder(worstCaseElement, spaceComplexityElement);

        updateCodeDisplay('#code code', algoSortCode[algorithmKey]);
        updateCodeDisplay('#optimized-code code', optimizedAlgoSortCode[algorithmKey]);

        updatePivotLine();
    }
}

function updateCodeDisplay(selector, code) {
    let codeElement = document.querySelector(selector);
    codeElement.innerHTML = code;
    Prism.highlightElement(codeElement);
}

function printOutput(index) {
    sortedInput = inputArray.sort((a, b) => a - b)
    output[index] = sortedInput[index];
    document.getElementById('array-output').value = output.join(", ");
}

function handleVerifiedBar(index) {
    verified.push(index);
    printOutput(index);
}

function updatePivotLine() {
    const visualizer = document.getElementById('visualizer');
    if (isRunning && document.getElementById('algorithm').value === 'quick' && !isVerifying) {
        const barElements = document.getElementsByClassName('bar');
        const correspondingBar = barElements[indexPivot];
        const pivotLineHeight = pivotLine.offsetHeight;
        const pivotLinePosition = correspondingBar.offsetTop - pivotLineHeight;

        pivotLine.style.top = `${pivotLinePosition}px`;
        pivotLine.style.width = `${visualizer.offsetWidth - 40}px`;

        visualizer.appendChild(pivotLine);
    } else {
        if (visualizer.contains(pivotLine)) {
            visualizer.removeChild(pivotLine);
        }
    }
}