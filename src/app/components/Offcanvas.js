"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function OffCanvas({ menuData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  const toggleSubmenu = (id) => {
    setOpenSubmenus((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isActive = (path) => pathname === path;

  const isSubmenuActive = (children) =>
    children.some((child) => child.url === pathname || (child.children && isSubmenuActive(child.children)));

  const renderMenuItems = (items) =>
    items.map((item) => (
      <li key={item.id} className="relative">
        <div className="flex justify-between items-center">
          <Link
            href={item.url || "#"}
            className={`block px-3 py-1 ${
              isActive(item.url) || isSubmenuActive(item.children) ? "text-yellow hover:text-yellow" : ""
            }`}
            onClick={closeMenu}
          >
            {item.title.replace(/&amp;/g, "&")}
          </Link>

          {item.children.length > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleSubmenu(item.id);
              }}
              aria-label={`Toggle ${item.title} submenu`}
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
                className={`transition-transform duration-300 ${openSubmenus[item.id] ? "rotate-180" : "rotate-0"}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          )}
        </div>

        {item.children.length > 0 && (
          <ul
            className={`transition-all duration-500 overflow-hidden bg-white shadow-md ${
              openSubmenus[item.id] ? "max-h-[500px] opacity-100 visible" : "max-h-0 opacity-0 invisible"
            }`}
          >
            {renderMenuItems(item.children)}
          </ul>
        )}
      </li>
    ));

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Main Menu"
        className="p-2 sm:p-3 2xl:py-4 2xl:px-8 cursor-pointer inline-block bg-yellow rounded sm:rounded-[10px] hover:bg-transparent hover:text-yellow hover:shadow hover:shadow-yellow transition-colors xl:hidden"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay */}
      <div
        className={`z-[99999] fixed inset-0 backdrop-blur-sm transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} `}
        onClick={closeMenu}
      ></div>

      {/* Sidebar */}
      <div
        className={`z-[999999] fixed top-0 left-0 h-full w-[305px] bg-white shadow-lg transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4 pb-0 text-yellow">
          <button onClick={closeMenu} aria-label="Close menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-3 uppercase text-black text-opacity-65">
          <ul className="space-y-2">{renderMenuItems(menuData.items)}</ul>
        </nav>
      </div>
    </>
  );
}
