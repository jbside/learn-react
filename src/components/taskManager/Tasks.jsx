import { ChevronRightIcon, DeleteIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Button from "./Button.jsx"

function Task({tasks, onTaskClick, onTaskDelete}) {
    const navigate = useNavigate()
    
    function onSetDetailClick(task){
        const query = new URLSearchParams({
            title: task.title,
            description: task.description
        })
        
        navigate(`/task?${query.toString()}`)
    }
    
    return (
        <ul className = "space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => 
                (<li key = {task.id} className = "flex gap-2">
                    <button onClick = {() => onTaskClick(task.id)} 
                            className = {`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isCompleted && "line-through"}`}>
                        {task.title}
                    </button>
                    <Button onClick = {() => onSetDetailClick(task)}><ChevronRightIcon /></Button>    
                    <Button onClick={() => onTaskDelete(task.id)} ><DeleteIcon /></Button>    
                </li>
            ))}
        </ul>
    )
}

export default Task