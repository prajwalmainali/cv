import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import profilePicture from "../assets/profile.png";
import { about } from "../data/data";

const Hero = () => {
  const [text] = useTypewriter({
    words: about.heroText,
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="bg-[rgb(36,36,36)] text-white snap-y snap-mandatory z-0">
      <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <img
          className="relative rounded-full h-64 w-64 mx-auto object-cover"
          src={profilePicture}
          alt={about.name}
        />
        <div className="z-20">
          <h2 className="text-xl uppercase text-green-500 pb-2 tracking-[10px]">
            {about.name}
          </h2>
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[8px]">
            {about.title}
          </h2>
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span className="mr-3 ">
              {text}
              <Cursor />
            </span>
          </h1>
          <div className="pt-5">
            <Link to="/about">
              <button className="heroButton">About</button>
            </Link>
            <Link to="/education">
              <button className="heroButton">Education</button>
            </Link>
            <Link to="experience">
              <button className="heroButton">Experience</button>
            </Link>
            <Link to="/skills">
              <button className="heroButton">Skills</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
