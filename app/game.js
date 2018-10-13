import Paddle from '/app/paddle.js';
import Ball from '/app/ball.js';
import InputHandler from '/app/input.js';

export default class Game {

    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {

        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        new InputHandler(this.paddle);

    }

    update(dt) {
        this.paddle.update(dt);
        this.ball.update(dt);
    }

    draw(ctx) {
        this.paddle.draw(ctx);
        this.ball.draw(ctx);
    }
}