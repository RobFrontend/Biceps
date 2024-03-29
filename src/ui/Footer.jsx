import styled from "styled-components";

import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const StyledFooter = styled.footer`
  position: relative;
  overflow: hidden;

  /* &::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;

    background-image: url("OnasBG.webp");
    background-size: cover;
    background-position: center;

    width: 100%;
    height: 100%;
    opacity: 0.4;
    z-index: -1;
  } */
`;

const FooterContentBox = styled.div`
  margin: 0 auto;
  padding: 6.4rem 3.2rem 1.8rem;
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;
`;

const FooterMenu = styled.div`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(2, 1fr);
  font-size: 1.6rem;
  justify-content: center;
  justify-items: center;
  color: var(--font-medium-dark);
  font-weight: 400;
`;

const Pmenu = styled.p`
  margin-bottom: 0.6rem;
`;

const FooterCopy = styled.p`
  font-size: 1.2rem;
  opacity: 0.5;
  font-weight: 600;
  text-align: center;
  color: var(--font-verylight-dark);
`;

const StyledFooterLink = styled(Link)`
  color: var(--font-medium-dark);
`;

function Footer() {
  return (
    <StyledFooter>
      <Fade triggerOnce>
        <FooterContentBox>
          <Fade direction="down">
            <Logo />
          </Fade>
          <Fade delay={500} triggerOnce>
            <FooterMenu>
              <div>
                <Pmenu>
                  <a href="#">Strona główna</a>
                </Pmenu>
                <Pmenu>
                  <a href="#onas">O Bicepsie</a>
                </Pmenu>

                <Pmenu>
                  <a href="#oferta">Oferta</a>
                </Pmenu>
                <Pmenu>
                  <a href="#kontakt">Kontakt</a>
                </Pmenu>
              </div>
              <div>
                <Pmenu>Telefon: 663 216 132 </Pmenu>
                <Pmenu>E-mail: biceps.legionowo@wp.pl</Pmenu>
                <Pmenu>
                  Facebook:
                  <StyledFooterLink
                    to="https://www.facebook.com/p/Sklep-kulturystyczny-biceps-100063014632640/"
                    target="_blank"
                  >
                    {" "}
                    Sklep-kulturystyczny-biceps
                  </StyledFooterLink>
                </Pmenu>
                <Pmenu>Adres: Stefana Batorego 11, 05-120 Legionowo</Pmenu>
              </div>
            </FooterMenu>
          </Fade>
          <div>
            <FooterCopy>
              &copy; {new Date().getFullYear()} Sklep Kulturystyczny Biceps
            </FooterCopy>

            <FooterCopy>
              <span style={{ fontSize: "1rem" }}>By RobFrontend</span>
            </FooterCopy>
          </div>
        </FooterContentBox>
      </Fade>
    </StyledFooter>
  );
}

export default Footer;
