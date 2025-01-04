import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BtnComponent } from '../../btn/btn.component';
import { Router } from '@angular/router';
import { tasks } from '../../../tasks';

@Component({
  selector: 'app-create',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, FlexLayoutModule, BtnComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(private router: Router) {}
  taskTitle: string = '';
  taskDescription: string = '';
  
  backHandler = (): void => {
      this.router.navigate(['/home']);
  };

  createTaskHandler = (): void => {
    if (this.taskTitle && this.taskDescription) {
      tasks.push({
        title: this.taskTitle,
        description: this.taskDescription,
        image: "https://via.placeholder.com/150",
        completed: false,
        uncompleted: true,
      });

      console.log('Task added:', tasks[tasks.length - 1]);
      this.router.navigate(['/home']);
    } else {
      console.error('Title and description are required!');
    }
  };
}
