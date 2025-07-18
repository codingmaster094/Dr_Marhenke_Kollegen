import Image from "next/image";
import Link from "next/link";
const Kooperationen_Service = ({ 
  KooperationenData
}) => {
  return (
    <>
      {
        KooperationenData?.map((item, index) => {
          const isEven = index % 2 === 0;
          const bgClass = isEven ? "bg-[#fffbf2]" : "";
          return (
            <section className={` py-14 lg:py-20 2xl:py-100 group ${bgClass}`}>
              <div className="container space-y-16">
                <div
                  className={`flex flex-col  ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-4 xl:gap-16`}
                >
                  <div className="lg:w-6/12 self-stretch p-5 sm:p-10 3xl:aspect-[1.95/1] rounded md:rounded-3xl overflow-hidden shadow-[0_4px_34px_0_rgba(0,0,0,.08)] bg-white grid place-items-center relative">
                    <div className="">
                      <Image
                        className=""
                        width={155}
                        height={145}
                        src={item.kooperationen__description_image.url}
                        alt="Partner's image"
                      />
                    </div>
                  </div>
                  <div className="lg:w-6/12 flex flex-col justify-center gap-[34px]">
                    <div>
                      <h2
                        className=" mb-4"
                        dangerouslySetInnerHTML={{
                          __html: item.kooperationen__description_title,
                        }}
                      ></h2>
                      <span className="w-28 h-1 bg-yellow block"></span>
                    </div>
                    <div
                      className="text"
                      dangerouslySetInnerHTML={{
                        __html: item.kooperationen__description_description,
                      }}
                    >
                    </div>
                    <div className="content-listing">
                        <Link
                          role="link"
                          href={item.kooperationen__description_partner_link.url}
                          className="block w-fit text-yellow lg:text-lg rounded sm:rounded-[10px] border border-yellow py-2 2xl:py-[15px] px-4 2xl:px-8 hover:bg-yellow hover:shadow hover:text-white transition-colors"
                        >
                          {item.kooperationen__description_partner_link.title}
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })
      }
    </>
   
  );
};
export default Kooperationen_Service;
