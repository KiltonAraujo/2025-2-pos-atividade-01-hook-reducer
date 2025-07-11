import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { Dispatch, useState } from 'react'
import { TasksAction } from '@/types/task';

export function AddTask({ dispatch}: {
    dispatch: Dispatch<TasksAction>;}) {
        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');
        const [category, setCategory] = useState('Geral');

        function Submit(e:React.FormEvent) {
            e.preventDefault();
            const id = Date.now();
            dispatch({ type: 'adicionar', id, title, category, description });
            setTitle('');
            setDescription('');
            setCategory('');
    }
        return (
            <form className='flex flex-col gap-2 pb-5 w-full' onSubmit={Submit}>
                <Input
                    
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <Button type="submit" onClick={Submit}>
                    Criar tarefa
                </Button>
            </form>
        )
    }