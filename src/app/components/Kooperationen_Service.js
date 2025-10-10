import Image from "next/image";
import Link from "next/link";
const Kooperationen_Service = ({ 
  KooperationenData, classes
}) => {
  return (
    <>
      {
        KooperationenData?.map((item, index) => {
          const isEven = index % 2 === 0;
          const bgClass = isEven ? "bg-[#fffbf2]" : "";
          return (
            <section className={`group ${bgClass} ${classes}`} key={index}>
              <div className="container space-y-16">
                <div
                  className={`flex flex-col lg:flex-row gap-4 xl:gap-16`}
                >
                  <div className="lg:w-4/12 xl:w-3/12">
                      <Image src={item.kooperationen__description_image.url}
                      width={229}
                      height={117}
                        alt="Partner's image"/>
                  </div>
                  <div className="lg:w-8/12 xl:w-9/12 flex flex-col justify-center gap-[34px]">
                  {
                    item.kooperationen__description_title && 
                    <div>
                      <h2
                        className=" mb-4"
                        dangerouslySetInnerHTML={{
                          __html: item.kooperationen__description_title,
                        }}
                      ></h2>
                      <span className="w-28 h-1 bg-yellow block"></span>
                    </div>
                  }
                    <div
                      className="text"
                      dangerouslySetInnerHTML={{
                        __html: item.kooperationen__description_description,
                      }}
                    >
                    </div>
                    {
                      item.kooperationen__description_partner_link.title !="" ? 
                    <div className="content-listing">
                        <Link
                          role="link"
                          href={item.kooperationen__description_partner_link.url}
                          target={item.kooperationen__description_partner_link.target} 
                          className="block w-fit text-yellow lg:text-lg rounded sm:rounded-[10px] border border-yellow py-2 2xl:py-[15px] px-4 2xl:px-8 hover:bg-yellow hover:shadow hover:text-white transition-colors"
                        >
                          {item.kooperationen__description_partner_link.title}
                        </Link>
                    </div>
                    : null
                    }
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
