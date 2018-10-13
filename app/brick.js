import { collisionDetection } from '/app/collisionDetection.js'

export default class Brick {
    constructor(game, pos) {
        this.img = document.querySelector('#img_brick');
        this.game = game;
        this.pos = pos;
        this.width = 80;
        this.height = 24;
        this.toDelete = false;
    }

    update(dt) {
        if( collisionDetection(this.game.ball, this) ) {
            this.game.ball.speed.y = - this.game.ball.speed.y
            this.toDelete = true;
        }
    }

    draw(ctx) {
        ctx.drawImage(
            this.img,
            this.pos.x,
            this.pos.y,
            this.width,
            this.height
        )
    }
}