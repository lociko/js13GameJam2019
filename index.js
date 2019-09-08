let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

const rectHeight = 50;
const rectWidth = 100;
const rectSideHeight = 10;

let rightPressed = false;
let leftPressed = false;
let pause = false;

let gameSpeed = 2;

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

initGame();
gameLoop();

function keyDownHandler(event) {
    if (event.keyCode === 39) {
        rightPressed = true;
        player.goRight();
    } else if (event.keyCode === 37) {
        leftPressed = true;
        player.goLeft();
    } else if (event.keyCode === 32) {
        pause = !pause;
    }
}

function keyUpHandler() {
    if (event.keyCode === 39) {
        rightPressed = false;
    } else if (event.keyCode === 37) {
        leftPressed = false;
    }
}

function gameLoop() {
    if (pause) {
        requestAnimationFrame(gameLoop);
        return;
    }
    clearCanvas();

    board.draw(ctx);
    player.draw(ctx);

    isGameOver();

    requestAnimationFrame(gameLoop);
}

function isGameOver() {
    if (player.isPlayerDead()) {
        alert("Game Over");
        initGame();
    }
}
/**************************
 *                        *
 *  GAME BOARD FUNCTIONS  *
 *                        *
 **************************/
function initGame() {
    board.init(canvas);

    setPlayerToTheCenter();
}

function setPlayerToTheCenter() {
    player.x = (board.cellsColumns * rectWidth) / 2;
    player.y = 5 * rectHeight;
}

/*********************
 *                   *
 * DRAWING FUNCTIONS *
 *                   *
 ********************/

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawRect(x, y) {
    drawTopRect(x, y);
    drawLeftRect(x, y);
    drawRightRect(x, y);
}

function drawTopRect(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y + rectHeight / 2);
    ctx.lineTo(x + rectWidth / 2, y);
    ctx.lineTo(x + rectWidth, y + rectHeight / 2);
    ctx.lineTo(x + rectWidth / 2, y + rectHeight);
    ctx.fillStyle = 'orange';
    ctx.fill();
}

function drawLeftRect(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y + rectHeight / 2);
    ctx.lineTo(x, y + rectSideHeight + rectHeight / 2);
    ctx.lineTo(x + rectWidth / 2, y + rectSideHeight + rectHeight);
    ctx.lineTo(x + rectWidth / 2, y + rectHeight);
    ctx.fillStyle = '#acacac';
    ctx.fill();
}

function drawRightRect(x, y) {
    ctx.beginPath();
    ctx.moveTo(x + rectWidth / 2, y + rectHeight);
    ctx.lineTo(x + rectWidth / 2, y + rectSideHeight + rectHeight);
    ctx.lineTo(x + rectWidth, y + rectSideHeight + rectHeight / 2);
    ctx.lineTo(x + rectWidth, y + rectHeight / 2);
    ctx.fillStyle = '#191919';
    ctx.fill();
}