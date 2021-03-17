class Game {
    constructor() {
        this.board = document.querySelector(".board");
        this.player1 = true;
        this.player2 = false;
        this.boardSquare = [];
        this.positionStorage = [];
        this.initialize();
    }

    //Will be used to determine who went and which
    turns(position) {
        if(this.player1 === true) {
            //Need to store where a player has been used
            this.positionStorage[position] = 1;
            this.player1 = false;
            this.player2 = true;
            console.log("player 1");
        } else if (this.player2 === true) {
            this.positionStorage[position] = 2;
            this.player1 = true;
            this.player2 = false;
            console.log("player 2");
        } else {
            //throw error
        }
        console.log("End of Turns");
    }

    initialize() {
        //console.log("Initialize Method");
        Array.from(this.board.children).forEach((child) => {
            this.boardSquare.push(child);
            let square = this.boardSquare.indexOf(child);
            let turnsCallback = this.turns(square);
            this.boardSquare[square].addEventListener('click', function(event) {
                event.preventDefault();
                //They are not being clicked but still being used
                turnsCallback;
            });
        });
    }
}

game = new Game();
game;

