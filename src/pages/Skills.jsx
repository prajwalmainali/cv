import React from "react";
import { skills } from "../data/data";

const Skills = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white snap-y snap-mandatory z-0 h-screen">
      <div className="flex justify-center items-center uppercase tracking-[12px] mb-10 text-3xl font-bold">
        Skills
      </div>
      {!skills || skills.length === 0 ? (
        <div className="flex justify-center items-center mt-8">
          No skills found.
        </div>
      ) : (
        <div className="max-w-6xl mx-auto overflow-hidden mt-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-3">
            {skills.map((skill) => {
              return (
                <div key={skill.id} className="relative">
                  <div className="bg-gray-800 p-5 rounded-lg flex justify-center items-center h-24 w-30">
                    <span className="text-white text-center">
                      {skill.name}
                      <br />
                      <span className="text-xs text-gray-400">
                        {skill.level}
                      </span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
