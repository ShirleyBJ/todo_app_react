import Header from "./components/header/Header.jsx";
import FilterBar from "./components/filterPanel/FilterBar.jsx";
import Task from "./components/task/Task.jsx";

import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <FilterBar/>
      <Task/>
    </div>
  );
}

export default App;
