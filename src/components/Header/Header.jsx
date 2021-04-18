import React, { useContext } from "react";

import SVGS from "../../images/PackSvgs";
import { Col, Row } from "react-bootstrap";
import { Wrapper, StyledRow, Title, ThemeSwitchButton } from "./style";
import { StoreContext } from "../../store/StoreProvider";

const Header = () => {
  const { isDarkModeOn, setIsDarkModeOn } = useContext(StoreContext);

  const handleThemeSwitch = () => {
    setIsDarkModeOn(!isDarkModeOn);
  };

  const changeIcon = isDarkModeOn ? (
    <img src={SVGS.Sun} alt="Sun icon" />
  ) : (
    <img src={SVGS.Moon} alt="Moon icon" />
  );

  return (
    <Row className="justify-content-center m-0 mt-5">
      <Wrapper>
        <StyledRow className="justify-content-between mr-0">
          <Col xs={1} className=" align-self-center  " align="center">
            <Title>TODO</Title>
          </Col>
          <Col xs={1} className="mb-2">
            <ThemeSwitchButton className="p-0" onClick={handleThemeSwitch}>
              {changeIcon}
            </ThemeSwitchButton>
          </Col>
        </StyledRow>
      </Wrapper>
    </Row>
  );
};

export default Header;
