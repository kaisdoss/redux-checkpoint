import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import {
  deletetodo,
  updatetodo,
  completText,
  saveTask,
} from "../redux/Actions";

function Task({ task, todo }) {
  const [editable, setEditable] = useState(false);
  const [show, setShow] = useState(false);
  const [name, setName] = useState(task.name);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(saveTask({ id: task.id, text: name }));
    setShow(!show);
  };

  const checkboxRef = useRef(null);

  console.log(task.isChecked);

  console.log(checkboxRef.current);

  return (
    <div className="row mx-2 my-3 d-flex align-items-center">
      {/* <div>#{task.id.length > 1 ? task.id[2] : task.id}</div> */}
      <input
        ref={checkboxRef}
        type="checkbox"
        checked={task.isChecked}
        value=""
        className={"checkbox"}
        onClick={() => dispatch(completText(task.id))}
      />
      <div className="col">
        {editable ? (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="col form-control"
          />
        ) : (
          <h4 className={task.isChecked ? "todocheck" : "todolistitemcheck"}>
            {task.name}
          </h4>
        )}
      </div>
      <Button
        onClick={() => {
          dispatch(
            updatetodo({
              ...task,
              name: name,
            })
          );
          if (editable) {
            setName(task.name);
          }
          setEditable(!editable);
        }}
        variant="primary m-2"
      >
        {editable ? "Update" : "Edit"}
      </Button>

      <Button
        onClick={() => dispatch(deletetodo(task.id))}
        variant="danger m-2"
      >
        Delete
      </Button>
    </div>
  );
}

export default Task;
