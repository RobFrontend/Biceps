import styled from "styled-components";
import Logo from "./Logo";
import { Fade, Slide } from "react-awesome-reveal";

const StyledHeader = styled.header`
  display: flex;
  padding: 1.8rem 3.2rem;
  align-items: center;
  justify-content: space-between;

  background: linear-gradient(
      to bottom,
      rgb(242, 242, 241, 0.6),
      rgba(242, 242, 241, 0.4)
    ),
    url("OnasBG.webp");
  background-position: top;
  background-size: cover;
  overflow: hidden;
  height: 8rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 3.2rem;
`;

const BtnNav = styled.a`
  font-size: 1.8rem;
  padding: 0.4rem 1rem;
  background: none;
  border: none;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: var(--border-radius-sm);
  border: solid 2px var(--font-verylight-dark);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    box-shadow: var(--shadow-md);
    border-radius: var(--border-radius-lg);
    border: solid 2px var(--font-dark-dark);
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Fade triggerOnce>
        <Slide triggerOnce>
          <Logo />
        </Slide>
        <Nav>
          <Slide direction="right" triggerOnce>
            <BtnNav href="#oferta">Oferta</BtnNav>
            <BtnNav href="#kontakt">Kontakt</BtnNav>
          </Slide>
        </Nav>
      </Fade>
    </StyledHeader>
  );
}

export default Header;
