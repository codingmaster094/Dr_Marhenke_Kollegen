"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Psychotherapie_Praxis = ({
  title,
  description,
  bgColor,
  listItems,
  imageSrc,
  reverse = false,
  sliderData = [],
  classes
}) => {
  const swiperRef = useRef(null);

  const nextSlide = () => {
    swiperRef.current?.swiper?.slideNext();
  };

  const prevSlide = () => {
    swiperRef.current?.swiper?.slidePrev();
  };

  // Ensure minimum of 4 slides for smooth looping
  let processedSlides = [...sliderData];
  while (processedSlides.length < 4 && sliderData.length > 0) {
    processedSlides = [...processedSlides, ...sliderData];
  }

  return (
    <section
      className={`bg-opacity-25 ${bgColor || ""} ${classes}`}
    >
      <div className="container space-y-16">
        {/* Content Block */}
        <div
          className={`flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-4 xl:gap-16`}
        >
          <div className="lg:w-6/12 self-stretch 3xl:aspect-[1.95/1] rounded md:rounded-3xl overflow-hidden">
            <Image
              src={imageSrc}
              alt="Service Image"
              width={808}
              height={416}
              className="size-full object-cover"
            />
          </div>
          <div className="lg:w-6/12 flex flex-col justify-center gap-[34px]">
            <div>
              <h2
                className="text-h2 mb-4 max-w-[600px]"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h2>
              <span className="w-28 h-1 bg-yellow block"></span>
            </div>
            <div
              className="text-p space-y-4"
              dangerouslySetInnerHTML={{ __html: description }}
            >
            </div>
            {
              listItems ? <ul className="space-y-4 ml-6 list-disc">
                {listItems?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul> : null
            }
          </div>
        </div>

        {/* Swiper */}
        <div className="flex items-center">
          {/* Prev Button */}
          <div
            onClick={prevSlide}
            className="hidden md:grid text-yellow border rounded-lg border-yellow w-fit p-2 select-none cursor-pointer"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </div>

          {/* Swiper Slides */}
          <div className="swiper text-center pb-10 sm:pb-2 md:p-0">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              navigation={false}
              loop={true}
              breakpoints={{
                992: { slidesPerView: 2 },
                1400: { slidesPerView: 3 },
              }}
            >
              {processedSlides.map((item, index) => {
                const title =
                  item.praxis_standort_data_title ||
                  item.ueber_uns_section_standort_data_title;
                const description =
                  item.praxis_standort_data_description ||
                  item.ueber_uns_section_standort_data_description;
                const links =
                  item.praxis_standort_data_links ||
                  item.ueber_uns_section_standort_data_links ||
                  [];
                const button =
                  item.praxis_standort_data_button ||
                  item.ueber_uns_section_standort_data_button;

                return (
                  <SwiperSlide key={index}>
                    <div className="p-5">
                      <div className="p-4 sm:p-6 sm:rounded-3xl bg-white shadow-custom_shdow2 hover:shadow-sm transition-all">
                        <div className="scale-75 lg:scale-100 size-[100px] rounded-[10px] grid place-items-center bg-yellow mx-auto shadow-[0_4px_18px_0_rgba(0,0,0,.14)]">
                          <Image
                            src="/images/Simplification-2.svg"
                            alt={`${title}-icon`}
                            width={52}
                            height={52}
                          />
                        </div>
                        <h3 className="mb-2 lg:mt-6 text-h3 font-bold">
                          {title}
                        </h3>
                        <div
                          className="mb-4 lg:mb-8 text-p space-y-4"
                          dangerouslySetInnerHTML={{ __html: description }}
                        />
                        <div className="mb-4 lg:mb-8 text-p space-y-4">
                          {links.map((linkItem, i) => (
                            <div key={i}>
                              <span>{linkItem.link_title}</span>
                              <Link
                                className="hover:text-yellow transition-colors block"
                                href={linkItem.link.url}
                                target={linkItem.link.target || "_self"}
                                aria-label={linkItem.link.title}
                              >
                                {linkItem.link.title}
                              </Link>
                            </div>
                          ))}
                        </div>
                        {button?.url ? (
                          <Link
                            href={button.url}
                            className="block w-fit mx-auto text-yellow lg:text-lg rounded sm:rounded-[10px] border border-yellow py-2 2xl:py-[15px] px-4 2xl:px-8 hover:bg-yellow hover:shadow hover:text-white transition-colors"
                            target={button.target || "_self"}
                          >
                            {button.title}
                          </Link>
                        ):null}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="swiper-pagination md:hidden"></div>
          </div>

          {/* Next Button */}
          <div
            onClick={nextSlide}
            className="hidden md:grid text-yellow border rounded-lg border-yellow w-fit p-2 select-none cursor-pointer"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Psychotherapie_Praxis;
