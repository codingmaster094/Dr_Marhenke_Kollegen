import React from 'react'

const No_slug_page = () => {
  return (
    <section className="py-40">
      <div className="container space-y-4">
        <h1>Huch! Diese Seite kann nicht gefunden werden.</h1>
        <p>
          Es sieht so aus, als ob an diesem Ort nichts gefunden wurde.
          Vielleicht versuchen Sie es mit einem der unten stehenden Links oder
          einer Suche?
        </p>
        <a
          href="https://marhenke.blog-s.de"
          target="_self"
          aria-label="Nach Hause gehen"
          className="text-white flex items-center gap-2 w-fit bg-yellow rounded sm:rounded-[10px] p-3 lg:py-4 lg:px-6 hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors"
        >
          <span>Nach Hause gehen</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 6l6 6l-6 6"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}

export default No_slug_page