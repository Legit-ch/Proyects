import { Component } from '@angular/core';
import { RadSideDrawer } from '@nativescript/ui-sidedrawer';
import * as app from '@nativescript/core/application';
import { DataService, Product } from '../services/data.service';

@Component({
  selector: 'Search',
  template: `
    <ActionBar title="Search" class="action-bar">
      <NavigationButton (tap)="onDrawerButtonTap()" android.systemIcon="ic_menu_slideshow" ios.systemIcon="4"></NavigationButton>
    </ActionBar>
    <StackLayout class="page">
      <StackLayout class="search-container">
        <Label text="Search Products" class="h2 text-center m-20"></Label>
        <!-- Ejemplo de ngModel (Pregunta 6) -->
        <TextField 
          [(ngModel)]="searchQuery" 
          hint="Enter product name..." 
          class="input"
          (textChange)="onSearchChange()">
        </TextField>
        <Button text="Search" (tap)="onSearch()" class="btn btn-primary m-10"></Button>
      </StackLayout>
      
      <StackLayout class="results-container">
        <Label *ngIf="searchResults.length === 0 && searchQuery" text="No products found" class="text-center"></Label>
        <StackLayout *ngFor="let product of searchResults" class="search-result-item">
          <Label [text]="product.name" class="result-title"></Label>
          <Label [text]="product.description" class="result-description"></Label>
          <Label [text]="'$' + product.price" class="result-price"></Label>
        </StackLayout>
      </StackLayout>
    </StackLayout>
  `,
  styles: [`
    .page { padding: 20; background-color: #f5f5f5; }
    .search-container { background-color: white; padding: 20; margin-bottom: 20; border-radius: 8; }
    .input { margin: 10; padding: 12; border-radius: 8; }
    .search-result-item { background-color: white; padding: 15; margin-bottom: 10; border-radius: 8; }
    .result-title { font-size: 16; font-weight: bold; color: #212121; }
    .result-description { font-size: 14; color: #757575; margin-top: 5; }
    .result-price { font-size: 16; font-weight: bold; color: #4caf50; margin-top: 5; }
  `]
})
export class SearchComponent {
  searchQuery: string = '';
  searchResults: Product[] = [];

  constructor(private dataService: DataService) {}

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  onSearchChange(): void {
    if (this.searchQuery.length > 2) {
      this.searchResults = this.dataService.searchProducts(this.searchQuery);
    } else {
      this.searchResults = [];
    }
  }

  onSearch(): void {
    this.searchResults = this.dataService.searchProducts(this.searchQuery);
  }
}