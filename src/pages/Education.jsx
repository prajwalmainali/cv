import React from "react";
import { education } from "../data/data";

const Education = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white snap-y snap-mandatory z-0 h-screen sm:px-0 px-4">
      <div className="flex justify-center items-center uppercase tracking-[12px] mb-10 text-3xl font-bold">
        Education
      </div>

      {!education || education.length === 0 ? (
        <div className="flex justify-center items-center mt-8">
          No education found.
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 gap-10">
            {education.map((edu) => {
              return (
                <div key={edu.id} className="bg-gray-800 p-5 rounded-lg">
                  <div className="text-3xl font-bold mb-2">{edu.school}</div>
                  <div className="text-xl text-gray-400 mb-2">{edu.degree}</div>
                  {edu.field ? (
                    <div className="text-lg text-gray-400 mb-2">
                      {edu.field}
                    </div>
                  ) : null}
                  <div className="text-md text-gray-400">{edu.date}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;
