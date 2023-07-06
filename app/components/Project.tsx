import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFlip } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

const includedFeatures = [
  { id: 1, tech: "Laravel 8", logo: "/laravel.svg" },
  { id: 2, tech: "Vue Js", logo: "/vue.svg" },
];
const includedFeatures2 = [{ id: 1, tech: "Flutter", logo: "/flutter.svg" }];
const includedFeatures3 = [{ id: 1, tech: "Python", logo: "/python.svg" }];

export const Project = () => {
  return (
    <div>
      <div className="relative isolate lg:px-6 gap-x-8 gap-y-1" id="project">
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
    </div>
  );
};
