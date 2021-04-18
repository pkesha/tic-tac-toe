//Use APIs - cat's game!
//Use players as objects

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

    pieceInitialize(size) {
        this.jediImage = document.createElement("img");
        this.sithImage = document.createElement("img");

        this.jediImage.src = "images/jedi.jpg";
        this.sithImage.src = "images/sith.png";

        this.jediImage.style.height = size;
        this.jediImage.style.width = size;

        this.sithImage.style.height = size;
        this.sithImage.style.width = size;
    }

    initialize() {
        //Outer scope object will be stored for later use in the anonymous function
        this.pieceInitialize('100%');
        let thisInitialize = this;

        //Each square is initialize to respond to 'click' events
        Array.from(this.board.children).forEach((child) => {
            //"this" is now the referring to the array
            this.boardSquare.push(child);
            //square is an int value of index value
            let square = this.boardSquare.indexOf(child);
            this.boardSquare[square].addEventListener('click', function(event) {
                event.preventDefault();
                //Each click will call the turns method
                thisInitialize.turns(square, child);
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
                child.append(this.jediImage.cloneNode(true));
                this.turn.textContent = "The Jedi Master's Turn";
                this.checkWinner(1, position);
            } else if (this.player2 === true) {
                this.positionStorage[position] = 2;
                //console.log(this.positionStorage);
                this.player1 = true;
                this.player2 = false;
                child.append(this.sithImage.cloneNode(true));
                this.turn.textContent = "The Sith Lord's Turn";
                this.checkWinner(2, position);
            }
        } else {
            alert("Chose a different space");
        }

        //location.reload();
    };

    checkWinner(player, position) {
        //Have all these variables available within the entire object
        //pass the variables - run this 3 times in the eventlistener
        //Tracking for wins
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

        this.addUp(columns, player, position);
        this.addUp(rows, player, position);
        this.addUp(diagonals, player, position);

        if(!this.positionStorage.includes(0)){
            alert("CATS GAME");
        }

    }

    //Will keep checking - will be useful later for undoing moves and keeping logs
    addUp(pattern, player, position) {
        let score = 0;
        for(let i = 0; i < 3; i++) {
            //Selecting first element of the array.
            let patternArray = pattern[i];
            //If the pattern includes a position within the second dimension of the array
            if (patternArray.includes(position)) {
                for (let j = 0; j < 3; j++) {
                    score += (player === this.positionStorage[patternArray[j]]) ? 1 : 0;
                    if (score === 3) {
                        alert("Player " + player + " is the winner");
                    }
                }
                score = 0;
            }
        }
    }

}

game = new Game();
game;

