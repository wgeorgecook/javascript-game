export default class Ball {
    constructor() {
        this.img = document.querySelector('#img_ball');
    }

    draw(ctx) {
        ctx.drawImage(this.img, 10, 10)
    }

    update() {
        // to do
    }
}