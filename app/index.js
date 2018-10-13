// Game Engine
import Game from './game.js';

let canvas = document.querySelector('#gameScreen');
let ctx = canvas.getContext('2d');

const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;


let game = new Game(GAME_WIDTH, GAME_HEIGHT)

game.start()



let lastTime = 0;

function gameLoop(timeStamp) {
    let dt = timeStamp - lastTime;
    lastTime = timeStamp;
    // clear the screen on render
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    game.update(dt);

    game.draw(ctx);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);