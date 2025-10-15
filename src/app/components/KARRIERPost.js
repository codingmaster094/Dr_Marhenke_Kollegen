"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";

const KARRIERPost = ({ title, BTN, blogsData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogsData || []);
  const [displayedBlogsCount, setDisplayedBlogsCount] = useState(3);

  useEffect(() => {
    setFilteredBlogs(blogsData || []);
  }, [blogsData]);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredBlogs(blogsData); 
    } else {
      const filtered = blogsData.filter((val) =>
       {
        return val?.title?.toLowerCase()
          .includes(searchQuery.toLowerCase());
       }
      );
      setFilteredBlogs(filtered);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };


  return (
    <>
      <section>
        <div className="container mx-auto"></div>
      </section>

      <section className="py-[30px] md:py-[40px] lg:py-[50px]">
        <div className="w-full max-w-[1550px] px-[15px] mx-auto">
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-10 lg:gap-16">
            <div className="flex justify-between gap-4 flex-wrap items-center">
              <h2
                className="text-h3 lg:text-h2"
                dangerouslySetInnerHTML={{
                  __html: title,
                }}
              ></h2>
              <div className="flex border border-Border w-auto lg:w-[35%] justify-between items-center">
                <input
                  type="search"
                  placeholder="Wonach suchen Sie?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown} 
                  className="border-none outline-none p-2 w-full placeholder-text-black-600"
                />
                <button
                  onClick={handleSearch}
                  className="flex self-start flex-shrink-0 text-center bg-yellow text-white hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors font-normal px-5 py-3 sm:px-9 sm:py-4"
                  aria-label="search-button"
                  role="button"
                >
                  Jetzt suchen
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-10 lg:gap-12 4xl:gap-16 items-center">
              {/* <div className="text-center">
                <h2 className="mb-4">Aktuelle Stellenausschreibungen</h2>
                <span className="w-28 h-1 bg-yellow block mx-auto"></span>
              </div> */}

              <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-3 2xl:gap-4 4xl:gap-5">
                {filteredBlogs?.slice(0, displayedBlogsCount)?.map((val, i) => {
                  return (
                    <>
                    <Link
                     href={`/karriere/${val.slug}`}
                     className=""
                          >
                    <div
                      key={i}
                      className="hover:shadow-[0px_4px_34px_0_rgba(0,0,0,.08)] rounded-xl lg:rounded-2xl 3xl:rounded-3xl transition-shadow"
                    >
                      {/* <Link href={post.link} className="block aspect-[1.53/1]"> */}
                      <div className="h-[385px]">
                        <Image
                          src={val?.acf?.home_hero_image?.url}
                          alt={val?.acf?.home_hero_image?.alt || "Blog Image"}
                          width={400}
                          height={260}
                          className="rounded-xl lg:rounded-2xl 3xl:rounded-3xl w-full h-full object-cover"
                        />
                      </div>
                      {/* </Link> */}
                      <div className="p-4">
                        <p>
                          <span>{dayjs(val?.date).format("DD.MM.YYYY")}</span>
                        </p>
                        <div className="flex justify-between mt-6 mb-4 gap-4">
                          <h3
                            className="text-h3"
                            dangerouslySetInnerHTML={{ __html: val.title }}
                          ></h3>
                          {/* <Link
                            href={`/ratgeber/${val.slug}`}
                            className="shrink-0 size-[44px] rounded-[10px] bg-yellow grid place-items-center text-white hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors"
                          >
                            <svg
                              width="10"
                              height="17"
                              viewBox="0 0 10 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.6024 9.4443L1.92021 17L0 15.1114L6.72209 8.5L0 1.88859L1.92021 0L9.6024 7.5557C9.85698 7.80617 10 8.14584 10 8.5C10 8.85416 9.85698 9.19383 9.6024 9.4443Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Link> */}
                        </div>
                        {/* <div
                          className="text opacity-70"
                          dangerouslySetInnerHTML={{ __html: val.excerpt }}
                        ></div> */}
                      </div>
                    </div>
                    </Link>
                    </>
                    
                  );
                })}
              </div>
              {filteredBlogs?.length > displayedBlogsCount ? (
                <button
                  onClick={() => setDisplayedBlogsCount((prev) => prev + 3)}
                  className="inline-block w-fit text-white  bg-yellow rounded sm:rounded-[10px] p-3 sm:py-3 sm:px-8 hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors font-medium"
                >
                  Mehr erfahren
                </button>
              ):null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KARRIERPost;
