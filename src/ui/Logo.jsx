import styled from "styled-components";
import { onClickScrollSmoothTop } from "./HandleScrollTo";

const StyledLogo = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const IMG = styled.img`
  background: none;
  /* padding: 0.6rem; */
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.2));
  transition: all 0.5s;
  &:hover {
    opacity: 0.8;
    filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.3));
  }
`;

function Logo() {
  return (
    <StyledLogo onClick={onClickScrollSmoothTop}>
      <IMG src="LogoBiceps.png" alt="logo biceps" />
    </StyledLogo>
  );
}

export default Logo;
