import { Board } from 'src/board';

 //The game class cannot function without having a board.

//////////////////////////////////////RULES///////////////////////////////////////
/*                                                                                     ///////
                                                                                       ///////
// To play Minesweeper, we will create instances of MineSweeperGame in command line.   ///////
// For example:                                                                        ///////
// In the command line, navigate to the lib directory and run `node`                   ///////
// Run `.load game.js` to load the contents of this file.                              ///////
// Then create a Game instance and run commands like so:                              ///////
// let game = new Game(3, 3, 3);                                                     ///////
// game.playMove(0, 1);                                                              ///////
// game.playMove(1, 2);                                                              ///////
// When done run `.exit`                                                           ////////
                                                                                  ///////
*/                                                                               ///////
//////////////////////////////////////RULES//////////////////////////////////////








//start Game class
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
