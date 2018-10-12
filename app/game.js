// Game Engine

let canvas = document.querySelector('#gameScreen');
let ctx = canvas.getContext('2d');

const GAME_HEIGHT = 800;
const GAME_WIDTH = 600;


// clear the screen on render
ctx.clearRect(0, 0, GAME_HEIGHT, GAME_WIDTH);

// Draw things
