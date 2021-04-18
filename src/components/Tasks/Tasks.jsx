import React, { useContext } from "react";
import SVGS from "../../images/PackSvgs";
import { StoreContext } from "../../store/StoreProvider";
import { Row, Col, ButtonGroup } from "react-bootstrap";
import {
  StyledCloseButton,
  StyledFormInput,
  StyledToggleButton,
  Wrapper,
  XButtonColumn,
} from "./style";

const Tasks = () => {
  const {
    isDarkModeOn,
    tasksToDo,
    setTasksToDo,
    displayTasks,
    setDisplayTasks,
  } = useContext(StoreContext);

  const ShowTasks = displayTasks.map((task) => {
    const styleFirst = displayTasks[0].id === task.id ? "m-0 first" : "m-0";

    const styleCheckbox = task.done ? "checked" : "unchecked";

    const showCheckboxIcon = task.done ? (
      <img src={SVGS.Check} alt="Checkbox" />
    ) : null;

    const styleDoneTask = task.done ? "line-through" : "";

    const handleTaskDone = () => {
      setTasksToDo(
        [...tasksToDo].map((item) => {
          if (item.id === task.id) {
            return {
              ...item,
              done: !item.done,
            };
          } else return item;
        })
      );

      setDisplayTasks(
        [...displayTasks].map((item) => {
          if (item.id === task.id) {
            return {
              ...item,
              done: !item.done,
            };
          } else return item;
        })
      );
    };

    const handleTaskDelete = () => {
      setTasksToDo(
        [...tasksToDo].filter((item) => {
          return item.id !== task.id ? item : null;
        })
      );
      setDisplayTasks(
        [...displayTasks].filter((item) => {
          return item.id !== task.id ? item : null;
        })
      );
    };

    return (
      <Row key={task.id} className="justify-content-center">
        <Wrapper $isDarkModeOn={isDarkModeOn} className={styleFirst}>
          <Row>
            <Col xs={2} className="align-self-center" align="center">
              <ButtonGroup toggle>
                <StyledToggleButton
                  $isDarkModeOn={isDarkModeOn}
                  type="checkbox"
                  className={styleCheckbox}
                  checked={task.done}
                  onChange={handleTaskDone}
                >
                  {showCheckboxIcon}
                </StyledToggleButton>
              </ButtonGroup>
            </Col>
            <Col xs={9}>
              <div>
                <StyledFormInput
                  $isDarkModeOn={isDarkModeOn}
                  className={styleDoneTask}
                  value={task.task}
                  disabled
                />
              </div>
            </Col>
            <XButtonColumn xs={1}>
              <StyledCloseButton className="p-0" onClick={handleTaskDelete}>
                <img src={SVGS.Cross} alt="X" />
              </StyledCloseButton>
            </XButtonColumn>
          </Row>
        </Wrapper>
      </Row>
    );
  });

  const isTaskEmpty = ShowTasks.length > 0 ? ShowTasks : null;

  return <>{isTaskEmpty}</>;
};

export default Tasks;
