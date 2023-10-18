import React from "react";

const TaskCard = () => {
  return (
    <div className="p-2 w-full cursor-pointer hover:scale-[102%] duration-300 bg-white min-h-[130px] cs-shadow rounded-md grid  gap-2 grid-cols-5">
      {/* Task Indicator */}
      <div className="bg-green-400 p-2 w-[75px] h-[75px] rounded-full flex justify-center items-center">
        <h1 className="text-white text-3xl">A</h1>
      </div>
      {/* Task Informations */}
      <div className="col-span-4 p-2">
        {/* Times */}
        <h1 className="text-md font-bold text-gray-400 line-clamp-2">
          9:30 PM 18-10-2023
        </h1>
        {/* Task Title */}
        <h1 className="text-lg font-bold line-clamp-2">
          Meeting With Programming Hero Job Placement Team.
        </h1>
        {/* Task Description */}
        <p className="text-sm text-gray-600 line-clamp-2">
          Have to Meet With Programming Hero Job Placement Team. Its Last Time For Meet With Them
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
