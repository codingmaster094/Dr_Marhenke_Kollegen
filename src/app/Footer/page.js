
import React from "react"; 
import POST_GET from "../utils/PostsGet";
import Footer from "../components/Footer";
const Page = async () => {
  let FooterDetails ;
  let OptionData ;
  try {
     FooterDetails = await POST_GET("/menus-with-logo");
     OptionData = await POST_GET("/options");
  } catch (error) {
    console.error("Error fetching menu data:", error);
  }

  return (
    <>
      <Footer Footerdata={FooterDetails} OptionDatas={OptionData} />
    </>
  );
};

export default Page;
