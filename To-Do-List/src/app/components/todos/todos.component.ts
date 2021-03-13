import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

	constructor() { }

	todos : Todo [] = [];
	inputTodo:string = "";

	ngOnInit(): void {
		this.todos = [
			{
				content: 'First todo',
				completed: false
			},
			{
				content: 'Second todo',
				completed: true
			},
			{
				content: 'Third todo',
				completed: false
			}
		]
	}

	toggleDone(id:number):void {
		this.todos.map((todo, idx) => {
			if(id === idx) {
				todo.completed = !todo.completed;
			}
		})
	}

	deleteTodo(id:number):void {
		this.todos = this.todos.filter((todo, idx) => {
			return id !== idx;
		})
	}

	addTodo():void {
		if(this.inputTodo === "") {
			return;
		}
		this.todos.push({
			content: this.inputTodo,
			completed: false
		});
		this.inputTodo = "";
	}
}
