import Image from "next/image";
import Link from "next/link";
import React from "react";
const Psychotherapie_Praxis = ({
  title,
  description,
  bgColor,
  listItems,
  imageSrc,
  reverse = false,
}) => {
  return (
    <section
      className={`py-14 lg:py-20 2xl:py-100 bg-opacity-25 ${
        bgColor ? bgColor : ""
      }`}
    >
      <div className="container space-y-16">
        <div
          className={`flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-4 xl:gap-16`}
        >
          <div className="lg:w-6/12 self-stretch 3xl:aspect-[1.95/1] rounded md:rounded-3xl overflow-hidden">
            <Image
              src={imageSrc}
              alt="Service Image"
              width={808}
              height={416}
              className="size-full object-cover"
            />
          </div>
          <div className="lg:w-6/12 flex flex-col justify-center gap-[34px]">
            <div>
              <h2 className="text-h2 mb-4 max-w-[600px]">{title}</h2>
              <span className="w-28 h-1 bg-yellow block"></span>
            </div>
            <div className="text-p space-y-4">
              {description.map((item, index) => (
                <p className="mb-4" key={index}>
                  {item}
                </p>
              ))}
            </div>
            <div className="content-listing">
              <ul className="space-y-4 ml-6">
                {listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-16 text-center xl:flex-nowrap flex-wrap justify-center">
          <div className="lg:w-[calc(50%-32px)] 2xl:w-[calc(33.33%-42.67px)] p-4 sm:p-6 sm:rounded-3xl bg-white shadow-custom_shdow2 hover:shadow-2xl transition-all">
            <div className="scale-75 lg:scale-100 size-[100px] rounded-[10px] grid place-items-center bg-yellow mx-auto shadow-[0_4px_18px_0_rgba(0,0,0,.14)]">
              <Image
                role="img"
                src="images/Simplification-2.svg"
                alt="men-icon"
                width={52}
                height={52}
              />
            </div>
            <h3 className="mb-2 lg:mt-6 text-h3 font-bold">Rodenkirchen </h3>
            <div className="mb-4 lg:mb-8 text-p space-y-4">
              <p>
                Gustav-Radbruch-Straße 1
                <br />
                50996 Köln
              </p>
            </div>
            <div className="mb-4 lg:mb-8 text-p space-y-4">
              <div>
                <span>Telefon:</span>
                <Link
                  role="link"
                  className="hover:text-yellow transition-colors"
                  href="tel:022142313956"
                  aria-label="0221/42 31 39 56"
                  target="_self"
                >
                  0221/42 31 39 56{" "}
                </Link>
              </div>
              <div>
                <span>E-Mail:</span>
                <Link
                  role="link"
                  className="hover:text-yellow transition-colors"
                  href="mailto:kontakt@psycho-therapie-koeln.de"
                  aria-label="kontakt@psycho-therapie-koeln.de"
                  target="_self"
                >
                  kontakt@psycho-therapie-koeln.de{" "}
                </Link>
              </div>
            </div>
            <Link
              role="link"
              href="/koeln-rodenkirchen/"
              aria-label="Mehr erfahren"
              target="_self"
              className="block w-fit mx-auto text-yellow lg:text-lg rounded sm:rounded-[10px] border border-yellow py-2 2xl:py-[15px] px-4 2xl:px-8 hover:bg-yellow hover:shadow hover:text-white transition-colors"
            >
              Mehr erfahren{" "}
            </Link>
          </div>
          <div className="lg:w-[calc(50%-32px)] 2xl:w-[calc(33.33%-42.67px)] p-4 sm:p-6 sm:rounded-3xl bg-white shadow-custom_shdow2 hover:shadow-2xl transition-all">
            <div className="scale-75 lg:scale-100 size-[100px] rounded-[10px] grid place-items-center bg-yellow mx-auto shadow-[0_4px_18px_0_rgba(0,0,0,.14)]">
              <Image
                role="img"
                src="images/Simplification-2.svg"
                alt="save-health"
                width={52}
                height={52}
              />
            </div>
            <h3 className="mb-2 lg:mt-6 text-h3 font-bold">Südstadt </h3>
            <div className="mb-4 lg:mb-8 text-p space-y-4">
              <p>
                Rolandstraße 55
                <br />
                50677 Köln
              </p>
            </div>
            <div className="mb-4 lg:mb-8 text-p space-y-4">
              <div>
                <span>Telefon:</span>
                <Link
                  role="link"
                  className="hover:text-yellow transition-colors"
                  href="tel:022117004036"
                  aria-label="0221/17 00 40 36"
                  target="_self"
                >
                  0221/17 00 40 36{" "}
                </Link>
              </div>
              <div>
                <span>E-Mail:</span>
                <Link
                  role="link"
                  className="hover:text-yellow transition-colors"
                  href="mailto:kontakt@psycho-therapie-koeln.de"
                  aria-label="kontakt@psycho-therapie-koeln.de"
                  target="_self"
                >
                  kontakt@psycho-therapie-koeln.de{" "}
                </Link>
              </div>
            </div>
            <Link
              role="link"
              href="/koeln-suedstadt/"
              aria-label="Mehr erfahren"
              target="_self"
              className="block w-fit mx-auto text-yellow lg:text-lg rounded sm:rounded-[10px] border border-yellow py-2 2xl:py-[15px] px-4 2xl:px-8 hover:bg-yellow hover:shadow hover:text-white transition-colors"
            >
              Mehr erfahren{" "}
            </Link>
          </div>

          <div className="lg:w-[calc(50%-32px)] 2xl:w-[calc(33.33%-42.67px)] p-4 sm:p-6 sm:rounded-3xl bg-white shadow-custom_shdow2 hover:shadow-2xl transition-all">
            <div className="scale-75 lg:scale-100 size-[100px] rounded-[10px] grid place-items-center bg-yellow mx-auto shadow-[0_4px_18px_0_rgba(0,0,0,.14)]">
              <Image
                role="img"
                src="images/Simplification-2.svg"
                alt="body-icon"
                width={52}
                height={52}
              />
            </div>
            <h3 className="mb-2 lg:mt-6 text-h3 font-bold">Hürth </h3>
            <div className="mb-4 lg:mb-8 text-p space-y-4">
              <p>
                Krankenhausstraße 107
                <br />
                50354 Hürth
              </p>
            </div>
            <div className="mb-4 lg:mb-8 text-p space-y-4">
              <div>
                <span>Telefon:</span>
                <Link
                  role="link"
                  className="hover:text-yellow transition-colors"
                  href="tel:022333740978"
                  aria-label="022333740978"
                  target="_self"
                >
                  022333740978{" "}
                </Link>
              </div>
              <div>
                <span>E-Mail:</span>
                <a
                  role="link"
                  className="hover:text-yellow transition-colors"
                  href="mailto:kontakt@psycho-therapie-huerth.de"
                  aria-label="kontakt@psycho-therapie-huerth.de"
                  target="_self"
                >
                  kontakt@psycho-therapie-huerth.de{" "}
                </a>
              </div>
            </div>
            <Link
              role="link"
              href="/huerth"
              aria-label="Mehr erfahren"
              target="_self"
              className="block w-fit mx-auto text-yellow lg:text-lg rounded sm:rounded-[10px] border border-yellow py-2 2xl:py-[15px] px-4 2xl:px-8 hover:bg-yellow hover:shadow hover:text-white transition-colors"
            >
              Mehr erfahren{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Psychotherapie_Praxis;
