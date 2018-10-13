import Paddle from '/app/paddle.js';
import Ball from '/app/ball.js';
import InputHandler from '/app/input.js';
import Brick from '/app/brick.js';

export default class Game {

    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {

        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        new InputHandler(this.paddle);
        this.brick = new Brick(this, {x: 20, y: 20});

        this.gameObjects = [
            this.ball,
            this.paddle,
            this.brick
        ]

    }

    update(dt) {
        this.gameObjects.forEach( (object) => object.update(dt))
    }

    draw(ctx) {
        this.gameObjects.forEach( (object) => object.draw(ctx))
    }
}