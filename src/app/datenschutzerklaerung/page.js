import React from 'react'
import POST_GET from '../utils/PostsGet';
import SEO_schema from '../components/SEO_schema';
import generatePageMetadata from '../utils/generatePageMetadata';
const page = async() => {
    let datenschutzerklarungData;
  try {
    datenschutzerklarungData = await POST_GET("/page-data/datenschutzerklarung");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!datenschutzerklarungData) {
    return <div>No data available.</div>;
  }
  return (
    <>
    <SEO_schema slug="/datenschutzerklarung" />
    <section className="sec-page-content">
            <div className="container">
                <h2 className="wp-block-heading" dangerouslySetInnerHTML={{ __html: datenschutzerklarungData.title }}></h2>
                <div dangerouslySetInnerHTML={{ __html: datenschutzerklarungData.content }}></div>
            </div>
        </section>
    </>
  )
}

export default page

export async function generateMetadata({params}) {
  return generatePageMetadata(`/datenschutzerklarung`, {
    title: `datenschutzerklarung`,
    description: `datenschutzerklarung`,
  });
}