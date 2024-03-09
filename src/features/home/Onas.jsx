import { AttentionSeeker, Fade } from "react-awesome-reveal";
import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SklepSrodek from "../../ui/SklepSrodek";

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
  margin-bottom: 4.8rem;
  background-position: center;
  background-size: cover;
  box-shadow: var(--shadow-md);
`;

const Dostep = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  /* align-items: center; */
  justify-content: center;
`;

const Godziny = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border: 2px solid var(--font-light-dark);
  padding: 1.2rem;
  border-radius: var(--border-radius-lg);
  width: fit-content;
  box-shadow: var(--shadow-md);
  transition: transform 0.5s;
  &:hover {
    transform: translateY(-0.6rem);
  }
`;

const GodzinySpan = styled.span`
  font-size: 1.8rem;
  color: var(--font-dark-dark);
`;

const DniOtwarcia = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  gap: 1.2rem;
`;

const StyledLink = styled(Link)`
  font-size: 1.8rem;
  color: var(--font-light-dark);
  font-weight: 600;
`;

function Onas() {
  return (
    <Fade triggerOnce>
      <section>
        <Container>
          <Heading as="h2" id="onas">
            O Bicepsie
          </Heading>
          <Fade triggerOnce>
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
                lepszym od innych!
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
              <Heading
                as="h3"
                style={{
                  marginTop: "1.8rem",
                }}
              >
                Negocjujemy ceny!
              </Heading>
              <p
                style={{
                  textAlign: "center",
                  fontStyle: "italic",
                  marginTop: "1.8rem",
                }}
              >
                "Jeśli chcesz kupić u nas odżywkę lub suplement przyjdź a my
                postaramy się zbić tak cenę aby była równa lub niższa od aukcji
                na Allegro."
              </p>
            </BicepsBox>
          </Fade>
          <Heading as="h3">Odzwiedź Biceps, napisz lub zadzwoń:</Heading>
          <AttentionSeeker effect="pulse" triggerOnce>
            <Dostep>
              <Godziny>
                <Heading as="h4">Godziny otwarca</Heading>
                <DniOtwarcia>
                  <GodzinySpan>Poniedziałek - piątek:</GodzinySpan>
                  <GodzinySpan>10:00 - 18:00</GodzinySpan>
                </DniOtwarcia>
                <DniOtwarcia>
                  <GodzinySpan>Sobota:</GodzinySpan>
                  <GodzinySpan>10:00 - 14:00</GodzinySpan>
                </DniOtwarcia>
                <DniOtwarcia>
                  <GodzinySpan>Niedziela:</GodzinySpan>
                  <GodzinySpan>Na telefon</GodzinySpan>
                </DniOtwarcia>
                <DniOtwarcia>
                  <GodzinySpan>
                    Stefana Batorego 11, 05-120 Legionowo
                  </GodzinySpan>
                </DniOtwarcia>
              </Godziny>
              <Godziny>
                <Heading as="h4">Telefon:</Heading>
                <GodzinySpan>663 216 132</GodzinySpan>
                <Heading as="h4">E-mail:</Heading>
                <GodzinySpan>biceps.legionowo@wp.pl</GodzinySpan>
              </Godziny>
              <Godziny>
                <Heading as="h4">Facebook:</Heading>
                <StyledLink
                  to="https://www.facebook.com/p/Sklep-kulturystyczny-biceps-100063014632640/"
                  target="_blank"
                >
                  Sklep-kulturystyczny-biceps
                </StyledLink>
              </Godziny>
            </Dostep>
          </AttentionSeeker>
          <SklepSrodek />
        </Container>
      </section>
    </Fade>
  );
}

export default Onas;
