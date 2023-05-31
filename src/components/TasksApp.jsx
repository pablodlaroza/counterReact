import { useState } from "react";
import List from "./List";
import getPokemon from "../helpers/getPokemon"
 
const TasksApp = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
 
    const handleAddTasks = () => {
        // setTasks(tasks.concat(newTask));
        setTasks([...tasks, newTask]);
       
        setNewTask('');
    }
   
 
    return (
        <div>
            <h2>Lista de Pokemones</h2>
            <div>
                <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)} />
                <button onClick={handleAddTasks}>Agregar tarea</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                   <List key={task} task={task} />
                ))}
              
            </ul>
        </div>
    )
}
 
export default TasksApp;