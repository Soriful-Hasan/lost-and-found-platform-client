import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  return (
    <div>
      <h1
        style={{ paddingTop: "5rem", margin: "auto 0", fontWeight: "normal" }}
      >
        <span
          className="text-4xl "
          style={{ color: "#4A8F7D", fontWeight: "bolder" }}
        >
          <Typewriter
            words={[
              " best lost and found item platform",
              "Partner in Finding Lost Item",
              "Lost Something? We Help You Get It Back Fast!",
              "People with Their Lost Belongings Safely",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            className="text-black text-3xl md:text-5xl"
          />
        </span>
      </h1>
    </div>
  );
};

export default TypeWriter;
