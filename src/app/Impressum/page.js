import React from "react";
import POST_GET from "../utils/PostsGet";
const page = async () => {
  let impressumData;
  try {
    impressumData = await POST_GET("/page-data/impressum");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!impressumData) {
    return <div>No data available.</div>;
  }
  return (
    <section className="sec-page-content">
      <div className="container">
        <h2
          className="wp-block-heading"
          dangerouslySetInnerHTML={{ __html: impressumData.title }}
        ></h2>
        <div
          dangerouslySetInnerHTML={{ __html: impressumData.content }}
        ></div>
      </div>
    </section>
  );
};

export default page;
