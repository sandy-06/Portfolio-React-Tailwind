import React from "react";
import SANDRAResume from "../assets/sandraresume.pdf";

const Resume = () => {
  return (
    <div className="bg-cyan-800 text-white py-20" id="resume">
      <h1 className="text-4xl font-bold text-center text-cyan-300 mt-8 bg-bg-cyan-800">
        Sandra Sanders resume
      </h1>
      <div className="flex justify-center mt-4">
        <a
          href={SANDRAResume}
          download="SANDRA Resume"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
        >
          Download Resume
        </a>

        <div
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-black
             px-4 py-2 rounded-full"
        >
          <a
            href="#"
            className="mt  text-center inline-block text-green-400 hover:text-blue-500"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
