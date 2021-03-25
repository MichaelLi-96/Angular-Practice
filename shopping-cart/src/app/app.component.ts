import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [
  	{
		name: 'Apple',
		price: 1.50
	},
	{
		name: 'Banana',
		price: 2.00
	},
	{
		name: 'Orange',
		price: 0.50
	}
  ];
}
