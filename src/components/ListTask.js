import React,{} from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

function ListTask() {

  // const [status, setstatus] = useState("all");
  const todos = useSelector((state) => state);
  // console.log('We\'re In List Task', todos)
  return (
    <div className="my-3">
      
  
      {todos.map((todo) => 
        <Task key={todo.id} todo={todo} task='5' />
      )}
    </div>
  );
}

export default ListTask;
