"use client";
// Import Swiper React components
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
const Psychotherapeuten = ({ image , title, content, postsData }) => {
  const swiperRef = useRef(null);
  const nextSlide = () => {
    swiperRef.current.swiper.slideNext();
  };
  const prevSlide = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <section className="bg-[#FFF2CE] py-14 lg:py-20 2xl:py-100 bg-opacity-25">
      <div className="container space-y-16">
        <div className="flex flex-col lg:flex-row gap-4 xl:gap-16">
          <div className="lg:w-6/12 self-stretch 3xl:aspect-[1.95/1] rounded md:rounded-3xl overflow-hidden relative">
            <Image
              role="img"
              src={image}
              alt="service-img"
              fill
              className="size-full object-cover object-bottom"
            />
          </div>
          <div className="lg:w-6/12 flex flex-col justify-center gap-[34px]">
            <div>
              <h2
                className="text-h2 mb-4"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h2>
              <span className="w-28 h-1 bg-yellow block"></span>
            </div>
            <div
              className="text-p space-y-4"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>
        </div>
        <div className="flex items-center">
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

          <div className="swiper serviceSwiper text-center pb-10 sm:pb-2 md:p-0">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              // autoplay={{ delay: 4000 }}
              navigation={false}
              loop={true}
              breakpoints={{
                992: {
                  slidesPerView: 2,
                },
                1400: {
                  slidesPerView: 3,
                },
              }}
            >
              {
                postsData?.map((val, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className="sm:p-6">
                        <div className="sm:p-6 rounded-3xl bg-transparent hover:bg-white transition-all sm:hover:shadow-[0_4px_34px_0_rgba(0,0,0,.08)]">
                          <div className="scale-75 lg:scale-100 size-[100px] rounded-[10px] grid place-items-center bg-yellow mx-auto shadow-[0_4px_18px_0_rgba(0,0,0,.14)]">
                            <img
                              role="img"
                              src="/images/Simplification-1.svg"
                              alt="Icon"
                            />
                          </div>
                          <h3
                            className="mb-2 lg:mt-6 font-bold text-lg sm:text-[21px] min-h-14"
                            dangerouslySetInnerHTML={{ __html: val.post_title }}
                          ></h3>
                          <p
                            className="mb-4 3xl::mb-8 *:text-base space-y-4 text-base"
                            dangerouslySetInnerHTML={{
                              __html: val.post_content,
                            }}
                          ></p>
                          <Link
                            role="link"
                            href={
                              val.post_link.url || val.ueber_uns_section_standort_data_button.url
                            }
                            className="block w-fit mx-auto text-yellow lg:text-lg rounded sm:rounded-[10px] border border-yellow py-2 2xl:py-[15px] px-4 2xl:px-8 hover:bg-yellow hover:shadow hover:text-white transition-colors"
                          >
                            {val.post_link.title || val.ueber_uns_section_standort_data_button.title}
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
            <div className="swiper-pagination md:hidden"></div>
          </div>
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
      </div>
    </section>
  );
};
export default Psychotherapeuten;
