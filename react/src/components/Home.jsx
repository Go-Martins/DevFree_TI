import { useState, useEffect, useRef } from "react";

import CartText from "./CardText";
import Caroucel from "./Caroucel";
import CaroucelProjects from "./CaroucelProjects";
import Header from "./Header";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import ServicesSection from "./ServicesSection";
import DropDownMenu from "./DropDownMenu";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Home() {
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
    <div class="bg-bege w-screen h-screen overflow-x-hidden scroll-smooth">
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

export default Home;
