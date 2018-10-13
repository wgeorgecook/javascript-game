import { collisionDetection } from '/app/collisionDetection.js'

export default class Ball {

    constructor(game) {
        this.game = game;
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.img = document.querySelector('#img_ball');
        this.speed = { x: 2, y: 2 };
        this.pos = { x: 10, y: 200 };
        this.size = 16;
    }

    reset() {
        this.speed = { x: 2, y: 2 };
        this.pos = { x: 10, y: 200 };
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.pos.x, this.pos.y, this.size, this.size)
    }

    update(dt) {
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;

        // wall collisions
        if (this.pos.x + this.size > this.gameWidth || this.pos.x < 0) { // side collision
            this.speed.x = -this.speed.x
        }

        if ( this.pos.y < 0 ) { // Top collision
            this.speed.y = -this.speed.y;
        }

        if ( this.pos.y + this.size > this.gameHeight ) { // Bottom collision
            this.game.lives -= 1;
            this.reset();
        }

        // object collision
        if( collisionDetection(this, this.game.paddle) ) {
            this.speed.y = -this.speed.y;
            this.pos.y = this.game.paddle.pos.y - this.size;
        }
    }
}