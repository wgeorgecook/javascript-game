// Handles keyboard inputs

export default class InputHandler {

    constructor(paddle, game) {
        document.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case 27:
                    game.togglePause();
                    break;
                case 32:
                    game.start();
                    break;
                default:
                    paddle.move(e.keyCode);
            }
        });

        document.addEventListener('keyup', (e) => {
            if (e.keyCode === 37 || 39 ) {
                paddle.stop(e.keyCode);
            }
        })
    }
}