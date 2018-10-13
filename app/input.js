// Handles keyboard inputs

export default class InputHandler {

    constructor(paddle, game) {
        document.addEventListener('keydown', (e) => {
            (e.keyCode === 27) ? game.togglePause() : paddle.move(e.keyCode);
        });

        document.addEventListener('keyup', (e) => {
            if (e.keyCode === 37 || 39 ) {
                paddle.stop(e.keyCode);
            }
        })
    }
}