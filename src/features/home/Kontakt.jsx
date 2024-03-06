import { AttentionSeeker, Fade } from "react-awesome-reveal";
import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import styled from "styled-components";

const KontaktBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
  margin-bottom: 3.2rem;
`;

const KontaktBox = styled.div`
  padding: 1.2rem;
  border: 2px solid var(--font-light-dark);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
`;

function Kontakt() {
  return (
    <section>
      <Fade triggerOnce>
        <Container>
          <Heading as="h2" id="kontakt">
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
            </KontaktBox>
            <KontaktBox>
              <Heading as="h3">Zamów i odbierz</Heading>
              <p>
                Zamów odżywki przez telefon i odbierz osobiście. Dostaniesz
                rabat !
              </p>
            </KontaktBox>
          </KontaktBoxes>
        </Container>
        <Fade>
          <iframe
            title="mapa biceps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.3733585398395!2d20.931268993678685!3d52.39990927300171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eb9f9b2b0b493%3A0x81f231c25f1ec47c!2sSklep%20Kulturystyczny%20BICEPS!5e0!3m2!1spl!2sus!4v1709731448890!5m2!1spl!2sus"
            width="1920"
            height="400"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Fade>
      </Fade>
    </section>
  );
}

export default Kontakt;
