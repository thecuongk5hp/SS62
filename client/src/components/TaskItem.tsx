import React from 'react';

const TaskItem = ({ task, deleteTask, setEditingTask }) => {
  return (
    <div>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
      <button onClick={() => setEditingTask(task)}>Sửa</button>
      <button onClick={() => deleteTask(task.id)}>Xóa</button>
    </div>
  );
};

export default TaskItem;
