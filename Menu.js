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
        ctx.fillStyle = "rgba(0,0,0,0.01)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

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