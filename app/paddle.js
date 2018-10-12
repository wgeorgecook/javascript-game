// Paddle at the bottom of the screen

export default class Paddle {

    constructor(gameHeight, gameWidth) {
        this.width = 150;
        this.height = 30;
        this.pos = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10
        };
    }

    draw(ctx) {
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
    }

}