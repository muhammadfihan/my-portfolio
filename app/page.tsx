"use client";

import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Link, Element } from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFlip } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import FloatingActionButton from "./components/utils/float";
import Navbar from "./components/Navbar";
import { Homepage } from "./components/Home";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";

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
  return (
    <div className="bg-white px-4">
      <Navbar />
      <Element name="home">
        <Homepage />
      </Element>
      <div className="border-t border-gray-200"></div>
      <Element name="education" className="mb-28">
        <Education />
      </Element>
      <div className="border-t border-gray-200"></div>
      <Element name="skills">
        <Skills />
      </Element>
      <div className="border-t border-gray-200"></div>
      <Element name="project">
        <Project />
      </Element>
      <div className="border-t border-gray-200"></div>
      <Element name="contact">
        <Contact />
      </Element>
      <FloatingActionButton />
    </div>
  );
}
