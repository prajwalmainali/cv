import { Link } from "react-router-dom";
import { about } from "../data/data";
import profilePicture from "../assets/profile.png";

const Header = () => {
  return (
    <div className="bg-[rgb(36,36,36)] flex text-white">
      <nav className="bg-[rgb(36,36,36)] flex px-4 py-4">
        <img
          className="relative rounded-full h-8 w-8 mx-auto object-cover"
          src={profilePicture}
          alt={about.name}
        />
        <Link to="/" className="relative">
          <p className="px-5 text-xl uppercase text-green-500 pb-2">
            {about.name}
          </p>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
