/* eslint-disable react/jsx-no-target-blank */
import React, { useContext } from "react";

import { StoreContext } from "../../store/StoreProvider";

import { StyledFooter } from "./style";

const Footer = () => {
  const { isDarkModeOn } = useContext(StoreContext);
  return (
    <StyledFooter $isDarkModeOn={isDarkModeOn}>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://www.frontendmentor.io/profile/KMarjanski">KMarjanski</a>.
    </StyledFooter>
  );
};

export default Footer;
