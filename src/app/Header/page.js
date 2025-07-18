
import React from "react"; 
import POST_GET from "../utils/PostsGet";
import Header from "../components/Header";
const Page = async () => {
  let HeaderDetails ;
  let menuDatas ;
  let OptionDatas;
  try {
     HeaderDetails = await POST_GET("/menus-with-logo");
     menuDatas = await POST_GET("/menu/top-menu");
     OptionDatas = await POST_GET("/options");
  } catch (error) {
    console.error("Error fetching menu data:", error);
  }

  return (
    <>
      <Header
        Headerdata={HeaderDetails}
        menuData={menuDatas}
        OptionData={OptionDatas}
      />
    </>
  );
};

export default Page;
