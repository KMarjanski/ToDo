import React, { useContext } from "react";
import "./Tasks.scss";
import SVGS from "../../images/PackSvgs";
import { StoreContext } from "../../store/StoreProvider";
import {
  Row,
  Jumbotron,
  Col,
  ButtonGroup,
  ToggleButton,
  Form,
} from "react-bootstrap";

const Tasks = () => {
  const { tasksToDo, setTasksToDo } = useContext(StoreContext);

  const ShowTasks = tasksToDo.map((task) => (
    <Row key={task.id} className="justify-content-center">
      <Jumbotron className="background">
        <Row>
          <Col xs={2} className=" align-self-center  " align="center">
            <ButtonGroup toggle>
              <ToggleButton
                type="checkbox"
                className={
                  task.done
                    ? "checkbox-style checked"
                    : "checkbox-style unchecked"
                }
                checked={task.done}
                onChange={() => {
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
                }}
              >
                {task.done ? <img src={SVGS.Check} alt="Checkbox" /> : null}
              </ToggleButton>
            </ButtonGroup>
          </Col>
          <Col xs={10}>
            <Form.Control
              className={task.done ? "form-input line-through" : "form-input"}
              value={task.task}
              disabled
            />
          </Col>
        </Row>
      </Jumbotron>
    </Row>
  ));
  return <>{ShowTasks}</>;
};

export default Tasks;
