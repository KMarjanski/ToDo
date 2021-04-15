/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import { Container, Jumbotron } from "react-bootstrap";
import Header from "../Header/Header";
import Adder from "../Adder/Adder";
import Tasks from "../Tasks/Tasks";

import "./App.scss";
import StoreProvider from "../../store/StoreProvider";

const App = () => {
  return (
    <StoreProvider>
      <Jumbotron className="vertical-center transparent">
        <Container>
          <Header />
          <Adder />
          <Tasks />
        </Container>
      </Jumbotron>
    </StoreProvider>
  );
};

export default App;
