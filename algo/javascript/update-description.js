// Function to update algorithm details
function updateAlgorithmDetails(algorithmKey) {
    if (descriptions[algorithmKey]) {
        document.getElementById('algorithm-title').innerText = algorithmKey.charAt(0).toUpperCase() + algorithmKey.slice(1) + ' Sort';
        document.getElementById('algorithm-description').innerText = descriptions[algorithmKey].description;
        document.getElementById('best-case').innerText = descriptions[algorithmKey].bestTime;
        document.getElementById('average-case').innerText = descriptions[algorithmKey].avgTime;
        document.getElementById('worst-case').innerText = descriptions[algorithmKey].worstTime;
        document.getElementById('space-complexity').innerText = descriptions[algorithmKey].space;

        let codeElement = document.querySelector('#code code');
        codeElement.innerHTML = algoSortCode[algorithmKey];
        Prism.highlightElement(codeElement);

        let optCodeElement = document.querySelector('#optimized-code code');
        optCodeElement.innerHTML = optimizedAlgoSortCode[algorithmKey];
        Prism.highlightElement(optCodeElement);
    }
}

// Event listener for algorithm selection
document.getElementById('algorithm').addEventListener('change', function () {
    updateAlgorithmDetails(this.value);
});

// Default algorithm details on page load
window.onload = updateAlgorithmDetails('bubble');
