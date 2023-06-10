import React from "react";
import Social from "../components/Social";
import { about } from "../data/data";

const Footer = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white px-4 py-4">
      <div className="border border-yellow-700 mb-3" />
      <div className="flex justify-center items-center">
        <p className="text-lg text-green-500"> &copy; {about.name}</p>
      </div>
      <div className="flex justify-center items-center gap-10 flex-row mt-4">
        <div>
          <div className="flex flex-row gap-5">
            {about.socials.map((social, index) => {
              return (
                <Social
                  key={index}
                  href={social.href}
                  src={social.src}
                  alt={social.alt}
                />
              );
            })}
          </div>
          <div className="flex items-center justify-center mt-3">
            <a href={`mailto:${about.email}`}>
              <p className="text-gray-500">Mail Me</p>
            </a>
          </div>
        </div>
        <div className="flex snap-x flex-col">
          {about.address.split("\n").map((item, index) => {
            return (
              <p key={index} className="text-green-500">
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
