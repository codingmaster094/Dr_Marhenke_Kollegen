'use client'
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
}) => {
  const swiperRef = useRef(null); // Ref to the Swiper instance
  
    const nextSlide = () => {
      swiperRef.current.swiper.slideNext(); // Go to the next slide
    };
  
    const prevSlide = () => {
      swiperRef.current.swiper.slidePrev(); // Go to the previous slide
    };

    const slideData = [
  {
    title: "Rodenkirchen",
    address: ["Gustav-Radbruch-Straße 1", "50996 Köln"],
    phone: "022142313956",
    email: "kontakt@psycho-therapie-koeln.de",
    link: "/koeln-rodenkirchen/",
    icon: "images/Simplification-2.svg",
  },
  {
    title: "Südstadt",
    address: ["Rolandstraße 55", "50677 Köln"],
    phone: "022117004036",
    email: "kontakt@psycho-therapie-koeln.de",
    link: "/koeln-suedstadt/",
    icon: "images/Simplification-2.svg",
  },
  {
    title: "Hürth",
    address: ["Krankenhausstraße 107", "50354 Hürth"],
    phone: "022333740978",
    email: "kontakt@psycho-therapie-huerth.de",
    link: "/huerth",
    icon: "images/Simplification-2.svg",
  },
];

const slideDataForLoop = [...slideData];
while (slideDataForLoop.length < 4) {
  slideDataForLoop.push(...slideData);
}
  return (
    <section
      className={`py-14 lg:py-20 2xl:py-100 bg-opacity-25 ${
        bgColor ? bgColor : ""
      }`}
    >
      <div className="container space-y-16">
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
              <h2 className="text-h2 mb-4 max-w-[600px]">{title}</h2>
              <span className="w-28 h-1 bg-yellow block"></span>
            </div>
            <div className="text-p space-y-4">
              {description.map((item, index) => (
                <p className="mb-4" key={index}>
                  {item}
                </p>
              ))}
            </div>
            <div className="content-listing">
              <ul className="space-y-4 ml-6">
                {listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
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

          <div className="swiper  text-center pb-10 sm:pb-2 md:p-0">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
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
              {slideDataForLoop.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="p-5">
                    <div className="p-4 sm:p-6 sm:rounded-3xl bg-white shadow-custom_shdow2 hover:shadow-sm transition-all">
                      <div className="scale-75 lg:scale-100 size-[100px] rounded-[10px] grid place-items-center bg-yellow mx-auto shadow-[0_4px_18px_0_rgba(0,0,0,.14)]">
                        <Image
                          role="img"
                          src={item.icon}
                          alt={`${item.title}-icon`}
                          width={52}
                          height={52}
                        />
                      </div>
                      <h3 className="mb-2 lg:mt-6 text-h3 font-bold">
                        {item.title}
                      </h3>
                      <div className="mb-4 lg:mb-8 text-p space-y-4">
                        {item.address.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                      <div className="mb-4 lg:mb-8 text-p space-y-4">
                        <div>
                          <span>Telefon:</span>
                          <Link
                            role="link"
                            className="hover:text-yellow transition-colors"
                            href={`tel:${item.phone}`}
                            aria-label={item.phone}
                          >
                            {item.phone}
                          </Link>
                        </div>
                        <div>
                          <span>E-Mail:</span>
                          <Link
                            role="link"
                            className="hover:text-yellow transition-colors"
                            href={`mailto:${item.email}`}
                            aria-label={item.email}
                          >
                            {item.email}
                          </Link>
                        </div>
                      </div>
                      <Link
                        role="link"
                        href={item.link}
                        aria-label="Mehr erfahren"
                        className="block w-fit mx-auto text-yellow lg:text-lg rounded sm:rounded-[10px] border border-yellow py-2 2xl:py-[15px] px-4 2xl:px-8 hover:bg-yellow hover:shadow hover:text-white transition-colors"
                      >
                        Mehr erfahren
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
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
export default Psychotherapie_Praxis;
