"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
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
  const ref = useRef();
  const videoRef = useRef(null);

  // Add classes to ULs if points are HTML
  useEffect(() => {
    if (ref.current) {
      const uls = ref.current.querySelectorAll("ul");
      uls.forEach((ul) => {
        ul.classList.add("space-y-4", "ml-6", "content-listing1");
      });
    }
  }, [points]);

  // Play video when visible (desktop only)
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !videoSrc) return;

    const isDesktop = window.innerWidth >= 768; // Only autoplay on desktop

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isDesktop && !el.src) {
            el.src = videoSrc.url; // Load video
            el.play().catch(() => {}); // Play silently
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [videoSrc]);

  return (
    <section className={`container pt-4 lg:pt-0 ${classes}`}>
      <div className="flex flex-col-reverse lg:flex-row gap-6">
        {/* Left Text */}
        <div className="lg:w-6/12 lg:py-8 flex flex-col justify-center gap-5 sm:gap-[34px]">
          <h1 className="text-h1">
            <span
              className="text-yellow block"
              dangerouslySetInnerHTML={{ __html: title }}
            ></span>
            <span dangerouslySetInnerHTML={{ __html: subtitle }}></span>
          </h1>

          {points && (
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

        {/* Right Media */}
        {(imageSrc || videoSrc) && (
          <div className="lg:w-6/12 flex items-end relative aspect-video">
            {imageSrc ? (
              <Image
                className="!static object-cover"
                fill
                src={imageSrc}
                alt="Hero-image"
                loading="lazy"
              />
            ) : (
              <video
                ref={videoRef}
                className="w-full h-full object-cover rounded cursor-pointer"
                muted
                loop
                playsInline
                preload="none"
                poster="/images/hero-poster.png"
                onClick={(e) => {
                  const vid = e.currentTarget;
                  if (!vid.src) vid.src = videoSrc.url; // Load video on click
                  vid.play();
                }}
              >
                <track kind="captions" srcLang="en" label="English" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero_Section;
