"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Uber_AboutSection = ({ params }) => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const blogPosts = [
    {
      id: 1,
      title: "Dr. Tristan Marhenke",
      image: "/images/team-member-1.png",
      link: "/tristan-marhenke",
      description: "Psychologischer Psychotherapeut",
    },
    {
      id: 2,
      title: "M.Sc. Aida Marhenke",
      image: "/images/team-member-2.png",
      link: "/aida-marhenke",
      description: "Psychologische Psychotherapeutin",
    },
    {
      id: 3,
      title: "M.Sc. Roja Jansen",
      image: "/images/team-member-3.png",
      link: "/roja-jansen",
      description: "Psychologische Psychotherapeutin",
    },
    {
      id: 4,
      title: "M.Sc. Helen Limberg",
      image: "/images/4.jpg",
      link: "/helen-limberg",
      description: "Psychologische Psychotherapeutin",
    },
    {
      id: 5,
      title: "M.Sc. Mara Schraft",
      image: "/images/5.jpg",
      link: "/mara-schraft",
      description: "Psychologische Psychotherapeutin (i. A.)",
    },
    {
      id: 6,
      title: "M.Sc. Nikolai Mennicken",
      image: "/images/6.jpg",
      link: "/nikolai-mennicken",
      description: "Psychologischer Psychotherapeut",
    },
    {
      id: 7,
      title: "M.Sc. Susanne Kohns",
      image: "/images/7.jpg",
      link: "/susanne-kohns",
      description: "Psychologische Psychotherapeutin",
    },
    {
      id: 8,
      title: "M.Sc. Sophie Volz",
      image: "/images/8.jpg",
      link: "/sophie-volz",
      description: "Psychologische Psychotherapeutin (i. A.)",
    },
    {
      id: 9,
      title: "M.Sc. Ambra Mueller",
      image: "/images/9.jpg",
      link: "/ambra-mueller",
      description: "Psychologische Psychotherapeutin",
    },
    {
      id: 10,
      title: "Dr. rer. nat. Annegret Meermeier",
      image: "/images/10.jpg",
      link: "/annegret-meermeier",
      description: "Psychologische Psychotherapeutin",
    },
    {
      id: 11,
      title: "M.Sc. Charlotte Friederike Korsch",
      image: "/images/11.jpg",
      link: "/friederike-korsch",
      description: "Psychologische Psychotherapeutin",
    },
    {
      id: 12,
      title: "Dipl.-Psych. Kerstin Höhmann",
      image: "/images/_12.jpg",
      link: "/kerstin-hoehmann",
      description: "Psychologische Psychotherapeutin",
    },
    {
      id: 13,
      title: "M.Sc. Florian Kuhlmann",
      image: "/images/13.jpg",
      link: "/florian-kuhlmann",
      description: "Psychologischer Psychotherapeut (i. A.)",
    },
    {
      id: 14,
      title: "M.Sc. Jana Jamuna Halscheid",
      image: "/images/14.jpg",
      link: "/jana-jamuna-halscheid",
      description: "Psychologische Psychotherapeutin (i. A.)",
    },
    {
      id: 15,
      title: "M.Sc. Pauline Bitsch",
      image: "/images/15.jpg",
      link: "/pauline-bitsch",
      description: "Psychologische Psychotherapeutin (i. A.)",
    },
    {
      id: 16,
      title: "B.A. Jill Jannasch",
      image: "/images/16.jpg",
      link: "/jill-jannasch",
      description: "Soziotherapeutin",
    },
    {
      id: 17,
      title: "M.Sc. Franka Rossel",
      image: "/images/17.jpg",
      link: "/franka-rossel",
      description: "Psychologische Psychotherapeutin (i. A.)",
    },
    {
      id: 18,
      title: "Dipl.-Psych. Georg Haarhaus",
      image: "/images/18.jpg",
      link: "/georg-haarhaus",
      description: "Psychologischer Psychotherapeut",
    },
    {
      id: 19,
      title: "MFA Cansel Gökyar",
      image: "/images/19.jpg",
      link: "/cansel-goekyar",
      description: "Praxismanagerin",
    },
    {
      id: 20,
      title: "M.Sc. Sarah Krain",
      image: "/images/20.jpg",
      link: "/sarah-krain",
      description: "Psychologische Psychotherapeutin",
    },
    {
      id: 21,
      title: "M.Sc. Alina Ostermann-Myrau",
      image: "/images/location-img-5.webp",
      link: "/alina-ostermann-myrau",
      description: "Psychologische Psychotherapeutin",
    },
    {
      id: 22,
      title: "ZFA Yeliz Erdogmus",
      image: "/images/21.jpg",
      link: "/yeliz-erdogmus",
      description: "Praxismanagerin",
    },
    {
      id: 23,
      title: "B.Sc. (cand.) Jessica Peters",
      image: "/images/22.jpg",
      link: "/jessica-peters",
      description: "Praxismanagerin",
    },
    {
      id: 24,
      title: "M.Sc. Joke Werner",
      image: "/images/23.jpg",
      link: "/alina-ostermann-myrau-2",
      description: "Psychologische Psychotherapeutin",
    },
  ];

  return (
    <section className="bg-[#FFF2CE] py-14 lg:py-20 2xl:py-[100px] bg-opacity-25">
      <div className="container space-y-16">
        <div className="flex flex-col lg:flex-row gap-4 xl:gap-16 items-start">
          <div className="lg:w-6/12 self-stretch rounded md:rounded-3xl overflow-hidden">
            <Image
              src="/images/about-img-2.png"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 text-center gap-y-10 gap-x-4 lg:gap-12">
          {blogPosts.slice(0, visibleCount).map((item) => (
            <div key={item} className="w-full">
              <div className="relative group">
                <div className="relative aspect-square">
                  <Image
                    src={item.image}
                    alt="Team Member"
                    fill
                    className="rounded-xl lg:rounded-2xl 3xl:rounded-3xl size-full object-cover object-top"
                  />
                </div>
                <Link
                  role="button"
                  href={`/team${item.link}`}
                  className="absolute bg-yellow bg-opacity-65 inset-6 grid place-items-center rounded-xl lg:rounded-2xl 3xl:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                  </svg>
                </Link>
              </div>
              <h3 className="text-h3 mt-3 mb-2">{item.title}</h3>
              <div className="text">{item.description}</div>
            </div>
          ))}
        </div>
        {visibleCount < blogPosts.length && (
          <div className="flex justify-center mt-8">
            <button
              role="link"
              onClick={handleLoadMore}
              className="inline-block text-white bg-yellow rounded sm:rounded-[10px] p-3 sm:py-3 sm:px-8 hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors font-medium"
            >
              Mehr anzeigen
            </button>
          </div>
        )}
        {/* <div className="flex justify-center mt-8">
          <Link
            role="link"
            href="/"
            className="inline-block text-white bg-yellow rounded sm:rounded-[10px] p-3 sm:py-3 sm:px-8 hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors font-medium"
          >
            Mehr erfahren
          </Link>
        </div> */}
      </div>
    </section>
  );
};
export default Uber_AboutSection;
