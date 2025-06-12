import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Our platform provide</h1>
      <div className="border-b mt-2 border-gray-200"></div>
      <div className="mb-4 text-gray-600">
        <p className="mt-8 ">
          Lostings Online Lost and Found is a unique platform that incorporates
          a dynamic lost and found matching system for individual users,
          accompanied by a Lost and Found Inventory Management Software for
          businesses. Our approach is unique compared to traditional lost and
          found methods, however, the intention is still to reunite items lost
          or found with their respective owners.
        </p>
        <p className="mt-8">
          The multi-level lost and found platform for individual users allows
          them to easily view, report, describe, and categorize lost or found
          items. Additionally users can add location information, upload photos,
          provide more in-depth details, and print fliers for local awareness.
          The matching system gives users the ability to receive up-to-date
          email notifications and system alerts of matching or similar lost or
          found items. The system works with individuals reporting lost or found
          items, along with businesses registered to use the lost and found
          inventory management software.
        </p>
        <p className="mt-8">
          "Our goal is to provide individual users and businesses with the tools
          necessary for an effective and efficient online lost and found."
        </p>
      </div>
      <div className="">
        <h1 className="text-2xl font-bold mt-30">Step-By-Step Process</h1>
        <div className="border-b mt-2 border-gray-200"></div>
        <div className="mt-10 space-y-4 text-gray-600 mb-10">
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
    </div>
  );
};

export default About;
