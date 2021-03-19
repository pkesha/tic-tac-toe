//Use APIs
//Use

class Game {
    constructor() {
        this.board = document.querySelector(".board");
        this.player1 = true;
        this.player2 = false;
        this.boardSquare = [];
        this.positionStorage = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.initialize();
    }

    initialize() {
        let thisObject = this;
        Array.from(this.board.children).forEach((child) => {
            this.boardSquare.push(child);
            let square = this.boardSquare.indexOf(child);
            this.boardSquare[square].addEventListener('click', function(event) {
                event.preventDefault();
                thisObject.turns(square,child);
            });
        });
    };

    //Will be used to determine who went and which spot has been selected
    turns(position, child) {
        if(this.player1 === true) {
            this.positionStorage[position] = 1;
            //console.log(this.positionStorage);
            this.player1 = false;
            this.player2 = true;
            child.style.backgroundColor = 'blue';
            this.checkWinner(1, position);
        } else if (this.player2 === true) {
            this.positionStorage[position] = 2;
            //console.log(this.positionStorage);
            this.player1 = true;
            this.player2 = false;
            child.style.backgroundColor = 'red';
            this.checkWinner(2, position);
        } else {
            //throw error
        }
    };

    checkWinner(player, postion) {
        //Have all these variables available within the entire object
        //pass the variables - run this 3 times in the eventlistener
        //Tracking for wins
        let diagonalScore = 0;
        let rowScore = 0;
        let columnScore = 0;

        let columns = [
            [0, 3, 6],
            [1, 4, 7],
            [2, 6, 8]
        ];

        let diagonals = [
            [0, 4, 8],
            [2, 4, 6],
            [10, 10, 10]
        ];

        let rows = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
        ];

        //High complexity O^2
        for(let i = 0; i < 3; i++){


            let rowArray = rows[i];
            if(rowArray.includes(postion)) {
                for (let j = 0; j < 3; j++) {
                    rowScore += (player === this.positionStorage[rowArray[j]]) ? 1 : 0;
                    if (rowScore === 3) {
                        alert("Player " + player + " is the winner");
                        this.exitF()
                    }
                }
            }

            //Checking columns
            let columnArray = columns[i];
            if(columnArray.includes(postion)) {
                for (let j = 0; j < 3; j++) {
                    columnScore += (player === this.positionStorage[columnArray[j]]) ? 1 : 0;
                    if (columnScore === 3) {
                        alert("Player " + player + " is the winner");
                        this.exitF();
                    }
                }
            }

            let diagonalArray = diagonals[i];
            if(diagonalArray.includes(postion)) {
                for (let j = 0; j < 3; j++) {
                    diagonalScore += (player === this.positionStorage[diagonalArray[j]]) ? 1 : 0;
                    if (diagonalScore === 3) {
                        alert("Player " + player + " is the winner");
                        this.exitF();
                    }
                }
            }
        }

        //Reset on win. Prevent changes.  Determine cats game
        // console.log("D: ", diagonalScore);
        // console.log("C: ", columnScore);
        // console.log("R: ", rowScore);
    }

    exitF(){

    }

}

class Player {
    constructor() {

    }
}

game = new Game();
game;

