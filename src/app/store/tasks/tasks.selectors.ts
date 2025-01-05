import { createSelector } from '@ngrx/store';
import { Task } from './tasks.types';

export const selectTasks = (state: { tasks: Task[] }) => state.tasks;

export const selectCompletedTasks = createSelector(
  selectTasks,
  (tasks: Task[]) => tasks.filter(task => task.completed)
);

export const selectUncompletedTasks = createSelector(
  selectTasks,
  (tasks: Task[]) => tasks.filter(task => !task.completed)
);