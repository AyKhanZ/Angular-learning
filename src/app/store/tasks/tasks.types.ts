export interface Task {
  title: string;
  description: string;
  image: string;
  completed: boolean;
  uncompleted: boolean;
}

export interface AppState {
  tasks: Task[];
}