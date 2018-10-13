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

        // wall collisions
        if (this.pos.x + this.size > this.gameWidth || this.pos.x < 0) {
            this.speed.x = -this.speed.x
        }

        if (this.pos.y + this.size > this.gameHeight || this.pos.y < 0) {
            this.speed.y = -this.speed.y
        }

        // paddle collision
        let bottom = this.pos.y + this.size;
        let topPaddle = this.game.paddle.pos.y;
        let leftPaddle = this.game.paddle.pos.x;
        let rightPaddle = this.game.paddle.pos.x + this.game.paddle.width;
        if (bottom >= topPaddle &&
            this.pos.x >= leftPaddle &&
            this.pos.x + this.size <= rightPaddle
            ) {
            this.speed.y = -this.speed.y;
            this.pos.y = this.game.paddle.pos.y - this.size;
        }
    }
}