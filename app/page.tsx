"use client";

import { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link, Element } from "react-scroll";
import { CheckIcon } from "@heroicons/react/20/solid";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFlip } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import FloatingActionButton from "./components/float";
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];
const includedFeaturess = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

const includedFeatures = [
  { id: 1, tech: "Laravel 8", logo: "/laravel.svg" },
  { id: 2, tech: "Vue Js", logo: "/vue.svg" },
];
const includedFeatures2 = [{ id: 1, tech: "Flutter", logo: "/flutter.svg" }];
const includedFeatures3 = [{ id: 1, tech: "Python", logo: "/python.svg" }];
const features = [
  {
    name: "React Js - Beginner",
    description:
      "I am a beginner who is currently learning React.js and eager to enhance my skills in front-end development.",
    imageUrl: "/react.svg",
  },
  {
    name: "Next Js - Beginner",
    description:
      "Learning Next.js to create a portfolio website and excited to expand my knowledge in front-end development.",
    imageUrl: "/nextjs.svg",
  },
  {
    name: "Laravel - Beginner",
    description:
      "I have learned laravel 8 to create a website HR Management project for my final project in Diploma.",
    imageUrl: "/laravel.svg",
  },
  {
    name: "Vue Js - Beginner",
    description: "I use Vue Js for front-end in my Final Project HR Management in Diploma.",
    imageUrl: "/vue.svg",
  },
  {
    name: "Flutter - Beginner",
    description: "Flutter I used to mobile version for My Final Project HR Management in Diploma.",
    imageUrl: "/flutter.svg",
  },
  {
    name: "Python - Beginner",
    description:
      "Python language I Used to learn machine learning currently, and I still beginner to learn Python.",
    imageUrl: "/python.svg",
  },
];
const posts = [
  {
    id: 1,
    title: "Diploma Informatics Engineering",
    href: "#",
    description:
      "During my diploma education, I have studied the fundamentals of programming and implemented them in several projects. I successfully graduated with honors (cum laude).",
    date: "August 2019 - July 2022",
    datetime: "2020-03-16",
    category: { title: "Graduated", href: "#" },
    author: {
      name: "University Of Sebelas Maret",
      role: "Surakarta, Jawa Tengah",
      href: "#",
      imageUrl: "/uns.png",
    },
  },
  {
    id: 2,
    title: "Bachelor Informatics Engineering",
    href: "#",
    description:
      "Currently pursuing a Bachelor's degree in Informatics Engineering at the University of Brawijaya. And for now actually learning more about machine learning. I expected graduated in 2024",
    date: "August 2022 - Now",
    datetime: "2020-03-16",
    category: { title: "Currently", href: "#" },
    author: {
      name: "University Of Brawijaya",
      role: "Malang, Jawa Timur",
      href: "#",
      imageUrl: "/ub.svg",
    },
  },
];

