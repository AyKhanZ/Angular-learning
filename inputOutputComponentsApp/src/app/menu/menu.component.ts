import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FoodType } from '../../Interfaces/types';
@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input({required: true}) allElements!: FoodType[];
  @Output() product = new EventEmitter<number>()

  onClick(id: number) {
    this.product.emit(id);
  }
}
