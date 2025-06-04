import Image from "next/image";
import Link from "next/link";
const ServiceSection = ({ 
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
    <section className={`py-14 lg:py-20 2xl:py-100 bg-opacity-25 ${bgColor ? bgColor : ""}`}>
      <div className="container space-y-16">
        <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-4 xl:gap-16`}>
          {/* Image Section */}
          <div className="lg:w-6/12 self-stretch 3xl:aspect-[1.95/1] rounded md:rounded-3xl overflow-hidden">
            <Image src={imageSrc} alt="Service Image" width={800} height={600} className="size-full object-cover" />
          </div>

          {/* Content Section */}
          <div className="lg:w-6/12 flex flex-col justify-center gap-[34px]">
            <div>
              <h2 className="mb-4">{title}</h2>
              <span className="w-28 h-1 bg-yellow block"></span>
            </div>
            <div className="text">
            {description.map((item, index) => (
                  <p className="mb-4" key={index}>{item}</p>
                ))}
            </div>
            <div className="content-listing">
              <ul className="space-y-4 ml-6">
                {listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            {
              buttonText && 
            <Link 
              href={buttonLink}
              className="block w-fit text-white bg-yellow rounded sm:rounded-[10px] p-3 sm:py-3 sm:px-8 
              hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors font-medium">
              {buttonText}
            </Link>
            }
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceSection;
