// Handles keyboard inputs

export default class InputHandler {

    constructor(paddle) {
        document.addEventListener('keydown', (e) => {
            paddle.move(e.keyCode)
        });

        document.addEventListener('keyup', (e) => {
            if (e.keyCode === 37 || 39 ) {
                paddle.stop(e.keyCode);
            }
        })
    }
}