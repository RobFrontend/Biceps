import { AttentionSeeker, Fade, Slide } from "react-awesome-reveal";
import styled from "styled-components";

const StyledMarki = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.2rem;
  gap: 1.8rem;
  box-shadow: var(--shadow-sm);
`;

const IMG = styled.img`
  max-height: 6rem;
  filter: brightness(0) grayscale(1)
    drop-shadow(15px 10px 10px rgba(0, 0, 0, 0.2));
  opacity: 0.8;
`;

function Marki() {
  return (
    <StyledMarki>
      <Fade direction="down">
        <IMG src="LogoOlimp.png" alt="logo of nutrition company" />
        <IMG src="LogoActivelab.png" alt="logo of nutrition company" />
        <IMG src="LogoTrec.png" alt="logo of nutrition company" />
        <IMG src="LogoHitec.png" alt="logo of nutrition company" />
      </Fade>
    </StyledMarki>
  );
}

export default Marki;
