import { Component, Input, SimpleChanges } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { Task , AppState} from '../store/tasks/tasks.types';
import { Store } from '@ngrx/store';
import { deleteTask ,selectCompletedTasks,selectTasks, selectUncompletedTasks } from '../store/tasks/index';

@Component({
  selector: 'app-content',
  imports: [CardComponent,CommonModule,FlexLayoutModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input() selectedTab: string = 'All';  // Добавляем переменную для выбранной вкладки

  tasks$: Observable<Task[]>;

  constructor(private store: Store<AppState>) {
    // Используем селектор для получения списка задач
    this.tasks$ = this.store.select(selectTasks); 
  }

  handleDeleteTask(task: Task): void {
    this.store.dispatch(deleteTask({ task })); 
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedTab']) {
      console.log('Selected tab has changed:', this.selectedTab);
      if (this.selectedTab === 'Completed') {
        this.tasks$ = this.store.select(selectCompletedTasks);
      } else if (this.selectedTab === 'Uncompleted') {
        this.tasks$ = this.store.select(selectUncompletedTasks);
      } else {
        this.tasks$ = this.store.select(selectTasks); // Все задачи
      }
    }
  }
  ngOnInit() {
    console.log('ngOnInit selectedTab:', this.selectedTab);  // Проверяем начальное значение
  }
}
