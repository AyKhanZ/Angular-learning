import { Component, inject, input, computed } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../types/user';
import { NewTaskComponent } from '../../tasks/new-task/new-task';

@Component({
  selector: 'app-user',
  imports: [NewTaskComponent],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  userId = input.required<number | undefined>();
  userService = inject(UsersService);
  user = computed(() => this.userService.getUser(this.userId())?.());
}
