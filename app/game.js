// Game Engine
import Paddle from '/app/paddle.js'

let canvas = document.querySelector('#gameScreen');
let ctx = canvas.getContext('2d');

const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;


// clear the screen on render
ctx.clearRect(0, 0, 800, 600);

// Draw things
ctx.fillStyle = '#00f';

let paddle = new Paddle(GAME_HEIGHT, GAME_WIDTH);

paddle.draw(ctx)