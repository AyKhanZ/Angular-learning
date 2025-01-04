import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { tasks } from '../../tasks'
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-content',
  imports: [CardComponent,CommonModule,FlexLayoutModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  tasks: any = tasks || [];
}
