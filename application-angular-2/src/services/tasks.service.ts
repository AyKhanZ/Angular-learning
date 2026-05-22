import { Injectable, signal } from '@angular/core';
import type { Task } from '../types/task'

@Injectable({ providedIn: 'root' })
export class TasksService {
    private tasks = signal<Task[]>([]);

    constructor(){
        const data = localStorage.getItem('tasks');
        if(data) {
            this.tasks.set(JSON.parse(data));
        }
    }

    getTasks(userId: number): Task[] {
        return this.tasks().filter(task => task.userId === userId);
    }

    getTask(id: number) : Task | undefined {
        const task = this.tasks().find(task => task.id === id);
        return task;
    }

    createTask(newTask: Task): void {
        const updatedTasks = [...this.tasks(), newTask];
        this.tasks.set(updatedTasks);
        this.saveToStorage();
    }

    updateTask(newTask: Task): void {
        const updatedTasks = this.tasks().map(task => 
            task.id === newTask.id ? {...newTask} : task
        );
        this.tasks.set(updatedTasks);
        this.saveToStorage();
    }

    deleteTask(id: number): void {
        const updatedTasks = [... this.tasks().filter(task => task.id === id)];
        this.tasks.set(updatedTasks);
        this.saveToStorage();
    }

    private saveToStorage(): void {
        localStorage.setItem('tasks', JSON.stringify(this.tasks()));
    }
}