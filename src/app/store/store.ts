import { provideStore } from '@ngrx/store';
import { tasksReducer } from '../store/tasks';

export const storeProviders = [
  provideStore({ tasks: tasksReducer})
];