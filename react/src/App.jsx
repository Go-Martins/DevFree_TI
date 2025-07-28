import CartText from "./components/CardText";
import Caroucel from "./components/Caroucel";
import CaroucelProjects from "./components/CaroucelProjects";
import Header from "./components/Header";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ServicesSection from "./components/ServicesSection";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {
  return (
    <div class="bg-bege w-screen h-screen">
      <Header />
      {/*<DropDownMenu />*/}
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
