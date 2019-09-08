const board = {
    cells: [],
    cellsColumns: 9,
    cellsRows: 21,

    dX: 0,
    dY: 0,

    draw: function (ctx) {
        for (let i = 0; i < this.cells.length; i++) {
            for (let j = 0; j < this.cellsColumns; j++) {
                let x = i % 2 === 0 ? j * rectWidth - rectWidth / 2 : j * rectWidth;
                let y = i * (10 + rectHeight / 2) - rectHeight / 2;

                ctx.fillText('i:' + i + ' j:' + j, x + this.dX, y + this.dY);

                if (this.cells[i][j].empty === true) continue;

                drawRect(x + this.dX, y + this.dY);
            }
        }

        this.dY -= gameSpeed;

        if (this.dY % (rectHeight + rectSideHeight + 10) === 0) {
            this.dY = 0;
            this.pushRandomRow();
            this.pushRandomRow(); // TODO: Why two times?

            player.cellY -= 2;

            this.cells = this.cells.slice(2, this.cells.length)
        }
    },

    pushStartRow: function () {
        const row = [];
        for (let j = -1; j < this.cellsColumns; j++) {
            row.push({empty: false, color: 'orange'});
        }
        this.cells.push(row);
    },

    pushRandomRow: function () {
        const row = [];
        for (let j = -1; j < this.cellsColumns; j++) {
            const isEmpty = Math.floor(Math.random() * 100) % 5 === 0;
            row.push({empty: isEmpty});
        }
        this.cells.push(row);
    },

    init(canvas) {
        this.dX = 0;
        this.dY = 0;
        this.cells = [];

        canvas.height = window.innerHeight;
        canvas.width = (this.cellsColumns - 1) * rectWidth;
        this.cellsRows = Math.floor(window.innerHeight / (rectHeight)) + 5;

        for (let i = -1; i < this.cellsRows; i++) {
            i > 10 ? board.pushRandomRow() : board.pushStartRow();
        }
    }
};