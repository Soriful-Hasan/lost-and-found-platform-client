import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Process = () => {
  return (
    <div>
      <section className="mt-20">
        <div className="flex flex-col place-items-center  gap-2">
          <h1 className=" text-2xl font-bold mb-2 text-[#4A8F7D]">
            Step by step process
          </h1>
          <p className="text-gray-600 text-sm text-center">
            Our platform provides a place where lost things find their way back
            —
            <br />
            connecting people with honesty and hope.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row mb-10 mt-10">
          <div className="flex-1">
            <img src="/process.svg" alt="" />
          </div>
          <div className="space-y-10 flex-1 justify-center items-center  mt-10  text-gray-600 mb-10">
            <p className="flex items-center gap-2">
              <FaCheckCircle color="green" />
              Enter lost or found item details (e.g., item lost or found,
              category, photos, date, time, etc).
            </p>
            <p className="flex items-center gap-2">
              <FaCheckCircle color="green" />
              Review details entered and submit the lost or found item report.
            </p>
            <p className="flex items-center gap-2">
              <FaCheckCircle color="green" />
              Receive an email with your user dashboard login and account
              information.
            </p>
            <p className="flex items-center gap-2">
              <FaCheckCircle color="green" />
              Within the dashboard you can print fliers of the submitted lost or
              found item.
            </p>
            <p className="flex items-center gap-2">
              <FaCheckCircle color="green" />
              Receive notifications when newly submitted items match the details
              on your entry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
