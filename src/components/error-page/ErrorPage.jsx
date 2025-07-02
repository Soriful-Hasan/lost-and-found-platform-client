import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center">
      <title>Error</title>
      <section className="flex items-center h-full p-16 bg-white">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <img src="/page-not-found.jpg" alt="" />
            {/* <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
              <span className="sr-only">Error</span>404
            </h2> */}
            <div className="">
              <img src="/errorlogo.svg" alt="" />
            </div>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-600">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              to={"/"}
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-white font-semibold rounded hover:bg-blue-500 bg-[#443dff]"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
