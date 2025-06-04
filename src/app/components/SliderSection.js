"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const SliderSection = ({ main_title, gallery_images }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const nextSlide = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  const prevSlide = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const duplicatedSlides = [...(gallery_images || []), ...(gallery_images || [])];

  return (
    <section className=" bg-[#FFFBF2] pt-[30px] md:pt-[40px] lg:pt-[50px]">
      <div className="flex flex-col gap-6 md:gap-11 lg:gap-16">
        <div className="flex flex-col gap-[34px] items-center">
          <h2
            className="sm:text-h3 lg:text-h2"
            dangerouslySetInnerHTML={{ __html: main_title }}
          ></h2>
          <span className="w-28 h-1 bg-yellow block mx-auto"></span>
        </div>

        <div className="slider-wrapper relative z-10">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            breakpoints={{
              700: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1400: { slidesPerView: 4 },
            }}
            navigation={{
              nextEl: ".referanceSwiper-next",
              prevEl: ".referanceSwiper-prev",
            }}
            onSwiper={setSwiperInstance}
            className="swiper referanceSwiper"
          >
            {duplicatedSlides.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="relative min-h-[500px] xl:min-h-[600px]">
                  <div className="absolute inset-0">
                    <Image
                      src={item}
                      alt={`Gallery image ${i + 1}`}
                      width={470}
                      height={600}
                      className="size-full object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute top-1/2 -translate-y-1/2 left-0 bg-black bg-opacity-30 scale-50 sm:scale-100 size-16 rounded-e text-white p-1 sm:p-2 hidden xl:block z-30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute top-1/2 -translate-y-1/2 right-0 bg-black bg-opacity-30 scale-50 sm:scale-100 size-16 rounded-s text-white p-1 sm:p-2 hidden xl:block z-30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left rotate-180"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
