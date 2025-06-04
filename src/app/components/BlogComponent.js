import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const BlogComponent = () => {
    const blogPosts = [
        {
          id: 1,
          title: "Psychologische/r Psychotherapeut/in",
          image: "/images/job-ads-img-1.png",
          link: "/stellenausschreibung/psychologische-psychotherapeutin",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        }
      ];
  return (
    <section className="py-14 lg:py-20">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10 lg:gap-12 4xl:gap-16 items-center">
        <div className="text-center">
          <h2 className="mb-4">
          Aktuelle Stellenausschreibungen
          </h2>
          <span className="w-28 h-1 bg-yellow block mx-auto"></span>
        </div>

        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-3 2xl:gap-4 4xl:gap-5">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="hover:shadow-[0px_4px_34px_0_rgba(0,0,0,.08)] rounded-lg transition-shadow"
            >
              <Link href={post.link} className="block aspect-[1.53/1]">
                <Image
                  src={post.image}
                  alt="Blog Image"
                  width={400}
                  height={260}
                  className="rounded-xl lg:rounded-2xl 3xl:rounded-3xl w-full h-full object-cover"
                />
              </Link>
              <div className="p-4">
                <div className="flex justify-between mt-6 mb-4 gap-4">
                  <h3 className="text-h3">{post.title}</h3>
                  <Link
                    href={post.link}
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
                  </Link>
                </div>
                <div className="text opacity-70">
                  <p>{post.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="inline-block w-fit text-white  bg-yellow rounded sm:rounded-[10px] p-3 sm:py-3 sm:px-8 hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors font-medium"
        >
          Mehr erfahren
        </Link>
      </div>
    </div>
  </section>
  )
}

export default BlogComponent