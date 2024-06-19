import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask({ name: taskName, completed: false });
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nhập tên công việc" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
      />
      <button type="submit">Thêm công việc</button>
    </form>
  );
};

export default AddTask;
