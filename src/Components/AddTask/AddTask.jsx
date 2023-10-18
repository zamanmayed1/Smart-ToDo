import React, { useState } from 'react';

const AddTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: 'normal',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const timestamp = new Date();
    const formattedTimestamp = `Time: ${timestamp.toLocaleTimeString()} Date: ${timestamp.toLocaleDateString()}`;
    const taskWithTimestamp = { ...task, timestamp: formattedTimestamp };
    console.log(taskWithTimestamp);
  };

  return (
    <div className="w-full min-h-[30vh] max-h-auto bg-no-repeat bg-cover bg-[url('https://png.pngtree.com/background/20210717/original/pngtree-blue-orange-abstract-watercolor-pen-brush-box-wallpaper-picture-image_1432703.jpg')] relative">
      <div className="bg-white shadow-md h-auto p-4 min-w-[420px] max-w-[480px] md:max-w-[600px] rounded-md absolute left-1/2 transform -translate-x-1/2 -bottom-52">
        {/* Task Form */}
        <form onSubmit={handleAddTask}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Task Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none"
              placeholder="Enter task title"
              value={task.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Task Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none"
              placeholder="Enter task description"
              value={task.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Task Priority</label>
            <div className="flex items-center space-x-4">
              <label>
                <input
                  type="radio"
                  name="priority"
                  value="normal"
                  checked={task.priority === 'normal'}
                  onChange={handleInputChange}
                /> Normal
              </label>
              <label>
                <input
                  type="radio"
                  name="priority"
                  value="important"
                  checked={task.priority === 'important'}
                  onChange={handleInputChange}
                /> Important
              </label>
            </div>
          </div>

          {/* Add Task Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover-bg-blue-600"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
