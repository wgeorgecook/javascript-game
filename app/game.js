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

        this.gameObjects = [
            this.ball,
            this.paddle,
        ]

    }

    update(dt) {
        this.gameObjects.forEach( (object) => object.update(dt))
    }

    draw(ctx) {
        this.gameObjects.forEach( (object) => object.draw(ctx))
    }
}