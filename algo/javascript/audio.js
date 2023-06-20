function playSound(height) {
    if (isMuted) {
        return;
    }

    let oscillator = audioContext.createOscillator();
    let gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'sine';
    let frequency = map(height, 0, 100, 100, 1500);
    oscillator.frequency.value = frequency;

    gainNode.gain.setValueAtTime(0.002, audioContext.currentTime); // start at zero
    gainNode.gain.exponentialRampToValueAtTime(0.2, audioContext.currentTime + 0.01); // fade in

    oscillator.start(audioContext.currentTime);

    // make sure the fade out starts after the fade in has completed
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime + 0.01); // maintain full volume
    gainNode.gain.exponentialRampToValueAtTime(0.002, audioContext.currentTime + 0.03); // fade out

    // stop the oscillator a bit after the fade out has completed
    oscillator.stop(audioContext.currentTime + 0.04);
}

function map(value, start1, stop1, start2, stop2) {
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}
