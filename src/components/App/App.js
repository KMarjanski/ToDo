/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React, { useContext } from "react";

import { Container } from "react-bootstrap";
import { Wrapper } from "./style";

import { StoreContext } from "../../store/StoreProvider";

import GlobalStyle from "../../golbalStyles/globalStyles";

import Adder from "../Adder/Adder";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Tasks from "../Tasks/Tasks";

const App = () => {
  const { isDarkModeOn } = useContext(StoreContext);
  return (
    <>
      <GlobalStyle DarkMode={isDarkModeOn} />
      <Header />
      <Adder />
      <Wrapper className="p-0">
        <Container>
          <Tasks />
          <Menu />
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default App;
