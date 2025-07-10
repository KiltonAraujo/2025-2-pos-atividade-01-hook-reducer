export interface Task {
    id: number;
    title: string;
    description: string;
    category: string;
    completed: boolean;
}

export type TasksAction =
    | { type: 'adicionar'; id: number; title: string; category: string; description: string }
    | { type: 'editar'; task: Task }
    | { type: 'deletar'; id: number; };