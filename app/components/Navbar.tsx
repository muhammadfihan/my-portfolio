"use client";
import React from "react";
import { Dialog } from "@headlessui/react";
import { Link } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleSetActive = (to: any) => {
    setActiveLink(to);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <header
        className={`fixed inset-x-0 top-0 z-50 ${
          navbarFixed ? "backdrop-blur-md drop-shadow-md bg-white/30 transition duration-500" : ""
        }`}
      >
        <nav className="flex items-right justify-between p-6 md:px-12" aria-label="Global">
          <div className="flex lg:flex-1">
            <img src="/fihan.png" alt="" className="w-6 h-9 mr-3" />
            <a href="#" className="-m-1.5 p-1.5 text-gray-700 font-bold leading-8 text-xl">
              Personal Website
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex md:gap-x-2">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={handleSetActive}
              className={`text-sm font-semibold text-gray-900 px-4 py-2 rounded-lg mx-2 cursor-pointer ${
                activeLink === "home"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-400 text-white"
                  : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="education"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={handleSetActive}
              className={`text-sm font-semibold text-gray-900 px-4 py-2 rounded-lg mx-2 cursor-pointer ${
                activeLink === "education"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-400 text-white"
                  : ""
              }`}
            >
              Education
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={handleSetActive}
              className={`text-sm font-semibold text-gray-900 px-4 py-2 rounded-lg mx-2 cursor-pointer ${
                activeLink === "skills"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-400 text-white"
                  : ""
              }`}
            >
              Skills
            </Link>
            <Link
              to="project"
              spy={true}
              smooth={true}
              onSetActive={handleSetActive}
              className={`text-sm font-semibold text-gray-900 px-4 py-2 rounded-lg mx-2 cursor-pointer ${
                activeLink === "project"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-400 text-white"
                  : ""
              }`}
            >
              Project
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={handleSetActive}
              className={`text-sm font-semibold text-gray-900 px-4 py-2 rounded-lg mx-2 cursor-pointer ${
                activeLink === "contact"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-400 text-white"
                  : ""
              }`}
            >
              Contact
            </Link>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className=" inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 text-gray-700 font-bold leading-8 text-xl">
                Muhammad Fihan Ashidiq
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link to="home" smooth={true} duration={500}>
                    <span className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer">
                      Home
                    </span>
                  </Link>
                  <Link to="education" smooth={true} duration={500}>
                    <span className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer">
                      Education
                    </span>
                  </Link>
                  <Link to="skills" smooth={true} duration={500}>
                    <span className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer">
                      Skills
                    </span>
                  </Link>
                  <Link to="project" smooth={true} duration={500}>
                    <span className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer">
                      Project
                    </span>
                  </Link>
                  <Link to="contact" smooth={true} duration={500}>
                    <span className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer">
                      Contact Me
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
