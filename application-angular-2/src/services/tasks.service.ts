import { Injectable, signal, computed } from '@angular/core';
import { Task } from '../types/task';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = signal<Task[]>([]);

  constructor() {
    const data = localStorage.getItem('tasks');
    if (data) {
      this.tasks.set(JSON.parse(data));
    }
  }

  getTasks(userId: number): Task[] {
    return this.tasks().filter(task => task.userId === userId);
  }

  getTask(id: number): Task | undefined {
    return this.tasks().find(task => task.id === id);
  }

  createTask(task: Task): void {
    const updated = [
      ...this.tasks(),
      { ...task, id: Date.now() },
    ];

    this.tasks.set(updated);
    localStorage.setItem('tasks', JSON.stringify(updated));
  }

  deleteTask(id: number): void {
    const updated = this.tasks().filter(task => task.id !== id);
    this.tasks.set(updated);
    localStorage.setItem('tasks', JSON.stringify(updated));
  }
}