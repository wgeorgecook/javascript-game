// Game Engine
import Paddle from '/app/paddle.js';
import InputHandler from '/app/input.js';
import Ball from '/app/ball.js';

let canvas = document.querySelector('#gameScreen');
let ctx = canvas.getContext('2d');

const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;


let paddle = new Paddle(GAME_HEIGHT, GAME_WIDTH);
let ball = new Ball();

paddle.draw(ctx)

new InputHandler(paddle);

let lastTime = 0;

function gameLoop(timeStamp) {
    let dt = timeStamp - lastTime;
    lastTime = timeStamp;
    // clear the screen on render
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    paddle.update(dt);
    paddle.draw(ctx);
    ball.draw(ctx);

}

requestAnimationFrame(gameLoop);