export default function Home() {
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
    <div className="bg-white px-4">
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
            {/* <Link to="home" spy={true} smooth={true} duration={500} onSetActive={handleSetActive}>
              <span
                className={`text-sm font-semibold leading-6 text-gray-900 cursor-pointer ${
                  activeLink === "home" ? "bg-blue-500" : ""
                }`}
              >
                Home
              </span>
            </Link>
            <Link to="education" smooth={true} duration={500}>
              <span className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">
                Education
              </span>
            </Link>
            <Link to="skills" smooth={true} duration={500}>
              <span className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">
                Skills
              </span>
            </Link>
            <Link to="project" smooth={true} duration={500}>
              <span className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">
                Project
              </span>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <span className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">
                Contact
              </span>
            </Link> */}
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

      <Element name="home">
        <div className="relative isolate bg-white py-24 sm:py-32" id="home">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className=" px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-xl">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2">
                    Muhammad Fihan Ashidiq
                  </h1>
                  <h1 className="text-2xl font-semibold tracking-tight text-gray-500 sm:text-2xl">
                    Junior Programmer
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    I am a enthusiastic individual who is thirsty for knowledge and constantly seeks
                    self-improvement. Honesty is a core value that I uphold in my life. I hold a
                    Diploma degree in Information Technology and am currently pursuing my bachleor
                    degree to enhance my skills and abilities. Currently, I am expanding my
                    knowledge in machine learning and data science as part of my ongoing S1
                    education. With the knowledge and experiences I have gained, I am particularly
                    interested in pursuing a career in junior web development or machine learning
                    engineering.
                  </p>
                  <div className="mt-10 flex items-start justify-start gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Discover Me
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src="/abc.png" alt="Product screenshot" className="flex sm:w-[38rem]" />
              </div>
            </div>
          </div>
        </div>
      </Element>

      <div className="border-t border-gray-200"></div>
      <div
        className="relative isolate mx-auto max-w-7xl px-6 lg:px-8 gap-x-8 gap-y-16  pt-10"
        id="education"
      >
        <div className="py-20 sm:py-24">
          <div className="mx-auto max-w-12xl lg:mx-0 text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Education</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              My Education
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Here is my latest educational history.
            </p>
          </div>
          <div className="mx-2 mt-8  grid max-w-2xl grid-cols-1 sm:mt-8 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-4 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
      {/* Skill Section */}
      <div
        className="relative isolate px-6 lg:px-8 gap-x-8 gap-y-16 border-t border-gray-200"
        id="skills"
      >
        <div
          className="absolute inset-x-0 -top-55 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-100"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[50deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:right-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Skills</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Here is My skills
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                These are some of the skills that I have learned during my life as a programmer and
                I continuously stay updated with the latest technologies and trends in the field of
                programming to enhance my skills and knowledge.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-20">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-20 w-20 items-center justify-center">
                        <img src={feature.imageUrl} alt="" className="h-15 w-15" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative isolate lg:px-6 gap-x-8 gap-y-16 border-t border-gray-200"
        id="project"
      >
        <div
          className="absolute inset-x-0 -top-55 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-100"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(20%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[50deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:right-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Projects</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Here Is My Projects
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Here are some projects that I have worked on, showcasing the skills I have learn
                before.
              </p>
            </div>
            <Swiper
              // install Swiper modules
              effect={"flip"}
              grabCursor={true}
              pagination={true}
              navigation={true}
              modules={[EffectFlip, Pagination, Navigation]}
            >
              <SwiperSlide>
                <div className=" mx-auto rounded-3xl ring-1 ring-gray-300 sm:mt-7 lg:mx-0 lg:flex lg:max-w-none">
                  <div className=" p-8 sm:p-10 lg:flex-auto">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                      HR Management Web Version
                    </h3>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                      Website-based HR management is an application designed to manage employees for
                      small and medium-sized enterprises (SMEs). We have role as the provider of
                      this service.
                    </p>
                    <div className="mt-10 flex items-center gap-x-4">
                      <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                        Technology
                      </h4>
                      <div className="h-px flex-auto bg-gray-100" />
                    </div>
                    <ul
                      role="list"
                      className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-6 sm:gap-6"
                    >
                      {includedFeatures.map((feature) => (
                        <li key={feature.id} className="flex">
                          <dt className="text-center leading-4 text-gray-900">
                            <div className=" left-0 top-0 flex h-20 w-20 items-center justify-center">
                              <img src={feature.logo} alt="" className="h-10 w-10" />
                            </div>
                            {feature.tech}
                          </dt>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                      <div className="mx-auto max-w-xs px-8">
                        <p className="text-base font-semibold text-gray-600">See my project</p>
                        <div className="mt-6 flex items-baseline justify-center">
                          <div className="h-24 items-center justify-center">
                            <img src="/github.svg" alt="" className="h-16 " />
                          </div>
                        </div>
                        <a
                          href="https://github.com/muhammadfihan/e_HR.git"
                          className="mt-6 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Go to github
                        </a>
                        <p className="mt-6 text-xs leading-5 text-gray-600">
                          Thank you for comming to my project
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-300 sm:mt-7 lg:mx-0 lg:flex lg:max-w-none">
                  <div className=" p-8 sm:p-10 lg:flex-auto">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                      HR Management Mobile Version
                    </h3>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                      Mobile HR management is an application designed for users whose companies have
                      registered on the application to carry out various employee-related
                      activities.
                    </p>
                    <div className="mt-10 flex items-center gap-x-4">
                      <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                        Technology
                      </h4>
                      <div className="h-px flex-auto bg-gray-100" />
                    </div>
                    <ul
                      role="list"
                      className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                    >
                      {includedFeatures2.map((feature) => (
                        <li key={feature.id} className="flex">
                          <dt className="text-center leading-4 text-gray-900">
                            <div className=" left-0 top-0 flex h-20 w-20 items-center justify-center">
                              <img src={feature.logo} alt="" className="h-10 w-10" />
                            </div>
                            {feature.tech}
                          </dt>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                      <div className="mx-auto max-w-xs px-8">
                        <p className="text-base font-semibold text-gray-600">See my project</p>
                        <div className="mt-6 flex items-baseline justify-center">
                          <div className="h-24 items-center justify-center">
                            <img src="/github.svg" alt="" className="h-16 " />
                          </div>
                        </div>
                        <a
                          href="https://github.com/muhammadfihan/hris-mobile.git"
                          className="mt-6 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Go to github
                        </a>
                        <p className="mt-6 text-xs leading-5 text-gray-600">
                          Thank you for comming to my project
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-300 sm:mt-7 lg:mx-0 lg:flex lg:max-w-none">
                  <div className=" p-8 sm:p-10 lg:flex-auto">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                      DDOS Detection Using Q-Learning
                    </h3>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                      Detecting DDoS attacks using reinforcement learning algorithms, we performed a
                      simple implementation to detect DDoS attacks using Q-Learning with the
                      CICDDOS2019 dataset.
                    </p>
                    <div className="mt-10 flex items-center gap-x-4">
                      <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                        Technology
                      </h4>
                      <div className="h-px flex-auto bg-gray-100" />
                    </div>
                    <ul
                      role="list"
                      className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                    >
                      {includedFeatures3.map((feature) => (
                        <li key={feature.id} className="flex">
                          <dt className="text-center leading-4 text-gray-900">
                            <div className=" left-0 top-0 flex h-20 w-20 items-center justify-center">
                              <img src={feature.logo} alt="" className="h-10 w-10" />
                            </div>
                            {feature.tech}
                          </dt>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                      <div className="mx-auto max-w-xs px-8">
                        <p className="text-base font-semibold text-gray-600">See my project</p>
                        <div className="mt-6 flex items-baseline justify-center">
                          <div className="h-24 w-24 items-center justify-center">
                            <img src="/colab.svg" alt="" className="h-20 w-20" />
                          </div>
                        </div>
                        <a
                          href="https://drive.google.com/file/d/1erWxGSAJTeKkov0CERqTWEQPg_guaCxB/view?usp=sharing"
                          className="mt-6 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Go to google colab
                        </a>
                        <p className="mt-6 text-xs leading-5 text-gray-600">
                          Thank you for comming to my project
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div
        className="relative isolate px-6 lg:px-8 gap-x-8 gap-y-16 border-t border-gray-200"
        id="contact"
      >
        <div
          className="absolute inset-x-0 -top-55 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-100"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[50deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:right-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Contact</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Contact Me If You Need
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold leading-6 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        autoComplete="given-name"
                        className="appearance-none block w-full bg-white text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold leading-6 text-gray-900">
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="last-name"
                        autoComplete="family-name"
                        className="appearance-none block w-full bg-white text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold leading-6 text-gray-900">
                      Company
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="company"
                        autoComplete="organization"
                        className="appearance-none block w-full bg-white text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        placeholder="Company"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        className="appearance-none block w-full bg-white text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold leading-6 text-gray-900">
                      Phone number
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="tel"
                        name="phone-number"
                        autoComplete="phone"
                        className="appearance-none block w-full bg-white text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        placeholder="Your Phone"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold leading-6 text-gray-900">
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        rows={4}
                        className="appearance-none block w-full bg-white text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Send Email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FloatingActionButton />
    </div>
  );
}
