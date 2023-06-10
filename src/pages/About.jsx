import React from "react";
import { about } from "../data/data";
import profilePicture from "../assets/profile.png";

const About = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white snap-y snap-mandatory z-0 ">
      <div className="flex justify-center items-center uppercase tracking-[12px] mb-10 text-3xl font-bold">
        About
      </div>
      <div className="relative pt-8">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-32 h-32 object-cover rounded-full scale-125"
            src={profilePicture}
            alt={about.name}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-6">
        <h2 className="text-xl uppercase text-green-500 pb-2 tracking-[10px]">
          {about.name}
        </h2>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[8px]">
          {about.title}
        </h2>
        <div className="text-lg items-center justify-start lg:mx-[20%] mx-[5%] mt-5 text-justify flex-auto">
          {about.about.split("\n").map((item, index) => {
            return (
              <div key={index}>
                <p>{item}</p>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
