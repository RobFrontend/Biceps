import { AttentionSeeker, Fade, Zoom } from "react-awesome-reveal";
import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import styled from "styled-components";

const ProducenciBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;
`;

const Producenci = styled.span`
  color: var(--font-medium-dark);
  font-size: 2rem;
  border: solid 1px var(--font-medium-dark);
  padding: 0.3rem 0.6rem;
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-sm);
  background: linear-gradient(
    to bottom,
    rgb(242, 242, 241, 0.7),
    rgba(242, 242, 241, 0.4)
  );
`;

const BicepsBox = styled.div`
  background: linear-gradient(
      to bottom,
      rgb(242, 242, 241, 0.6),
      rgba(242, 242, 241, 0.2)
    ),
    url("OnasBG.webp");
  border-radius: var(--border-radius-lg);
  padding: 1.8rem;
  background-position: center;
  background-size: cover;
  box-shadow: var(--shadow-md);
`;

function Onas() {
  return (
    <Fade triggerOnce>
      <section>
        <Container>
          <Heading as="h2">O Bicepsie</Heading>
          <Zoom triggerOnce>
            <BicepsBox>
              <Heading as="h3">
                Wiele lat doswiadczenia w suplementacji profesjonalnych
                kulturystów i zawodników MMA.
              </Heading>
              <p style={{ textAlign: "center", fontStyle: "italic" }}>
                "W sporcie nie ma rzeczy niemożliwych..."
              </p>
              <p style={{ marginBottom: "3.2rem" }}>
                Wyniki uzyskiwane w sporcie zawodowym zależą od dobrej
                suplementacji. Wyczynowy, profesjonalny sport wymaga
                profesjonalnych odżywek po to by być na siłowni i zawodach
                lepszym od innych !{" "}
              </p>
              <Heading as="h3">Odżywki najlepszych producentów:</Heading>
              <AttentionSeeker effect="pulse" delay={500} triggerOnce>
                <ProducenciBox>
                  <Producenci>Activlab</Producenci>
                  <Producenci>Trec</Producenci>
                  <Producenci>Gear</Producenci>
                  <Producenci>Hi-tec</Producenci>
                  <Producenci> Olimp (cały asortyment)</Producenci>
                  <Producenci>Real-Pharm (cały asortyment)</Producenci>
                  <Producenci>UNS</Producenci>
                  <Producenci>Fitness Authority</Producenci>
                  <Producenci>Scitec</Producenci>
                  <Producenci>Rx-Gold</Producenci>
                  <Producenci>Sport Definition</Producenci>
                  <Producenci>Biotech (cały asortyment)</Producenci>
                  <Producenci>Arnold Series</Producenci>
                  <Producenci>Muscle Pharm</Producenci>
                  <Producenci>PVL Mutant</Producenci>
                  <Producenci>SAN</Producenci>
                  <Producenci>Nutrend</Producenci>
                  <Producenci>Multipower</Producenci>
                  <Producenci>Dymatize</Producenci>
                  <Producenci>Syntrax</Producenci>
                  <Producenci>Premium Nutrition</Producenci>
                  <Producenci>Probody</Producenci>
                  <Producenci>Extrifit USA</Producenci>
                  <Producenci>Inne marki dostępne pod zamówienie</Producenci>
                </ProducenciBox>
              </AttentionSeeker>
              <p
                style={{
                  textAlign: "center",
                  fontStyle: "italic",
                  marginTop: "1.8rem",
                }}
              >
                "Jeśli chcesz kupić u nas odżywkę lub suplement przyjdź a my
                postaramy się zbić tak cenę aby była równa lub niższa od aukcji
                na Allegro. Negocjujemy ceny!"
              </p>
            </BicepsBox>
          </Zoom>
        </Container>
      </section>
    </Fade>
  );
}

export default Onas;
