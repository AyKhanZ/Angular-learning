import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { Task } from '../store/tasks.reducer';
import { Store } from '@ngrx/store';
import { deleteTask } from '../store/tasks.actions';

@Component({
  selector: 'app-content',
  imports: [CardComponent,CommonModule,FlexLayoutModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  tasks$: Observable<Task[]>;

  constructor(private store: Store<{ tasks: Task[] }>) {
    this.tasks$ = this.store.select('tasks');
  }

  handleDeleteTask(task: Task): void {
    this.store.dispatch(deleteTask({ task })); 
  }
}
