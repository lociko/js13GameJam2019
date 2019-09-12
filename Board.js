const board = {
    cells: [],
    cellsColumns: 10,

    dX: 0,
    dY: 0,

    update: function() {
        this.dY -= gameSpeed;

        if (Math.abs(this.dY) === (rectangle.height + rectangle.sideHeight * 2)) {
            this.dY = 0;

            // TODO: Why two times?
            this.pushRandomRow();
            this.pushRandomRow();

            player.cellY -= 2;

            this.cells = this.cells.slice(2, this.cells.length);
        }
    },

    draw: function () {
        for (let i = 0; i < this.cells.length; i++) {
            for (let j = 0; j < this.cellsColumns; j++) {
                let x = i % 2 === 0 ? j * rectangle.width - rectangle.width / 2 : j * rectangle.width;
                let y = i * (rectangle.sideHeight + rectangle.height / 2) - rectangle.height / 2;

                if (!this.cells[i][j].empty) {
                    rectangle.draw(x + this.dX, y + this.dY);
                }
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
        canvas.width = (this.cellsColumns - 1) * rectangle.width;

        this.cellsRows = Math.floor(window.innerHeight / (rectangle.height)) + 5;

        for (let i = 0; i < this.cellsRows; i++) {
            board.pushStartRow();
        }
    }
};