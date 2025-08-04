import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Caroucel() {
  return (
    <div className="flex justify-center overflow-visible z-30">
      <section className="CaroucelHeader relative h-[30rem] w-screen bg-sky-800 overflow-visible">
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
      </section>
    </div>
  );
}

export default Caroucel;
