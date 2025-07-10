'use-client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Dispatch } from 'react';
import { Task, TasksAction } from '@/types/task';

export function TaskList ({
    tasks,
    dispatch,
    
}: {
    tasks: Task[];
    dispatch: Dispatch<TasksAction>;
}) {
    return (
        <main className="flex flex-col gap-2">
            {tasks.map(task => (
                <Card key={task.id} className="w-full">
                    <CardHeader>
                        <h1>{task.title}</h1>
                    </CardHeader>
                </Card>
            ))}
        </main>
);
}