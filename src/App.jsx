import React from 'react'
import AddTask from './Components/AddTask/AddTask'
import TasksGrid from './Components/TasksGrid/TasksGrid'

const App = () => {
  return (
    <div>
      <AddTask/>
      <TasksGrid/>
    </div>
  )
}

export default App