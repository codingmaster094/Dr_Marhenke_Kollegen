import Image from "next/image";
import React from "react";

const Praxis_section = ({ title, description, imageSrc, reverse, classes }) => {
  return (
    <section className="bg-opacity-25 ">
      <div className="container space-y-16">
        <div
          className={`flex flex-col ${classes} ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-4 xl:gap-16`}
        >
          <div className="lg:w-6/12 self-stretch 3xl:aspect-[1.95/1] rounded md:rounded-3xl overflow-hidden">
            <Image
              src={imageSrc}
              alt="Facial treatment being performed at our clinic"
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
            ></div>
            {/* <ul className="space-y-4 ml-6 list-disc">
            {listItems?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Praxis_section;
