import { createSelector } from '@ngrx/store';
import { Task } from './tasks.types';

// Селектор для получения всех задач
export const selectTasks = (state: { tasks: Task[] }) => state.tasks;

// Селектор для получения завершенных задач
export const selectCompletedTasks = createSelector(
  selectTasks,
  (tasks: Task[]) => tasks.filter(task => task.completed)
);

// Селектор для получения незавершенных задач
export const selectUncompletedTasks = createSelector(
  selectTasks,
  (tasks: Task[]) => tasks.filter(task => !task.completed)
);