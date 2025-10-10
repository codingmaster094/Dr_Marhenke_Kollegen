import React from "react";
import Hero_Section_blog from "../../components/Hero_Section_blog";
import POST_GET from "../../utils/PostsGet";
import dayjs from "dayjs";
import Link from "next/link";
import ContentWithTOC from "@/app/components/ContentWithTOC";
import dynamic from "next/dynamic";
import generatePageMetadata from "../../utils/generatePageMetadata";
import SEO_schema from "@/app/components/SEO_schema";

const page = async ({ params }) => {
  const { slug } = await params;
  let BlogData;
  try {
    BlogData = await POST_GET(`/karriere/${slug}`);
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!BlogData) {
    return <div>No data available.</div>;
  }

  return (
    <>
      {/* <SEO_schema slug={`/${slug}`} faqs={BlogData?.acf.all_faqs} />*/}
      <Hero_Section_blog
        title={BlogData.acf.hero_title_1}
        subtitle={BlogData.acf.hero_title_2}
        points={BlogData.acf.home_hero_content}
        BTN={BlogData.acf.home_hero_button}
        imageSrc={BlogData.acf.home_hero_image.url}
        videoSrc={""}
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
