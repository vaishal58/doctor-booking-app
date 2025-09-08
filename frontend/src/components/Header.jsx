import React from "react";
import { assets } from "../assets/assets";
const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-blue-600 rounded-lg px-6 md:px-10 lg:px-20">
      {/* left side */}
      <div className="md:w-1/2 flex flex-col item-start justify-center gap-4 py-10 m-auto md:py-[10vw]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight">
          Book appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white">
          <img className="w-28" src={assets.group_profiles} alt=""></img>
          <p>
            Lorem ipsum dolor, sit amet <br className="hidden sm:block" /> consectetur adipisicing elit.
            Minima, voluptatum.
          </p>
        </div>
        <a href="#speciality" className="flex items-center w-55 gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300">
          Book Appointment <img className="w-3" src={assets.arrow_icon}></img>
        </a>
      </div>

      {/* right side */}
      <div className="md:w-1/2 relative">
        <img className="w-full md:absolute bottom-0 h-auto rounded-lg" src={assets.header_img} alt=""></img>
      </div>
    </div>
  );
};

export default Header;
