import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  return (
    <div>
      <h1 style={{ paddingTop: "", margin: "auto 0", fontWeight: "normal" }}>
        <span
          className="text-5xl "
          style={{ color: "#5F6877",  }}
        >
          <Typewriter
            words={[
              "best lost and found item platform",
              "Partner in Finding Lost Item",
              "People with Their Lost Belongings Safely",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed"
          />
        </span>
      </h1>
    </div>
  );
};

export default TypeWriter;
