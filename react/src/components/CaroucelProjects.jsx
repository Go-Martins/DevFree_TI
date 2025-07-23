import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

function caroucelProjects() {
  return (
    <div className="caroucelProjects relative h-[30rem] w-4/5 bg-sky-800 overflow-hidden rounded-3xl">
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
    </div>
  );
}

export default caroucelProjects;
