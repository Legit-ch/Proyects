import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { DataService, Product } from '../../../services/data.service';
import { RadSideDrawer } from '@nativescript/ui-sidedrawer';
import * as app from '@nativescript/core/application';
import { isAndroid } from '@nativescript/core';

@Component({
  selector: 'ProductDetail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  quantity: number = 1;
  totalPrice: number = 0;
  androidSpecificMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    const foundProduct = this.dataService.getProductById(id);
    
    if (foundProduct) {
      this.product = foundProduct;
      this.calculateTotal();
    }

    // Android-specific code (requirement #10)
    if (isAndroid) {
      this.androidSpecificMessage = 'Android users get free shipping!';
    }
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  onBackTap(): void {
    this.routerExtensions.back();
  }

  onQuantityChange(change: number): void {
    const newQuantity = this.quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      this.quantity = newQuantity;
      this.calculateTotal();
    }
  }

  onAddToCart(): void {
    console.log(`Added ${this.quantity} x ${this.product.name} to cart`);
    // Here you would typically call a cart service
  }

  onBuyNow(): void {
    console.log(`Buying ${this.quantity} x ${this.product.name} for $${this.totalPrice}`);
    // Here you would typically navigate to checkout
  }

  private calculateTotal(): void {
    this.totalPrice = this.product.price * this.quantity;
  }
}