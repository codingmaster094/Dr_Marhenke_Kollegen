"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";

const Hero_Section = ({
  title,
  subtitle,
  points,
  imageSrc,
  videoSrc,
  BTN,
}) => {
  const lenisRef = useRef(null);
  // Initialize Lenis once on mount
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollToSection = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement && lenisRef.current) {
      lenisRef.current.scrollTo(targetElement, {
        offset: -110,
        duration: 1.5,
        easing: (t) => t,
      });
    } else {
      console.warn(`Target section ${targetId} not found or Lenis not ready`);
    }
  };

  return (
    <section className="container">
      <div className="flex flex-col-reverse lg:flex-row gap-6">
        <div className="lg:w-6/12 py-8 flex flex-col justify-center gap-5 sm:gap-[34px]">
          <h1 className="text-h1">
            <span
              className="text-yellow block"
              dangerouslySetInnerHTML={{ __html: title }}
            ></span>
            <span dangerouslySetInnerHTML={{ __html: subtitle }}></span>
          </h1>

          <div className="content-listing">
            <ul className="space-y-4 ml-6">
              {points?.map((point, index) => (
                <li key={index}>
                  {point.home_hero_content_listing ||
                    point.leistungen_hero_content_listing_points ||
                    point.ueber_uns_hero_content_listing_points ||
                    point.team_hero_content_point || 
                    point.stellenausschreibung__description_point
                    }
                </li>
              ))}
            </ul>
          </div>
          {BTN && (
            <button
              onClick={() => scrollToSection(BTN.url)}
              className="inline-block w-fit text-white text-center bg-yellow rounded sm:rounded-[10px] p-3 sm:py-3 sm:px-8 hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors font-medium"
            >
              {BTN.title}
            </button>
          )}
        </div>

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
      </div>
    </section>
  );
};

export default Hero_Section;
