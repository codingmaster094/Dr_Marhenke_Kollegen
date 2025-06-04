"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import Image from "next/image";
const Kooperationspartner = () => {
  const swiperRef = useRef(null); // Ref to the Swiper instance

  const nextSlide = () => {
    swiperRef.current.swiper.slideNext(); // Go to the next slide
  };

  const prevSlide = () => {
    swiperRef.current.swiper.slidePrev(); // Go to the previous slide
  };
  return (
    <section className="py-12 lg:py-20 text-center">
      <div className="container">
        <div className="space-y-10">
          <div>
            <h2 className="text-h2 mb-4">Unsere Kooperationspartner</h2>
            <span className="w-28 h-1 bg-yellow block mx-auto"></span>
          </div>
          <div className="flex gap-16 items-center">
            <div
              onClick={prevSlide}
              className="hidden md:grid serviceSwiper-prev text-black text-opacity-70 border rounded-lg border-yellow w-fit p-2 select-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 6l-6 6l6 6" />
              </svg>
            </div>
            <Swiper
              className="partnersSwiper"
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              navigation={false}
              loop={true}
              breakpoints={{
                576: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1800: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
            >
              <SwiperSlide className="swiper-slide">
                <Image
                  role="img"
                  src="/images/client-logo-1.png"
                  width={229}
                  height={102}
                  alt="Partner's logo"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <Image
                  role="img"
                  src="/images/client-logo-2.png"
                  width={229}
                  height={102}
                  alt="Partner's logo"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <Image
                  role="img"
                  src="/images/client-logo-3.png"
                  width={229}
                  height={102}
                  alt="Partner's logo"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <Image
                  role="img"
                  src="/images/client-logo-4.png"
                  width={229}
                  height={102}
                  alt="Partner's logo"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <Image
                  role="img"
                  src="/images/client-logo-5.png"
                  width={229}
                  height={102}
                  alt="Partner's logo"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <Image
                  role="img"
                  src="/images/partner-logo-4.png"
                  width={229}
                  height={102}
                  alt="Partner's logo"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <Image
                  role="img"
                  src="/images/kbap.png"
                  width={229}
                  height={102}
                  alt="Partner's logo"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <Image
                  role="img"
                  src="/images/DM_Logo_4c.png"
                  width={229}
                  height={102}
                  alt="Partner's logo"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <Image
                  role="img"
                  src="/images/apk.jpeg"
                  width={153}
                  height={142}
                  alt="Partner's logo"
                />
              </SwiperSlide>
            </Swiper>
            <div
              onClick={nextSlide}
              className="hidden md:grid serviceSwiper-next text-black text-opacity-70 border rounded-lg border-yellow w-fit p-2 select-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </div>
          </div>
          <Link
            role="link"
            href="/kooperationen"
            className="inline-block text-white bg-yellow rounded sm:rounded-[10px] p-3 sm:py-3 sm:px-8 hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors font-medium"
          >
            Mehr erfahren
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Kooperationspartner;
