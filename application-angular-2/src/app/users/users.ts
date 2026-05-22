import { Component, inject, output, computed } from '@angular/core';
import { UsersService } from '../../services/users.service';
import type { User } from '../../types/user'

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class UsersComponent {
  selectedUserId = output<number>();
  userService = inject(UsersService);
  users = this.userService.getUsers();

  selectUser(userId: number) {
    this.selectedUserId.emit(userId);
  }
}
