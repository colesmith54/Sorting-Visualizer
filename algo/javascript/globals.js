let algorithm = 'bubble'
let arrayType = 'randomWO'
let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let bars = [];
let currentSortGenerator = null;
let inputArray;
let isPaused = false;
let isVerifying = false;
let isMuted = false;
let output = [];
let size = 50;
let speed = 11.11
let verified = [];