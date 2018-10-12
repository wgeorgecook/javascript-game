// Paddle at the bottom of the screen

class Paddle {

    constructor(gameHeight, gameWidth) {
        this.width = 150;
        this.height = 30;
        this.pos = {
            x: (gameHeight/2),
            y: gameHeight - this.height - 10
        };
    }

    draw(ctx) {

    }

}