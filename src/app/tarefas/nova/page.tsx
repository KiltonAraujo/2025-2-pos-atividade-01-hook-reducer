import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dispatch, useState } from 'react'
import { TasksAction } from '@/types/task';

export function addTask(
    dispatch: Dispatch<TasksAction>,
    title: string,
    description: string,
    category: string
) {
    const id = Date.now();
    dispatch({ type: 'adicionar', id, title, category, description });
    return (
        <form>
            <Input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => title = e.target.value}
            />
            <Input
                type="text"
                placeholder="Descrição"
                value={description}
                onChange={(e) => description = e.target.value}
            />
            <Input
                type="text"
                placeholder="Categoria"
                value={category}
                onChange={(e) => category = e.target.value}
            />
            <Button onClick={() => dispatch({ type: 'adicionar', id, title, category, description })}>
                Criar
            </Button>
        </form>
    )
}