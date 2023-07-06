"use-client";
import React from "react";
export const Homepage = () => {
  return (
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
                self-improvement. Honesty is a core value that I uphold in my life. I hold a Diploma
                degree in Information Technology and am currently pursuing my bachleor degree to
                enhance my skills and abilities. Currently, I am expanding my knowledge in machine
                learning and data science as part of my ongoing S1 education. With the knowledge and
                experiences I have gained, I am particularly interested in pursuing a career in
                junior web development or machine learning engineering.
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
  );
};
