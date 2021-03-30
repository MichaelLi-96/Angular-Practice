import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
	@Input() product: Product =   	{
		name: 'name',
		price: 0
	};
	@Input() index: number = 0;
	@Input() name: string = "";
	@Input() price: number = 0;
	@Input() isInCart: boolean = false;
	@Output() removed: EventEmitter<any> = new EventEmitter();
	@Output() added: EventEmitter<any> = new EventEmitter();

	removeFromCart(idx: number): void {
		this.removed.emit(idx);
	}

	addToCart(product: Product): void {
		this.added.emit(product);
	}
}
