import Image from "next/image";
import DoctorList from "./DoctorList";
const Uber_AboutSection = ({ params }) => {

  return (
    <section className="bg-[#FFF2CE] py-14 lg:py-20 2xl:py-[100px] bg-opacity-25">
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
              <h2 className="mb-4">Das Team von Dr. Marhenke & Kollegen</h2>
              <span className="w-28 h-1 bg-yellow block"></span>
            </div>
            <div className="text">
              <p>
                Unser erfahrenes Team aus approbierten Psychotherapeutinnen und
                Psychotherapeuten begleitet Sie mit Fachwissen, Empathie und
                einem ganzheitlichen Ansatz. Wir legen Wert auf eine
                vertrauensvolle Zusammenarbeit und ein respektvolles Miteinander
                – sowohl im Team als auch mit unseren Patientinnen und
                Patienten.
              </p>
            </div>
          </div>
        </div>
        <DoctorList title="" />
      </div>
    </section>
  );
};
export default Uber_AboutSection;
