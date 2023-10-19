import React, { useEffect, useState } from "react";
import TaskCard from "../TaskCard/TaskCard";

const TasksGrid = ({datas}) => {
  const [tasks, setTasks] = useState(datas);

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, [datas]);
  // Reverse the order of tasks
  const reversedTasks = [...tasks].reverse();

  return (
    <div className="w-full min-h-screen h-full pt-60">
      <div className="p-4 max-w-7xl mx-auto bg-[#f0f7ff] rounded-md shadow-sm grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
   
        {reversedTasks.length > 0 ? reversedTasks.map((task,i) => (
          <TaskCard
            key={i}
            task={task}
          />
        )) : <p>No Task Added.</p>}
      </div>
    </div>
  );
};

export default TasksGrid;
