"use client";
import React from "react";

export const Contact = () => {
  return (
    <div>
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
    </div>
  );
};
