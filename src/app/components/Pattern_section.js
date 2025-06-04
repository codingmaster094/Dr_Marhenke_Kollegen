import React from 'react'
import Link from 'next/link';
const Pattern_section = ({btn , BTN}) => {
  return (
    <section className="py-14 lg:py-20 bg-yellow text-white text-center bg-[url(/images/bg-pattern.png)] bg-cover">
      <div className="container">
        <div className="flex flex-col gap-[34px] items-center">
          <div>
            <h2 className="text-h2 mb-4">
              Sie möchten einen Termin vereinbaren oder haben Fragen?
            </h2>
            <span className="w-28 h-1 bg-white block mx-auto"></span>
          </div>
          <div className="text-p space-y-4">
            <p>
              Wir sind jederzeit für persönlich für Sie da und helfen Ihnen
              gerne weiter. Wir nehmen uns die Zeit, um Ihre Fragen zu
              beantworten, Sie zu möglichen Behandlungen zu beraten oder einen
              Termin zu vereinbaren.
            </p>
          </div>
          {btn && (
            <Link
              role="link"
              className="inline-block w-fit text-yellow bg-white rounded sm:rounded-[10px] p-3 sm:py-3 sm:px-8 hover:bg-transparent hover:text-white hover:shadow hover:shadow-white transition-colors font-medium"
              href="/kontakt"
            >
              {BTN ? BTN : "Jetzt kontaktieren"}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
export default Pattern_section