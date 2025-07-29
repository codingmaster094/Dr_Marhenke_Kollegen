import React from 'react'
import POST_GET from '../utils/PostsGet';
const page = async() => {
    let ImpressumData;
  try {
     const response = await fetch(
       "https://marhenke.blog-s.de/wp-json/custom/v1/page-data/impressum",
       {
         next: { revalidate: 60 }, // Revalidate every 60 seconds (or any interval)
       }
     );
     ImpressumData  = await response.json();
    // ImpressumData = await POST_GET("/page-data/impressum");
  } catch (error) {
    return <div>Error loading data.</div>;
  }

  if (!ImpressumData) {
    return <div>No data available.</div>;
  }

  return (
    <section className="sec-page-content">
      <div className="container">
        <h2
          className="wp-block-heading"
          dangerouslySetInnerHTML={{ __html: ImpressumData.title }}
        ></h2>
        <div dangerouslySetInnerHTML={{ __html: ImpressumData.content }}></div>
      </div>
    </section>
  );
}

export default page