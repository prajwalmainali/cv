import React from "react";
import { experiences } from "../data/data";

const Experience = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white snap-y snap-mandatory z-0 h-screen sm:px-0 px-4">
      <div className="flex justify-center items-center uppercase tracking-[12px] mb-10 text-3xl font-bold">
        Experience
      </div>
      {!experiences || experiences.length === 0 ? (
        <div className="flex justify-center items-center mt-8">
          No experiences found.
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 gap-10">
            {experiences.map((experience, index) => {
              return (
                <div key={index} className="bg-gray-800 p-5 rounded-lg">
                  <div className="text-3xl font-bold mb-2">
                    {experience.title}
                  </div>
                  <div className="text-xl text-gray-400 mb-2">
                    {experience.company}
                  </div>
                  <div className="text-md text-gray-400">{experience.date}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
