class Game {
    constructor() {
        this.board = document.querySelector(".board");
        this.player1 = true;
        this.player2 = false;
        this.boardSquare = [];
        this.turn();
    }

    checkForWinner(j) {
        let three = 0;


        //Checking Diagonals
        let diagonal = [-8, -4, 4, 8];
        for(let i = 0; i < 4; i++) {
            if (this.boardSquare.indexOf(j).player === this.boardSquare.indexOf(diagonal[i])) {

            }
        }

    }

    turn() {
        let playerToCheck = 0;
        Array.from(this.board.children).forEach((child) => {
            this.boardSquare.push(child);
            let square = this.boardSquare.indexOf(child);
            this.boardSquare[square].addEventListener('click', function (event) {
                event.preventDefault();
                if(this.player1 === true) {
                    this.boardSquare.player = 1;
                    this.player1 = false;
                    this.player2 = true;
                } else if (this.player2 === true) {
                    this.boardSquare.player = 2;
                    this.player1 = true;
                    this.player2 = false;
                } else {
                    //throw error
                }
            });

            this.checkForWinner(square, playerToCheck);
        });
    }
}

