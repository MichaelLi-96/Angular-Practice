import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

	squares: any[] = [];
	playerOnesTurn: boolean = true;  
	winner: string = "";
	gameover: boolean = false;

  constructor() { }

  ngOnInit(): void {
  	this.handleRestartGame();
  }

  getPlayer() {
  	return this.playerOnesTurn ? 'X' : 'O';
  }

  handlePlayerMove(index: number):void {
  	if(this.squares[index] !== "" || this.gameover) {
  		return;
  	}
  	if(this.playerOnesTurn) {
  		this.squares[index] = 'X';
  	}
  	else {
  		this.squares[index] = 'O';
  	}
  	this.checkWinner();
  	this.playerOnesTurn = !this.playerOnesTurn;
  }

  handleRestartGame(): void {
  	this.squares = Array(9).fill("");
  	this.playerOnesTurn = true;
  	this.winner = "";
  }

  checkWinner(): void {
  	let winningMoves: number[][] = [
  		[0, 1, 2],
  		[3, 4, 5],
  		[6, 7, 8],
  		[0, 3, 6],
  		[1, 4, 7],
  		[2, 5, 8],
  		[0, 4, 8],
  		[2, 4, 6]
  	];

  	for(let winningMove of winningMoves) {
  		let board = this.squares;
  		if(board[winningMove[0]] === board[winningMove[1]] && board[winningMove[1]] === board[winningMove[2]]) {
  			this.winner =this.playerOnesTurn ? "Player one wins" : "Player two wins";
  			this.gameover = true;
  		}
  	}
  }
}
