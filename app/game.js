// Game Engine

let canvas = document.querySelector('#gameScreen');
let ctx = canvas.getContext('2d');

// clear the screen on render
ctx.clearRect(0, 0, 600, 600);

// Draw things
ctx.fillRect(20, 20, 100, 100)