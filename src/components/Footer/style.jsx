import styled from "styled-components";
import { variables } from "../../utilities/variables";

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  color: ${(props) =>
    props.$isDarkModeOn
      ? variables.dark.LightGrayishBlue
      : variables.light.VeryDarkGrayishBlue};
`;
