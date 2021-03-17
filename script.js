class Game {
    constructor() {
        console.log("CREATING NEW GAME OBJECT");
        this.board = document.querySelector(".board");
        this.player1 = true;
        this.player2 = false;
        this.boardSquare = [];
        this.positionStorage = [];
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
    };

    winner() {
        let diagonals = [-8, -4, 4, 8];
        let row = [-2, -1, 1, 2];
        let columns = [-6, -3, 3, 6];

}

game = new Game();
game;

