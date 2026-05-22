import { Component, inject, input, computed } from '@angular/core';
import { NewTaskComponent } from '../../tasks/new-task/new-task';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user',
  imports: [NewTaskComponent],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  userId = input.required<number>();
  userService = inject(UsersService);
  user = computed(() =>
    this.userService.getUserById(this.userId())()
  );
}
