import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { Task, AppState } from '../store/tasks/tasks.types';
import { Store } from '@ngrx/store';
import {
  completeTask,
  deleteTask,
  selectCompletedTasks,
  selectTasks,
  selectUncompletedTasks,
} from '../store/tasks/index';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CardComponent, CommonModule, FlexLayoutModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnChanges {
  @Input() selectedTab: string = 'All'; 
  tasks$: Observable<Task[]>; 

  constructor(private store: Store<AppState>) {
    this.tasks$ = this.store.select(selectTasks);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedTab']) {
      console.log('Selected tab changed:', this.selectedTab);
      this.updateTasks();
    }
  }

  updateTasks(): void {
    switch (this.selectedTab) {
      case 'Completed':
        this.tasks$ = this.store.select(selectCompletedTasks);
        break;
      case 'Uncompleted':
        this.tasks$ = this.store.select(selectUncompletedTasks);
        break;
      default:
        this.tasks$ = this.store.select(selectTasks);
        break;
    }
  }

  handleDeleteTask = (task: Task): void => {
    this.store.dispatch(deleteTask({ task }));
  }

  handleCompleteTask = (task: Task): void => {
    this.store.dispatch(completeTask({ task }));
  }
}
