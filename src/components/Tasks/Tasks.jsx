import React, { useContext } from "react";
import "./Tasks.scss";
import SVGS from "../../images/PackSvgs";
import { StoreContext } from "../../store/StoreProvider";
import {
  Row,
  Jumbotron,
  Col,
  Button,
  ButtonGroup,
  ToggleButton,
  Form,
} from "react-bootstrap";

const Tasks = () => {
  const { tasksToDo, setTasksToDo, optionMenu } = useContext(StoreContext);

  const ShowTasks = tasksToDo.map((task) => {
    const styleFirst =
      tasksToDo[0].id === task.id
        ? "background m-0 radius first"
        : "background m-0 radius";

    const styleCheckbox = task.done
      ? "checkbox-style checked"
      : "checkbox-style unchecked";

    const showCheckboxIcon = task.done ? (
      <img src={SVGS.Check} alt="Checkbox" />
    ) : null;

    const styleDoneTask = task.done ? "form-input line-through" : "form-input";

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
    };

    const handleTaskDelete = () => {
      setTasksToDo(
        [...tasksToDo].filter((item) => {
          return item.id !== task.id ? item : null;
        })
      );
    };

    const menuHelper = () => {
      if (optionMenu === 1) {
        return "justify-content-center";
      } else if (optionMenu === 2 && task.done) {
        return "d-none";
      } else if (optionMenu === 3 && !task.done) {
        return "d-none";
      } else return "justify-content-center";
    };

    return (
      <Row key={task.id} className={menuHelper()}>
        <Jumbotron className={styleFirst}>
          <Row>
            <Col xs={2} className="align-self-center" align="center">
              <ButtonGroup toggle>
                <ToggleButton
                  type="checkbox"
                  className={styleCheckbox}
                  checked={task.done}
                  onChange={handleTaskDone}
                >
                  {showCheckboxIcon}
                </ToggleButton>
              </ButtonGroup>
            </Col>
            <Col xs={9}>
              <Form.Control
                className={styleDoneTask}
                value={task.task}
                disabled
              />
            </Col>
            <Col xs={1} className="close-button-column">
              <Button className="p-0 close-button" onClick={handleTaskDelete}>
                <img src={SVGS.Cross} alt="X" />
              </Button>
            </Col>
          </Row>
        </Jumbotron>
      </Row>
    );
  });

  const isTaskEmpty = ShowTasks.length > 0 ? ShowTasks : null;

  return <>{isTaskEmpty}</>;
};

export default Tasks;
