import React, { useState,} from "react";
import { Button } from "react-bootstrap";
import { addtodo } from "../redux/Actions";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";

function Addtask() {
  const [name, setName] = useState();
  // const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();
  // const input = useRef(null);

  const hanleCange = (e) => {
    e.target.value.trim() !== "" && setName(e.target.value);
  };

  const handleClick = (e) => {
    dispatch(
      addtodo({
        id: Math.random(),
        name: name,
        isChecked: false,
      })
    );

    setName("");
  };

  const hanleKeyDown = (e) => {
    // console.log(e);

    if (e.keyCode === 13 && e.target.value.trim() !== "") {
      e.preventDefault();
      dispatch(
        addtodo({
          id: uuid(),
          name: name,
        })
      );

      setName("");
    }
  };

  return (
    <div>
      <h3>Todo Input</h3>
      <form>
        <div className="row m-2">
          <input
           
            value={name}
            onChange={hanleCange}
            onKeyDown={hanleKeyDown}
            type="text"
            className="col form-control"
          />
          <Button onClick={handleClick} variant="primary m-2">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Addtask;
