import Hero from "../features/home/Hero";
import Kontakt from "../features/home/Kontakt";
import Onas from "../features/home/Onas";
import Marki from "../features/home/Marki";
import Oferta from "../features/home/Oferta";
import CookiesAlert from "../ui/CookiesAlert";

function Home() {
  return (
    <>
      <CookiesAlert />
      <Hero />
      <Marki />
      <Onas />
      <Oferta />
      <Kontakt />
    </>
  );
}

export default Home;
