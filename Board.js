const board = {
    cells: [],
    cellsColumns: 9,

    dX: 0,
    dY: 0,

    update: function() {
        this.dY -= gameSpeed;

        if (Math.abs(this.dY) === (rectHeight + rectSideHeight * 2)) {
            this.dY = 0;

            // TODO: Why two times?
            this.pushRandomRow();
            this.pushRandomRow();

            player.cellY -= 2;

            this.cells = this.cells.slice(2, this.cells.length);
        }
    },

    draw: function (ctx) {
        for (let i = 0; i < this.cells.length; i++) {
            for (let j = 0; j < this.cellsColumns; j++) {
                let x = i % 2 === 0 ? j * rectWidth - rectWidth / 2 : j * rectWidth;
                let y = i * (rectSideHeight + rectHeight / 2) - rectHeight / 2;

                if (!this.cells[i][j].empty) {
                    drawRect(x + this.dX, y + this.dY);
                };

                ctx.fillText(
                    'i:' + i + ' j:' + j + this.cells[i][j].empty,
                    x + this.dX + rectWidth / 3,
                    y + this.dY + rectHeight / 2
                );
            }
        }
    },

    pushStartRow: function () {
        const row = [];

        for (let i = 0; i <= this.cellsColumns; i++) {
            row.push({empty: false, color: 'orange'});
        }

        this.cells.push(row);
    },

    pushRandomRow: function () {
        const row = [];

        for (let i = 0; i <= this.cellsColumns; i++) {
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

        for (let i = 0; i < this.cellsRows; i++) {
            if (i < 10) {
                board.pushStartRow();
            } else {
                board.pushRandomRow();
            }
        }
    }
};