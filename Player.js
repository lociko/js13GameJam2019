const player = {
    x: 0,
    y: 0,

    cellX: 5,
    cellY: 8,

    init: function () {
        // Set player to the center
        this.x = (board.cellsColumns * rectWidth) / 2;
        this.y = 5 * rectHeight;

        this.cellX = 5;
        this.cellY = 8;
    },

    goRight: function () {
        if (this.cellY % 2 !== 0) {
            this.cellX += 1;
        }
        this.cellY += 1;

        this.x += 50;
        this.y += 35;
    },

    goLeft: function () {
        if (this.cellY % 2 === 0) {
            this.cellX -= 1;
        }
        this.cellY += 1;

        this.x -= 50;
        this.y += 35;
    },

    isPlayerDead: function () {
        let isPlayerGoOut = player.y < 0;
        let isPLayerOnEmptyCell = board.cells[player.cellY - 1][player.cellX].empty === true;

        return isPlayerGoOut || isPLayerOnEmptyCell;
    },

    draw(ctx) {
        this.y -= gameSpeed;

        console.log(player.cellY + ' ' + player.cellX);
        console.log(board.cells[player.cellY]);

        ctx.beginPath();

        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    }
};