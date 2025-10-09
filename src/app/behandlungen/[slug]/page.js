import React from "react";
import Hero_Section from "@/app/components/Hero_Section";
import Kooperationspartner from "@/app/components/Kooperationspartner";
import ServiceSection from "@/app/components/ServiceSection"
import FAQ_section from "@/app/components/FAQ_section";
import ReviewsData from "../../ReviewsData/page";
import POST_GET from "@/app/utils/PostsGet";
import SEO_schema from "@/app/components/SEO_schema";
import generatePageMetadata from "@/app/utils/generatePageMetadata";
const page = async ({params}) => {
    const {slug} = await params

  let CostumPagePost;
  try {
    CostumPagePost = await POST_GET(`/behandlungen/${slug}`);
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!CostumPagePost) {
    return <div>No data available.</div>;
  }

  return (
    <>
    <SEO_schema slug={`/${slug}`} faqs={CostumPagePost.acf.single_behandlungen_faqs_questions_answers} />
      <Hero_Section
        title={CostumPagePost.title}
        subtitle={CostumPagePost.acf.single_behandlungen_hero_title}
        points={CostumPagePost.acf.single_behandlungen_hero_contents}
        BTN={CostumPagePost.acf.single_behandlungen_hero_button}
        // buttonLink="/kontakt"
        imageSrc={CostumPagePost.acf.single_behandlungen_hero_image.url}
        videoSrc={""}
      />
      {/* <Kooperationspartner
        title={CostumPagePost?.acf.single_behandlungen_partners_main_title}
        logosData={CostumPagePost.acf.single_behandlungen_all_partners}
        BTN={CostumPagePost.acf.single_behandlungen_partners_button}
        classes="py-inner_spc"
      /> */}
      <ServiceSection
        behandlungenCustompageServiceSection1={
          CostumPagePost.acf.single_behandlungen_post_content_detail
        }
        classes="pb-inner_spc"
      />

      <ReviewsData />

      <FAQ_section
        title={CostumPagePost.acf.single_behandlungen_faqs_main_title}
        faqs={CostumPagePost.acf.single_behandlungen_faqs_questions_answers}
        classes="py-inner_spc"
      />
    </>
  );
};

export default page;

export async function generateMetadata({params}) {
  const {slug} = await params
  return generatePageMetadata(`${slug}`, {
    title: `${slug}`,
    description: `${slug}`,
  });
}
