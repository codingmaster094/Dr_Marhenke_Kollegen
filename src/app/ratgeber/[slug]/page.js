import React from "react";
import Hero_Section_blog from "../../components/Hero_Section_blog";
import POST_GET from "../../utils/PostsGet";
import dayjs from "dayjs";
import Link from "next/link";
import ContentWithTOC from "@/app/components/ContentWithTOC";
import generatePageMetadata from "../../utils/generatePageMetadata";
import SEO_schema from "@/app/components/SEO_schema";

const page = async ({ params }) => {
  const { slug } = await params;
  let BlogData;
  try {
    BlogData = await POST_GET(`/ratgeber/${slug}`);
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!BlogData) {
    return <div>No data available.</div>;
  }

  return (
    <>
      <SEO_schema slug={`/${slug}`} faqs={BlogData?.acf.all_faqs} />
      <Hero_Section_blog
        title={BlogData.acf.hero_slider_main_title}
        subtitle={BlogData.acf.home_hero_title}
        points={BlogData.acf.hero_slider_content}
        BTN={BlogData.acf.home_anfrage_button}
        imageSrc={BlogData.acf.hero_slider_image.url}
        videoSrc={""}
      />

      <section className="container max-w-[1440px] py-[30px] md:py-[50px] lg:py-[50px]">
        <div className=" mx-auto">
          <div className="flex flex-col gap-5 md:gap-6 lg:gap-8">
            <div className="flex justify-between gap-4 flex-wrap items-center">
              <p className="text-body">
                <span>{dayjs(BlogData?.date).format("DD.MM.YYYY")}</span> |
                <span>
                  {" "}
                  ZULETZT AKTUALISIERT{" "}
                  <span>{dayjs(BlogData?.modified).format("DD.MM.YYYY")}</span>
                </span>
              </p>
              <div className="flex border border-Border w-auto lg:w-[35%] justify-between items-center p-1 bg-white shadow-md">
                <input
                  type="search"
                  placeholder="Wonach suchen Sie?"
                  className="border-none outline-none p-2 w-full placeholder:text-black-900"
                />
                <button
                  className="flex self-start flex-shrink-0 text-center bg-yellow text-white hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors font-normal px-5 py-3 sm:px-9 sm:py-4"
                  aria-label="link-button"
                  role="button"
                >
                  Jetzt suchen
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-5 md:gap-6 lg:gap-8">
              {BlogData.acf?.ratgeber_single_wichtigste_main_title ? (
                <h2
                  className="text-h4 sm:text-h3 md:text-h2"
                  dangerouslySetInnerHTML={{
                    __html: BlogData.acf?.ratgeber_single_wichtigste_main_title,
                  }}
                ></h2>
              ):null}
              <ul
                dangerouslySetInnerHTML={{
                  __html:
                    BlogData.acf?.ratgeber_single_wichtigste_content?.replace(
                      /<\/?ul[^>]*>/g,
                      ""
                    ),
                }}
                className="pl-5 menu flex flex-col gap-3 [&_li]:font-secondary-font [&_li]:text-a [&_li]:font-normal"
              ></ul>
            </div>
          </div>
        </div>
      </section>
      <section className="container max-w-[1440px] rounded-xl bg-[#F4E5C0] text-black text-center bg-cover py-inner_spc">
        <div className="container">
          <div className="flex flex-col gap-[34px] items-center">
            <div>
              <h2
                className="text-h2 mb-4"
                dangerouslySetInnerHTML={{
                  __html:
                    BlogData.acf.ratgeber_single_wichtigste_2_main_title || "",
                }}
              ></h2>
              <span className="w-28 h-1 bg-black block mx-auto"></span>
            </div>
            <div
              className="text-p space-y-4"
              dangerouslySetInnerHTML={{
                __html:
                  BlogData.acf.ratgeber_single_wichtigste_content_two || "",
              }}
            ></div>
            {BlogData.acf.home_anfrage_button ? (
              <Link
                role="link"
                className="inline-block w-fit text-yellow bg-white rounded sm:rounded-[10px] p-3 sm:py-3 sm:px-8 hover:bg-yellow hover:text-white hover:shadow hover:shadow-white transition-colors font-medium"
                href={BlogData.acf.home_anfrage_button.url}
              >
                {BlogData.acf.home_anfrage_button.title}
              </Link>
            ):null}
          </div>
        </div>
      </section>

      <ContentWithTOC
        title={BlogData?.acf?.home_anfrage_main_title}
        data={BlogData?.content}
        FAQ={BlogData?.acf}
      />
    </>
  );
};

export default page;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return generatePageMetadata(`/${slug}`, {
    title: `ratgeber/${slug}`,
    description: `ratgeber/${slug}`,
  });
}
