import React, { useReducer } from "react";
import toast, { Toaster } from "react-hot-toast";
import TasksGrid from "../TasksGrid/TasksGrid";

const taskReducer = (state, action) => {
  switch (action.type) {
    case "RESET_TASK":
      return {
        id: (new Date().getTime() + Math.floor(Math.random() * 1000)).toString().slice(-6),
        title: "",
        description: "",
        priority: "normal",
      };
    case "UPDATE_TASK":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const getTasksFromLocalStorage = () => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
};

const setTasksInLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const AddTask = () => {
  const [task, dispatch] = useReducer(taskReducer, {
    id: (new Date().getTime() + Math.floor(Math.random() * 1000)).toString().slice(-6),
    title: "",
    description: "",
    priority: "normal",
  });

  const tasks = getTasksFromLocalStorage();

  const handleInputChange = (field, value) => {
    dispatch({ type: "UPDATE_TASK", field, value });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const timestamp = new Date();
    const newTask = {
      ...task,
      timestamp,
    };

    const updatedTasks = [...tasks, newTask];
    setTasksInLocalStorage(updatedTasks);

    toast.success("Successfully Added!");
    dispatch({ type: "RESET_TASK" });
  };

  return (
    <div>
      <div className="w-full min-h-[30vh] max-h-auto bg-no-repeat bg-cover bg-[url('https://png.pngtree.com/background/20210717/original/pngtree-blue-orange-abstract-watercolor-pen-brush-box-wallpaper-picture-image_1432703.jpg')] relative">
        <div>
          <Toaster />
        </div>

        <div className="bg-white shadow-md h-auto p-4 min-w-[420px] max-w-[480px] md:max-w-[600px] rounded-md absolute left-1/2 transform -translate-x-1/2 -bottom-52">
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
                required
                onChange={(e) => handleInputChange("title", e.target.value)}
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
                required
                onChange={(e) => handleInputChange("description", e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block  text-sm font-medium text-gray-700">Task Priority</label>
              {["normal", "important"].map((option) => (
                <label className="mr-4" key={option}>
                  <input
                    type="radio"
                    name="priority"
                    value={option}
                    checked={task.priority === option}
                    onChange={(e) => handleInputChange("priority", e.target.value)}
                  
                  />{" "}
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </label>
              ))}
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add Task
            </button>
          </form>
        </div>
      </div>
      <TasksGrid datas={tasks} />
    </div>
  );
};

export default AddTask;
