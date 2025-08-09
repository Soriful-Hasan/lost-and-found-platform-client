import React from "react";
import SatisFiedCard from "./SatisFiedCard";
import { RiEmotionHappyFill } from "react-icons/ri";

const ClientsSatisfied = () => {
  const data = [
    {
      review:
        "I had lost my backpack in a public place and honestly thought I’d never see it again. But thanks to this platform, someone found and posted it — I got it back within two days!",
      name: "Don Jo",
      position: "Student",
      img: "https://img.freepik.com/free-psd/portrait-man-teenager-isolated_23-2151745771.jpg?semt=ais_hybrid&w=740",
    },
    {
      review:
        "Posting a lost item was super easy. The process took just a few minutes, and the community support here is incredible. I even received messages from people trying to help!",
      name: "Jihad Rof",
      position: "Student",
      img: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    },
    {
      review:
        "I found a lost phone and didn’t know how to return it. This website made it so easy to post about it, and within a few hours, the owner contacted me. Amazing experience!",
      name: "Juhad Khan",
      position: "Salaried Person",
      img: "https://media.istockphoto.com/id/1253034955/photo/portrait-of-young-handsome-smiling-man-dressed-in-shirt-and-eyeglasses-standing-with-arms.jpg?s=612x612&w=0&k=20&c=PoGofmoSzId2NOMpEzXWgiZMK6y-VGKgIKa6awPT4qM=",
    },
    {
      review:
        "I was really anxious after losing my ID card. I posted it here, and someone from my campus contacted me. This platform truly builds a helpful and honest community.",
      name: "Isfak Hok",
      position: "Student",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      review:
        "Honestly, I didn’t expect much, but this site exceeded my expectations. I reported a lost watch and someone actually returned it. The whole process felt genuine and safe.",
      name: "Jisan Hasan",
      position: "Student",
      img: "https://t3.ftcdn.net/jpg/10/42/56/90/360_F_1042569030_ftNnbSjmc647kFj3aVxc9IPG06sb2FaY.jpg",
    },
    {
      review:
        "Thanks to this site, I was reunited with my childhood diary that I lost in the library. The finder posted it here, and now we even keep in touch! Very grateful!",
      name: "Isfak Jihan",
      position: "Student",
      img: "https://t3.ftcdn.net/jpg/01/70/55/14/360_F_170551453_pyOx70HmcDXgP5sLUBUQ5ReeaWDIEaut.jpg",
    },
  ];
  return (
    <div className="">
      <div className="place-items-center  mb-10">
        <div className="flex  gap-2">
          <RiEmotionHappyFill className="" color="#4A8F7D" size={25} />
          <h1 className=" text-2xl font-bold mb-2 text-[#4A8F7D]">
            Check our Satisfied User
          </h1>
        </div>
        <p className="text-gray-600 text-sm dark:text-white">
          People who found what they had lost <br />
          Their smiles tell our success story.
        </p>
      </div>
      <div className="mb-10 p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {data?.map((review) => (
          <div className="div ">
            <SatisFiedCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsSatisfied;
