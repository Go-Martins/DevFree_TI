import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Caroucel() {
  return (
    <div className="relative h-[30rem] w-full bg-sky-800 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        className="h-full w-full z-0"
      >
        <SwiperSlide>
          <img
            src="/image1.png"
            alt="Imagem 1"
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image2.png"
            alt="Imagem 2"
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image3.png"
            alt="Imagem 3"
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
      </Swiper>

      <img
        src="/background_efeito-montanha-cortado.svg"
        alt="Montanha"
        className="absolute bottom-0 left-0 w-full z-10 pointer-events-none"
      />
    </div>
  );
}

export default Caroucel;
