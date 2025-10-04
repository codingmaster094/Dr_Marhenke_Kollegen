import Hero_Section from "@/app/components/Hero_Section";
import Team_About from "@/app/components/Team_About";
import Custom_Post from "@/app/utils/CustomPost";
import generatePageMetadata from "@/app/utils/generatePageMetadata";

const page = async ({ params }) => {
  const {slug} = await params
  let TeamData;
  try {
    TeamData = await Custom_Post(`/team/${slug}`);
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!TeamData) {
    return <div>No data available.</div>;
  }

  console.log('TeamData', TeamData)
  return (
    <>
      <Hero_Section
        title={TeamData.title}
        subtitle={""}
        points={TeamData.acf.team_hero_content}
        buttonText=""
        buttonLink="/"
        imageSrc={TeamData.acf.team_hero_image.url}
        videoSrc=""
      />
      <Team_About
        title={TeamData.acf.team__employee_title}
        description={TeamData.acf.team__employee_description}
        listItems={[]}
        imageSrc={TeamData.acf.team_employee_photo.url}
        reverse={false}
        further_link={TeamData.acf.further_link}
        further_title={TeamData.acf.further_title}
        appointment_btn={TeamData.acf.appointment_btn}
        classes="py-inner_spc"
      />
    </>
  );
};

export default page;

export async function generateMetadata({params}) {
  const {slug} =await params
  return generatePageMetadata(`/team/${slug}`, {
    title: "ratgeber",
    description: "ratgeber",
  });
}
