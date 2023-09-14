import React from "react";
import logo from "./assets/logo.png";
import eyebutton from "./assets/eye button.png";

const Header = () => {
  return (
    <div className="sm:-mt-[680px] -mt-[200px] flex gap-6 justify-between sm:px-[60px] pt-[28px]">
      <div>
        <img src={logo} className="sm:w-[30px] sm:h-[44px]" />
      </div>
      <div className="justify-center flex-wrap items-center sm:gap-4 gap-2 text-[10px] sm:text-[12px] flex font-bold new-font text-white">
        <div>SIGN IN</div>
        <div>LEGAL</div>
        <div>LICENSES</div>
        <div>SECURITY</div>
        <div>CAREERS</div>
        <div>PRESS</div>
        <div>SUPPORT</div>
        <div>STATUS</div>
        <div>CODEBLOG</div>
      </div>
      <div>
        <img src={eyebutton} className="sm:w-[64px] sm:h-[36px]" />
      </div>
    </div>
  );
};
export default Header;
