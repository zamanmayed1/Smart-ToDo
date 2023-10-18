import React from 'react'
import TaskCard from '../TaskCard/TaskCard'

const TasksGrid = () => {
  return (
    <div className='w-full min-h-screen h-full  pt-60 '>
       {/* Display */}
        <div className='p-4 max-w-7xl mx-auto bg-[#f0f7ff] rounded-md shadow-sm grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               
              <TaskCard/>
              <TaskCard/>
              <TaskCard/>
              <TaskCard/>
              <TaskCard/>
              <TaskCard/>
              <TaskCard/>
              <TaskCard/>
              <TaskCard/>
        </div>
    </div>
  )
}

export default TasksGrid