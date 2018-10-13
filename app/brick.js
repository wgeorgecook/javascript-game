export default class Brick {
    constructor(game, pos) {
        this.img = document.querySelector('#img_brick');
        this.game = game;
        this.pos = pos;
        this.width = 52;
        this.height = 24;
    }

    update(dt) {

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