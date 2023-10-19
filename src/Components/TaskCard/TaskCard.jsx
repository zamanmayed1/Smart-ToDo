import React, { useState } from "react";

const TaskCard = ({ task }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleEdite = () => {
    alert("Edite")
  }
  const handleDelete = () => {
    alert("Delete")
  }
  return (
    <div
      onMouseLeave={() => setIsOpen(false)}
      className="p-2 w-full cursor-pointer hover:scale-[102%] z-0 duration-300 items-center bg-white min-h-[130px] max-h-max cs-shadow rounded-md grid  gap-2 grid-cols-5 relative overflow-hidden"
    >
      {/* Task Indicator */}
      <div
        className={`z-10  ${
          task.priority === "normal" ? "bg-green-400" : "bg-[#3a3ced]"
        }  p-2 w-[75px] h-[75px] rounded-full flex justify-center justify-self-center items-center`}
      >
        <h1 className="text-white text-3xl">
          {task.title.slice(0, 1).toUpperCase()}
        </h1>
      </div>

      {/* Menu */}
      {isOpen && (
        <div
          className={`absolute animate__animated animate__fadeInRight top-2 right-12 w-[196px] h-[110px] bg-blue-50 shadow-md rounded-md"`}
        >
          <button onClick={()=>handleEdite()} className="block  w-[160px] py-2 mx-auto  rounded-md m-2 bg-blue-500 hover:bg-blue-800 duration-300 text-white">
            Edite
          </button>
          <button  onClick={()=>handleDelete()}  className="block  w-[160px] py-2 mx-auto  rounded-md m-2 bg-red-500 hover:bg-red-800 duration-300 text-white">
            Delete
          </button>
        </div>
      )}

      {/* Task Informations */}
      <div className="col-span-4 p-2">
        {/* Dots Icon */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-2 hover:bg-blue-50 duration-300 p-1 rounded-full z-10"
        >
          <img className="w-6 h-6" src="/dots.svg" alt="" />
        </div>
        {/* Times */}
        <h1 className="text-md font-bold text-gray-400 line-clamp-2">
          {task.timestamp}
        </h1>
        {/* Task Title */}
        <h1 className="text-lg font-bold line-clamp-2">{task.title}</h1>
        {/* Task Description */}
        <p className="text-sm text-gray-600 line-clamp-2">{task.description}</p>
      </div>
    </div>
  );
};

export default TaskCard;
