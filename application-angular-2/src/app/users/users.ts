import { Component, inject, output, signal } from '@angular/core';
import { User } from '../../types/user';
import { UsersService } from '../../services/users.service';

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
