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
        },
        {
            id: 2,
            title: "Task 2",
            description: "Task description",
            reminder: false,
        },
        {
            id: 3,
            title: "Task 3",
            description: "Task description",
            reminder: false,
        }
    ])
    const [isDone, setIsDone] = useState(false);


    //Delete tasks
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    //Toggle done state
    const toggleReminder = (e, id) => {
        console.log(e.target.checked, id);
        setIsDone(tasks.map((task) => task.id === id ? { ...task, reminder: e.target.checked} : task))
    }

    return (
        <>
            <Header />
            <FilterBar />
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <Task key={task.id} taskTitle={task.title} taskDescription={task.description} isDone={isDone} onDelete={() => deleteTask(task.id)} onToggle={(e) => toggleReminder(e, task.id)} />
                ))
            ) : (
                'No task To Show'
            )}
        </>
    )
}

export default Dashboard;