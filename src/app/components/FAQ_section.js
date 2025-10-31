const FAQ_section = ({ title, faqs, container, classes }) => {

  return (
    <section id="faq" className={classes}>
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
                  {faq.faq_content_title ||
                    faq.single_behandlungen_faqs_questions ||
                    faq.all_faqs_question}
                </div>

                <div
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
