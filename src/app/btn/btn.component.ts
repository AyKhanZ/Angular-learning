import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-btn',
  imports: [MatButtonModule,MatIconModule,CommonModule,FlexLayoutModule ],
  templateUrl: './btn.component.html',
  standalone: true,
  styleUrl: './btn.component.css'
})

export class BtnComponent {
  @Input() btnType!: any;
  @Input() onClick!: () => any;

  handleClick(): void {
    if (this.onClick) {
      this.onClick();
    } else {
      console.log('No function provided for onClick');
    }
  }
}
