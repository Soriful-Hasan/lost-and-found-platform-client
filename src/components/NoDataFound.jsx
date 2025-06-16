import React from "react";

const NoDataFound = () => {
  return (
    <div>
      <section className="flex items-center h-full sm:p-16 ">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
          <img src="/page-not-found.svg" alt="" />
          <p className="text-3xl font-bold text-[#4A8F7D]">No Post Found</p>
        </div>
      </section>
    </div>
  );
};

export default NoDataFound;
