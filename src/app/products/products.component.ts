import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from '@nativescript/ui-sidedrawer';
import * as app from '@nativescript/core/application';
import { DataService, Product } from '../services/data.service';
import { Observable } from 'rxjs';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'Products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  filteredProducts: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';

  constructor(
    private dataService: DataService,
    private routerExtensions: RouterExtensions
  ) {
    this.products$ = this.dataService.getProducts();
  }

  ngOnInit(): void {
    this.products$.subscribe(products => {
      this.filteredProducts = products;
      this.categories = ['All', ...new Set(products.map(p => p.category))];
    });
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  onCategoryTap(category: string): void {
    this.selectedCategory = category;
    this.products$.subscribe(products => {
      this.filteredProducts = category === 'All' 
        ? products 
        : products.filter(p => p.category === category);
    });
  }

  onProductTap(product: Product): void {
    this.routerExtensions.navigate(['/products/detail', product.id], {
      transition: {
        name: 'slide'
      }
    });
  }
}