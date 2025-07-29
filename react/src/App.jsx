import { useState, useEffect, useRef } from "react";

import CartText from "./components/CardText";
import Caroucel from "./components/Caroucel";
import CaroucelProjects from "./components/CaroucelProjects";
import Header from "./components/Header";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ServicesSection from "./components/ServicesSection";
import DropDownMenu from "./components/DropDownMenu";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {
  const [menuAberto, setMenuAberto] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickFora(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuAberto(false);
      }
    }

    if (menuAberto) {
      document.addEventListener("click", handleClickFora, true);
    }

    return () => {
      document.removeEventListener("click", handleClickFora, true);
    };
  }, [menuAberto]);

  return (
    <div class="bg-bege w-screen h-screen">
      <Header aoClicarMenu={() => setMenuAberto(!menuAberto)} />
      <DropDownMenu aberto={menuAberto} refMenu={menuRef} />
      <Caroucel />
      <CartText />
      <CaroucelProjects />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
