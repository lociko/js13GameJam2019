let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let rightPressed = false;
let leftPressed = false;
let pause = false;

let gameSpeed = 2;

/*********************
 *                   *
 ********************/

initGame();
gameLoop();

/*********************
 *  GAME FUNCTIONS   *
 ********************/

function initGame() {
    board.init(canvas);
    player.init();
}

function gameLoop() {
    if (pause) {
        requestAnimationFrame(gameLoop);
        return;
    }

    isGameOver();

    if (rightPressed) {
        player.goRight();
        rightPressed = false;
    } else if (leftPressed) {
        player.goLeft();
        leftPressed = false;
    }

    board.update();
    player.update();

    clearCanvas();

    board.draw(ctx);
    player.draw(ctx);

    requestAnimationFrame(gameLoop);
}

function isGameOver() {
    if (player.isPlayerDead()) {
        alert("Game Over");
        initGame();
    }
}

function keyDownHandler(event) {
    if (event.keyCode === 39) {
        rightPressed = true;
    } else if (event.keyCode === 37) {
        leftPressed = true;
    } else if (event.keyCode === 32) {
        pause = !pause;
    }
}

document.addEventListener('keydown', keyDownHandler, false);

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}