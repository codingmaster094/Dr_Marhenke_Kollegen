'use client';
import Image from 'next/image';
import Link from 'next/link';
const ContactSection = () => {
  return (
    <section className="bg-[#FFFBF2] py-14 lg:py-20 2xl:py-100 text-center">
      <div className="container">
        <div className="flex flex-col gap-[34px] items-center mb-10 lg:mb-16">
          <div>
            <h2 className=" mb-4">
              Kontakt zur Praxis für Psychotherapie Dr. Marhenke
            </h2>
            <span className="w-28 h-1 bg-yellow block mx-auto"></span>
          </div>
          <div className="text">
            <p>
              Sie möchten einen Termin vereinbaren, eine Sitzung absagen oder
              haben Fragen zu einer Therapie? Wir sind für Sie da! So erreichen
              Sie uns:
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row">
          <div className="xl:w-4/12 3xl:w-[760px] 3xl:shrink-0">
            <Image
              src="/images/contact-img-1.png"
              alt="Contact Image"
              className="rounded-xl 3xl:rounded-3xl w-full object-cover"
              width={760}
              height={438}
              priority
            />
          </div>
          <div className="xl:w-8/12 grid md:grid-cols-3 gap-2 bg-[#EBD7A0] bg-opacity-45 p-6 sm:py-14 rounded-3xl xl:rounded-s-none my-14 break-words">
            <div className="p-6 bg-white rounded-3xl flex flex-col justify-between">
              <h3 className="mb-4 text-[21px] xl:text-[23px] 4xl:text-h3">
                Telefon
              </h3>
              <div>
                <h4 className="mb-2 font-medium">0221/42 31 39 56</h4>
                <Link
                  role="link"
                  href="tel:0221/42 31 39 56"
                  className="inline-block text-white bg-yellow rounded sm:rounded-[10px] py-2 px-6 hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors xl:text-lg font-medium"
                >
                  Jetzt anrufen
                </Link>
              </div>
            </div>
            <div className="p-6 bg-white rounded-3xl flex flex-col justify-between">
              <h3 className="mb-4 text-[21px] xl:text-[23px] 4xl:text-h3">
                E-Mail
              </h3>
              <div>
                <h4 className="mb-2 font-medium">
                  kontakt[@]psycho-therapie-koeln.de
                </h4>
                <Link
                  role="link"
                  href="mailto:kontakt[@]psycho-therapie-koeln.de"
                  className="inline-block text-white bg-yellow rounded sm:rounded-[10px] py-2 px-6 hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors xl:text-lg font-medium"
                >
                  E-Mail schicken
                </Link>
              </div>
            </div>
            <div className="p-6 bg-white rounded-3xl flex flex-col justify-between">
              <h3 className="mb-4 text-[21px] xl:text-[23px] 4xl:text-h3">
                Online-Formular
              </h3>
              <div>
                <Link
                  role="link"
                  href="/kontakt#contact-form"
                  className="inline-block text-white bg-yellow rounded sm:rounded-[10px] py-2 px-6 hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors xl:text-lg font-medium"
                >
                  Jetzt kontaktieren
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
