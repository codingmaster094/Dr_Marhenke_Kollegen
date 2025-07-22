"use client";
import { useState, useEffect, useRef } from "react";

const FAQ_section = ({ title, faqs, container }) => {
  const [selected, setSelected] = useState(0);
  const contentRefs = useRef(new Map());

  useEffect(() => {
    if (!container && selected !== null && contentRefs.current.has(selected)) {
      const content = contentRefs.current.get(selected);
      if (content) {
        content.style.maxHeight = "0px";
        setTimeout(() => {
          content.style.maxHeight = `${content.scrollHeight}px`;
        }, 10);
      }
    }
  }, [selected, container]);

  const handleClick = (index) => {
    if (container) return;
    setSelected((prev) => (prev === index ? null : index));
  };

  return (
    <section className="pb-14 lg:pb-20 2xl:pb-100" id="faq">
      <div className={`${!container && "container"}`}>
        <div
          className={`${container ? "mb-16 text-left" : "mb-16 text-center"}`}
        >
          <h2 className="text-h2 mb-4">{title}</h2>
          <span
            className={`${
              container
                ? "w-28 h-1 bg-yellow block"
                : "w-28 h-1 bg-yellow block mx-auto"
            }`}
          ></span>
        </div>

        <ul
          className={` ${
            container && "*:shadow-md *:mb-4 last:*:mb-0 *:lg:p-4"
          } *:p-4 *:lg:p-8 *:3xl:p-16 *:transition-colors *:border-b *:border-[rgba(10,34,41,.11)]`}
        >
          {faqs.map((faq, index) => {
            const isOpen = container || selected === index;

            return (
              <li
                key={index}
                className={`
                ${isOpen ? "active" : ""}
                ${
                  !container && isOpen
                    ? "bg-[#F4E5C0] border-none rounded sm:rounded-2xl md:rounded-3xl"
                    : ""
                }
              `}
              >
                {container ? (
                  <div
                    className={`${
                      !container &&
                      "bg-[#F4E5C0] border-none rounded sm:rounded-2xl md:rounded-3xl"
                    } w-full text-left font-semibold text-xl lg:text-2xl 3xl:text-[28px]`}
                  >
                    {faq.faq_content_title ||
                      faq.single_behandlungen_faqs_questions ||
                      faq.all_faqs_question}
                  </div>
                ) : (
                  <button
                    type="button"
                    className="w-full text-left font-semibold text-xl lg:text-2xl 3xl:text-[28px]"
                    onClick={() => handleClick(index)}
                  >
                    <div className="flex items-center justify-between">
                      <span>
                        {faq.faq_content_title ||
                          faq.single_behandlungen_faqs_questions ||
                          faq.all_faqs_question}
                      </span>
                      <div
                        className={`scale-50 shrink-0 lg:scale-75 3xl:scale-100 size-12 rounded-full grid place-items-center transition-colors ${
                          isOpen ? "bg-white" : "bg-yellow"
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
                              isOpen ? "stroke-yellow" : "stroke-white"
                            }
                            strokeLinecap="round"
                          />
                          <path
                            d="M14.7418 0.999512L14.7418 20.9995"
                            strokeWidth="2"
                            className={isOpen ? "invisible" : "visible"}
                            stroke="white"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                )}

                <div
                  ref={(el) => el && contentRefs.current.set(index, el)}
                  className={`relative overflow-hidden transition-all duration-700`}
                  style={{
                    maxHeight: isOpen
                      ? `${
                          contentRefs.current.get(index)?.scrollHeight || "1000"
                        }px`
                      : "0px",
                  }}
                >
                  <div
                    className="blogpage-menu pt-4 text-p space-y-4 [&_ul>li]:list-disc [&_ul>li]:pb-4"
                    dangerouslySetInnerHTML={{
                      __html:
                        faq.faq_content_description ||
                        faq.single_behandlungen_faqs_answers ||
                        faq.all_faqs_answers,
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FAQ_section;
