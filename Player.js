const player = {
    x: 0,
    y: 0,

    cellX: 4,
    cellY: 7,

    init: function () {
        this.cellX = 4;
        this.cellY = 7;

        this.x = ((this.cellX + 1) * rectangle.width) - (rectangle.width / 2);
        this.y = ((this.cellY + 1) * (rectangle.height + rectangle.sideHeight)) / 2;
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
        let isPlayerGoOut = player.y < 0 || player.x < 0 || player.x > canvas.width;

        return isPlayerGoOut || this.isPLayerOnEmptyCell();
    },

    isPLayerOnEmptyCell: function () {
        return board.cells[player.cellY][player.cellX].empty;
    },

    update() {
        this.y -= gameSpeed;

        console.log(player.cellY + ' ' + player.cellX);
        console.log(board.cells[player.cellY]);
    },

    draw(ctx) {
        ctx.beginPath();

        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    }
};
