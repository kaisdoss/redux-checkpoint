import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import ListTask from "./components/ListTask";
import Addtask from "./components/Addtask";
import React, { } from 'react'
import FilterTask from "./components/FilterTask";


function App() {
  // const [filteredTaskList, setFilteredTaskList] = useState([]);
  // const [filterStatus, setFilterStauts] = useState("")

  return (
    <div className="App m-4">
      <header className="App-header">
        <Addtask />
        {/* <ListTask /> */}
        <FilterTask />
      
        
      </header>
    </div>
  );
}

export default App;
