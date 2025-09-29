import Image from "next/image";
import React from "react";

const About_Service_section = ({ Data }) => {
  return (
    <>
      {Data?.map((item, index) => {
        const isEven = index % 2 === 0;
        const bgClass = isEven ? "bg-[#fffbf2]" : "";

        return (
          <section
            key={index}
            className={`${bgClass}`}
          >
            <div className="container space-y-16">
              <div
                className={`flex flex-col items-start ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-4 xl:gap-16`}
              >
                <div className="lg:w-6/12 self-stretch 3xl:aspect-[1.95/1] rounded md:rounded-3xl overflow-hidden">
                  <Image
                    src={
                      item?.stellenausschreibung__ausschreibungstext_Image?.url
                    }
                    alt={
                      item?.stellenausschreibung__ausschreibungstext_Image
                        ?.alt || "Service Image"
                    }
                    width={784}
                    height={520}
                    className="size-full object-cover object-bottom"
                  />
                </div>

                <div className="lg:w-6/12 flex flex-col justify-center gap-[34px]">
                  <div>
                    <h2 className="text-h2 mb-4">
                      {item?.stellenausschreibung__ausschreibungstext_title}
                    </h2>
                    <span className="w-28 h-1 bg-yellow block"></span>
                  </div>

                  <div className="content-listing">
                    <ul className="space-y-4 ml-6 list-disc">
                      {item?.description?.map((point, pointIndex) => (
                        <li key={pointIndex}>
                          {
                            point?.stellenausschreibung__ausschreibungstext_description_point
                          }
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default About_Service_section;
