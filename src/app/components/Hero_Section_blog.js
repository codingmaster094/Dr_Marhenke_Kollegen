"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

const Hero_Section_blog = ({
  title,
  subtitle,
  points,
  imageSrc,
  videoSrc,
  BTN,
}) => {
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      const uls = ref.current.querySelectorAll("ul");
      uls.forEach((ul) => {
        ul.classList.add("space-y-4", "ml-6" , "content-listing1");
      });
    }
  }, [points]);
  // const lenisRef = useRef(null);
  // Initialize Lenis once on mount
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.5,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
  //     smooth: true,
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   lenisRef.current = lenis;

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  // const scrollToSection = (targetId) => {
  //   console.log('targetId', targetId)
  //   const targetElement = document.querySelector(targetId);
  //   if (targetElement && lenisRef.current) {
  //     lenisRef.current.scrollTo(targetElement, {
  //       offset: -110,
  //       duration: 1.5,
  //       easing: (t) => t,
  //     });
  //   } else {
  //     console.warn(`Target section ${targetId} not found or Lenis not ready`);
  //   }
  // };

  return (
    <section className="px-4 lg:pr-0 2xl:ml-[calc((100%-1440px)/2)]">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-6/12 py-8 flex flex-col justify-center gap-5 sm:gap-[34px]">
          <h1 className="text-h1">
            <span
              className="text-yellow block"
              dangerouslySetInnerHTML={{ __html: title }}
            ></span>
            <span dangerouslySetInnerHTML={{ __html: subtitle }}></span>
          </h1>

          {points !== false ? (
            <>
              {Array.isArray(points) ? (
                <div className="content-listing">
                  <ul className="space-y-4 ml-6">
                    {points.map((point, index) => (
                      <li key={index}>
                        {point.home_hero_content_listing ||
                          point.leistungen_hero_content_listing_points ||
                          point.ueber_uns_hero_content_listing_points ||
                          point.team_hero_content_point ||
                          point.stellenausschreibung__description_point ||
                          point.standort_single_hero_content_listing ||
                          point.kontak_hero_description_point ||
                          point.single_behandlungen_hero_contents_listing ||
                          point.hero_content_listing}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div
                  ref={ref}
                  className="rich-text-content text-p space-y-4"
                  dangerouslySetInnerHTML={{ __html: points }}
                />
              )}
            </>
          ): null}

          {BTN ? (
            <Link
              href={BTN.url}
              className="inline-block w-fit text-white text-center bg-yellow rounded sm:rounded-[10px] p-3 sm:py-3 sm:px-8 hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors font-medium"
            >
              {BTN.title}
            </Link>
          ):null}
        </div>

        {imageSrc !== undefined || videoSrc !== undefined ? (
          <div className="lg:w-6/12 flex items-end relative aspect-video">
            {imageSrc != undefined ? (
              <Image
                className="!static object-cover"
                fill
                src={imageSrc}
                alt="Hero-image"
              />
            ) : (
              <video
                className="w-full h-full object-cover rounded"
                autoPlay
                muted
                loop
                playsInline
                src={videoSrc.url}
              />
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Hero_Section_blog;
