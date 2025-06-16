"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const DoctorList = ({ title }) => {
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
    <section className={title && "pt-14 lg:pt-20 2xl:pt-[100px] bg-opacity-25"}>
      <div className={title && "container space-y-16"}>
        {title && (
          <div className="flex flex-col gap-[34px] items-center text-center">
            <h2 className="sm:text-h3 lg:text-h2">{title}</h2>
            <span className="w-28 h-1 bg-yellow block mx-auto"></span>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 text-center gap-y-10 gap-x-4 lg:gap-12">
          {blogPosts?.map((item) => (
            <div key={item.id} className="w-full">
              <div className="relative group">
                <div className="relative aspect-square">
                  <Image
                    src={item.image}
                    alt={item.title}
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

          {/* <div className="mt-10 flex justify-center">
            <button
              className="px-6 py-3 bg-yellow text-white font-medium rounded-lg hover:bg-opacity-90 transition"
            >
              Mehr anzeigen
            </button>
          </div> */}
      </div>
    </section>
  );
};

export default DoctorList;
