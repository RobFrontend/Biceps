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
          <Fade delay={500}>
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
                <Heading as="h4">Stefana Batorego 12, 05-120 Legionowo</Heading>
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

              <IMG src="Kasa.webp" alt="kasa sklepu Biceps" />
            </KontaktBoxes>
          </Fade>
        </Container>
        <Fade>
          <iframe
            title="mapa biceps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608.6018243594581!2d20.93587066969159!3d52.39929411653354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eb816f895b93f%3A0x7ebd23a3f4b32fd8!2sStefana%20Batorego%2011%2C%2005-120%20Legionowo!5e0!3m2!1spl!2spl!4v1709817944225!5m2!1spl!2spl"
          ></iframe>
        </Fade>
      </Fade>
    </StyledSection>
  );
}

export default Kontakt;
