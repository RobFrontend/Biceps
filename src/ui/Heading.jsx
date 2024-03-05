import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 9.6rem;
      text-transform: uppercase;

      color: var(--font-dark-white);
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 5.2rem;
      color: var(--font-light-dark);
      margin-bottom: 4.2rem;
      margin-top: 6.4rem;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 3.2rem;
      color: var(--font-light-dark);
      margin-bottom: 2.4rem;
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 2.4rem;
      color: var(--font-dark-dark);
    `}
`;

export default Heading;
