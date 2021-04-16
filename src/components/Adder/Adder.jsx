import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import "./Adder.scss";
import SVGS from "../../images/PackSvgs";
import {
  Col,
  Form,
  Row,
  ToggleButton,
  ButtonGroup,
  Jumbotron,
} from "react-bootstrap";
import { StoreContext } from "../../store/StoreProvider";

const Adder = () => {
  const [placeholderValue, setPlaceholderValue] = useState("Type here...");
  const {
    tasksToDo,
    isChecked,
    setIsChecked,
    newTask,
    setNewTask,
    setTasksToDo,
    displayTasks,
    setDisplayTasks,
  } = useContext(StoreContext);

  const handleAddTask = () => {
    setIsChecked(!isChecked);
    if (newTask !== "") {
      setTasksToDo([...tasksToDo, { task: newTask, id: uuid(), done: false }]);
      setDisplayTasks([
        ...displayTasks,
        { task: newTask, id: uuid(), done: false },
      ]);
      setNewTask("");
    } else {
      setPlaceholderValue("Write something!");
    }
    setTimeout(() => {
      setIsChecked((prev) => !prev);
      setPlaceholderValue("Type here...");
    }, [500]);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setNewTask(e.target.value);
  };

  const changeClassName = isChecked
    ? "checkbox-style checked"
    : "checkbox-style unchecked";

  const showSVG = isChecked ? <img src={SVGS.Check} alt="Checkbox" /> : null;

  return (
    <Row className="justify-content-center">
      <Jumbotron className="background">
        <Row>
          <Col xs={2} className=" align-self-center  " align="center">
            <ButtonGroup toggle>
              <ToggleButton
                type="checkbox"
                className={changeClassName}
                checked={isChecked}
                onChange={handleAddTask}
              >
                {showSVG}
              </ToggleButton>
            </ButtonGroup>
          </Col>
          <Col xs={10}>
            <Form.Control
              className="form-input"
              placeholder={placeholderValue}
              value={newTask}
              onChange={handleOnChange}
            />
          </Col>
        </Row>
      </Jumbotron>
    </Row>
  );
};

export default Adder;
