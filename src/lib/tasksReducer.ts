import { Task, TasksAction } from '@/types/task';

export function tasksReducer(tasks: Task[], action: TasksAction): Task[] {
    switch (action.type) {
        case 'adicionar':
            return [
                ...tasks,   
                {
                    id: action.id,
                    title: action.title,
                    description: action.description,
                    category: action.category,
                    completed: false
                }
            ];
        case 'editar':
            return tasks.map(t =>
                t.id === action.task.id ? action.task : t
            );
        case 'deletar':
            return tasks.filter(task => task.id !== action.id);
        default:
            throw Error(`Ação desconhecida`);
    }
}