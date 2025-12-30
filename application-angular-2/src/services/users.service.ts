import { User } from "../types/user";
import { computed, inject, Injectable, signal } from "@angular/core";
import { TasksService } from "./tasks.service";

@Injectable({providedIn: 'root'})
export class UsersService {
    private users = signal<User[]>([]);
    private tasksService = inject(TasksService)

    constructor() {
        const data = localStorage.getItem('users');
        if (data) {
            this.users.set(JSON.parse(data));
        }
    }

    getUsers() {
      return computed(() =>
        this.users().map(user => ({
          ...user,
          tasks: this.tasksService.getTasks(user.id),
        }))
      );
    }

    getUser(id?: number) {
      if (!id || id <= 0) return;

      return computed(() => {
        const user = this.users().find(u => u.id === id);
        if (!user) return;

        return {
          ...user,
          tasks: this.tasksService.getTasks(user.id),
        };
      });
    }

    createUser(user: User): void {
    const updated = [...this.users(), user];
    this.users.set(updated);
    localStorage.setItem('users', JSON.stringify(updated));
  }

  updateUser(id: number, user: User): void {
    const updated = this.users().map(u =>
      u.id === id ? { ...user } : u
    );

    this.users.set(updated);
    localStorage.setItem('users', JSON.stringify(updated));
  }

  deleteUser(id: number): void {
    const updated = this.users().filter(user => user.id !== id);
    this.users.set(updated);
    localStorage.setItem('users', JSON.stringify(updated));
  }
}