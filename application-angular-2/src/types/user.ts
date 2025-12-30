import { Task } from "./task";

export interface User {
    id: number;
    name: string;
    email: string;
    tasks: Task[];
}