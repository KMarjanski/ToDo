/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import { StyledFooter } from "./style";

const Footer = () => {
  return (
    <StyledFooter>
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
