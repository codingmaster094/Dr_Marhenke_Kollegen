import Image from "next/image";
import Link from "next/link";
import React from "react";
const Team_About = ({
  further_title,
  further_link,
  title,
  description,
  bgColor,
  listItems,
  imageSrc,
  reverse = false,
  classes,
  appointment_btn
}) => {

  return (
    <section
      className={`bg-opacity-25 bg-[#fffbf2] ${classes}`}
    >
      <div className="container space-y-16">
        <div
          className={`flex flex-col items-start ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-4 xl:gap-16`}
        >
          <div className="lg:w-6/12 self-stretch rounded md:rounded-3xl overflow-hidden">
            <Image
              src={imageSrc}
              alt="Service Image"
              width={808}
              height={416}
              className="size-full object-cover object-bottom"
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
              <h3>{further_title}</h3>
              <div className="Team-Details">
                {
                  further_link !=false && further_link &&
                  further_link.map((val, i) => {
                    return (
                      <Link className="text-yellow" role="button" href={val.link.url} key={i} target="_blank">
                        {val.link.title}
                      </Link>
                    )
                  })
                }
              </div>
              {
                appointment_btn.url !=undefined && appointment_btn &&
                <Link
                  href={appointment_btn.url}
                  aria-label="Contact"
                  className="p-2 sm:p-3 text-white 2xl:py-4 2xl:px-8 inline-block bg-yellow rounded sm:rounded-[10px] hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors xl:text-lg text-base lg:text-lg"
                >
                 {appointment_btn.title}
                </Link>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team_About;
