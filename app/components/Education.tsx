"use client";
import React from "react";
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
export const Education = () => {
  return (
    <div>
      <div
        className="relative isolate mx-auto max-w-7xl px-6 lg:px-8 gap-x-8 gap-y-16"
        id="education"
      >
        <div className="py-20 sm:py-24">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Education</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              My Education
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Here is my latest educational history.
            </p>
          </div>
          <div className="mx-2 mt-8 gap-y-10  grid max-w-2xl grid-cols-1 sm:mt-8 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
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
    </div>
  );
};
