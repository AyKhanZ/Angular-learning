import { Component, Input } from '@angular/core';
import { FoodType } from '../../Interfaces/types';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input({required: true}) selectedProduct: FoodType | undefined;

}
