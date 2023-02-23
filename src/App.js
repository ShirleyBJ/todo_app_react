import Header from "./components/header/Header.jsx";
import FilterBar from "./components/filterPanel/FilterBar.jsx";
import Task from "./components/task/Task.jsx";
import Modal from "react-modal";

import './App.css';
import { useState } from "react";

Modal.setAppElement('#root');


function App() {
  const [modalIsOpen,setModalIsOpen] = useState(false);
  const addTask = (e) => {
    console.log("Task added");
    setModalIsOpen(true);
}

  const closeModal = (e) => {
    setModalIsOpen(false);
  }

  return (
    <div className="App">
      <Header addTask={addTask}/>
      <FilterBar/>
      <Task/>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>Close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
    
  );
}

export default App;
