// Novo componente EditTask.tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { Dispatch, useState } from 'react';
import { Task, TasksAction } from '@/types/task';

export function EditTask({ task, dispatch, onCancel }: {
    task: Task;
    dispatch: Dispatch<TasksAction>;
    onCancel: () => void;
}) {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [category, setCategory] = useState(task.category);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        dispatch({ type: 'editar', task: { ...task, title, description, category } });
        onCancel();
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 pb-5 w-full">

            <Input value={title} onChange={e => setTitle(e.target.value)} />
            <Input value={description} onChange={e => setDescription(e.target.value)} />
            <Input value={category} onChange={e => setCategory(e.target.value)} />
            
            <div className="flex gap-2">
                <Button type="submit">Salvar</Button>
                <Button type="button" onClick={onCancel}>Cancelar</Button>
            </div>
        </form>
    );
}