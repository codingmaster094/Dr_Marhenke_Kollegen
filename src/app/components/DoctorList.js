"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const DoctorList = ({ title , Data, classes}) => {
  return (
    <section className={title && `${classes} bg-opacity-25`}>
      <div className={title && "container space-y-16"}>
        {title && (
          <div className="flex flex-col gap-[34px] items-center text-center">
            <h2 className="sm:text-h3 lg:text-h2">{title}</h2>
            <span className="w-28 h-1 bg-yellow block mx-auto"></span>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 text-center gap-y-10 gap-x-4 lg:gap-12">
  {Data?.slice().reverse().map((item, i) => (
    <div key={i} className="w-full">
      <div className="relative group">
        <div className="relative aspect-square">
          <Image
            src={item.acf.team_employee_photo.url}
            alt={item.acf.team_employee_photo.alt || "Team-employee-image"}
            fill
            className="rounded-xl lg:rounded-2xl 3xl:rounded-3xl size-full object-cover object-top"
          />
        </div>
        <Link
          role="button"
          href={`/team/${item.slug}`}
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
      <div className="text">{item.acf.team_hero_content[0].team_hero_content_point}</div>
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
