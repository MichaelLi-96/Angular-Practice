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
  	this.handleRestartGame();
  }

  getPlayer() {
  	return this.playerOnesTurn ? 'X' : 'O';
  }

  handlePlayerMove(index:number):void {
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

  handleRestartGame():void {
  	this.squares = Array(9).fill("");
  	this.playerOnesTurn = true;
  }
}
