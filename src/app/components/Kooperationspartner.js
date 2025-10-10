"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import Image from "next/image";

const Kooperationspartner = ({ hideshow, title, logosData, BTN, classes }) => {
  const swiperRef = useRef(null);

  const nextSlide = () => {
    swiperRef.current?.swiper?.slideNext();
  };

  const prevSlide = () => {
    swiperRef.current?.swiper?.slidePrev();
  };

  return (
    hideshow &&
    <section className={`text-center ${classes}`}>
      <div className="container">
        <div className="space-y-10">
          {/* Title */}
          <div>
            <h2
              className="text-h2 mb-4"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
            <span className="w-28 h-1 bg-yellow block mx-auto"></span>
          </div>

          {/* Swiper with arrows */}
          <div className="flex gap-16 items-center">
            {/* Prev Button */}
            <div
              onClick={prevSlide}
              className="hidden md:grid serviceSwiper-prev text-yellow border rounded-lg border-yellow w-fit p-2 cursor-pointer"
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
                className="icon icon-tabler icon-tabler-chevron-left"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 6l-6 6l6 6" />
              </svg>
            </div>

            {/* Swiper */}
            <Swiper
              ref={swiperRef}
              className="partnersSwiper"
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
              {Array.isArray(logosData) &&
                logosData.map((logo, i) => {
                  const imageUrl =
                    logo?.kooperationen_company_logo_image?.url ||
                    logo?.leistungen_all_partners_logo?.url ||
                    logo?.ueber_uns_all_partners_logo?.url ||
                    logo?.single_behandlungen_all_partners_logo?.url;

                  // Extract company name or use generic fallback
                  const companyName =
                    logo?.kooperationen_company_logo_image?.alt ||
                    logo?.leistungen_all_partners_logo?.alt ||
                    logo?.ueber_uns_all_partners_logo?.alt ||
                    logo?.single_behandlungen_all_partners_site_url?.alt ||
                    "Partner";

                  // Descriptive alt text for linked logos
                  const imageAlt = `Visit ${companyName} website`;

                  const linkUrl =
                    logo?.kooperationen_company_logo_link?.url ||
                    logo?.leistungen_all_partners_site_url?.url ||
                    logo?.ueber_uns_all_partners_site_url?.url ||
                    logo?.single_behandlungen_all_partners_site_url?.url ||
                    "#";

                  console.log('imageAlt', imageAlt)
                  return (
                    <SwiperSlide
                      className="swiper-slide !flex justify-center"
                      key={i}
                    >
                      <Link
                        href={linkUrl}
                        role="link"
                        aria-label={`Visit ${companyName} website`}
                      >
                        {imageUrl && (
                          <Image
                            src={imageUrl}
                            alt={imageAlt}
                            width={229}
                            height={102}
                            role="img"
                          />
                        )}
                      </Link>
                    </SwiperSlide>
                  );
                })}
            </Swiper>

            {/* Next Button */}
            <div
              onClick={nextSlide}
              className="hidden md:grid serviceSwiper-next text-yellow border rounded-lg border-yellow w-fit p-2 cursor-pointer"
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
                className="icon icon-tabler icon-tabler-chevron-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </div>
          </div>

          {/* Optional CTA Button */}
          {BTN?.url && (
            <Link
              role="link"
              href={BTN.url}
              className="inline-block text-white bg-yellow rounded sm:rounded-[10px] p-3 sm:py-3 sm:px-8 
                hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors font-medium"
            >
              {BTN.title}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Kooperationspartner;
