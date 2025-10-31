
import React from "react"; 
import POST_GET from "../utils/PostsGet";
import Footer from "../components/Footer";
const Page = async () => {
  let FooterDetails ;
  let OptionData ;
  let Footer1 ;
  let Footer2 ;
  try {
     FooterDetails = await POST_GET("/menus-with-logo");
     OptionData = await POST_GET("/options");
     Footer1 = await POST_GET("/menu/footer-menu-1");
     Footer2 = await POST_GET("/menu/footer-menu-2");
  } catch (error) {
    console.error("Error fetching menu data:", error);
  }

  return (
    <>
      <Footer
        Footerdata={FooterDetails}
        OptionDatas={OptionData}
        Footer1={Footer1.items}
        Footer2={Footer2.items}
      />
    </>
  );
};

export default Page;
