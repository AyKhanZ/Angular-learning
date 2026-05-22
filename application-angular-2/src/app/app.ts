import { Component } from '@angular/core';
import { TasksComponent } from "./tasks/tasks";
import { UsersComponent } from './users/users';
import { UserComponent } from "./users/user/user";
import { NewUserComponent } from "./users/new-user/new-user";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [TasksComponent, UsersComponent, UserComponent, NewUserComponent]
})
export class App {
  userId!: number;

  onSelectUser(userId: number) {
    this.userId = userId;
  }
}
