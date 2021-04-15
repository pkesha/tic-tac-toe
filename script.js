//Use APIs - cat's game!
//Use players as objects
//Alerting player moves on webpage, not alert pop-up
//Make checking winner code more concise - o^2 complexity, repeated code
//Star Wars theme!!

class Game {
    //Starts the game!
    constructor() {
        //Selecting variables used without game class
        this.board = document.querySelector(".board");
        this.turn = document.querySelector("#turn");

        //Initializing player turns
        this.player1 = true;
        this.player2 = false;

        //InitializingGame positions
        this.boardSquare = [];
        this.positionStorage = [0, 0, 0, 0, 0, 0, 0, 0, 0];

        //this.turn.textContent = "The Jedi Master will go first!"
        this.initialize();
    }

    initialize() {
        //Outer scope object will be stored for later use in the anonymous function
        let thisInitialize = this;

        Array.from(this.board.children).forEach((child) => {
            //"this" is now the referring to the array
            this.boardSquare.push(child);
            let square = this.boardSquare.indexOf(child);
            this.boardSquare[square].addEventListener('click', function(event) {
                event.preventDefault();
                thisInitialize.turns(square,child);
            });
        });
    };

    //Will be used to determine who went and which spot has been selected
    turns(position, child) {
        if(this.positionStorage[position] == 0){
            if(this.player1 === true) {
                this.positionStorage[position] = 1;
                //console.log(this.positionStorage);
                this.player1 = false;
                this.player2 = true;
                child.style.backgroundImage = "url(images/jedi.png)";
                this.turn.textContent = "The Jedi Master's Turn";
                this.checkWinner(1, position);
            } else if (this.player2 === true) {
                this.positionStorage[position] = 2;
                //console.log(this.positionStorage);
                this.player1 = true;
                this.player2 = false;
                child.style.backgroundColor = 'red';
                this.turn.textContent = "The Sith Lord's Turn";
                this.checkWinner(2, position);
            } else {
                //throw error
            }
        } else {
            alert("Chose a different space");
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
                rowScore = 0;
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
                columnScore = 0;
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
                diagonalScore = 0;
            }
        }

        if(!this.positionStorage.includes(0)){
            alert("CATS GAME");
        }

    }

    exitF(){
        location.reload();
    }

}

game = new Game();
game;

