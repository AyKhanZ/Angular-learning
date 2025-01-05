import { createReducer, on } from '@ngrx/store';
import { addTask, toggleTaskCompletion, deleteTask } from './tasks.actions';
import { Task } from './tasks.types';



export const initialState: Task[] = [
  {
    title: "Task 1",
    description: "This is the first task description.",
    image: "https://via.placeholder.com/150",
    completed: true,
    uncompleted: false
  },
  {
    title: "Task 2",
    description: "This is the second task description.",
    image: "https://via.placeholder.com/150",
    completed: false,
    uncompleted: true
  },
  {
    title: "Task 3",
    description: "This is the third task description.",
    image: "https://via.placeholder.com/150",
    completed: true,
    uncompleted: false
  },
  {
    title: "Task 4",
    description: "This is the fourth task description.",
    image: "https://via.placeholder.com/150",
    completed: false,
    uncompleted: true
  }
];

const _tasksReducer = createReducer(
  initialState,
  on(addTask, (state, { task }) => [...state, task]),
  on(toggleTaskCompletion, (state, { title }) => {
    return state.map(task =>
      task.title === title
        ? { ...task, completed: !task.completed, uncompleted: !task.uncompleted }
        : task
    );
  }),
  on(deleteTask, (state, { task }) =>
    state.filter(t => t.title !== task.title) // Удаляем задачу по её названию
  )
);

export function tasksReducer(state: Task[] | undefined, action: any) {
  return _tasksReducer(state, action);
}
