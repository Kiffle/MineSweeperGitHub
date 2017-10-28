
class Game {

    //start constructor
    constructor(numberOfRows,numberOfColumns,numberOfBombs){
      this._board = new Board(numberOfRows,numberOfColumns, numberOfBombs);
    }// end constructor

    //start
    playMove(rowIndex,columnIndex){
      this._board.flipTile(rowIndex,columnIndex);

      //start if
      if(this._board.playerBoard[rowIndex][columnIndex] == 'B')
      {
        console.log('Gave OVER!');
        this._board.print();
      }//end if

      //start else if
      else if(!this._board.hasSafeTiles()){
        console.log('You win!');
      }//end else if

      //start else
      else{
        console.log('Current board:');
        this._board.print();
      }//end else

    }//end

    }// end class














class Board{

    //start constructor
    constructor(numberOfRows,numberOfColumns,numberOfBombs){
      this._numberOfTiles = numberOfRows * numberOfColumns;
      this._numberOfBombs = numberOfBombs;
      this._playerBoard = Board.generatePlayerBoard(numberOfRows,numberOfColumns);
      this._bombBoard = Board.generateBombBoard(numberOfRows,numberOfColumns, numberOfBombs);
    } // end constructor

    //start function
    get playerBoard(){
      return this._playerBoard;
    }//end function

    //start function
    flipTile(rowIndex,columnIndex){
        if(this._playerBoard[rowIndex][columnIndex] !== ' ')
        {//start
        console.log('This tile has already been flipped');
        return;
        }//end
        else if(this._bombBoard[rowIndex][columnIndex] == 'B')
        {//start
          this._playerBoard[rowIndex][columnIndex] == 'B';
        }//end
        else
        {//start
          this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex,columnIndex);
        }//end

    this._numberOfTiles--; //run through all available tiles
    }//end function

    //start function
    getNumberOfNeighborBombs(rowIndex, columnIndex) {
    //A flipped tile can only have 8 possible connecting-members (doesnt matter the size of the board)
    let neighborOffsets = [
      [-1,-1,],
      [-1,0],
      [0,-1],
      [1,0],
      [0,1],
      [1,1],
      [-1,1],
      [1,-1]
    ];

    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;
    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];

      if(neighborRowIndex>=0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns)
      {
        if(this._bombBoard[neighborRowIndex][neighborColumnIndex] == 'B')
        {  numberOfBombs++; }
      }
    });
  return numberOfBombs;
  }  //end function

  //start function
  hasSafeTiles(){
    return this._numberOfTiles !== this._numberOfBombs;
  }//end function

  //start print
  print() { //could have errors
    this._playerBoard.map(row => row.join(' | ')).join('\n')
    console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
  }//end print

  //start static function generatePlayerBoard
  static generatePlayerBoard(numberOfRows, numberOfColumns)
  {
    //creates base board
    let board = [];

    for(let currentColumns = 0; currentColumns < numberOfColumns; currentColumns++) //adds a column until desired length
    {
      let row = []; // This represents a singular row added to the games board.

      for(let currentRows = 0; currentRows < numberOfRows; currentRows++) //adds spaces into the row until it equals the desired row length
      {
        row.push(' '); // This generates a block in the row-length
      }
      board.push(row); // This add's the calculated amount of blocks into the Columns
    }
    return board;
  } // end static function generatePlayerBoard

  static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {//this is essentially the player board except with a set of bombs == to users desired difficulty.

      let board = [];

      //creates null board

      for(let currentColumns = 0; currentColumns < numberOfColumns; currentColumns++) //adds a column until desired length
      {
        let row = []; // This represents a singular row added to the games board.

        for(let currentRows = 0; currentRows < numberOfRows; currentRows++) //adds spaces into the row until it equals the desired row length
        {
          row.push(null); // This generates a block in the row-length of null value so we can assign the appropiate asset(Bomb/Space)
        }
        board.push(row); // This add's the calculated amount of blocks into the Columns
      }
      //generates bombs
      let numberOfBombsPlaced = 0 //current value
        while (numberOfBombsPlaced < numberOfBombs){
        let randomRowIndex = Math.floor(Math.random() * (numberOfRows - 0) + 0);
        let randomColumnIndex =  Math.floor(Math.random() * (numberOfColumns - 0) + 0);
          if(board[randomRowIndex] [randomColumnIndex] !== 'B'){
          board[randomColumnIndex][randomRowIndex] = 'B';
          numberOfBombsPlaced++;
        }
      };

    return board;

  }

}//end class


const g = new Game(3,3,3);

g.playMove(0,0);
g.playMove(0,1);
g.playMove(1,0);
