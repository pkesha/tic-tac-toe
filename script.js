class Game {
    constructor() {
        this.board = document.querySelector(".board");
        this.player1 = true;
        this.player2 = false;
        this.boardSquare = [];
        this.initialize();
        this.turn();
    }

    initialize() {
        Array.from(this.board.children).forEach((child) => {
            this.boardSquare.push(child);
            let square = this.boardSquare.indexOf(child);
        });
    }

    checkForWinner(j) {
        let three = 0;


        //Checking Diagonals
        let diagonal = [-8, -4, 4, 8];
        for(let i = 0; i < 4; i++) {
            if (this.boardSquare.indexOf(j).player === this.boardSquare.indexOf(diagonal[i])) {
                three += 1;
            }
        }

        if(three >= 3){
            console.log("winner");
        }

    }

                // if(this.player1 === true) {
                //     this.boardSquare.player = 1;
                //     this.player1 = false;
                //     this.player2 = true;
                //     console.log("player 1");
                // } else if (this.player2 === true) {
                //     this.boardSquare.player = 2;
                //     this.player1 = true;
                //     this.player2 = false;
                //     console.log("player 2");
                // } else {
                //     //throw error

//     this.boardSquare[square].addEventListener('click', function (event) {
//     event.preventDefault();
// });
//     this.checkForWinner(square, playerToCheck);

game = new Game();
game;

