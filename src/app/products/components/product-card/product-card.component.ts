import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../services/data.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() showActions: boolean = true;
  @Output() productTap = new EventEmitter<Product>();
  @Output() addToCart = new EventEmitter<Product>();

  onProductTap(): void {
    this.productTap.emit(this.product);
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}