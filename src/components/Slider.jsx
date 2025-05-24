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

import { Typewriter } from "react-simple-typewriter";

const Slider = () => {
  return (
    <div className=" ">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className=" min-h-[70vh] rounded-xl  bg-cover   bg-center "
            style={{
              backgroundImage: `url(${garden})`,
            }}
          >
            <div className="pt-40  pl-10 py-15 space-y-5">
              <h1 className="text-2xl lg:w-4/12 font-semibold text-white App ">
                <Typewriter
                  cursor
                  cursorBlinking
                  delaySpeed={1000}
                  deleteSpeed={25}
                  loop={0}
                  typeSpeed={75}
                  words={[
                    "Join our annual Garden Festival and explore nature, creativity,and community. Learn, share, and  celebrate the love for green living!",
                  ]}
                />
              </h1>

              <button className="btn bg-white rounded-full font-medium text-black">
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
              <h1 className="text-2xl lg:w-4/12 font-semibold text-white  ">
                <Typewriter
                  cursor
                  cursorBlinking
                  delaySpeed={1000}
                  deleteSpeed={25}
                  loop={0}
                  typeSpeed={75}
                  words={[
                    "In a world losing green, we’re planting hope — one garden at a time. Join  us in nurturing nature, growing fresh food, and protecting our planet’s future.",
                  ]}
                />
              </h1>

              <button className="btn bg-white rounded-full font-medium text-black">
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
              <h1 className="text-2xl lg:w-4/12 font-semibold text-white  ">
                <Typewriter
                  cursor
                  cursorBlinking
                  delaySpeed={1000}
                  deleteSpeed={25}
                  loop={0}
                  typeSpeed={75}
                  words={[
                    "Walk into a world of greens,where fresh vegetables bloom and serenity grows. Rediscover the joy of slow living and homegrown goodness.",
                  ]}
                />
              </h1>

              <button className="btn bg-white rounded-full font-medium text-black">
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
