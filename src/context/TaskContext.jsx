import { createContext, useState, useEffect } from "react"
import { dataTasks } from "../data/tasks";

export const TaskContext = createContext()

export function TaskContextProvider({children}) {
  const [tasks, setTask] = useState([]);

  const createTask = (task) => {
    setTask([...tasks,{
      title: task.title,
      id: tasks.length + 1,
      description: task.description
    }])
  }

  const deleteTask = (taskId) => {
    setTask(tasks.filter(task => task.id !== taskId))
    
  }

  useEffect(() => {
    setTask(dataTasks);
  }, []);

  return (
        <TaskContext.Provider value={{
          tasks,
          deleteTask,
          createTask
        }}>
            {children}
            </TaskContext.Provider>
  )
}

