import React from "react";
import { assets } from "../assets/assets";
const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* left side */}
      <div className="md:w-1/2 flex flex-col item-start justify-center gap-4 py-10 m-auto md:py-[10vw]">
        <p>
          Book appointment <br /> With Trusted Doctors
        </p>
        <div>
          <img src={assets.group_profiles} alt=""></img>
          <p>
            Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.
            Minima, voluptatum.
          </p>
        </div>
        <a href="">
          Book Appointment <img src={assets.arrow_icon}></img>
        </a>
      </div>

      {/* right side */}
      <div>
        <img src={assets.header_img} alt=""></img>
      </div>
    </div>
  );
};

export default Header;
