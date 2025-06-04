"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function OffCanvas() {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpenBehandlungen, setSubmenuOpenBehandlungen] = useState(false);
  const [submenuOpenUeberUns, setSubmenuOpenUeberUns] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => pathname === path;

  const isSubmenuActive = (paths) => paths.some((path) => pathname === path);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Main Menu"
        className="p-2 sm:p-3 2xl:py-4 2xl:px-8 cursor-pointer inline-block bg-yellow rounded sm:rounded-[10px] hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors lg:hidden"
      >
        {/* Icon */}
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
          className="icon icon-tabler icon-tabler-menu"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay */}
      <div
        className={`z-[99999] fixed inset-0 backdrop-blur-sm transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Sidebar */}
      <div
        className={`z-[999999] fixed top-0 left-0 h-full w-[305px] bg-white shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4 pb-0 text-yellow">
          <button onClick={closeMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-3 uppercase text-black text-opacity-65">
          <ul className="space-y-2">
            {/* START */}
            <li>
              <Link
                href="/"
                className={`block py-2 ${
                  isActive("/") ? "text-yellow hover:text-yellow" : ""
                }`}
                onClick={closeMenu}
              >
                START
              </Link>
            </li>

            {/* BEHANDLUNGEN */}
            <li className="relative">
              <div className="flex justify-between items-center">
                <Link
                  href="/behandlungen"
                  className={`block py-2 ${
                    isSubmenuActive([
                      "/behandlungen",
                      "/behandlungen/einzel-und-gruppentherapie",
                      "/behandlungen/paar-und-sexualtherapie",
                      "/behandlungen/kinder-und-jugendlichenpsychotherapie",
                      "/behandlungen/online-psychotherapie",
                      "/behandlungen/psy-rena",
                    ])
                      ? "text-yellow hover:text-yellow"
                      : ""
                  }`}
                  onClick={closeMenu}
                >
                  Behandlungen
                </Link>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSubmenuOpenBehandlungen((prev) => !prev);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${
                      submenuOpenBehandlungen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </div>
              <ul
                className={`transition-all duration-500 overflow-hidden bg-white shadow-md ${
                  submenuOpenBehandlungen
                    ? "max-h-[500px] opacity-100 visible"
                    : "max-h-0 opacity-0 invisible"
                }`}
              >
                {[
                  {
                    href: "/behandlungen/einzel-und-gruppentherapie",
                    label: "Einzel und Gruppentherapie",
                  },
                  {
                    href: "/behandlungen/paar-und-sexualtherapie",
                    label: "Paar und Sexualtherapie",
                  },
                  {
                    href: "/behandlungen/kinder-und-jugendlichenpsychotherapie",
                    label: "Kinder und Jugendlichenpsychotherapie",
                  },
                  {
                    href: "/behandlungen/online-psychotherapie",
                    label: "Online Psychotherapie",
                  },
                  {
                    href: "/behandlungen/psy-rena",
                    label: "Psy Rena",
                  },
                ].map((item) => (
                  <li key={item.href} className="px-3 py-1">
                    <Link
                      href={item.href}
                      className={`${
                        isActive(item.href)
                          ? "text-yellow hover:text-yellow"
                          : ""
                      }`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* ÜBER UNS */}
            <li className="relative">
              <div className="flex justify-between items-center">
                <Link
                  href="/ueber-uns"
                  className={`block py-2 ${
                    isSubmenuActive([
                      "/ueber-uns",
                      "/koeln-rodenkirchen",
                      "/koeln-suedstadt",
                    ])
                      ? "text-yellow hover:text-yellow"
                      : ""
                  }`}
                  onClick={closeMenu}
                >
                  Über uns
                </Link>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSubmenuOpenUeberUns((prev) => !prev);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${
                      submenuOpenUeberUns ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </div>
              <ul
                className={`transition-all duration-500 overflow-hidden bg-white shadow-md ${
                  submenuOpenUeberUns
                    ? "max-h-[500px] opacity-100 visible"
                    : "max-h-0 opacity-0 invisible"
                }`}
              >
                {[
                  {
                    href: "/koeln-rodenkirchen",
                    label: "Köln Rodenkirchen",
                  },
                  {
                    href: "/koeln-suedstadt",
                    label: "Köln Südstadt",
                  },
                ].map((item) => (
                  <li key={item.href} className="px-3 py-1">
                    <Link
                      href={item.href}
                      className={`${
                        isActive(item.href)
                          ? "text-yellow hover:text-yellow"
                          : ""
                      }`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link
                href="/kooperationen"
                className={`block py-2 ${
                  isActive("/kooperationen")
                    ? "text-yellow hover:text-yellow"
                    : ""
                }`}
                onClick={closeMenu}
              >
                Kooperationen
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
