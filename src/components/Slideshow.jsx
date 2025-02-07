import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const images = [
  "https://res.cloudinary.com/dfooq3ws5/image/upload/v1738479358/S__133005366_0_ubeh06.jpg",
  "https://res.cloudinary.com/dfooq3ws5/image/upload/v1738479358/S__133005355_0_pk6bqp.jpg",
  "https://res.cloudinary.com/dfooq3ws5/image/upload/v1738479357/S__133005361_0_hw5yxs.jpg",
  "https://res.cloudinary.com/dfooq3ws5/image/upload/v1738479356/S__133005352_0_rkuosf.jpg",
  "https://res.cloudinary.com/dfooq3ws5/image/upload/v1738479356/S__133005328_0_nu1i6i.jpg",
  "https://res.cloudinary.com/dfooq3ws5/image/upload/v1738479355/S__133005345_0_z2qznr.jpg",
  "https://res.cloudinary.com/dfooq3ws5/image/upload/v1738479355/S__133005340_0_qw8nuq.jpg",  
];

const Slideshow = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4  text-black">Our House</h2>

      {/* Main Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Thumbs]}
        navigation
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        className="w-[360px] h-3/4 md:w-2/4 md:h-1/4"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <div className="flex space-x-2 mt-4">
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          spaceBetween={10}
          watchSlidesProgress
          className="w-[720px]"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Thumbnail ${index}`}
                className="w-full h-32 border cursor-pointer rounded-lg ml-44"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slideshow;