import { createAction, props } from '@ngrx/store';
import { Task } from './tasks.reducer';

export const loadTasks = createAction('[Tasks] Load Tasks');
export const addTask = createAction(
  '[Tasks] Add Task',
  props<{ task: { title: string; description: string; image: string; completed: boolean; uncompleted: boolean } }>()
);
export const toggleTaskCompletion = createAction('[Tasks] Toggle Task Completion', props<{ title: string }>());
export const deleteTask = createAction(
    '[Task] Delete Task',
    props<{ task: Task }>()
  );