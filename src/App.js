import { TaskListItem } from "./tasks/TaskListItem";
import { NewTaskForm } from "./tasks/NewTaskForm";
import { useTaskApi } from "./tasks/useTaskApi";
import { FilterTaskForm } from "./tasks/FilterTaskForm";
import { deleteTaskFromApi, addNewTaskToApi, editTaskApi} from "./tasks/apiCalls";

function App() {
  const { tasks, setTasks } = useTaskApi();

  const addNewTask = (newTask) => {
    addNewTaskToApi(newTask);
    setTasks(prev => [...prev, newTask]); 
  }

  const deleteTask = (id) => {
    deleteTaskFromApi(id);
    setTasks(prev => prev.filter(el => el.id !== id));
  };

  const editTask = (id , title) => {
    editTaskApi(id, title);
    setTasks(prev => prev.map( task => {
      if(task.id === id)
        return {...task, title};
      else return task;
    }))
  };

  
  return (
    <>
      <FilterTaskForm filter={setTasks} />
      <NewTaskForm onAdd={addNewTask} len={tasks.length}/>

        <h2>Lista zadań:</h2>
        <ul>
          {tasks
            .map(task => {
              return (
                <TaskListItem
                  key={ task.id }
                  task={ task }
                  onDelete={ deleteTask }
                  onEdit={ editTask } 
                />
              )
            })
          }
        </ul>
    </>   
  );
}

export default App;
