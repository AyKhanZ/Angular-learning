import { Injectable, Signal, signal, computed, inject } from '@angular/core';
import type { User } from '../types/user';
import { TasksService } from './tasks.service';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private users = signal<User[]>([]);
  private taskService = inject(TasksService)

  constructor() {
    const data = localStorage.getItem('users');
    if (data) {
      this.users.set(JSON.parse(data));
    }
  }

  getUserById(id: number) {
    return computed(() => {
        const user = this.users().find(u => u.id === id)
        if(!user) {
            return;
        }

        return {
            ...user,
            tasks: this.taskService.getTasks(user.id)
        }
    });
  }

  getUsers() {
    return computed(() => 
        this.users().map((user) => ({
            ...user,
            tasks: this.taskService.getTasks(user.id)
        }))
    );
  }

  createUser(user: User): void {
    if (!user) {
      return;
    }
    const updatedUsers = [...this.users(), user];
    this.users.set(updatedUsers);
    this.saveToStorage();
  }

  updateUser(newUser: User): void {
    if (!newUser) {
      return;
    }
    const updatedUsers = this.users().map((user) =>
      newUser.id === user.id ? { ...newUser } : user
    );
    this.users.set(updatedUsers);
    this.saveToStorage();
  }

  deleteUser(id: number): void {
    const updatedUsers = [...this.users().filter((user) => user.id != id)];
    this.users.set(updatedUsers);
    this.saveToStorage();
  }

  private saveToStorage() {
    localStorage.setItem('users', JSON.stringify(this.users()));
  }
}
