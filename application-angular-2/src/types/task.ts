export interface Task {
    id: number;
    userId: number | undefined;
    title: string;
    description: string;
    status: 'Pending' | 'In Progress' | 'Completed';
}