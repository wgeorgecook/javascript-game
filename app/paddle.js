// Paddle at the bottom of the screen

export default class Paddle {

    constructor(game) {
        this.game = game;
        this.width = 150;
        this.height = 30;
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.pos = { x: this.gameWidth / 2 - this.width / 2, y: this.gameHeight - this.height - 10};
        this.maxSpeed = 7;
        this.speed = 0;
    }

    draw(ctx) {
        ctx.fillStyle = "#f58";
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
    }

    move(dir) {
        switch(dir) {
            case 37:
                this.speed = -this.maxSpeed;
                break;
            case 39:
                this.speed = this.maxSpeed;
                break;
        }
    }

    stop(dir) {
        switch(dir) {
            case 37:
                if (this.speed < 0) {this.speed = 0;}
                break;
            case 39:
                if (this.speed > 0) {this.speed = 0;}
                break;
        }
    }

    update(dt) {

        this.pos.x += this.speed;

        if (this.pos.x < 0) {
            this.pos.x = 0;
        }

        if (this.pos.x >  this.gameWidth - (this.width)) {
            this.pos.x = this.gameWidth - (this.width);
        }

    }

}