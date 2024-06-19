import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, setEditingTask }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          deleteTask={deleteTask} 
          setEditingTask={setEditingTask} 
        />
      ))}
    </div>
  );
};

export default TaskList;
