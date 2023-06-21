// Execute the next step of the sorting process
function nextSortStep(stepByStep) {
    if ((!isPaused || stepByStep) && currentSortGenerator) {
        setTimeout(() => {
            let result = currentSortGenerator.next();
            renderArray();
            if (!result.done) {
                document.getElementById(`bar-${result.value.current}`).style.backgroundColor = "red";
                if (result.value.compare != null) {
                    document.getElementById(`bar-${result.value.compare}`).style.backgroundColor = "green";
                }
                if (result.value.position != null) {
                    document.getElementById(`bar-${result.value.position}`).style.backgroundColor = "yellow";
                }
                if (!stepByStep) {
                    nextSortStep();
                }
            } else {
                if (!isVerifying) {
                    isVerifying = true;
                    setTimeout(() => { // Adding delay before starting verification
                        currentSortGenerator = verifySort();
                        if (!stepByStep) {
                            nextSortStep();
                        }
                    }, 100);
                }
                oscillator.stop(audioContext.currentTime);
            }
        }, stepByStep ? 1 : speed);
    }
}