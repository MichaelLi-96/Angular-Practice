import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

	squares:any[] = [];
	playerOnesTurn:boolean = true;  

  constructor() { }

  ngOnInit(): void {
  	this.newGame();
  }

  newGame() {
  	this.squares = Array(9).fill("");
  	this.playerOnesTurn = true;
  }

  getPlayer() {
  	return this.playerOnesTurn ? 'X' : 'O';
  }

  handleClick(index:number) {
  	if(this.squares[index] !== "") {
  		return;
  	}
  	if(this.playerOnesTurn) {
  		this.squares[index] = 'X';
  	}
  	else {
  		this.squares[index] = 'O';
  	}
  	this.playerOnesTurn = !this.playerOnesTurn;
  }
}
