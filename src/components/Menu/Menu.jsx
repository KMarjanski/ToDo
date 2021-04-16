import React, { useContext } from "react";
import {
  Row,
  Col,
  Jumbotron,
  ToggleButtonGroup,
  Button,
  ToggleButton,
} from "react-bootstrap";
import "./Menu.scss";
import { StoreContext } from "../../store/StoreProvider";

const Menu = () => {
  const { tasksToDo, optionMenu, setOptionMenu } = useContext(StoreContext);

  const tasksStillToDo = tasksToDo.filter((task) => (!task.done ? task : null));

  const showTasksLeft =
    tasksStillToDo.length > 1
      ? `${tasksStillToDo.length} items left`
      : tasksStillToDo.length === 1
      ? `${tasksStillToDo.length} item left`
      : `No more items left`;

  const styleIfTaskArrayIsEmpty =
    tasksToDo.length === 0
      ? "background radius-end empty"
      : "background radius-end";

  const handleToggleMenu = (value) => {
    setOptionMenu(value);
  };

  return (
    <Row className="justify-content-center">
      <Jumbotron className={styleIfTaskArrayIsEmpty}>
        <Row className="justify-content-between">
          <Col xs={6} lg={3} className="pt-2">
            <p className="menu p-0 m-0">{showTasksLeft}</p>
          </Col>
          <Col lg={6} className="d-none d-lg-block text-center pt-1">
            <ToggleButtonGroup
              type="radio"
              name="menu"
              value={optionMenu}
              onChange={handleToggleMenu}
              size="sm"
            >
              <ToggleButton value={1} className="menu button">
                All
              </ToggleButton>
              <ToggleButton value={2} className="menu button">
                Active
              </ToggleButton>
              <ToggleButton value={3} className="menu button">
                Completed
              </ToggleButton>
            </ToggleButtonGroup>
          </Col>
          <Col xs={6} lg={3} className="text-center p-1">
            <Button size="sm" className="menu button p-0">
              Clear completed
            </Button>
          </Col>
        </Row>
      </Jumbotron>
    </Row>
  );
};

export default Menu;
