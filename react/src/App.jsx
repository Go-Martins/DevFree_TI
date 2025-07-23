import CartText from "./components/CardText";
import Caroucel from "./components/Caroucel";
import CaroucelProjects from "./components/CaroucelProjects";
import Header from "./components/Header";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {
  return (
    <div class="bg-bege w-screen h-screen">
      <Header />
      <Caroucel />
      <CartText />
      <CaroucelProjects />
    </div>
  );
}

export default App;
