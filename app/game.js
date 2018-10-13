import Paddle from '/app/paddle.js';
import Ball from '/app/ball.js';
import InputHandler from '/app/input.js';
import { buildLevel, level1 } from '/app/levels.js'

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
}

export default class Game {

    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.gameState = GAMESTATE.RUNNING;
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        new InputHandler(this.paddle, this);
        // this.brick = new Brick(this, {x: 20, y: 20});
        let bricks = buildLevel(this, level1);


        this.gameObjects = [
            this.ball,
            this.paddle,
            ...bricks
        ]

    }

    update(dt) {
        if ( this.gameState === GAMESTATE.PAUSED ) { return }
        this.gameObjects.forEach( (object) => object.update(dt))
        this.gameObjects = this.gameObjects.filter( object => !object.toDelete)
    }

    draw(ctx) {
        this.gameObjects.forEach( (object) => object.draw(ctx))

        if ( this.gameState === GAMESTATE.PAUSED ) {
            ctx.rect(0,0,this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
            ctx.fill()
        }
    }

    togglePause() {
        if (this.gameState === GAMESTATE.PAUSED) {
            this.gameState = GAMESTATE.RUNNING;
        } else {
            this.gameState = GAMESTATE.PAUSED
        }
    }
}