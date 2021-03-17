class Game {
    constructor() {
        console.log("CREATING NEW GAME OBJECT");
        this.board = document.querySelector(".board");
        this.player1 = true;
        this.player2 = false;
        this.boardSquare = [];
        this.positionStorage = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.initialize();
    }

    initialize() {
        let thisObject = this;
        console.log("Initialize Method");
        Array.from(this.board.children).forEach((child) => {
            this.boardSquare.push(child);
            let square = this.boardSquare.indexOf(child);
            this.boardSquare[square].addEventListener('click', function(event) {
                console.log("ADD EVENT LISTENER");
                event.preventDefault();
                thisObject.turns(square);
            });
        });
    };

    //Will be used to determine who went and which spot has been selected
    turns(position) {
        console.log("CALLING TURNS");
        if(this.player1 === true) {
            //Need to store where a player has been used
            this.positionStorage[position] = 1;
            console.log(this.positionStorage);
            this.player1 = false;
            this.player2 = true;
            this.checkWinner(1, position);
            //console.log("player 1");
        } else if (this.player2 === true) {
            this.positionStorage[position] = 2;
            console.log(this.positionStorage);
            this.player1 = true;
            this.player2 = false;
            this.checkWinner(2, position);
            //console.log("player 2");
        } else {
            //throw error
        }
    };

    checkWinner(player, position) {
        let diagonals = [-8, -4, 4, 8];
        let rows = [-2, -1, 1, 2];
        let columns = [-6, -3, 3, 6];

        let rowScore = 0;
        let columnScore = 0;
        let diagonalScore = 0;

        for(let i = 0; i < 5; i++){
            if(player === this.positionStorage[position + diagonals[i]]){
                //console.log(this.positionStorage[position + diagonals[i]]);
                diagonalScore += 1;
            }
            if(player === this.positionStorage[position + rows[i]]) {
                //console.log(this.positionStorage[position + rows[i]]);
                rowScore += 1;
            }
            if(player === this.positionStorage[position + columns[i]]) {
                //console.log(this.positionStorage[position + columns[i]]);
                columnScore += 1;
            }


            if((rowScore === 2) ||
                (columnScore === 2) ||
                (diagonalScore === 2)) {
                alert("Player " + player + " is the winner");
                break;
            }
        }

        console.log("D: ", diagonalScore);
        console.log("C: ", columnScore);
        console.log("R: ", rowScore);
    }

}

game = new Game();
game;

