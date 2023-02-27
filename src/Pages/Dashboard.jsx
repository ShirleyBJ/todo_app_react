import Header from "../components/header/Header"
import FilterBar from "../components/filterPanel/FilterBar.jsx";
import Task from "../components/task/Task.jsx";

import { useState } from "react";


function Dashboard() {
    const [tasks,setTasks] = useState([
        {
            id: 1,
            title: "Task 1",
            description : "Task description",
            reminder: true,
        },
        {
            id: 2,
            title: "Task 2",
            description : "Task description",
            reminder: false,
        },
        {
            id: 1,
            title: "Task 3",
            description : "Task description",
            reminder: true,
        }
    ])

    
    return (
        <>
            <Header />
            <FilterBar />
            {tasks.map((task) => (
                <Task key={task.id} taskTitle={task.title} taskDescription={task.description} taskReminder={task.reminder} />
            ))}
        </>
    )
}

export default Dashboard;