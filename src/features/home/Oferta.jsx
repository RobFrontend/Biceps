import styled from "styled-components";
import Heading from "../../ui/Heading";
import Container from "../../ui/Container";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import SklepSrodek from "../../ui/SklepSrodek";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const DyscyplinyBox = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const IMGdyscyplina = styled.img`
  max-width: 10rem;
  max-height: 10rem;
  border-radius: 100px;
`;

const DyscyplinaSpan = styled.span`
  font-size: 1.4rem;
`;

const TextBoxDyscyplina = styled.div``;

const SupleBoxes = styled.div`
  margin-top: 4.8rem;
  margin-bottom: 4.8rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.2rem;
  justify-content: center;
  justify-items: center;

  @media (max-width: 64em) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 35em) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const SupleBox = styled.div`
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
  overflow: hidden;
  transition: transform 0.5s;
  &:hover {
    transform: translateY(-0.6rem);
  }
`;

const IMGsuple = styled.img`
  width: 100%;
  filter: brightness(0.95) grayscale(0.05) opacity(0.95);
`;

const TextBoxSuple = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Dodatkowo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.4rem;
  @media (max-width: 35em) {
    grid-template-columns: 1fr;
  }
`;

const DodatkoweBox = styled.div`
  border: 2px solid var(--font-light-dark);
  padding: 1.2rem;
  border-radius: var(--border-radius-lg);
  width: fit-content;
  box-shadow: var(--shadow-md);
`;

