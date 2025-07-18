import React from "react";
import Google_Review from "../components/Google_Review";
import POST_GET from "../utils/PostsGet";

const page = async ({ title, des }) => {
  let ReviewDataAPI;
  try {
    ReviewDataAPI = await POST_GET("/options");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!ReviewDataAPI) {
    return <div>No data available.</div>;
  }

  console.log("ReviewDataAPI", ReviewDataAPI);
  return (
    <Google_Review
      main_title={ReviewDataAPI.logo_title}
      content={ReviewDataAPI.logo_content}
      reviewlogos={ReviewDataAPI.logo_slider}
      slider={ReviewDataAPI.slider}
    />
  );
};

export default page;
