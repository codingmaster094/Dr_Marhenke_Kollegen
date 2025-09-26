"use client";
import { useRef, useEffect } from "react";

const FAQ_section = ({ title, faqs, container }) => {
  const contentRefs = useRef(new Map());

  // Open all FAQs by default
  useEffect(() => {
    if (!container) {
      contentRefs.current.forEach((content) => {
        if (content) {
          content.style.maxHeight = `${content.scrollHeight}px`;
        }
      });
    }
  }, [container]);

  return (
    <section className="pb-14 lg:pb-20 2xl:pb-100" id="faq">
      <div className={`${!container && "container"}`}>
        <div className={`${container ? "mb-16 text-left" : "mb-16 text-center"}`}>
          <h2 className="text-h2 mb-4">{title}</h2>
          <span
            className={`${
              container ? "w-28 h-1 bg-yellow block" : "w-28 h-1 bg-yellow block mx-auto"
            }`}
          ></span>
        </div>
            {/* *:3xl:p-16 */}
        <ul
          className={`${
            container && "*:shadow-md *:mb-4 last:*:mb-0 *:lg:p-4"
          } *:p-4 *:lg:p-8 *:transition-colors *:border-b *:border-[rgba(10,34,41,.11)] flex flex-col gap-6 lg:gap-4`}
        >
          {faqs.map((faq, index) => {
            const isOpen = true; // Always open

            return (
              <li
                key={index}
                className={`${
                  !container && isOpen ? "bg-[#F4E5C0] border-none rounded sm:rounded-2xl md:rounded-3xl" : ""
                }`}
              >
                <div
                  className={`w-full text-left font-semibold text-xl lg:text-2xl 3xl:text-[28px]`}
                >
                  {faq.faq_content_title}
                </div>

                <div
                  ref={(el) => el && contentRefs.current.set(index, el)}
                >
                  <div
                    className="blogpage-menu pt-4 text-p space-y-4 [&_ul>li]:list-disc [&_ul>li]:pb-4"
                    dangerouslySetInnerHTML={{
                      __html:
                        faq.faq_content_description 
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
