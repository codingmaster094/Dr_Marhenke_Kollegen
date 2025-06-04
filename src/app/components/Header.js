"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Offcanvas from "../components/Offcanvas";
import { usePathname } from "next/navigation";
const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname(); // Get current route
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
      className={`py-2 lg:py-4 xl:py-6 left-0 right-0 bg-white z-[99999] w-full transition-all duration-300 ${
        isSticky ? "fixed top-0 left-0 shadow" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center gap-3">
          {/* Logo */}
          <div className="logo">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={286}
                height={66}
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex gap-12 items-center">
            <nav className="hidden lg:block">
              <ul className="flex gap-[34px] uppercase text-black text-opacity-65">
                <li>
                  <Link
                    href="/"
                    className={
                      pathname === "/" ? "text-yellow hover:shadow" : ""
                    }
                  >
                    START
                  </Link>
                </li>
                <li className="relative group menu-item-has-children">
                  <Link
                    href="/behandlungen"
                    className={
                      [
                        "/behandlungen",
                        "/behandlungen/einzel-und-gruppentherapie",
                        "/behandlungen/paar-und-sexualtherapie",
                        "/behandlungen/kinder-und-jugendlichenpsychotherapie",
                        "/behandlungen/online-psychotherapie",
                        "/behandlungen/psy-rena",
                      ].includes(pathname)
                        ? "text-yellow hover:shadow"
                        : ""
                    }
                  >
                    Behandlungen
                  </Link>
                  <ul className="z-50 sub-menu absolute left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white shadow-md mt-2 py-2 px-4 ">
                    <li>
                      <Link
                        href="/behandlungen/einzel-und-gruppentherapie"
                        className={
                          pathname ===
                          "/behandlungen/einzel-und-gruppentherapie"
                            ? "text-yellow hover:shadow"
                            : ""
                        }
                      >
                        Einzel und Gruppentherapie
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/behandlungen/paar-und-sexualtherapie"
                        className={
                          pathname === "/behandlungen/paar-und-sexualtherapie"
                            ? "text-yellow hover:shadow"
                            : ""
                        }
                      >
                        Paar und Sexualtherapie
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/behandlungen/kinder-und-jugendlichenpsychotherapie"
                        className={
                          pathname ===
                          "/behandlungen/kinder-und-jugendlichenpsychotherapie"
                            ? "text-yellow hover:shadow"
                            : ""
                        }
                      >
                        Kinder und Jugendlichenpsychotherapie
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/behandlungen/online-psychotherapie"
                        className={
                          pathname === "/behandlungen/online-psychotherapie"
                            ? "text-yellow hover:shadow"
                            : ""
                        }
                      >
                        Online Psychotherapie
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/behandlungen/psy-rena"
                        className={
                          pathname === "/behandlungen/psy-rena"
                            ? "text-yellow hover:shadow"
                            : ""
                        }
                      >
                        Psy Rena
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="relative group menu-item-has-children">
                  <Link
                    href="/ueber-uns"
                    className={
                      pathname === "/ueber-uns"
                        ? "text-yellow hover:shadow"
                        : ""
                    }
                  >
                    Über uns
                  </Link>
                  <ul className="z-50 sub-menu absolute left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white shadow-md mt-2 py-2 px-4 ">
                    <li>
                      <Link
                        href="/koeln-rodenkirchen"
                        className={
                          pathname === "/koeln-rodenkirchen"
                            ? "text-yellow hover:shadow"
                            : ""
                        }
                      >
                        Koeln-Rodenkirchen
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/koeln-suedstadt"
                        className={
                          pathname === "/koeln-suedstadt"
                            ? "text-yellow hover:shadow"
                            : ""
                        }
                      >
                        Koeln-Suedstadt
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/huerth"
                        className={
                          pathname === "/huerth"
                            ? "text-yellow hover:shadow"
                            : ""
                        }
                      >
                        Koeln-Hürth
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    href="/kooperationen"
                    className={
                      pathname === "/kooperationen"
                        ? "text-yellow hover:shadow"
                        : ""
                    }
                  >
                    Kooperationen
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex gap-2 text-white items-center">
              {/* Contact Button */}
              <Link
                href="/kontakt"
                aria-label="Contact"
                className="p-2 sm:p-3 2xl:py-4 2xl:px-8 inline-block bg-yellow rounded sm:rounded-[10px] hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors xl:text-lg text-base lg:text-lg"
              >
                <span className="hidden xl:block">Kontakt aufnehmen</span>
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
                  className="xl:hidden"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
              </Link>
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
