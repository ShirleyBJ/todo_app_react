import Header from "../components/header/Header"
import FilterBar from "../components/filterPanel/FilterBar.jsx";
import Task from "../components/task/Task.jsx";

function Dashboard() {
    return (
        <>
            <Header />
            <FilterBar />
            <Task taskTitle="First task title" taskDescription="Maecenas molestie dui justo, sit amet congue felis auctor sagittis. Etiam facilisis semper dapibus. Vivamus commodo purus eget sem tincidunt, vel efficitur felis bibendum. Nulla sed mollis justo. Fusce condimentum libero aliquet libero tincidunt, et euismod quam blandit. Praesent sagittis arcu volutpat posuere fermentum. Nam rutrum sodales purus, id fringilla massa fringilla ac. Quisque dapibus erat ac sollicitudin pulvinar." />
        </>
    )
}

export default Dashboard;