import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

function caroucelProjects() {
  return (
    <section className="caroucelProjects relative w-auto h-4/5 mb-10 mx-8 bg-sky-800 overflow-hidden rounded-3xl max-tablet:m-4 max-tablet:mt-0 max-tablet:h-1/2">
      <Swiper
        slidesPerView={1}
        spaceBetween={25}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper px-8"
      >
        <SwiperSlide className="caroucelProjectsSwiper">
          <img src="/image1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="caroucelProjectsSwiper">
          <img src="/image2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="caroucelProjectsSwiper">
          <img src="/image3.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default caroucelProjects;
