export default class Ball {

    constructor(game) {
        this.game = game;
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.img = document.querySelector('#img_ball');
        this.speed = { x: 2, y: 2 };
        this.pos = { x: 10, y: 10 };
        this.size = 16;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.pos.x, this.pos.y, this.size, this.size)
    }

    update(dt) {
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;
    }
}