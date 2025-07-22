import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

function caroucelProjects() {
  return (
    <div className="caroucelProjects relative h-[30rem] w-full bg-sky-800 overflow-hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={25}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/image1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image3.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default caroucelProjects;
