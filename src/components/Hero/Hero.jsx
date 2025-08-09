import React from "react";
import { Link } from "react-router";


const Hero = () => {
  return (
    <section className="border-b  dark:border-0 border-gray-200 dark:bg-dark-primary-bg bg-[#FBFBFE] lg:grid lg:h-80vh  lg:place-content-center">
      <div className="px-4 py-16  sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-40">
        <div className=" max-w-prose  text-left space-y-10">
          <h1 className="dark:text-white text-4xl space-y-4 font-bold text-gray-900 sm:text-5xl">
            Connecting Communities Through{" "}
            <span className="text-[#443dff]">Lost & Found</span>
          </h1>

          <p className="mt-4 dark:text-white text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            Report your lost or found item in just a few clicks. Safe, simple,
            and secure.” “Lost an item? Post now and let the community help
            recover it
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <Link
              to={"/addItem"}
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="#"
            >
              Add Post
            </Link>

            <a
              href="#learn"
              className="dark:text-white inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="">
          <img width={400} src="/hero2.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
