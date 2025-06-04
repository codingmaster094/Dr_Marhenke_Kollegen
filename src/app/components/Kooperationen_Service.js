import Image from "next/image";
import Link from "next/link";
const Kooperationen_Service = ({ 
  title, 
  description, 
  bgColor,
  listItems, 
  buttonText, 
  buttonLink, 
  imageSrc, 
  reverse = false 
}) => {
  return (
    <section
      className={` py-14 lg:py-20 2xl:py-100 group ${bgColor ? bgColor : ""}`}
    >
      <div className="container space-y-16">
        <div
          className={`flex flex-col  ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-4 xl:gap-16`}
        >
          <div className="lg:w-6/12 self-stretch p-5 sm:p-10 3xl:aspect-[1.95/1] rounded md:rounded-3xl overflow-hidden shadow-[0_4px_34px_0_rgba(0,0,0,.08)] bg-white grid place-items-center relative">
            <div className="">
              <Image className="" width={155} height={145} src={imageSrc} alt="Partner's image" />
            </div>
          </div>
          <div className="lg:w-6/12 flex flex-col justify-center gap-[34px]">
            <div>
              <h2 className=" mb-4">{title}</h2>
              <span className="w-28 h-1 bg-yellow block"></span>
            </div>
            <div className="text">
              {description.map((item, index) => (
                <p className="mb-4" key={index}>
                  {item}
                </p>
              ))}
            </div>
            <div className="content-listing">
              <ul className="space-y-4 ml-6">
                {listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
                <Link
                  role="link"
                  href={buttonLink}
                  className="block w-fit text-yellow lg:text-lg rounded sm:rounded-[10px] border border-yellow py-2 2xl:py-[15px] px-4 2xl:px-8 hover:bg-yellow hover:shadow hover:text-white transition-colors"
                >
                  {buttonText}
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Kooperationen_Service;
