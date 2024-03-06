import { AttentionSeeker, Fade } from "react-awesome-reveal";
import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import styled from "styled-components";

const StyledSection = styled.section`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    background: url("OnasBG.webp");
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    width: 100%;
    height: 100%;
  }
`;

const KontaktBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
  margin-bottom: 3.2rem;
  @media (max-width: 35em) {
    grid-template-columns: 1fr;
  }
`;

const KontaktBox = styled.div`
  padding: 1.2rem;

  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  background: linear-gradient(
    to bottom,
    rgb(242, 242, 241, 0.6),
    rgba(242, 242, 241, 0.2)
  );
`;

const IMG = styled.img`
  width: 100%;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  filter: brightness(0.9) grayscale(0.1) opacity(0.9);
`;

function Kontakt() {
  return (
    <StyledSection style={{ marginTop: "6.4rem" }}>
      <Fade triggerOnce>
        <Container>
          <Heading as="h2" id="kontakt" style={{ marginTop: "3.2rem" }}>
            Kontakt
          </Heading>
          <KontaktBoxes>
            <KontaktBox>
              <Heading as="h3">Telefon</Heading>
              <Heading as="h4">663 216 132</Heading>
            </KontaktBox>
            <KontaktBox>
              <Heading as="h3">Email</Heading>
              <Heading as="h4">biceps.legionowo@wp.pl</Heading>
            </KontaktBox>
            <KontaktBox>
              <Heading as="h3">Adres</Heading>
              <Heading as="h4">adresulicamiasto</Heading>
            </KontaktBox>
            <KontaktBox>
              <Heading as="h3">Facebook</Heading>
              <AttentionSeeker effect="pulse" delay={500} triggerOnce>
                <Heading as="h4">
                  <a
                    href="https://www.facebook.com/p/Sklep-kulturystyczny-biceps-100063014632640/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sklep-kulturystyczny-biceps
                  </a>
                </Heading>
              </AttentionSeeker>
            </KontaktBox>
            <KontaktBox>
              <Heading as="h3">Konsultacje</Heading>
              <p>
                Nie ważne czy jesteś początkującym leszczem czy hardkorowym
                koksiarzem - zapraszamy na konsultacje suplementacyjne
              </p>
              <Heading as="h3">Zamów i odbierz</Heading>
              <p>
                Zamów odżywki przez telefon i odbierz osobiście. Dostaniesz
                rabat!
              </p>
            </KontaktBox>

            <IMG src="Kasa.webp" alt="Kasa" />
          </KontaktBoxes>
        </Container>
        <Fade>
          <iframe
            title="mapa biceps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.3733585398395!2d20.931268993678685!3d52.39990927300171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eb9f9b2b0b493%3A0x81f231c25f1ec47c!2sSklep%20Kulturystyczny%20BICEPS!5e0!3m2!1spl!2sus!4v1709731448890!5m2!1spl!2sus"
          ></iframe>
        </Fade>
      </Fade>
    </StyledSection>
  );
}

export default Kontakt;
