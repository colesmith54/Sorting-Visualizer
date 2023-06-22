const COLORS = {
    CURRENT: "red",
    COMPARE: "green",
    POSITION: "yellow"
};

function setColorToBar(index, color) {
    const bar = document.getElementById(`bar-${index}`);
    if (bar) {
        bar.style.backgroundColor = color;
    }
}

function updateBarColors(selectedBars) {
    if (selectedBars.value.current != null) {
        setColorToBar(selectedBars.value.current, COLORS.CURRENT);
    }
    if (selectedBars.value.compare != null) {
        if (Array.isArray(selectedBars.value.compare)) {
            for (const compareIndex of selectedBars.value.compare) {
                if (compareIndex < size) {
                    setColorToBar(selectedBars.value.compare, COLORS.COMPARE);
                }
            }
        } else {
            setColorToBar(selectedBars.value.compare, COLORS.COMPARE);
        }
    }
    if (selectedBars.value.position != null) {
        setColorToBar(selectedBars.value.position, COLORS.POSITION);
    }
}


function nextSortStep(stepByStep) {
    if ((!isPaused || stepByStep) && currentSortGenerator) {
        setTimeout(() => {
            let result = currentSortGenerator.next();
            renderArray();
            updatePivotLine();
            if (!result.done) {
                updateBarColors(result);
                if (!stepByStep) {
                    nextSortStep();
                }
            } else {
                finalizeSort(stepByStep);
            }
        }, stepByStep ? 1 : speed);
    }
}

function finalizeSort(step) {
    isRunning = false;
    if (!isVerifying) {
        isVerifying = true;
        setTimeout(() => {
            currentSortGenerator = verifySort();
            if (!step) {
                nextSortStep();
            }
        }, 100);
    }
    updateButtonState('start', 'btn btn-secondary', true, 'Start');
    updateButtonState('pause', 'btn btn-secondary', true, 'Pause');
}