"use client";
import Image from "next/image";
import Link from "next/link";
const ContactSection = () => {
  return (
    <section className="py-14 lg:py-20 2xl:py-100 bg-opacity-25 bg-[#FFF2CE]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-16 text-center xl:flex-nowrap flex-wrap justify-center">
          <div className="lg:w-[calc(50%-32px)] 2xl:w-[calc(33.33%-42.67px)] p-4 sm:p-6 sm:rounded-3xl bg-white shadow-custom_shdow2 hover:shadow-2xl transition-all">
            <div className="scale-75 lg:scale-100 size-[100px] rounded-[10px] grid place-items-center bg-yellow mx-auto shadow-[0_4px_18px_0_rgba(0,0,0,.14)]">
              <Image
                role="img"
                alt="men-icon"
                loading="lazy"
                width={52}
                height={52}
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="images/Simplification-2.svg"
              />
            </div>
            <h3 className="mb-2 lg:mt-6 text-h3 font-bold">Rodenkirchen</h3>
            <div className="mb-4 lg:mb-8 text-p space-y-4">
              <p>
                Gustav-Radbruch-Straße 1
                <br />  
                50996 Köln
              </p>
            </div>
            <div className="text-p space-x-4 flex justify-center items-center">
              <div>
                <Link
                  role="link"
                  className="hover:text-yellow transition-colors"
                  aria-label="0221/42 31 39 56"
                  target="_self"
                  href="tel:022142313956"
                >
                  <span className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] bg-yellow rounded-[10px] flex justify-center items-center *:sm:w-[42px] *:w-[32px]">
                    <Image
                      role="img"
                      alt="call-icon"
                      loading="lazy"
                      width={42}
                      height={42}
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src="images/call-prax.svg"
                    />
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  role="link"
                  className="hover:text-yellow transition-colors"
                  aria-label="0221/42 31 39 56"
                  target="_self"
                  href="/koeln-rodenkirchen#kontaktformular"
                >
                  <span className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] bg-yellow rounded-[10px] flex justify-center items-center *:sm:w-[42px] *:w-[32px]">
                    <Image
                      role="img"
                      alt="form-icon"
                      loading="lazy"
                      width={42}
                      height={42}
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src="images/fax-prax.svg"
                    />
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  role="link"
                  className="hover:text-yellow transition-colors"
                  aria-label="kontakt@psycho-therapie-koeln.de"
                  target="_self"
                  href="mailto:kontakt@psycho-therapie-koeln.de"
                >
                  <span className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] bg-yellow rounded-[10px] flex justify-center items-center *:sm:w-[42px] *:w-[32px]">
                    <Image
                      role="img"
                      alt="call-icon"
                      loading="lazy"
                      width={42}
                      height={42}
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src="images/mail-prax.svg"
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-[calc(50%-32px)] 2xl:w-[calc(33.33%-42.67px)] p-4 sm:p-6 sm:rounded-3xl bg-white shadow-custom_shdow2 hover:shadow-2xl transition-all">
            <div className="scale-75 lg:scale-100 size-[100px] rounded-[10px] grid place-items-center bg-yellow mx-auto shadow-[0_4px_18px_0_rgba(0,0,0,.14)]">
              <Image
                role="img"
                alt="save-health"
                loading="lazy"
                width={52}
                height={52}
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="images/Simplification-2.svg"
              />
            </div>
            <h3 className="mb-2 lg:mt-6 text-h3 font-bold">Südstadt</h3>
            <div className="mb-4 lg:mb-8 text-p space-y-4">
              <p>
                Rolandstraße 55
                <br />
                50677 Köln
              </p>
            </div>
            {/* new */}
            <div className="text-p space-x-4 flex justify-center items-center">
              <div>
                <Link
                  role="link"
                  className="hover:text-yellow transition-colors"
                  aria-label="0221/17 00 40 36"
                  target="_self"
                  href="tel:022117004036"
                >
                  <span className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] bg-yellow rounded-[10px] flex justify-center items-center *:sm:w-[42px] *:w-[32px]">
                    <Image
                      role="img"
                      alt="call-icon"
                      loading="lazy"
                      width={42}
                      height={42}
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src="images/call-prax.svg"
                    />
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  role="link"
                  className="hover:text-yellow transition-colors"
                  aria-label="0221/42 31 39 56"
                  target="_self"
                  href="/koeln-suedstadt#kontaktformular"
                >
                  <span className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] bg-yellow rounded-[10px] flex justify-center items-center *:sm:w-[42px] *:w-[32px]">
                    <Image
                      role="img"
                      alt="form-icon"
                      loading="lazy"
                      width={42}
                      height={42}
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src="images/fax-prax.svg"
                    />
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  role="link"
                  className="hover:text-yellow transition-colors"
                  aria-label="kontakt@psycho-therapie-koeln.de"
                  target="_self"
                  href="mailto:kontakt@psycho-therapie-koeln.de"
                >
                  <span className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] bg-yellow rounded-[10px] flex justify-center items-center *:sm:w-[42px] *:w-[32px]">
                    <Image
                      role="img"
                      alt="call-icon"
                      loading="lazy"
                      width={42}
                      height={42}
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src="images/mail-prax.svg"
                    />
                  </span>
                </Link>
              </div>
            </div>
            {/*  */}
          </div>
          <div className="lg:w-[calc(50%-32px)] 2xl:w-[calc(33.33%-42.67px)] p-4 sm:p-6 sm:rounded-3xl bg-white shadow-custom_shdow2 hover:shadow-2xl transition-all">
            <div className="scale-75 lg:scale-100 size-[100px] rounded-[10px] grid place-items-center bg-yellow mx-auto shadow-[0_4px_18px_0_rgba(0,0,0,.14)]">
              <Image
                role="img"
                alt="body-icon"
                loading="lazy"
                width={52}
                height={52}
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="images/Simplification-2.svg"
              />
            </div>
            <h3 className="mb-2 lg:mt-6 text-h3 font-bold">Hürth</h3>
            <div className="mb-4 lg:mb-8 text-p space-y-4">
              <p>
                Krankenhausstraße 107
                <br />
                50354 Hürth
              </p>
            </div>
            {/*  */}
            <div className="text-p space-x-4 flex justify-center items-center">
              <div>
                <Link
                  role="link"
                  className="hover:text-yellow transition-colors"
                  aria-label="0221/42 31 39 56"
                  target="_self"
                  href="tel:022142313956"
                >
                  <span className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] bg-yellow rounded-[10px] flex justify-center items-center *:sm:w-[42px] *:w-[32px]">
                    <Image
                      role="img"
                      alt="call-icon"
                      loading="lazy"
                      width={42}
                      height={42}
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src="images/call-prax.svg"
                    />
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  role="link"
                  className="hover:text-yellow transition-colors"
                  aria-label="022333740978"
                  target="_self"
                  href="/huerth#kontaktformular"
                >
                  <span className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] bg-yellow rounded-[10px] flex justify-center items-center *:sm:w-[42px] *:w-[32px]">
                    <Image
                      role="img"
                      alt="form-icon"
                      loading="lazy"
                      width={42}
                      height={42}
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src="images/fax-prax.svg"
                    />
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  role="link"
                  className="hover:text-yellow transition-colors"
                  href="mailto:kontakt@psycho-therapie-huerth.de"
                  aria-label="kontakt@psycho-therapie-huerth.de"
                  target="_self"
                >
                  <span className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] bg-yellow rounded-[10px] flex justify-center items-center *:sm:w-[42px] *:w-[32px]">
                    <Image
                      role="img"
                      alt="call-icon"
                      loading="lazy"
                      width={42}
                      height={42}
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src="images/mail-prax.svg"
                    />
                  </span>
                </Link>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
