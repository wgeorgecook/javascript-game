// Handles keyboard inputs

export default class InputHandler {

    constructor(paddle) {
        document.addEventListener('keydown', (e) => {
            paddle.move(e.keyCode)
        })
    }
}