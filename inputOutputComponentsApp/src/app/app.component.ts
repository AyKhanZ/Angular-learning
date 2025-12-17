import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { _food_data } from '../store/store';
import { FoodType } from '../Interfaces/types'
import { ProductDetailsComponent } from "./product-details/product-details.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [MenuComponent, ProductDetailsComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {
  data: FoodType[] = _food_data;
  selectedProduct: FoodType | undefined;

  onProductSelect(id: number) {
    this.selectedProduct = this.data.find( val => val.id == id);
  }
}
