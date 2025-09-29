import Image from "next/image";
import DoctorList from "./DoctorList";
const Uber_AboutSection = ({ title , content , BTN , Doctore_list, classes }) => {

  return (
    <section className={`bg-[#fffbf2] bg-opacity-25 ${classes}`}>
      <div className="container space-y-16">
        <div className="flex flex-col lg:flex-row gap-4 xl:gap-16 items-start">
          <div className="lg:w-6/12 self-stretch rounded md:rounded-3xl overflow-hidden">
            <Image
              src="/images/praxis11.jpg"
              alt="Service Image"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-6/12 flex flex-col justify-center gap-[34px]">
            <div>
              <h2
                className="mb-4"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h2>
              <span className="w-28 h-1 bg-yellow block"></span>
            </div>
            <div className="text" dangerouslySetInnerHTML={{ __html: content }}>
            </div>
          </div>
        </div>
        <DoctorList title="" Data={Doctore_list} />
      </div>
    </section>
  );
};
export default Uber_AboutSection;
