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

  cart: Product[] = [];
  totalPrice: number = 0;

  onAddToCart(product: Product): void {
  	this.cart.push(product);
  	this.totalPrice += product.price;
  }

  onRemoveFromCart(index: number): void {
  	this.totalPrice -= this.cart[index].price;
  	this.cart = this.cart.filter((product, idx) => {
  		return idx !== index;
  	})
  }
}
