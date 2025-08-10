import { Eye, Users } from "lucide-react";
import React from "react";
const About = () => {
  return (
    <section id="learn" className=" pt-10 w-10/12 mx-auto">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
          <Users className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-2xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Our platform provide
        </h1>
      </div>

      <div className="mb-4 md:mt-10 text-gray-800 font-semibold flex flex-col xl:flex-row items-center p-4">
        <div className="flex-1  ">
          <p className="mt-8 dark:text-white">
            FindIt is an innovative online lost and found platform that connects
            individuals and communities by helping them easily report, search,
            and recover lost or found items. Our system is designed to make item
            recovery simpler and more effective than traditional lost and found
            methods. The platform allows individual users to post detailed
            reports of lost or found items, including item name, category,
            description, location, and images. Users can also print flyers for
            offline awareness and receive instant email notifications when
            matching items are found.
          </p>
          <p className="mt-8  dark:text-white">
            In addition to personal use, FindIt is scalable for businesses or
            organizations that require a digital inventory system for managing
            lost and found items on their premises. Whether you're an individual
            or an institution, FindIt offers a reliable and organized system to
            ensure every item has a chance to be returned to its rightful owner.
          </p>
          <p className="mt-8 dark:text-white">
            Our mission is simple — to provide individuals and organizations
            with powerful tools to reconnect lost items with their owners,
            quickly and efficiently.
          </p>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <img src="/our-service1.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
