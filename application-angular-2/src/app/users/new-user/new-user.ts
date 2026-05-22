import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../types/user';

@Component({
  selector: 'app-new-user',
  imports: [FormsModule],
  templateUrl: './new-user.html',
  styleUrl: './new-user.css',
})
export class NewUserComponent {
  isOpened = signal(false);
  enteredUserName = signal('');
  enteredUserEmail = signal('');
  userService = inject(UsersService);

  openAddUserForm() {
    this.isOpened.set(true);
  }

  onSubmit() {
    const newUser: User = {
      id: Math.random(),
      name: this.enteredUserName(),
      email: this.enteredUserEmail(),
      tasks: []
    }
    this.userService.createUser(newUser);
    
    this.enteredUserName.set('');
    this.enteredUserEmail.set('');
    this.isOpened.set(false);
  }
}
