import Paddle from '/app/paddle.js';
import Ball from '/app/ball.js';
import InputHandler from '/app/input.js';
import { buildLevel, level1, level2 } from '/app/levels.js'

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWLEVEL: 4,
}

export default class Game {

    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gameState = GAMESTATE.MENU;
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        new InputHandler(this.paddle, this);
        this.gameObjects = [];
        this.bricks = [];
        this.lives = 3;
        this.levels = [level1, level2];
        this.currentLevel = 0;
    }

    start() {

        if ( this.gameState === GAMESTATE.MENU &&
             this.gamesState === GAMESTATE.NEWLEVEL
            )
            return;

        console.log('Start!')
        this.bricks = buildLevel(this, this.levels[this.currentLevel]);
        this.ball.reset();

        this.gameObjects = [ this.ball, this.paddle ]
        this.gameState = GAMESTATE.RUNNING;
    }

    update(dt) {
        if (this.lives === 0) { this.gameState = GAMESTATE.GAMEOVER };

        if ( this.gameState === GAMESTATE.PAUSED ||
            this.gameState === GAMESTATE.MENU ||
            this.gameState === GAMESTATE.GAMEOVER
            ) { return };


        if (this.bricks.length === 0 ) {
            this.gameState = GAMESTATE.NEWLEVEL;
            this.currentLevel ++;
            this.start();
        };


        [...this.gameObjects, ...this.bricks].forEach( (object) => object.update(dt))

        this.bricks = this.bricks.filter( brick => !brick.toDelete)
    }

    draw(ctx) {
        [...this.gameObjects, ...this.bricks].forEach( (object) => object.draw(ctx))

        // At menu
        if ( this.gameState === GAMESTATE.MENU) {
            // background fill
            ctx.rect(0,0,this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
            ctx.fill()

            // text fill
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Press Spacebar to Begin", this.gameWidth / 2, this.gameHeight / 2);
        }

        // When paused
        if ( this.gameState === GAMESTATE.PAUSED) {
            // background fill
            ctx.rect(0,0,this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
            ctx.fill()

            // text fill
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
        }

        // When game over
        if ( this.gameState === GAMESTATE.GAMEOVER) {
            // background fill
            ctx.rect(0,0,this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
            ctx.fill()

            // text fill
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("YOU DEAD", this.gameWidth / 2, this.gameHeight / 2);
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