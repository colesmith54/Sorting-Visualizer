function updateAlgorithmDetails(algorithmKey) {
    const algorithmInfo = descriptions[algorithmKey];
    if (algorithmInfo) {
        document.getElementById('algorithm-title').innerText = `${algorithmKey.charAt(0).toUpperCase()}${algorithmKey.slice(1)} Sort`;
        document.getElementById('algorithm-description').innerText = algorithmInfo.description;
        document.getElementById('best-case').innerText = algorithmInfo.bestTime;
        document.getElementById('average-case').innerText = algorithmInfo.avgTime;
        document.getElementById('worst-case').innerText = algorithmInfo.worstTime;
        document.getElementById('space-complexity').innerText = algorithmInfo.space;

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