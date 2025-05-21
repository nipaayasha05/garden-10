import React from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import garden from "../assets/flower.jpg";
import house from "../assets/fress-vegatables.jpg";
import life from "../assets/nature.jpg";

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div
            className=" min-h-[70vh] rounded-xl  bg-cover   bg-center "
            style={{
              backgroundImage: `url(${garden})`,
            }}
          >
            <div className="pt-40  pl-10 py-15 space-y-5">
              <h1 className="text-2xl font-semibold text-white  ">
                Join our annual Garden <br /> Festival and explore nature,
                creativity,
                <br />
                and community. Learn, share, and <br />
                celebrate the love for green living!
              </h1>

              <button className="btn bg-white rounded-full font-medium ">
                Join Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className=" min-h-[70vh] rounded-xl  bg-cover   bg-center "
            style={{
              backgroundImage: `url(${life})`,
            }}
          >
            <div className="  pt-40 pl-10 py-15 space-y-5">
              <h1 className="text-2xl font-semibold text-white  ">
                In a world losing green,
                <br /> we’re planting hope — one garden <br /> at a time. Join
                us in nurturing nature,
                <br /> growing fresh food, and protecting our planet’s future.
              </h1>

              <button className="btn bg-white rounded-full font-medium ">
                Join the Green Movement
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className=" min-h-[70vh] rounded-xl bg-cover   bg-center "
            style={{
              backgroundImage: `url(${house})`,
            }}
          >
            <div className="  pt-40 pl-10 py-15 space-y-5 ">
              <h1 className="text-2xl font-semibold text-white  ">
                Walk into a world of greens,
                <br /> where fresh vegetables bloom and <br />
                serenity grows. Rediscover the joy of <br /> slow living and
                homegrown goodness.
              </h1>

              <button className="btn bg-white rounded-full font-medium ">
                Visit the Garden
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
