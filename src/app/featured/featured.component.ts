import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from '@nativescript/ui-sidedrawer';
import * as app from '@nativescript/core/application';
import { DataService, Product } from '../services/data.service';

@Component({
  selector: 'Featured',
  template: `
    <ActionBar title="Featured" class="action-bar">
      <NavigationButton (tap)="onDrawerButtonTap()" android.systemIcon="ic_menu_slideshow" ios.systemIcon="4"></NavigationButton>
    </ActionBar>
    <ScrollView>
      <StackLayout class="page">
        <Label text="Featured Products" class="h1 text-center m-20"></Label>
        <StackLayout *ngFor="let product of featuredProducts" class="featured-item">
          <Label [text]="product.name" class="featured-title"></Label>
          <Label [text]="product.description" class="featured-description"></Label>
        </StackLayout>
      </StackLayout>
    </ScrollView>
  `,
  styles: [`
    .page { background-color: #f5f5f5; padding: 20; }
    .featured-item { background-color: white; padding: 15; margin-bottom: 10; border-radius: 8; }
    .featured-title { font-size: 18; font-weight: bold; color: #212121; }
    .featured-description { font-size: 14; color: #757575; margin-top: 5; }
  `]
})
export class FeaturedComponent implements OnInit {
  featuredProducts: Product[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProducts().subscribe(products => {
      this.featuredProducts = products.slice(0, 3);
    });
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}