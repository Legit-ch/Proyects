import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from '@nativescript/ui-sidedrawer';
import * as app from '@nativescript/core/application';
import { DataService, Product, User } from '../services/data.service';
import { Observable } from 'rxjs';
import { isAndroid } from '@nativescript/core';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products$: Observable<Product[]>;
  currentUser$: Observable<User | null>;
  featuredProducts: Product[] = [];
  platformMessage: string = '';

  constructor(private dataService: DataService) {
    this.products$ = this.dataService.getProducts();
    this.currentUser$ = this.dataService.getCurrentUser();
  }

  ngOnInit(): void {
    // Requirement #10: Android-specific code
    if (isAndroid) {
      this.platformMessage = 'Welcome to Android version!';
    } else {
      this.platformMessage = 'Welcome to iOS version!';
    }

    // Get featured products (first 3)
    this.products$.subscribe(products => {
      this.featuredProducts = products.slice(0, 3);
    });
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  onProductTap(product: Product): void {
    console.log('Product tapped:', product.name);
    // Navigate to product detail if needed
  }
}