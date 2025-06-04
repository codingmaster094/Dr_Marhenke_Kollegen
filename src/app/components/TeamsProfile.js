import Image from "next/image";
import Link from "next/link";
const TeamsProfile = ({title}) => {
  const blogPosts = [
    {
      id: 1,
      title: "Dr. Tristan Marhenke",
      image: "/images/team-member-1.png",
      link: "tristan-marhenke",
      description: "Psychologischer Psychotherapeut",
    },
    {
      id: 2,
      title: "M.Sc. Aida Marhenke",
      image: "/images/team-member-2.png",
      link: "aida-marhenke",
      description: "Psychologische Psychotherapeutin",
    },
    {
      id: 3,
      title: "M.Sc. Roja Jansen",
      image: "/images/team-member-3.png",
      link: "roja-jansen",
      description: "Psychologische Psychotherapeutin",
    },
  ];


  return (
    <section
      className={title && "py-14 lg:py-20 2xl:py-[100px] bg-opacity-25"}
    >
      <div className={title && "container space-y-16"}>
        {title && (
          <div className="flex flex-col gap-[34px] items-center">
            <h2 className="sm:text-h3 lg:text-h2">{title}</h2>
            <span className="w-28 h-1 bg-yellow block mx-auto"></span>
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 text-center gap-y-10 gap-x-4 lg:gap-12">
          {blogPosts.map((item) => (
            <div key={item} className="w-full">
              <div className="relative group">
                <div className="relative aspect-square">
                  <Image
                    src={item.image}
                    alt="Team Member"
                    fill
                    className="rounded-xl lg:rounded-2xl 3xl:rounded-3xl w-full object-cover"
                  />
                </div>
                <Link
                  role="button"
                  href={`team/${item.link}`}
                  className="absolute bg-yellow bg-opacity-65 inset-6 grid place-items-center rounded-xl lg:rounded-2xl 3xl:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                  </svg>
                </Link>
              </div>
              <h3 className="text-h3 mt-3 mb-2">{item.title}</h3>
              <div className="text">{item.description}</div>
            </div>
          ))}
        </div>
        {/* <div className="flex justify-center mt-8">
          <Link
            role="link"
            href="/"
            className="inline-block text-white bg-yellow rounded sm:rounded-[10px] p-3 sm:py-3 sm:px-8 hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors font-medium"
          >
            Mehr erfahren
          </Link>
        </div> */}
      </div>
    </section>
  );
};
export default TeamsProfile;
