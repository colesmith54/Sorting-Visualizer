function nextSortStep(stepByStep) {
    if ((!isPaused || stepByStep) && currentSortGenerator) {
        setTimeout(() => {
            let result = currentSortGenerator.next();
            renderArray();
            if (!result.done) {
                if (result.value.current != null) {
                    document.getElementById(`bar-${result.value.current}`).style.backgroundColor = "red";
                }
                if (result.value.compare != null) {
                    if (Array.isArray(result.value.compare)) {
                        for (const compareIndex of result.value.compare) {
                            if (compareIndex < size) {
                                document.getElementById(`bar-${compareIndex}`).style.backgroundColor = "green";
                            }
                        }
                    } else {
                        document.getElementById(`bar-${result.value.compare}`).style.backgroundColor = "green";
                    }
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
                    setTimeout(() => {
                        currentSortGenerator = verifySort();
                        if (!stepByStep) {
                            nextSortStep();
                        }
                    }, 100);
                }
                updateButtonState('start', 'btn btn-secondary', true, 'Start');
                updateButtonState('pause', 'btn btn-secondary', true, 'Pause');
            }
        }, stepByStep ? 1 : speed);
    }
    updatePivotLine();
}