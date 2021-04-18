import styled from "styled-components";
import { Button, Jumbotron, Row } from "react-bootstrap";
import { variables } from "../../utilities/variables";

export const Wrapper = styled(Jumbotron)`
  background-color: transparent !important;
  border-radius: 10px !important;
  padding: 1px !important;
  min-width: 340px !important;
  width: 40vw !important;

  @media (max-width: 340px) {
    min-width: 160px !important;
  }
`;

export const StyledRow = styled(Row)`
  @media (max-width: 992px) {
    max-width: 340px !important;
  }
`;

export const ThemeSwitchButton = styled(Button)`
  background-color: transparent !important;
  border: none !important;
  padding: 0 !important;
  &:focus {
    box-shadow: none !important;
  }
`;

export const Title = styled.h1`
  color: ${variables.light.VeryLightGray} !important;
  margin: 0 !important;
  line-height: 1rem !important;
  letter-spacing: 1rem !important;

  @media (max-width: 340px) {
    letter-spacing: 0 !important;
  }
`;
