import { Component , inject, input , signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../../services/tasks.service';
import { Task } from '../../../types/task';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTaskComponent {
  userId = input.required<number | undefined>();
  isOpened: boolean = false;
  enteredTitle = signal('');
  enteredDescription = signal('');
  taskService = inject(TasksService);

  onSubmit() {const newTask: Task = {
      id: Math.random(),
      userId : this.userId(),
      title: this.enteredTitle(),
      description: this.enteredDescription(),
      status: 'In Progress'
    };

    this.taskService.createTask(newTask);
    this.enteredTitle.set('');
    this.enteredDescription.set('');
    this.isOpened = false;
  }

  openAddUserForm() {
    this.isOpened = true;
  }
}
