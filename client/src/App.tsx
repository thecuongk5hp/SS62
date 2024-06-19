import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import EditTaskModal from './components/EditTaskModal';
import PostsList from './components/PostsList';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  useEffect(() => {
    axios.get('http://localhost:8080/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const addTask = (task: Task) => {
    axios.post('http://localhost:8080/tasks', task)
      .then(response => setTasks([...tasks, response.data]))
      .catch(error => console.error('Error adding task:', error));
  };

  const updateTask = (updatedTask: Task) => {
    axios.put(`http://localhost:8080/tasks/${updatedTask.id}`, updatedTask)
      .then(response => {
        setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
        setEditingTask(null);
      })
      .catch(error => console.error('Error updating task:', error));
  };

  const deleteTask = (taskId: number) => {
    axios.delete(`http://localhost:8080/tasks/${taskId}`)
      .then(response => setTasks(tasks.filter(task => task.id !== taskId)))
      .catch(error => console.error('Error deleting task:', error));
  };

  return (
    <div className="App">
      <h1>Quản lý công việc</h1>
      <AddTask addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        deleteTask={deleteTask} 
        setEditingTask={setEditingTask} 
      />
      {editingTask && 
        <EditTaskModal 
          task={editingTask} 
          updateTask={updateTask} 
          setEditingTask={setEditingTask} 
        />
      }
    </div>
  );
}
<PostsList></PostsList>
export default App;