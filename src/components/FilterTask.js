import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Task from "./Task";

const FilterTask = () => {
  const listtasks = useSelector((state) => state);
  console.log(listtasks);

  const [status, setstatus] = useState("all");

  return (
    <div>
      <button variant="outline-primary" onClick={() => setstatus("all")}>
        All
      </button>
      <button variant="outline-primary" onClick={() => setstatus("done")}>
        Done
      </button>
      <button variant="outline-primary" onClick={() => setstatus("undone")}>
        Undone
      </button>
      <div class="container">
      {status === "done"
        ? listtasks
            .filter((el) => { console.log('Inside Map', el); return el.isChecked === true })
            .map((el) => { console.log('Inside Map', el); return (<Task task={el} key={el.id} />)})
        : status === "undone"
        ? listtasks
            .filter((el) => el.isChecked === false)
            .map((el) => <Task task={el} key={el.id} />)
        : listtasks.map((el) => { return (<Task task={el} key={el.id} />)})}
        </div>
    </div>
  );
};

export default FilterTask;
