function updateComplexityCell(cell, complexity) {
    cell.innerText = `O(${complexity})`;
    switch (complexity) {
        case '1':
            cell.style.border = '2px solid #008000';
            break;
        case 'log n':
            cell.style.border = '2px solid #ADFF2F';
            break;
        case 'n':
            cell.style.border = '2px solid #FFD700';
            break;
        case 'n log(n)':
            cell.style.border = '2px solid #FF8C00';
            break;
        case 'n^2':
        default:
            cell.style.border = '2px solid red';
            break;
    }
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