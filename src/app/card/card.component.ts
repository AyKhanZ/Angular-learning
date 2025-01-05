import { ChangeDetectionStrategy, Component , EventEmitter, Input, Output} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-card',
  imports: [MatCardModule,MatButtonModule,BtnComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() task: any; // Задача, переданная из родителя
  @Output() deleteTask = new EventEmitter<any>(); // Создаём событие для удаления

  
  deleteTaskHandler(): void {
    this.deleteTask.emit(this.task); // Уведомляем родительский компонент об удалении
  }
}
