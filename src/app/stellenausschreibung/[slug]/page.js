import Hero_Section from "@/app/components/Hero_Section"
import About_Service_section from "@/app/components/About_Service_section";
import POST_GET from "@/app/utils/PostsGet";
const page = async({params}) => {
  const {slug} = await params
  let stellenausschreibungData;
  try {
    stellenausschreibungData = await POST_GET(`/stellenausschreibung/${slug}`);
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!stellenausschreibungData) {
    return <div>No data available.</div>;
  }

  console.log('stellenausschreibungData', stellenausschreibungData)
return (
  <>
    <Hero_Section
      title={stellenausschreibungData.acf.stellenausschreibung__hero_titile}
      subtitle={""}
      points={
        stellenausschreibungData.acf.stellenausschreibung__hero_description
      }
      buttonText={stellenausschreibungData.acf.stellenausschreibung_hero_button}
      buttonLink="/"
      imageSrc={
        stellenausschreibungData.acf.stellenausschreibung__hero_image.url
      }
    />

    <About_Service_section
      Data={
        stellenausschreibungData.acf.stellenausschreibung__ausschreibungstext
      }
    />
  </>
);
}

export default page