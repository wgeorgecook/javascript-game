// Game Engine
import Paddle from '/app/paddle.js';
import InputHandler from '/app/input.js';

let canvas = document.querySelector('#gameScreen');
let ctx = canvas.getContext('2d');

const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;


let paddle = new Paddle(GAME_HEIGHT, GAME_WIDTH);

paddle.draw(ctx)

new InputHandler(paddle);

let lastTime = 0;

function gameLoop(timeStamp) {
    let dt = timeStamp - lastTime;
    lastTime = timeStamp;
    // clear the screen on render
    ctx.clearRect(0, 0, 800, 600);
    paddle.update(dt);
    paddle.draw(ctx);
    requestAnimationFrame(gameLoop);
}

gameLoop();