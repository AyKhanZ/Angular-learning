import { ChangeDetectionStrategy, Component , EventEmitter, Input, Output} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Store } from '@ngrx/store';
import { Task } from '../store/tasks/index';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule,MatCardModule,MatButtonModule,MatButtonModule,MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() task: any;
  @Output() deleteTask = new EventEmitter<Task>();
  @Output() completeTask = new EventEmitter<Task>();
  
  constructor(private store: Store) {}

  handleDeleteTask() {
    this.deleteTask.emit();
  }
  handleCompleteTask() {
    this.completeTask.emit();
  }
}
