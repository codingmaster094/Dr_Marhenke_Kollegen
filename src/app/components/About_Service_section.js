import Image from "next/image";
import React from "react";
const page = ({
  title, 
  description, 
  bgColor,
  listItems, 
  imageSrc, 
  reverse = false 
}) => {

  return (
    <section
      className={` py-14 lg:py-20 2xl:py-100 bg-opacity-25 ${
        bgColor ? bgColor : ""
      }`}
    >
      <div className="container space-y-16">
        <div
          className={`flex flex-col items-start ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-4 xl:gap-16`}
        >
          <div className="lg:w-6/12 self-stretch rounded md:rounded-3xl overflow-hidden">
            <Image
              src={imageSrc}
              alt="Service Image"
              width={808}
              height={416}
              className="size-full object-cover object-top"
            />
          </div>
          <div className="lg:w-6/12 flex flex-col justify-center gap-[34px]">
            <div>
              <h2 className="text-h2 mb-4">{title}</h2>
              <span className="w-28 h-1 bg-yellow block"></span>
            </div>
            <div
              className="text-p space-y-4"
              dangerouslySetInnerHTML={{ __html: description }}
            >
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
      </div>
    </section>
  );
};
export default page;
