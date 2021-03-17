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
  	this.squares = Array(9).fill(null);
  	this.playerOnesTurn = true;
  }

  getPlayer() {
  	return this.playerOnesTurn ? 'X' : 'O';
  }
}
