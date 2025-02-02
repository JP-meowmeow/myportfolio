import React, { useState } from "react";

const images = [
  "https://res.cloudinary.com/dfooq3ws5/image/upload/v1738479358/S__133005366_0_ubeh06.jpg",
  "https://res.cloudinary.com/dfooq3ws5/image/upload/v1738479358/S__133005355_0_pk6bqp.jpg",
  "https://res.cloudinary.com/dfooq3ws5/image/upload/v1738479357/S__133005361_0_hw5yxs.jpg",
  "https://res.cloudinary.com/dfooq3ws5/image/upload/v1738479358/S__133005366_0_ubeh06.jpg",
  "https://res.cloudinary.com/dfooq3ws5/image/upload/v1738479358/S__133005366_0_ubeh06.jpg",
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full bg-gray-100/50 text-black p-10">

    <div className="w-1/2 mx-auto ">
    <h2 className="text-4xl md:text-6xl font-bold text-center mb-8  text-black text-shadow-sm">
          Our House
        </h2>
      {/* Main Image */}
      <div className="flex gap-5 justify-center items-center">

        <button className="btn btn-md" onClick={() => setIndex((index - 1 + images.length) % images.length)}>❮ Prev</button>
      <img src={images[index]} alt="Slideshow" className="w-full h-auto rounded-lg mb-4" />
        <button className="btn btn-md"  onClick={() => setIndex((index + 1) % images.length)}>Next ❯</button>

      </div>

      {/* Thumbnails */}
      <div className=" flex space-x-2 mt-4">
        {images.map((img, i) => (
            <img
            key={i}
            src={img}
            alt={`Thumbnail ${i}`}
            className={`w-36 h-32 border cursor-pointer rounded-lg ${i === index ? "border-blue-500" : "border-gray-300 opacity-50"}`}
            onClick={() => setIndex(i)}
            />
        ))}
      </div>
    </div>
        </div>
  );
};

export default Slideshow;
