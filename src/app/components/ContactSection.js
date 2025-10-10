"use client";
import Image from "next/image";
import Link from "next/link";
const ContactSection = ({location_cards,classes}) => {
  return (
    <section className={`bg-opacity-25 bg-[#fffbf2] ${classes}`}>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-16 text-center xl:flex-nowrap flex-wrap justify-center">
          {location_cards?.map((item , i)=>{
            return (
          <div className="lg:w-[calc(50%-32px)] 2xl:w-[calc(33.33%-42.67px)] p-4 sm:p-6 sm:rounded-3xl bg-white shadow-custom_shdow2 hover:shadow-2xl transition-all" key={i}>
            <div className="text-p space-x-4 flex justify-center items-center">
            {
              item.location_icons.map((image , i) => {
                return (
              <div key={i}>
                <Link
                  role="link"
                  className="hover:text-yellow transition-colors"
                  aria-label="0221/42 31 39 56"
                  target={image.icon_link.target}
                  href={image.icon_link.url}
                >
                  <span className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] bg-yellow rounded-[10px] flex justify-center items-center *:sm:w-[42px] *:w-[32px]">
                    <Image
                      role="img"
                      alt="call-icon"
                      loading="lazy"
                      width={42}
                      height={42}
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src={image.icon_image.url}
                    />
                  </span>
                </Link>
              </div>
                )
              })
            }
            </div>
            <h3 className="mt-4 mb-1 lg:mt-6 text-h3 font-bold" dangerouslySetInnerHTML={{ __html: item.location_name }}></h3>
            <div className="mb-4 lg:mb-8 text-p space-y-4">
              <p >
               {item.address}
                <br />
              {item.zip}
              </p>
            </div>
          </div>
            )
          })}
      
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
