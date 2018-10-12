// Game Engine
import Paddle from './paddle.js'

let canvas = document.querySelector('#gameScreen');
let ctx = canvas.getContext('2d');

const GAME_HEIGHT = 800;
const GAME_WIDTH = 600;


// clear the screen on render
ctx.clearRect(0, 0, GAME_HEIGHT, GAME_WIDTH);

// Draw things
ctx.fillStyle = '#00f';

let paddle = new Paddle(GAME_HEIGHT, GAME_WIDTH);

paddle.draw(ctx)