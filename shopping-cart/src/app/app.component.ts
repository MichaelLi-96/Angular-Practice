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

  cart: Product[] = [	{
		name: 'Orange',
		price: 0.50
	}];

  addToCart(product: Product): void {
  	this.cart.push(product);
  }

  onRemoveFromCart(index: number): void {
  	this.cart = this.cart.filter((product, idx) => {
  		return idx !== index;
  	})
  }
}
