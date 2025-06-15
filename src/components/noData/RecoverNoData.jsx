import React from "react";
import { Link } from "react-router";

const RecoverNoData = () => {
  return (
    <div>
      <section className="flex items-center  w-8/12 sm:p-16   ">
        <div className="container place-items-center   flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
          <p className="text-3xl">No Recover items found</p>
          <Link
            to={"/"}
            rel="noopener noreferrer"
            href="#"
            className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Back to homepage
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RecoverNoData;
