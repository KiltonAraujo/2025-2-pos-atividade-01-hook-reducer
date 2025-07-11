'use client'
import { useReducer } from 'react';
import { tasksReducer } from '@/lib/tasksReducer';
import { Task, TasksAction } from '@/types/task';
import { AddTask } from '@/components/AddTask';

export default function NovaTarefa(){
    const [tasks, dispatch] = useReducer(tasksReducer, []);
    return (
        <main>
            <h1>Nova tarefa</h1>
            <AddTask dispatch={dispatch} />
        </main>
    )
}