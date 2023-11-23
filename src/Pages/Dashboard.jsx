import Header from "../components/header/Header"
import FilterBar from "../components/filterPanel/FilterBar.jsx";
import Task from "../components/task/Task.jsx";

import { useState } from "react";


function Dashboard() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Task 1",
            description: "Task description",
            reminder: false,
            tags: ['work'],
        },
        {
            id: 2,
            title: "Task 2",
            description: "Task description",
            reminder: false,
            tags: ['study'],
        },
        {
            id: 3,
            title: "Task 3",
            description: "Task description",
            reminder: false,
            tags: ['family'],
        }
    ])
    const [isDone, setIsDone] = useState(false);


    //Delete tasks
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    //Toggle done state
    const isTaskDone = (e, id) => {
        //console.log(e.target.checked, id);
        setIsDone(tasks.map((task) => task.id === id ? { ...task, reminder: e.target.checked } : task))
    }

    return (
        <>
            <Header />
            <FilterBar />
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <Task key={task.id} taskTitle={task.title} taskDescription={task.description} isTaskDone={isDone} onDelete={() => deleteTask(task.id)} onToggle={(e) => isTaskDone(e, task.id)} taskBg={isDone ? "bg-[#69665C]" : "bg-[#FFF9DE]"} />
                ))
            ) : (
                'No task To Show'
            )}
        </>
    )
}

export default Dashboard;