import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryHomeComponent } from './inventory-home/inventory-home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { StockEntryComponent } from './stock-entry/stock-entry.component';

@NgModule({
  declarations: [InventoryComponent, InventoryHomeComponent, CategoriesComponent, ProductsComponent, StockEntryComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
