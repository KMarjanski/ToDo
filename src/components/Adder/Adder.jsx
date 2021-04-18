import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import SVGS from "../../images/PackSvgs";
import { Col, Row, ButtonGroup } from "react-bootstrap";
import { StyledFormInput, StyledToggleButton, Wrapper } from "./style";
import { StoreContext } from "../../store/StoreProvider";

const Adder = () => {
  const [placeholderValue, setPlaceholderValue] = useState(
    "Create a new todo..."
  );
  const {
    displayTasks,
    setDisplayTasks,
    isChecked,
    setIsChecked,
    isDarkModeOn,
    newTask,
    setNewTask,
    tasksToDo,
    setTasksToDo,
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
      setPlaceholderValue("Create a new todo...");
    }, [500]);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setNewTask(e.target.value);
  };

  const changeClassName = isChecked ? "checked" : "unchecked";

  const showSVG = isChecked ? <img src={SVGS.Check} alt="Checkbox" /> : null;

  return (
    <Row className="justify-content-center m-0" style={{ width: "100vw" }}>
      <Wrapper $isDarkModeOn={isDarkModeOn}>
        <Row>
          <Col xs={2} className="align-self-center" align="center">
            <ButtonGroup toggle>
              <StyledToggleButton
                $isDarkModeOn={isDarkModeOn}
                type="checkbox"
                className={changeClassName}
                checked={isChecked}
                onChange={handleAddTask}
              >
                {showSVG}
              </StyledToggleButton>
            </ButtonGroup>
          </Col>
          <Col xs={10}>
            <StyledFormInput
              $isDarkModeOn={isDarkModeOn}
              placeholder={placeholderValue}
              value={newTask}
              onChange={handleOnChange}
            />
          </Col>
        </Row>
      </Wrapper>
    </Row>
  );
};

export default Adder;
