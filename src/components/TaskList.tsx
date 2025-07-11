'use-client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Dispatch } from 'react';
import { Task, TasksAction } from '@/types/task';

export function TaskList ({tasks,dispatch, onEdit    
}: {
    tasks: Task[];
    dispatch: Dispatch<TasksAction>;
    onEdit: (task: Task) => void;
}) {
    return (
        <main className="flex flex-col gap-2">
            {tasks.map(task => (
                <Card key={task.id} className="w-full">
                    <Button onClick={() => onEdit(task)}>Editar</Button>
                    
                    <CardHeader className='flex flex-col gap-2 align-righ w-full fill-cyan-600'>
                        <div className='flex items-end gap-1 w-full'>
                            <h1 className='font-bold text-2xl'>{task.title}</h1>
                            <p>{task.completed}</p>
                            <h2 className='font-semibold'>{task.category}</h2>
                        </div>
                        <p>{task.description}</p>
                    </CardHeader>
                </Card>
            ))}
        </main>
);
}