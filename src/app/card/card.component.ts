import { ChangeDetectionStrategy, Component , Input} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BtnComponent } from '../btn/btn.component';
import { Store } from '@ngrx/store';
import { deleteTask } from '../store/tasks/index';

@Component({
  selector: 'app-card',
  imports: [MatCardModule,MatButtonModule,BtnComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() task: any;
  
  constructor(private store: Store) {}

  deleteTaskHandler = (): void => {
    if (this.task && this.task.title) {
      this.store.dispatch(deleteTask({ task: this.task }));
      console.log(this.task);
    } else {
      console.log("task is null");
    }
    console.log(this.task);
  }
}
