"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Offcanvas from "../components/Offcanvas";
import { usePathname } from "next/navigation";
import Lenis from "@studio-freight/lenis";
const Header = ({ Headerdata, menuData, OptionData }) => {
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();
  const lenisRef = useRef(null);
  useEffect(() => {
    const scroller = new Lenis();
    let rafState;

    function raf(time) {
      scroller.raf(time);
      requestAnimationFrame(raf);
    }

    rafState = requestAnimationFrame(raf);
    lenisRef.current = scroller;

    return () => {
      cancelAnimationFrame(rafState);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
      id="header"
      className={`py-2 lg:py-4 xl:py-6 left-0 right-0 bg-white z-[99999] w-full transition-all duration-300 ${isSticky ? "fixed top-0 left-0 shadow" : ""
        }`}
    >
      <div className="container mx-auto px-4 max-w-[1712px]">
        <div className="flex justify-between items-center gap-3">
          {/* Logo */}
          <div className="logo">
            <Link href="/">
              <Image
                src={Headerdata.site_logo}
                alt="dr.markhenke – Home"
                width={286}
                height={66}
              />
            </Link>
          </div>


          {/* Navigation */}
          <div className="flex gap-12 items-center">
            <nav className="hidden xl:block">
              <ul className="flex gap-6 3xl:gap-[34px] text-black text-opacity-65">
                {menuData?.items?.map((item) => {
                  const itemPath =
                    item.url === "home" ? "/" : item.url.replace(/\/+$/, "");
                  const currentPath = pathname.replace(/\/+$/, "");

                  const isChildActive = item.children?.some(
                    (child) => child.url.replace(/\/+$/, "") === currentPath
                  );
                  const isActive = itemPath === currentPath || isChildActive;

                  return (
                    <li
                      key={item.id}
                      className={`${item.children.length > 0
                          ? "relative group menu-item-has-children"
                          : ""
                        }`}
                    >
                      <Link
                        href={item.url}
                        className={`${isActive ? "text-yellow" : ""}`}
                      >
                        {item.title.replace(/&amp;/g, "&")}
                      </Link>

                      {item.children.length > 0 && (
                        <ul className="z-50 sub-menu absolute left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white shadow-md mt-2 py-2 px-4">
                          {item.children.map((child) => {
                            const childPath = child.url.replace(/\/+$/, "");
                            const isChildActive = currentPath === childPath;

                            return (
                              <li key={child.id}>
                                <Link
                                  href={child.url}
                                >
                                  {child.title.replace(/&amp;/g, "&")}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex gap-2 text-white items-center">
              {/* Contact Button */}
              {/* <Link
                href={OptionData.header_button.url}
                aria-label="Contact"
                className="p-2 sm:p-3 2xl:py-4 2xl:px-8 inline-block bg-yellow rounded sm:rounded-[10px] hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors xl:text-lg text-base lg:text-lg"
              >
                <span className="hidden 2xl:block">
                  {OptionData.header_button.title}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="2xl:hidden"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
              </Link> */}
              {/* Mobile Menu Drawer */}
              <Offcanvas />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
