"use client";
import { useState, useEffect, useRef } from "react";
const FAQ_section = ({title ,faqs}) => {
  const [selected, setSelected] = useState(0);
  const contentRefs = useRef(new Map());
  useEffect(() => {
    if (selected !== null && contentRefs.current.has(selected)) {
      // Force reflow to apply transition smoothly on first click
      const content = contentRefs.current.get(selected);
      if (content) {
        content.style.maxHeight = "0px";
        setTimeout(() => {
          content.style.maxHeight = `${content.scrollHeight}px`;
        }, 10);
      }
    }
  }, [selected]);
  const handleClick = (index) => {
    setSelected(selected !== index ? index : null);
  };
  return (
    <section className="py-14 lg:py-20 2xl:py-100">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-h2 mb-4">{title}</h2>
          <span className="w-28 h-1 bg-yellow block mx-auto"></span>
        </div>
        <ul className="*:p-4 *:lg:p-8 *:3xl:p-16 *:transition-colors *:border-b *:border-[rgba(10,34,41,.11)]">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className={`${
                selected === index
                  ? "bg-[#F4E5C0] border-none rounded sm:rounded-2xl md:rounded-3xl"
                  : "bg-transparent"
              }`}
            >
              <button
                role="button"
                type="button"
                className="w-full text-left font-semibold text-xl lg:text-2xl 3xl:text-[28px]"
                onClick={() => handleClick(index)}
              >
                <div className="flex items-center justify-between">
                  <span>{faq.question}</span>
                  <div
                    className={`scale-50 shrink-0 lg:scale-75 3xl:scale-100 size-12 rounded-full grid place-items-center transition-colors ${
                      selected === index ? "bg-white" : "bg-yellow"
                    }`}
                  >
                    <svg
                      width="30"
                      height="22"
                      viewBox="0 0 30 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.19336 10.9995H28.2901"
                        strokeWidth="2"
                        className={
                          selected === index ? "stroke-yellow" : "stroke-white"
                        }
                        strokeLinecap="round"
                      />
                      <path
                        d="M14.7418 0.999512L14.7418 20.9995"
                        strokeWidth="2"
                        stroke="white"
                        className={selected === index ? "invisible" : "visible"}
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              <div
                ref={(el) => el && contentRefs.current.set(index, el)}
                className="relative overflow-hidden transition-all duration-700"
                style={{
                  maxHeight:
                    selected === index
                      ? `${contentRefs.current.get(index)?.scrollHeight}px`
                      : "0px",
                }}
              >
                <div className="pt-4 text-p space-y-4">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ_section;