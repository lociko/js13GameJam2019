let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

const rectHeight = 50;
const rectWidth = 100;
const rectSideHeight = 10;

const cells = [];
const cellsColumns = 10;
let cellsRows = 21;

let dX = 0;
let dY = 0;

let cellRowsOnScreen = 0;

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

let playerX = 50;
let playerY = 35;
let gameSpeed = 2;

function keyDownHandler(event) {
    if (event.keyCode === 39) {
        rightPressed = true;
        playerX += 50;
        playerY += 35;
    } else if (event.keyCode === 37) {
        leftPressed = true;
        playerX -= 50;
        playerY += 35;
    }
    if (event.keyCode === 40) {
        downPressed = true;
    } else if (event.keyCode === 38) {
        upPressed = true;
    }
}

function keyUpHandler() {
    if (event.keyCode === 39) {
        rightPressed = false;
    } else if (event.keyCode === 37) {
        leftPressed = false;
    }
    if (event.keyCode === 40) {
        downPressed = false;
    } else if (event.keyCode === 38) {
        upPressed = false;
    }
}


function draw() {
    clearCanvas();

    for (let i = cellRowsOnScreen; i < cells.length; i++) {
        for (let j = 0; j < cellsColumns; j++) {
            if (cells[i][j] === false) continue;

            let x = i % 2 === 0 ? j * rectWidth - rectWidth / 2 : j * rectWidth;
            let y = i * (10 + rectHeight / 2) - rectHeight / 2;

            drawRect(x + dX, y + dY);
        }
    }

    dY -= gameSpeed;

    if (dY % rectHeight === 0) {
        pushRow(cells);
        pushRow(cells);
        cellRowsOnScreen += 1;
    }

    drawPlayer();

    requestAnimationFrame(draw);
}

function drawPlayer() {
    if (rightPressed) {
        // playerX += 25;
        // playerY += 25;
    } else if (leftPressed) {
        // playerX -= 5;
        // playerY += 5;
    }
    if (downPressed) {
        playerY += 5;
    } else if (upPressed) {
        playerY -= 5;
    } else {
        playerY -= gameSpeed;
        // playerX -=1;
    }

    ctx.beginPath();
    ctx.arc(playerX, playerY, 10, 0, Math.PI * 2);
    // ctx.fillStyle = "#0095DD";
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

initGame();
draw();

/********************
 *                  *
 *  GAME FUNCTIONS  *
 *                  *
 ********************/
function initGame() {
    if (cells.length !== 0) return;

    canvas.height = window.innerHeight;
    cellsRows = canvas.height % rectHeight;

    for (let i = -1; i < cellsRows; i++) {
        pushRow(cells);
    }
    console.log(cells.length);
}

function pushRow(cells) {
    const row = [];
    for (let j = -1; j < cellsColumns; j++) {
        row.push(Math.floor(Math.random() * 100) % 5 !== 0);
    }
    cells.push(row);
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