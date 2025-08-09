import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import Swal from "sweetalert2";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        `${import.meta.env.VITE_serviceKey}`,
        `${import.meta.env.VITE_templetkey}`,
        data,
        {
          publicKey: `${import.meta.env.VITE_publicKey}`,
        }
      )
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Send Email Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      })
      .catch((error) => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Something was wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <section>
      <div className="">
        <div className="text-center pt-10 mb-10">
          <h2 className="text-2xl font-bold mb-2 text-[#4A8F7D]">
            Send Me A Message
          </h2>
          <p className="text-sm text-gray-600 dark:text-white">
            Your email address will not be published. All fields are required
          </p>
        </div>
      </div>
      <div className="flex mb-20  gap-10 flex-col xl:flex-row justify-between items-center ">
        <div className="flex-1 ">
          <img src="/contact-us.svg" alt="" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="  w-full flex-1 mx-auto space-y-4 "
        >
          {/* Name */}
          <div className="flex  gap-4 w-full flex-col lg:flex-row">
            <div className=" flex-1">
              <label className="block font-semibold mb-1">
                Name <span className="text-[#e65309]">*</span>
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Your Name"
                className="border p-3 border-gray-300 w-full"
              />
              {errors.name && (
                <p className="text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex-1 ">
              <label className="block font-semibold mb-1">
                Email <span className="text-[#443dff]">*</span>
              </label>
              <input
                {...register("user_email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                placeholder="Your Email"
                className="border p-3 border-gray-300 w-full"
              />
              {errors.user_email && (
                <p className="text-red-500 mt-1">{errors.user_email.message}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block font-semibold mb-1">
              Message <span className="text-[#443dff]">*</span>
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Your Message"
              className="border p-4 border-gray-300 w-full"
            />
            {errors.message && (
              <p className="text-[#443dff] mt-1">{errors.message.message}</p>
            )}
          </div>

          <div className=" flex lg:flex-row flex-col items-center justify-between">
            <button
              type="submit"
              className="w-full lg:w-80 hover:bg-[#443dff] cursor-pointer  mt-6 px-6 py-3 bg-[#443dff] text-white rounded  transition"
            >
              Contact Me
            </button>
            <div className="lg:justify-center flex lg:flex-row flex-col items-start   w-full mt-10  lg:mt-6 lg:items-center gap-8">
              <div className="flex items-center gap-2">
                <div className=" rounded-full p-1 bg-[#443dff]">
                  <MdOutlineEmail size={15} color="white" />
                </div>
                <p className="text-sm dark:text-white text-gray-600">
                  sorifullhasan300@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full p-1 bg-[#443dff]">
                  <FiPhone size={15} color="white" />
                </div>
                <p className="text-sm dark:text-white  text-gray-600">
                  +8801835458727
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
