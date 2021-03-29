import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
	@Input() index: number = 0;
	@Input() name: string = "";
	@Input() price: number = 0;
	@Input() isInCart: boolean = false;
	@Output() removed: EventEmitter<any> = new EventEmitter();

	removeFromCart(idx: number): void {
		this.removed.emit(idx);
	}
}
