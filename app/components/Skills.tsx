"use client";
import React from "react";

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
export const Skills = () => {
  return (
    <div>
      <div className="relative isolate px-6 lg:px-8 gap-x-8 gap-y-16" id="skills">
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
    </div>
  );
};
