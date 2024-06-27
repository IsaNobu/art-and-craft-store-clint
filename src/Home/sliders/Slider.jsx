import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../index.css";

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[]}
      >
        <SwiperSlide>
          <div className="relative">
            {" "}
            <div className="absolute mt-[30px] lg:mt-[150px] left-0 right-0 mx-0 flex justify-center">
              <div className="flex flex-col items-center">
                <img
                  className="lg:w-[150px] md:w-[100px] w-[70px]"
                  src="//mintie.boostifythemes.com/wp-content/uploads/2021/12/logo-slideshow-edit.png"
                  alt=""
                />
                <h1 className="lg:text-6xl md:text-5xl text-3xl font-semibold text-white text-center playfair-display">
                  What rhymes Arts ? <br />
                  Its Craft
                </h1>
              </div>
            </div>
            <img
              className="w-full lg:h-[780px]"
              src="https://i.ibb.co/khCwSqw/Slide-1.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            {" "}
            <div className="absolute mt-[30px] lg:mt-[150px] left-0 right-0 mx-0 flex justify-center">
              <div className="flex flex-col items-center">
                <img
                  className="lg:w-[150px] md:w-[100px] w-[70px]"
                  src="//mintie.boostifythemes.com/wp-content/uploads/2021/12/logo-slideshow-edit.png"
                  alt=""
                />
                <h1 className="lg:text-6xl md:text-5xl text-2xl font-semibold text-white text-center playfair-display">
                  Less promises <br />
                  More creativity
                </h1>
              </div>
            </div>
            <img
              className="w-full lg:h-[780px]"
              src="https://i.ibb.co/cyxhYwx/Slide-2.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            {" "}
            <div className="absolute mt-[30px] lg:mt-[150px] left-0 right-0 mx-0 flex justify-center">
              <div className="flex flex-col items-center">
                <img
                  className="lg:w-[150px] md:w-[100px] w-[70px]"
                  src="//mintie.boostifythemes.com/wp-content/uploads/2021/12/logo-slideshow-edit.png"
                  alt=""
                />
                <h1 className="lg:text-6xl md:text-5xl text-3xl font-semibold text-white text-center playfair-display">
                  Shop Now! <br />
                  Start creating today.
                </h1>
              </div>
            </div>
            <img
              className="w-full lg:h-[780px]"
              src="https://i.ibb.co/WcHtYC3/Slide-3.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
