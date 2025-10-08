"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";

const Hero_Section = ({
  title,
  subtitle,
  points,
  imageSrc,
  videoSrc,
  BTN,
  classes
}) => {
  console.log('title', title)
  console.log('subtitle', subtitle)
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      const uls = ref.current.querySelectorAll("ul");
      uls.forEach((ul) => {
        ul.classList.add("space-y-4", "ml-6", "content-listing1");
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
    <section className={`container pt-4 lg:pt-0 ${classes}`}>
      <div className="flex flex-col-reverse lg:flex-row gap-6">
        <div className="lg:w-6/12 lg:py-8 flex flex-col justify-center gap-5 sm:gap-[34px]">
          <h1 className="text-h1">
            <span
              className="text-yellow block"
              dangerouslySetInnerHTML={{ __html: title }}
            ></span>
            <span dangerouslySetInnerHTML={{ __html: subtitle }}></span>
          </h1>

          {points !== false && (
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
          )}

          {BTN && (
            <Link
              href={BTN.url}
              aria-label={`Learn more about ${BTN.ariaContext || 'this section'}`}
              className="inline-block w-fit text-white text-center bg-yellow rounded sm:rounded-[10px] p-3 sm:py-3 sm:px-8 hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors font-medium"
            >
              {BTN.title}
            </Link>
          )}
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
              >
                <track
                  src={videoSrc.url} // Replace this with your VTT caption file if needed
                  kind="captions"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag.
              </video>

            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Hero_Section;
