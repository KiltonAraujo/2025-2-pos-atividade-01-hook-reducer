'use client';

import { useReducer, useState } from 'react';
import { tasksReducer } from '@/lib/tasksReducer';
import { AddTask } from '@/components/AddTask';
import { TaskList } from '@/components/TaskList';
import { Task } from '@/types/task';
import { EditTask } from '@/components/EditTask';

const initialTasks: Task[] = [
  { id: 1, 
    title: 'Saudade de bel', 
    description: 'Ficar reclando do tempo que não vejo o bel', 
    category: 'Estudo', 
    completed: true },

  { id: 2, 
    title: 'Aprender Next.js', 
    description: 'Ler a documentação do Next.js', 
    category: 'Estudo', 
    completed: false },
];

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  return (
    <div className="container mx-auto py-8 w-160">
      <h1 className="text-4xl font-bold mb-8">Lista de tafefas</h1>
      <AddTask dispatch={dispatch} />
      {editingTask ? (
        <EditTask task={editingTask} dispatch={dispatch} onCancel={() => setEditingTask(null)}/>
        ) : null}
        
      <TaskList tasks={tasks} dispatch={dispatch} onEdit={setEditingTask}/>
    </div>
  );
}