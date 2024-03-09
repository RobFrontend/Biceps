import Carousel from "react-multi-carousel";
import styled from "styled-components";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const IMG = styled.img`
  width: 100%;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
`;

const IMGbox = styled.div`
  padding: 2.4rem;
`;

function SklepSrodek() {
  return (
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
      <IMGbox>
        <IMG src="Sklep1.jpg" alt="wnętrze sklepu" />
      </IMGbox>
      <IMGbox>
        <IMG src="Sklep2.jpg" alt="wnętrze sklepu" />
      </IMGbox>
      <IMGbox>
        <IMG src="Sklep3.jpg" alt="wnętrze sklepu" />
      </IMGbox>
      <IMGbox>
        <IMG src="Sklep4.jpg" alt="wnętrze sklepu" />
      </IMGbox>
      <IMGbox>
        <IMG src="Sklep5.jpg" alt="wnętrze sklepu" />
      </IMGbox>
      <IMGbox>
        <IMG src="Sklep6.jpg" alt="wnętrze sklepu" />
      </IMGbox>
    </Carousel>
  );
}

export default SklepSrodek;
