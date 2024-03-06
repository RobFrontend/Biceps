import styled from "styled-components";
import Heading from "../../ui/Heading";
import UseTransition from "../../ui/UseTransition";
import { Fade } from "react-awesome-reveal";
import Container from "../../ui/Container";

const StyledHero = styled.section`
  background: linear-gradient(
      to bottom right,
      rgb(0, 0, 0, 0.1),
      rgb(0, 0, 0, 0.4)
    ),
    url("HeroBG.webp");
  background-position: top;
  background-size: cover;
  min-height: 90vh;
`;

const HeroBox = styled.div`
  display: grid;
  padding-top: 9.6rem;
  padding-bottom: 9.6rem;
  gap: 4.8rem;
  align-items: center;
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
`;

const HeroInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeroButtonsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;
  padding-top: 6.4rem;
`;

const StyledButton = styled.a`
  font-size: 2.4rem;
  border: none;
  background-color: var(--font-dark-dark);
  color: var(--font-medium-white);
  padding: 1.2rem 2.4rem;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-md);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    border-radius: var(--border-radius-lg);
  }
`;

function Hero() {
  return (
    <StyledHero>
      <Fade triggerOnce>
        <Container>
          <HeroBox>
            <div style={{ textJustify: "auto" }}>
              <Heading
                as="h3"
                style={{
                  textAlign: "center",
                  color: "var(--font-dark-white)",
                  marginTop: "0",
                  marginBottom: "0rem",
                }}
              >
                Sklep Kulturystyczny
              </Heading>
              <Heading
                as="h1"
                style={{
                  textAlign: "center",
                  marginTop: "0",
                  marginBottom: "0rem",
                }}
              >
                Biceps
              </Heading>
            </div>
            <HeroInfoBox>
              <Heading
                style={{
                  color: "var(--font-dark-white)",
                  marginTop: "0",
                  marginBottom: "0rem",
                }}
                as="h2"
              >
                <UseTransition />
              </Heading>
              <div>
                <Heading
                  style={{
                    color: "var(--font-dark-white)",
                    marginTop: "0",
                    marginBottom: "0rem",
                  }}
                  as="h2"
                >
                  Gwarancja
                </Heading>
                <Heading
                  style={{
                    color: "var(--font-dark-white)",
                    marginTop: "0",
                    marginBottom: "0rem",
                  }}
                  as="h2"
                >
                  Doskonałej
                </Heading>
                <Heading
                  style={{
                    color: "var(--font-dark-white)",
                    marginTop: "0",
                    marginBottom: "0rem",
                  }}
                  as="h2"
                >
                  Oferty
                </Heading>
              </div>
            </HeroInfoBox>
            <HeroButtonsBox>
              <StyledButton href="#oferta">Spradź ofertę</StyledButton>
              <StyledButton href="#onas">O Bicepsie</StyledButton>
            </HeroButtonsBox>
          </HeroBox>
        </Container>
      </Fade>
    </StyledHero>
  );
}

export default Hero;
