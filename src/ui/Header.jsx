import styled from "styled-components";
import Logo from "./Logo";
import { Fade, Slide } from "react-awesome-reveal";

const StyledHeader = styled.header`
  display: flex;
  padding: 1.8rem 3.2rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px black;
  background: linear-gradient(
    to bottom,
    rgb(242, 242, 241),
    rgba(242, 242, 241, 0.9)
  );
  overflow: hidden;
  border: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 3.2rem;
`;

const BtnNav = styled.button`
  font-size: 1.8rem;
  padding: 0.5rem 1.1rem;
  background: none;
  border: none;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: var(--border-radius-sm);
  border: solid 1px var(--font-verylight-dark);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    box-shadow: var(--shadow-md);
    border-radius: var(--border-radius-lg);
    border: solid 1px var(--font-dark-dark);
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Fade triggerOnce>
        <Nav>
          <Slide triggerOnce>
            <Logo />
          </Slide>
        </Nav>
        <Nav>
          <Slide direction="right" triggerOnce>
            <BtnNav>Oferta</BtnNav>
            <BtnNav>Kontakt</BtnNav>
          </Slide>
        </Nav>
      </Fade>
    </StyledHeader>
  );
}

export default Header;
