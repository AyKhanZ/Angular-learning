import { ChangeDetectionStrategy, Component , Input} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BtnComponent } from '../btn/btn.component';
import { tasks } from '../../tasks'

@Component({
  selector: 'app-card',
  imports: [MatCardModule,MatButtonModule,BtnComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() task: any;
  tasks = tasks;

  
  deleteTaskHandler = () : void => {
    this.tasks = this.tasks.filter(t => t.title !== this.task.title);
    if(this.task && this.task.title){
      console.log(this.task)
      console.log(tasks)
    }
    else console.log("task is null")
  }
}
