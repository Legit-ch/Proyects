import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductCardComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ProductsModule { }