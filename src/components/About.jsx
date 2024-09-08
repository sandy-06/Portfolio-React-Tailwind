import React from "react";
import AboutImage from "../assets/sandraheadshot.jpg/";


const About = () => {
  return (
    <div className="bg-cyan-800 text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate full-stack SAP S/4HANA developer with strong knowledge in both frontend and backend technologies.
              I have also put in the training on the new AI additions to the SAP world. I strive to keep up with the latest technologies 
              and to achieve expertise in the field. I have a strong foundation in programming and problem-solving, 
              and I am always looking for opportunities to apply my skills to real-world problems. Combining this with my knowledge of JavaScript, React,
              Java, and Node.js, I am confident in my ability to deliver high-quality software solutions.

            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="ABAP" className="w-2/12">
             ABAP
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="ABAP" className="w-2/12">
                  REACT and Node.js
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className=" bg-gradient-to-r from-green-400 to-blue-500h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  JAVA
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                        3+
                    </h3>
                    <p>Years Experience</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                        50+
                    </h3>
                    <p>Projects Completed</p>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
