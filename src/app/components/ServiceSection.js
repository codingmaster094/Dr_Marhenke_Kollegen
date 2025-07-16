import Image from "next/image";
import Link from "next/link";

const ServiceSection = ({
  leistungen_all_sub_services_1,
  leistungen_all_sub_services_2,
  leistungen_all_sub_services_3,
}) => {
  const mergedServices =
    leistungen_all_sub_services_1 ||
    leistungen_all_sub_services_2 ||
    leistungen_all_sub_services_3;

  if (!Array.isArray(mergedServices)) return null;

  return mergedServices.map((val, i) => {
    const isEven = i % 2 === 0;

    const image =
      val?.leistungen_all_sub_services_1_image?.url ||
      val?.leistungen_all_sub_services_2_image;
      val?.leistungen_all_sub_services_3_image;

    const imageAlt =
      val?.leistungen_all_sub_services_1_image?.alt ||
      val?.leistungen_all_sub_services_2_image?.alt ||
      val?.leistungen_all_sub_services_3_image?.alt ||
      "Service Image";

    const title =
      val?.leistungen_all_sub_services_1_title ||
      val?.leistungen_all_sub_services_2_title ||
      val?.leistungen_all_sub_services_3_title;

    const content =
      val?.leistungen_all_sub_services_1_content ||
      val?.leistungen_all_sub_services_2_content ||
      val?.leistungen_all_sub_services_3_content 

    const points =
      val?.leistungen_all_sub_services_1_all_contents ||
      val?.leistungen_all_sub_services_2_all_contents ||
      val?.leistungen_all_sub_services_3_all_contents;

    const postLink =
      val?.leistungen_all_sub_services_1_post_link ||
      val?.leistungen_all_sub_services_2_post_link ||
      val?.leistungen_all_sub_services_3_post_link;

    return (
      <section
        key={i}
        className={`py-14 lg:py-20 2xl:py-100 bg-opacity-25 ${
          isEven ? "bg-[#FFF2CE]" : ""
        }`}
      >
        <div className="container space-y-16">
          <div
            className={`flex flex-col ${
              !isEven ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-4 xl:gap-16`}
          >
            {/* Image Section */}
            <div className="lg:w-6/12 self-stretch 3xl:aspect-[1.95/1] rounded md:rounded-3xl overflow-hidden">

              {image && (
                <Image
                  src={image}
                  alt={imageAlt}
                  width={800}
                  height={600}
                  className="size-full object-cover"
                />
              )}
            </div>

            {/* Content Section */}
            <div className="lg:w-6/12 flex flex-col justify-center gap-[34px]">
              {title && (
                <div>
                  <h2
                    className="mb-4"
                    dangerouslySetInnerHTML={{ __html: title }}
                  ></h2>
                  <span className="w-28 h-1 bg-yellow block"></span>
                </div>
              )}

              {content && (
                <div
                  className="text"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
              )}

              {/* Bullet Points */}
              <div className="content-listing">
                {Array.isArray(
                  val.leistungen_all_sub_services_1_all_contents ||
                    val.leistungen_all_sub_services_2_all_contents ||
                    val.leistungen_all_sub_services_3_all_contents
                ) && (
                  <ul className="space-y-4 ml-6 list-disc">
                    {points.map((item, index) => (
                      <li key={index}>
                        {item?.leistungen_all_sub_services_1_all_contents_points ||
                          item?.leistungen_all_sub_services_2_all_contents_points ||
                          item?.leistungen_all_sub_services_3_all_contents_points}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* Button */}
              {postLink?.url && (
                <Link
                  href={postLink.url}
                  className="block w-fit text-white bg-yellow rounded sm:rounded-[10px] p-3 sm:py-3 sm:px-8 
                  hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors font-medium"
                >
                  {postLink.title}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  });
};

export default ServiceSection;
