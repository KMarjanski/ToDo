import React from "react";

import SVGS from "../../images/PackSvgs";
import { Button, Col, Jumbotron, Row } from "react-bootstrap";
import "./Header.scss";

const Header = () => {
  return (
    <Row className="justify-content-center">
      <Jumbotron className="background-transparent">
        <Row className="justify-content-between mr-0 min-width">
          <Col xs={1} className=" align-self-center  " align="center">
            <h1>TODO</h1>
          </Col>
          <Col xs={1} className="mb-2">
            <Button id="theme-switch" className="p-0">
              <img src={SVGS.Sun} alt="Sun icon" />
            </Button>
          </Col>
        </Row>
      </Jumbotron>
    </Row>
  );
};

export default Header;
