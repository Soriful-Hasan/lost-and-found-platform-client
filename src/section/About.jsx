import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import AnimationSection from "../components/animation/AnimationSection";
import ButtonAnimation from "../components/animation/ButtonAnimation";

const About = () => {
  return (
    <AnimationSection>
      <div className="">
        <div className="flex flex-col place-items-center  gap-2">
          <h1 className=" text-2xl font-bold mb-2 text-[#4A8F7D]">
            Our platform provide
          </h1>
          <p className="text-gray-600 text-sm text-center">
            Our platform provides a place where lost things find their way back
            —
            <br />
            connecting people with honesty and hope.
          </p>
        </div>

        <div className="mb-4 mt-10 text-gray-600 flex flex-col lg:flex-row items-center p-4">
          <div className="flex-1  ">
            <p className="mt-8 ">
              Lostings Online Lost and Found is a unique platform that
              incorporates a dynamic lost and found matching system for
              individual users, accompanied by a Lost and Found Inventory
              Management Software for businesses. Our approach is unique
              compared to traditional lost and found methods, however, the
              intention is still to reunite items lost or found with their
              respective owners.
            </p>
            <p className="mt-8 ">
              The multi-level lost and found platform for individual users
              allows them to easily view, report, describe, and categorize lost
              or found items. Additionally users can add location information,
              upload photos, provide more in-depth details, and print fliers for
              local awareness. The matching system gives users the ability to
              receive up-to-date email notifications and system alerts of
              matching or similar lost or found items. The system works with
              individuals reporting lost or found items, along with businesses
              registered to use the lost and found inventory management
              software.
            </p>
            <p className="mt-8">
              "Our goal is to provide individual users and businesses with the
              tools necessary for an effective and efficient online lost and
              found."
            </p>

            <ButtonAnimation>
              <button className="btn mt-10 bg-[#443dff] hover:bg-blue-500 text-white">
                See more...
              </button>
            </ButtonAnimation>
          </div>
          <div className="flex-1">
            <img src="/our-service1.svg" alt="" />
          </div>
        </div>
      </div>
    </AnimationSection>
  );
};

export default About;
