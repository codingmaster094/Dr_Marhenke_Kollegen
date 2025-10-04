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
  reverse = false ,
  classes
}) => {

  return (
    <section
      className={`bg-opacity-25 ${
        bgColor ? bgColor : ""
      } ${classes}`}
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
              <div>
                <h3>{further_title}</h3>
{
  further_link.map((val,i)=>{
    return(
      <Link href={val.link.url} key={i}>
      {val.link.title}
      </Link>
    )
  })
}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team_About;
