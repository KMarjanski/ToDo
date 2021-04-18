import React, { useContext, useEffect } from "react";
import { Row, Col, ToggleButtonGroup } from "react-bootstrap";
import {
  StyledButton,
  StyledParagraph,
  StyledToggleButton,
  Wrapper,
} from "./style";
import { StoreContext } from "../../store/StoreProvider";

const Menu = () => {
  const {
    isDarkModeOn,
    tasksToDo,
    setTasksToDo,
    optionMenu,
    setOptionMenu,
    displayTasks,
    setDisplayTasks,
  } = useContext(StoreContext);

  const tasksStillToDo = tasksToDo.filter((task) => (!task.done ? task : null));

  const showTasksLeft =
    tasksStillToDo.length > 1
      ? `${tasksStillToDo.length} items left`
      : tasksStillToDo.length === 1
      ? `${tasksStillToDo.length} item left`
      : `No more items left`;

  const styleIfTaskArrayIsEmpty = displayTasks.length === 0 ? "empty" : "";

  const handleToggleMenu = (value) => {
    setOptionMenu(value);
    const thisValue = value;
    if (thisValue === 1) {
      setDisplayTasks([...tasksToDo]);
    } else if (thisValue === 2) {
      setDisplayTasks(
        [...tasksToDo].filter((task) => (!task.done ? task : null))
      );
    } else {
      setDisplayTasks(
        [...tasksToDo].filter((task) => (task.done ? task : null))
      );
    }
  };

  useEffect(() => {
    if (optionMenu === 1) {
      setDisplayTasks([...tasksToDo]);
    } else if (optionMenu === 2) {
      setDisplayTasks(
        [...tasksToDo].filter((task) => (!task.done ? task : null))
      );
    } else {
      setDisplayTasks(
        [...tasksToDo].filter((task) => (task.done ? task : null))
      );
    }
  }, [optionMenu, setDisplayTasks, tasksToDo]);

  const handleClearCompleted = () => {
    console.log("rere");
    setTasksToDo([...tasksToDo].filter((task) => (!task.done ? task : null)));
    setDisplayTasks(
      [...tasksToDo].filter((task) => (!task.done ? task : null))
    );
  };

  return (
    <Row className="justify-content-center">
      <Wrapper $isDarkModeOn={isDarkModeOn} className={styleIfTaskArrayIsEmpty}>
        <Row className="justify-content-between">
          <Col xs={6} lg={3} className="pt-2">
            <StyledParagraph $isDarkModeOn={isDarkModeOn} className="p-0 m-0">
              {showTasksLeft}
            </StyledParagraph>
          </Col>
          <Col lg={6} className="d-none d-lg-block text-center pt-1">
            <ToggleButtonGroup
              type="radio"
              name="menu"
              value={optionMenu}
              onChange={handleToggleMenu}
              size="sm"
            >
              <StyledToggleButton $isDarkModeOn={isDarkModeOn} value={1}>
                All
              </StyledToggleButton>
              <StyledToggleButton $isDarkModeOn={isDarkModeOn} value={2}>
                Active
              </StyledToggleButton>
              <StyledToggleButton $isDarkModeOn={isDarkModeOn} value={3}>
                Completed
              </StyledToggleButton>
            </ToggleButtonGroup>
          </Col>
          <Col xs={6} lg={3} className="text-center p-1">
            <StyledButton
              $isDarkModeOn={isDarkModeOn}
              size="sm"
              className="p-0"
              onClick={handleClearCompleted}
            >
              Clear completed
            </StyledButton>
          </Col>
        </Row>
      </Wrapper>
    </Row>
  );
};

export default Menu;
