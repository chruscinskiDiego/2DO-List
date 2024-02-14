
import reactLogo from './assets/react.svg'
import './App.css'
import { Plus } from 'react-feather';
import styles from './styles/pages/home.module.css';
import { Task } from './components/Task/index.tsx';
import { CreateTaskModal } from './components/CreateTaskModal/index';
import Modal from "react-modal";
import { useState } from 'react';
import {ITaskProps} from './components/Task/types.ts';


Modal.setAppElement("#root");

function App() {
  
  const [tasks, setTasks] = useState<ITaskProps[]>(() => {
    const taskFromLocalStorage = localStorage.getItem("tasks");
    if(! taskFromLocalStorage){
      return []
    }
    return JSON.parse(taskFromLocalStorage);
  });

  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false); //componente e funcao que atuara sobre o componente

  function handleToggleTask(clickedTask : ITaskProps) {
    setTasks((prevState) => {
      return prevState.map((task) => {
        if(task.id === clickedTask.id){
          return {
            ...task,
            isCompleted: !task.isCompleted
          }
        }
        return task;
      })
    } )
  }

  function handleRemoveTask(taskId : number) {
    setTasks((prevState) => {
      return prevState.filter((task) => {
        return task.id !== taskId;
      })
    })
  }
  function handleRequestCloseCreateTaskModal(){
    setIsCreateTaskModalOpen(false);
  }

  return (
    <div className="App">
      <section className={styles.container}>
        <header className={styles.header}>

          <h1>2Do - Lista de Tarefas</h1>

          <button type="button"
          className={styles.addTaskButton}
          onClick={() => setIsCreateTaskModalOpen(true)}>
            Adicionar
            <Plus/>
          </button>
        </header>

        <div className={styles.tasks}>
          {tasks?.map((task) => (<Task
          key={task.id}
          task={task}
          handleToggleTask={handleToggleTask}
          handleRemoveTask={handleRemoveTask}/>))}
        </div>

      </section>

      <CreateTaskModal isOpen = {isCreateTaskModalOpen} 
      onRequestClose = {handleRequestCloseCreateTaskModal}
      tasks={tasks}
      setTasks={setTasks}
      />
    </div>
  )
}

export default App
