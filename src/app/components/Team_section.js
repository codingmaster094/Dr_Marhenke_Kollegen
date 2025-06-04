"use client";
// Import Swiper React components
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
const Team_section = () => {
  const swiperRef = useRef(null); // Ref to the Swiper instance
  const nextSlide = () => {
    swiperRef.current.swiper.slideNext(); // Go to the next slide
  };
  const prevSlide = () => {
    swiperRef.current.swiper.slidePrev(); // Go to the previous slide
  };
  return (
    <section className="bg-[#FFFBF2]">
      <div className="container-fluid">
        <div className="flex flex-col items-center">
          <div className="pt-100 pb-16">
            <h2 className="text-h2 mb-4 text-center">
              Psychotherapie in Köln <br /> Von diesen Vorteilen profitieren Sie
              mit Dr. Marhenke & Kollegen
            </h2>
            <span className="w-28 h-1 bg-yellow block mx-auto"></span>
          </div>
          <div className="w-full relative text-white bg-cover bg-[url('/images/team.png')]">
            <div className="swiper teamSwiper">
              <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay]}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
                slidesPerView={4}
                // autoplay={{ delay: 4000 }}
                navigation={false}
                loop={true}
              >
                <SwiperSlide>
                  <div className="flex flex-col justify-end gap-4 3xl:gap-8 p-4 3xl:px-7 3xl:py-12 min-h-96 lg:min-h-[500px] 3xl:min-h-[700px] card hover:pb-16 3xl:hover:pb-44 transition-all duration-300">
                    <div className="flex gap-2 3xl:gap-5 relative z-10">
                      <svg
                        className="w-3 mt-2 3xl:w-4"
                        width="18"
                        height="13"
                        viewBox="0 0 18 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.38074 0.0274431C4.62164 0.123746 3.93308 0.327368 3.31229 0.639145C2.67803 0.957682 2.28523 1.24356 1.75381 1.7734C0.879136 2.64544 0.351972 3.61321 0.0841771 4.83845C-0.028059 5.35192 -0.028059 6.67488 0.0841771 7.18835C0.340033 8.35899 0.865968 9.34849 1.67598 10.1833C2.55157 11.0856 3.63996 11.6761 4.88606 11.925C5.16268 11.9802 5.4748 12.0013 5.99525 12.0001C6.78745 11.9981 7.31764 11.9138 7.93685 11.6915C8.31135 11.557 8.97067 11.2435 9.00882 11.1817C9.02343 11.1581 7.88233 9.98556 6.47299 8.57609L3.91057 6.0134L6.47299 3.45071C7.88233 2.04124 9.02343 0.868666 9.00882 0.845051C8.97067 0.783293 8.31135 0.469804 7.93685 0.335313C7.4124 0.147009 6.78047 0.0376703 6.12693 0.0220441C5.80102 0.0142749 5.46524 0.0166891 5.38074 0.0274431ZM8.98002 3.00668L5.97348 6.01349L8.9802 9.02021L11.9869 12.0269L14.9935 9.02012L18 6.01331L14.9933 3.0066L11.9866 -0.00012207L8.98002 3.00668Z"
                          fill="white"
                        />
                      </svg>
                      <span className="font-semibold text-xl 3xl:text-[28px] 3xl:leading-[36px]">
                        Moderne Praxis
                      </span>
                    </div>
                    <div className="font-medium relative z-10 space-y-4 *:text-base *:3xl:text-lg">
                      <p>
                        Modern ausgestattete, helle und freundliche Räume sorgen
                        für sichere und vertrauensvolle Umgebung.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-end gap-4 3xl:gap-8 p-4 3xl:px-7 3xl:py-12 min-h-96 lg:min-h-[500px] 3xl:min-h-[700px] card hover:pb-16 3xl:hover:pb-44 transition-all duration-300">
                    <div className="flex gap-2 3xl:gap-5 relative z-10">
                      <svg
                        className="w-3 mt-2 3xl:w-4"
                        width="18"
                        height="13"
                        viewBox="0 0 18 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.38074 0.0274431C4.62164 0.123746 3.93308 0.327368 3.31229 0.639145C2.67803 0.957682 2.28523 1.24356 1.75381 1.7734C0.879136 2.64544 0.351972 3.61321 0.0841771 4.83845C-0.028059 5.35192 -0.028059 6.67488 0.0841771 7.18835C0.340033 8.35899 0.865968 9.34849 1.67598 10.1833C2.55157 11.0856 3.63996 11.6761 4.88606 11.925C5.16268 11.9802 5.4748 12.0013 5.99525 12.0001C6.78745 11.9981 7.31764 11.9138 7.93685 11.6915C8.31135 11.557 8.97067 11.2435 9.00882 11.1817C9.02343 11.1581 7.88233 9.98556 6.47299 8.57609L3.91057 6.0134L6.47299 3.45071C7.88233 2.04124 9.02343 0.868666 9.00882 0.845051C8.97067 0.783293 8.31135 0.469804 7.93685 0.335313C7.4124 0.147009 6.78047 0.0376703 6.12693 0.0220441C5.80102 0.0142749 5.46524 0.0166891 5.38074 0.0274431ZM8.98002 3.00668L5.97348 6.01349L8.9802 9.02021L11.9869 12.0269L14.9935 9.02012L18 6.01331L14.9933 3.0066L11.9866 -0.00012207L8.98002 3.00668Z"
                          fill="white"
                        />
                      </svg>
                      <span className="font-semibold text-xl 3xl:text-[28px] 3xl:leading-[36px]">
                        Flexible Therapien
                      </span>
                    </div>
                    <div className="font-medium relative z-10 space-y-4 *:text-base *:3xl:text-lg">
                      <p>
                        Ob vor Ort oder per Videosprechstunde – Sie entscheiden,
                        was für Sie am besten passt.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-end gap-4 3xl:gap-8 p-4 3xl:px-7 3xl:py-12 min-h-96 lg:min-h-[500px] 3xl:min-h-[700px] card hover:pb-16 3xl:hover:pb-44 transition-all duration-300">
                    <div className="flex gap-2 3xl:gap-5 relative z-10">
                      <svg
                        className="w-3 mt-2 3xl:w-4"
                        width="18"
                        height="13"
                        viewBox="0 0 18 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.38074 0.0274431C4.62164 0.123746 3.93308 0.327368 3.31229 0.639145C2.67803 0.957682 2.28523 1.24356 1.75381 1.7734C0.879136 2.64544 0.351972 3.61321 0.0841771 4.83845C-0.028059 5.35192 -0.028059 6.67488 0.0841771 7.18835C0.340033 8.35899 0.865968 9.34849 1.67598 10.1833C2.55157 11.0856 3.63996 11.6761 4.88606 11.925C5.16268 11.9802 5.4748 12.0013 5.99525 12.0001C6.78745 11.9981 7.31764 11.9138 7.93685 11.6915C8.31135 11.557 8.97067 11.2435 9.00882 11.1817C9.02343 11.1581 7.88233 9.98556 6.47299 8.57609L3.91057 6.0134L6.47299 3.45071C7.88233 2.04124 9.02343 0.868666 9.00882 0.845051C8.97067 0.783293 8.31135 0.469804 7.93685 0.335313C7.4124 0.147009 6.78047 0.0376703 6.12693 0.0220441C5.80102 0.0142749 5.46524 0.0166891 5.38074 0.0274431ZM8.98002 3.00668L5.97348 6.01349L8.9802 9.02021L11.9869 12.0269L14.9935 9.02012L18 6.01331L14.9933 3.0066L11.9866 -0.00012207L8.98002 3.00668Z"
                          fill="white"
                        />
                      </svg>
                      <span className="font-semibold text-xl 3xl:text-[28px] 3xl:leading-[36px]">
                      Individuelle Konzepte
                      </span>
                    </div>
                    <div className="font-medium relative z-10 space-y-4 *:text-base *:3xl:text-lg">
                      <p>
                      Jede Behandlung ist auf Ihre persönliche Situation und individuellen Bedürfnisse zugeschnitten.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-end gap-4 3xl:gap-8 p-4 3xl:px-7 3xl:py-12 min-h-96 lg:min-h-[500px] 3xl:min-h-[700px] card hover:pb-16 3xl:hover:pb-44 transition-all duration-300">
                    <div className="flex gap-2 3xl:gap-5 relative z-10">
                      <svg
                        className="w-3 mt-2 3xl:w-4"
                        width="18"
                        height="13"
                        viewBox="0 0 18 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.38074 0.0274431C4.62164 0.123746 3.93308 0.327368 3.31229 0.639145C2.67803 0.957682 2.28523 1.24356 1.75381 1.7734C0.879136 2.64544 0.351972 3.61321 0.0841771 4.83845C-0.028059 5.35192 -0.028059 6.67488 0.0841771 7.18835C0.340033 8.35899 0.865968 9.34849 1.67598 10.1833C2.55157 11.0856 3.63996 11.6761 4.88606 11.925C5.16268 11.9802 5.4748 12.0013 5.99525 12.0001C6.78745 11.9981 7.31764 11.9138 7.93685 11.6915C8.31135 11.557 8.97067 11.2435 9.00882 11.1817C9.02343 11.1581 7.88233 9.98556 6.47299 8.57609L3.91057 6.0134L6.47299 3.45071C7.88233 2.04124 9.02343 0.868666 9.00882 0.845051C8.97067 0.783293 8.31135 0.469804 7.93685 0.335313C7.4124 0.147009 6.78047 0.0376703 6.12693 0.0220441C5.80102 0.0142749 5.46524 0.0166891 5.38074 0.0274431ZM8.98002 3.00668L5.97348 6.01349L8.9802 9.02021L11.9869 12.0269L14.9935 9.02012L18 6.01331L14.9933 3.0066L11.9866 -0.00012207L8.98002 3.00668Z"
                          fill="white"
                        />
                      </svg>
                      <span className="font-semibold text-xl 3xl:text-[28px] 3xl:leading-[36px]">
                      Kurze Wartezeiten
                      </span>
                    </div>
                    <div className="font-medium relative z-10 space-y-4 *:text-base *:3xl:text-lg">
                      <p>
                      Wir vergeben Termine so, dass Sie schnell die Unterstützung erhalten, die Sie brauchen.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-end gap-4 3xl:gap-8 p-4 3xl:px-7 3xl:py-12 min-h-96 lg:min-h-[500px] 3xl:min-h-[700px] card hover:pb-16 3xl:hover:pb-44 transition-all duration-300">
                    <div className="flex gap-2 3xl:gap-5 relative z-10">
                      <svg
                        className="w-3 mt-2 3xl:w-4"
                        width="18"
                        height="13"
                        viewBox="0 0 18 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.38074 0.0274431C4.62164 0.123746 3.93308 0.327368 3.31229 0.639145C2.67803 0.957682 2.28523 1.24356 1.75381 1.7734C0.879136 2.64544 0.351972 3.61321 0.0841771 4.83845C-0.028059 5.35192 -0.028059 6.67488 0.0841771 7.18835C0.340033 8.35899 0.865968 9.34849 1.67598 10.1833C2.55157 11.0856 3.63996 11.6761 4.88606 11.925C5.16268 11.9802 5.4748 12.0013 5.99525 12.0001C6.78745 11.9981 7.31764 11.9138 7.93685 11.6915C8.31135 11.557 8.97067 11.2435 9.00882 11.1817C9.02343 11.1581 7.88233 9.98556 6.47299 8.57609L3.91057 6.0134L6.47299 3.45071C7.88233 2.04124 9.02343 0.868666 9.00882 0.845051C8.97067 0.783293 8.31135 0.469804 7.93685 0.335313C7.4124 0.147009 6.78047 0.0376703 6.12693 0.0220441C5.80102 0.0142749 5.46524 0.0166891 5.38074 0.0274431ZM8.98002 3.00668L5.97348 6.01349L8.9802 9.02021L11.9869 12.0269L14.9935 9.02012L18 6.01331L14.9933 3.0066L11.9866 -0.00012207L8.98002 3.00668Z"
                          fill="white"
                        />
                      </svg>
                      <span className="font-semibold text-xl 3xl:text-[28px] 3xl:leading-[36px]">
                      Erfahrenes Team
                      </span>
                    </div>
                    <div className="font-medium relative z-10 space-y-4 *:text-base *:3xl:text-lg">
                      <p>
                      Jahrelange Erfahrung und kontinuierliche Weiterbildungen sorgen für zielgerichtete Hilfe.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div
              onClick={prevSlide}
              className="grid place-items-center teamSwiper-prev z-10 absolute top-1/2 -translate-y-1/2 left-0 text-white bg-black bg-opacity-30 scale-50 sm:scale-100 size-16 rounded-e"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 6l-6 6l6 6" />
              </svg>
            </div>
            <div
              onClick={nextSlide}
              className="grid place-items-center teamSwiper-next z-10 absolute top-1/2 -translate-y-1/2 right-0 text-white bg-black bg-opacity-30 scale-50 sm:scale-100 size-16 rounded-s"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team_section;
