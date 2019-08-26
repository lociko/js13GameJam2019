let canvas = document.getElementById("myCanvas");

const rectHeight = 50;
const rectWidth = 100;
const rectSideHeight = 10;

const cells = [];
const cellsRows = 21;
const cellsColumns = 10;

let dX = 0;
let dY = 0;

let cellRowsOnScreen = 0;

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

    dY -= 1;

    if (dY % rectHeight === 0) {
        console.log('cells ' + cells.length);
        pushRow(cells);
        pushRow(cells);
        cellRowsOnScreen += 1;
    }

    requestAnimationFrame(draw);
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

    for (let i = -1; i < cellsRows; i++) {
        pushRow(cells);
    }
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
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawRect(x, y) {
    drawTopRect(x, y);
    drawLeftRect(x, y);
    drawRightRect(x, y);
}

function drawTopRect(x, y) {
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x, y + rectHeight / 2);
    ctx.lineTo(x + rectWidth / 2, y);
    ctx.lineTo(x + rectWidth, y + rectHeight / 2);
    ctx.lineTo(x + rectWidth / 2, y + rectHeight);
    ctx.fillStyle = 'orange';
    ctx.fill();
}

function drawLeftRect(x, y) {
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x, y + rectHeight / 2);
    ctx.lineTo(x, y + rectSideHeight + rectHeight / 2);
    ctx.lineTo(x + rectWidth / 2, y + rectSideHeight + rectHeight);
    ctx.lineTo(x + rectWidth / 2, y + rectHeight);
    ctx.fillStyle = '#acacac';
    ctx.fill();
}

function drawRightRect(x, y) {
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x + rectWidth / 2, y + rectHeight);
    ctx.lineTo(x + rectWidth / 2, y + rectSideHeight + rectHeight);
    ctx.lineTo(x + rectWidth, y + rectSideHeight + rectHeight / 2);
    ctx.lineTo(x + rectWidth, y + rectHeight / 2);
    ctx.fillStyle = '#191919';
    ctx.fill();
}