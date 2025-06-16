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
              FindIt is an innovative online lost and found platform that
              connects individuals and communities by helping them easily
              report, search, and recover lost or found items. Our system is
              designed to make item recovery simpler and more effective than
              traditional lost and found methods. The platform allows individual
              users to post detailed reports of lost or found items, including
              item name, category, description, location, and images. Users can
              also print flyers for offline awareness and receive instant email
              notifications when matching items are found.
            </p>
            <p className="mt-8 ">
              In addition to personal use, FindIt is scalable for businesses or
              organizations that require a digital inventory system for managing
              lost and found items on their premises. Whether you're an
              individual or an institution, FindIt offers a reliable and
              organized system to ensure every item has a chance to be returned
              to its rightful owner.
            </p>
            <p className="mt-8">
              Our mission is simple — to provide individuals and organizations
              with powerful tools to reconnect lost items with their owners,
              quickly and efficiently.
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
