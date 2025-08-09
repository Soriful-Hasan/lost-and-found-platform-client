import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Process = () => {
  const faqData = [
    {
      name: "How do I report a lost or found item?",
      content:
        "To report a lost or found item, click on the “Post Item” button after signing in. Fill out the form with all the details like item name, category, location, description, and image. Once submitted, your item will be listed on the website.",
    },
    {
      name: "Do I need an account to use the website?",
      content:
        "Yes, you need to sign in using your email to submit or manage lost or found items. Once logged in, you’ll have access to your dashboard where you can track your posts and receive notifications.",
    },
    {
      name: "How will I know if someone finds my lost item?",
      content:
        "If someone submits a found item that matches the details of your lost item, you'll automatically receive an email notification. You can then contact them directly through the platform.",
    },
    {
      name: "Can I edit or delete my item after posting?",
      content:
        "Yes. After logging in, go to your dashboard. From there, you can edit any details of your posted item or delete it if it has been recovered or no longer needed.",
    },
    {
      name: "Is it safe to share contact information on the site?",
      content:
        "Your privacy is our priority. Only necessary information is shown to others. For direct communication, we recommend using the secure contact options provided inside the website after signing in.",
    },
    {
      name: "How do I share a lost or found item on FindIt?",
      content:
        "Simply sign in and click the “Post Item” button on the top menu. Fill in the item details such as name, category, where it was lost or found, description, and upload a photo. After submitting, your item will be visible to all users.",
    },
  ];

  return (
    <div>
      <section className="mt-20 ">
        <div className="flex flex-col  place-items-center  ">
          <h1 className=" text-2xl font-bold mb-2 text-[#4A8F7D]">
            Frequently Asked Question
          </h1>
          <p className="text-gray-600 dark:text-white text-sm text-center">
            Our platform provides a place where lost things find their way back
            —
            <br />
            connecting people with honesty and hope.
          </p>
        </div>

        <div className=" mb-30">
          <div className="gap-8 flex flex-col xl:flex-row mb-10 mt-10">
            <div className="flex-1">
              <img src="/ask-question.svg" alt="" />
            </div>
            <div className=" flex-1 flex items-center">
              <div className=" flex flex-col gap-5 ">
                {faqData?.map((faq) => (
                  <div
                    tabIndex={0}
                    className="collapse collapse-plus dark:border-gray-700  border"
                  >
                    <div className="collapse-title font-semibold">
                      {faq.name}
                    </div>
                    <div className="collapse-content text-sm">
                      {faq.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;

{
  /* <div className="space-y-10 flex-1 justify-center items-center  mt-10  text-gray-600 mb-10">
  <p className="flex items-center gap-2">
    <FaCheckCircle color="green" />
    Enter lost or found item details (e.g., item lost or found, category,
    photos, date, time, etc).
  </p>
  <p className="flex items-center gap-2">
    <FaCheckCircle color="green" />
    Review details entered and submit the lost or found item report.
  </p>
  <p className="flex items-center gap-2">
    <FaCheckCircle color="green" />
    Receive an email with your user dashboard login and account information.
  </p>
  <p className="flex items-center gap-2">
    <FaCheckCircle color="green" />
    Within the dashboard you can print fliers of the submitted lost or found
    item.
  </p>
  <p className="flex items-center gap-2">
    <FaCheckCircle color="green" />
    Receive notifications when newly submitted items match the details on your
    entry.
  </p>
</div>; */
}
