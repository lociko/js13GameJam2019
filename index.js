let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let rightPressed = false;
let leftPressed = false;
let enterPressed = false;

let pause = false;
let isGameStarted = false;

let gameSpeed = 2;

let score = 0;
/*********************
 *                   *
 ********************/
const menu = {
    drawScore: function () {
        ctx.font = "30px Georgia";
        ctx.fillStyle = "#000000";
        ctx.textAlign = "center";
        ctx.fillText("Score: " + score, canvas.width /2, canvas.height - 20);
    },

    drawGameOver: function () {
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = "102px Georgia";
        ctx.fillStyle = "#000000";
        ctx.textAlign = "center";
        ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);

        ctx.font = "100px Georgia";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);

        ctx.font = "50px Georgia";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText("Your score is: " + score, canvas.width / 2, canvas.height / 2 + 100);
        ctx.fillText("Press 'enter' to retry", canvas.width / 2, canvas.height / 2 + 145);
    },

    intro: function () {
        ctx.font = "102px Georgia";
        ctx.fillStyle = "#000000";
        ctx.textAlign = "center";
        ctx.fillText("Don't go back", canvas.width / 2, canvas.height / 2);

        ctx.font = "100px Georgia";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText("Don't go back", canvas.width / 2, canvas.height / 2);

        ctx.font = "50px Georgia";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText("Press 'enter' to start", canvas.width / 2, canvas.height / 2 + 100);
        ctx.fillText("You can use '<-' and '->' to move", canvas.width / 2, canvas.height / 2 + 145);
        ctx.fillText("And 'space' to make a pause", canvas.width / 2, canvas.height / 2 + 190);
    },
    drawPause() {
        ctx.font = "100px Georgia";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText("Pause", canvas.width / 2, canvas.height / 2);

        ctx.font = "50px Georgia";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText("Press 'space' to start continue", canvas.width / 2, canvas.height / 2 + 100);
    }
};

initGame();
gameLoop();

/*********************
 *  GAME FUNCTIONS   *
 ********************/

function initGame() {
    board.init(canvas);
    player.init();

    pause = false;
    score = 0;
}

function gameLoop() {
    if (!isGameStarted) {
        if (enterPressed) {
            isGameStarted = true;
            enterPressed = false;
            initGame();
        } else {
            if (!isGameOver()) {
                board.draw();
                menu.intro();
            }
        }
        requestAnimationFrame(gameLoop);
        return;
    }
    if (pause) {
        menu.drawPause();
        requestAnimationFrame(gameLoop);
        return;
    }

    if (isGameOver()) {
        requestAnimationFrame(gameLoop);
        return;
    }

    if (rightPressed) {
        player.goRight();
        score++;
        rightPressed = false;
    } else if (leftPressed) {
        score++;
        player.goLeft();
        leftPressed = false;
    }

    board.update();
    player.update();

    clearCanvas();

    board.draw();
    player.draw(ctx);

    menu.drawScore();

    requestAnimationFrame(gameLoop);
}

function isGameOver() {
    if (player.isPlayerDead()) {
        menu.drawGameOver();
        isGameStarted = false;
        pause = true;
        return true;
    }
}

function keyDownHandler(event) {
    if (event.keyCode === 39) {
        rightPressed = true;
    } else if (event.keyCode === 37) {
        leftPressed = true;
    } else if (event.keyCode === 32) {
        pause = !pause;
    } else if (event.keyCode === 13) {
        enterPressed = true;
    }
}

document.addEventListener('keydown', keyDownHandler, false);

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}