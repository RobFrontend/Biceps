import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";

const CookiesAlertContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--font-dark-dark);
  background: linear-gradient(to bottom, rgb(0, 0, 0, 0.4), rgb(0, 0, 0, 0.3));
  color: var(--font-dark-white);
  font-size: 1.4rem;
  padding: 15px;
  text-align: center;
  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
  gap: 1.2rem;
  z-index: 2;
`;

const AcceptButton = styled.button`
  background-color: var(--font-dark-white);
  color: var(--font-dark-dark);
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: fit-content;
  font-family: inherit;
  font-weight: 600;
`;

function CookiesAlert() {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setAccepted(true);
  };

  // Check if user has accepted cookies previously
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (cookiesAccepted) {
      setAccepted(true);
    }
  }, []);

  if (accepted) {
    return null; // Hide the alert if cookies are accepted
  }

  return (
    <CookiesAlertContainer>
      <span>
        Ta witryna używa plików cookies, aby zapewnić najlepszą jakość
        korzystania z naszej strony.
      </span>
      <AcceptButton onClick={handleAccept}>Akceptuj</AcceptButton>
    </CookiesAlertContainer>
  );
}

export default CookiesAlert;
