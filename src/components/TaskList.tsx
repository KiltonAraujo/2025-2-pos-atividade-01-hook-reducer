'use-client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Dispatch } from 'react';
import { Task, TasksAction } from '@/types/task';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"


export function TaskList ({tasks,dispatch, onEdit    
}: {
    tasks: Task[];
    dispatch: Dispatch<TasksAction>;
    onEdit: (task: Task) => void;
}) {
    function handDelete(task: Task) {
        dispatch({ type: 'deletar', id: task.id });
    }
    return (
        <main className="flex flex-col gap-2">
            {tasks.map(task => (
                <Card key={task.id} className="w-full flex align-start gap-2 justify-center">
                    <div className='flex align-center gap-2 pl-6'>
                        <Button className="w-30" onClick={() => onEdit(task)}>Editar</Button>
                        <Dialog>
                            <DialogTrigger className="w-30"><Button className="w-30">Excluir</Button></DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Tem certeza?</DialogTitle>
                                    <DialogDescription>
                                        Essa ação não pode ser desfeita. Isso excluirá permanentemente sua tarefainha
                                    </DialogDescription>
                                    <Button className="w-30" onClick={() => handDelete(task)}>Excluir</Button>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>

                    </div>
                    
                    
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