function Oferta() {
  return (
    <section>
      <Fade triggerOnce>
        <Container>
          <Heading as="h2" id="oferta">
            Oferta
          </Heading>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            customTransition="all .5s"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            <DyscyplinyBox>
              <IMGdyscyplina src="Bieganie.webp" alt="biegnąca osoba" />
              <TextBoxDyscyplina>
                <p>Bieganie</p>
                <DyscyplinaSpan>
                  Suplementy dla biegaczy, witaminy, dodatki izotoniczne, stroje
                </DyscyplinaSpan>
              </TextBoxDyscyplina>
            </DyscyplinyBox>

            <DyscyplinyBox>
              <IMGdyscyplina src="Kulturystyka.webp" alt="napięty kulturysta" />
              <TextBoxDyscyplina>
                <p>Kulturystyka</p>
                <DyscyplinaSpan>
                  Pełny zakres odżywek i suplementów najlepszych producentów
                </DyscyplinaSpan>
              </TextBoxDyscyplina>
            </DyscyplinyBox>

            <DyscyplinyBox>
              <IMGdyscyplina
                src="Stretching.webp"
                alt="rozciągająca się osoba"
              />
              <TextBoxDyscyplina>
                <p>Stretching</p>
                <DyscyplinaSpan>
                  Suplementacja, stroje, akcesoria na stanie oraz na zamówienia
                  indywidualne
                </DyscyplinaSpan>
              </TextBoxDyscyplina>
            </DyscyplinyBox>

            <DyscyplinyBox>
              <IMGdyscyplina src="Box.webp" alt="osoba uprawiająca boks" />
              <TextBoxDyscyplina>
                <p>Boks</p>
                <DyscyplinaSpan>
                  Ochraniacze, rękawice, odżywki witaminowe, na rzeżbę i
                  izotoniczne
                </DyscyplinaSpan>
              </TextBoxDyscyplina>
            </DyscyplinyBox>

            <DyscyplinyBox>
              <IMGdyscyplina src="Taniec.webp" alt="tancerka" />
              <TextBoxDyscyplina>
                <p>Taniec</p>
                <DyscyplinaSpan>
                  Suplementy i odżywki przygotowujące do zawodów, odwadniające
                </DyscyplinaSpan>
              </TextBoxDyscyplina>
            </DyscyplinyBox>

            <DyscyplinyBox>
              <IMGdyscyplina src="Plywanie.webp" alt="pływająca osoba" />
              <TextBoxDyscyplina>
                <p>Pływanie</p>
                <DyscyplinaSpan>
                  Wspomaganie suplementacyjne pod kątem wydajnościowym,
                  dotlenianie
                </DyscyplinaSpan>
              </TextBoxDyscyplina>
            </DyscyplinyBox>

            <DyscyplinyBox>
              <IMGdyscyplina src="Tenis.webp" alt="osoba grająca w tenisa" />
              <TextBoxDyscyplina>
                <p>Tenis</p>
                <DyscyplinaSpan>
                  Profesjonalne środki wspomagające wydajność fizyczną i
                  umysłową
                </DyscyplinaSpan>
              </TextBoxDyscyplina>
            </DyscyplinyBox>
          </Carousel>
          <Fade delay={500} triggerOnce>
            <AttentionSeeker effect="pulse" triggerOnce>
              <SupleBoxes>
                <SupleBox>
                  <IMGsuple
                    src="OfertaSpalacze.webp"
                    alt="zdjęcie suplementów spalaczy tłuszczu"
                  />

                  <TextBoxSuple>
                    <Heading as="h4" style={{ textAlign: "center" }}>
                      Spalacze tłuszczu
                    </Heading>
                    <p style={{ textJustify: "auto" }}>
                      Specjalna kombinacja substancji przyspieszających redukcję
                      tkanki tłuszczowej
                    </p>
                  </TextBoxSuple>
                </SupleBox>
                <SupleBox>
                  <IMGsuple
                    src="OfertaIzotoniki.webp"
                    alt="zdjęcie suplementów napoje izotoniczne"
                  />
                  <TextBoxSuple>
                    <Heading as="h4" style={{ textAlign: "center" }}>
                      Napoje izotoniczne
                    </Heading>
                    <p style={{ textJustify: "auto" }}>
                      Zwiększają efektywność treningu, pomagają wprowadzić
                      organizm w stan anabolizmu
                    </p>
                  </TextBoxSuple>
                </SupleBox>
                <SupleBox>
                  <IMGsuple
                    src="OfertaWitaminy.webp"
                    alt="zdjęcie suplementów witamin"
                  />
                  <TextBoxSuple>
                    <Heading as="h4" style={{ textAlign: "center" }}>
                      Witaminy, mikroelementy
                    </Heading>
                    <p style={{ textJustify: "auto" }}>
                      To związki niezbędne w naszym organizmie, które muszą być
                      dostarczane do ustroju z żywnością
                    </p>
                  </TextBoxSuple>
                </SupleBox>
                <SupleBox>
                  <IMGsuple
                    src="OfertaMatrixy.webp"
                    alt="zdjęcie suplementów białka"
                  />
                  <TextBoxSuple>
                    <Heading as="h4" style={{ textAlign: "center" }}>
                      Matrixy, kazeiny, białka
                    </Heading>
                    <p style={{ textJustify: "auto" }}>
                      Najlepszym rozwiązaniem jest spożycie mieszanki białek,
                      czyli tzw. matrixu białkowego
                    </p>
                  </TextBoxSuple>
                </SupleBox>
                <SupleBox>
                  <IMGsuple
                    src="OfertaKreatyny.webp"
                    alt="zdjęcie suplementów kreatyna i przedtreningówka"
                  />
                  <TextBoxSuple>
                    <Heading as="h4" style={{ textAlign: "center" }}>
                      Kreatyny i pre-workout'y
                    </Heading>
                    <p style={{ textJustify: "auto" }}>
                      Dodają energii, zwiększa motywację i wytrzymałość podczas
                      treningu, aby utrzymać Cię w formie
                    </p>
                  </TextBoxSuple>
                </SupleBox>
                <SupleBox>
                  <IMGsuple
                    src="OfertaBcaa.webp"
                    alt="zdjęcie suplementów bcaa"
                  />
                  <TextBoxSuple>
                    <Heading as="h4" style={{ textAlign: "center" }}>
                      BCAA i Glutaminy
                    </Heading>
                    <p style={{ textJustify: "auto" }}>
                      Rozgałęzione aminokwasy - leucyna, izoleucyna i walina -
                      są niezbędne dla wzrostu mięśni.
                    </p>
                  </TextBoxSuple>
                </SupleBox>
                <SupleBox>
                  <IMGsuple
                    src="OfertaIzolaty.webp"
                    alt="zdjęcie suplementów  izolat białka"
                  />
                  <TextBoxSuple>
                    <Heading as="h4" style={{ textAlign: "center" }}>
                      Izolaty białkowe
                    </Heading>
                    <p style={{ textJustify: "auto" }}>
                      Izolaty białek serwatki są jednymi z najszybszych białek
                      dostępnych na rynku (obok hydrolizatów)
                    </p>
                  </TextBoxSuple>
                </SupleBox>
                <SupleBox>
                  <IMGsuple
                    src="OfertaMasa.webp"
                    alt="zdjęcie suplementów na masę"
                  />
                  <TextBoxSuple>
                    <Heading as="h4" style={{ textAlign: "center" }}>
                      Odżywki na masę
                    </Heading>
                    <p style={{ textJustify: "auto" }}>
                      Nie ma prostszego sposobu na podbicie kalorii w diecie niż
                      spożycie odżywki typu gainier
                    </p>
                  </TextBoxSuple>
                </SupleBox>
                <SupleBox>
                  <IMGsuple
                    src="OfertaGainer.webp"
                    alt="zdjęcie suplementów gainery"
                  />
                  <TextBoxSuple>
                    <Heading as="h4" style={{ textAlign: "center" }}>
                      Odżywki węglowodanowe
                    </Heading>
                    <p style={{ textJustify: "auto" }}>
                      Odżywki węglowodanowe produkty przeznaczone głównie do
                      zahamowania katabolizmu po treningu
                    </p>
                  </TextBoxSuple>
                </SupleBox>
              </SupleBoxes>
              {/* <SklepSrodek /> */}
            </AttentionSeeker>
          </Fade>
          <Heading as="h3">Dodatkowe usługi</Heading>
          <Dodatkowo>
            <DodatkoweBox>
              <Heading as="h4" style={{ marginBottom: "1.8rem" }}>
                Porady i cykle
              </Heading>
              <p>Porady żywieniowe i suplementacyjne</p>
              <p>Rozpiski cykli i treningów</p>
              <p>
                Programy trenigowe dla początkujących, średniozaawansowanych i
                profesjonalistów
              </p>
            </DodatkoweBox>
            <DodatkoweBox>
              <Heading as="h4" style={{ marginBottom: "1.8rem" }}>
                Wpadnij do naszego sklepu
              </Heading>
              <p>Ustalimy co Ci jest potrzebne i jakie ilości</p>
              <p>Wynegocjujesz lepsze ceny niż na Allegro</p>
              <p>
                Oferujemy spcecjalne zniżki przy pakietach i zakupach hurtowych!
              </p>
            </DodatkoweBox>
          </Dodatkowo>
        </Container>
      </Fade>
    </section>
  );
}

export default Oferta;
