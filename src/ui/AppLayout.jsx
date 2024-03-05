import Headroom from "react-headroom";
import Home from "../pages/Home";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
  return (
    <>
      <Headroom>
        <Header />
      </Headroom>
      <Home />
      <Footer />
    </>
  );
}

export default AppLayout;
