import React from "react";
import logo from "./assets/logo.png";
import eyebutton from "./assets/eye button.png";

const Header = () => {
  return (
    <div className="-mt-[680px] flex justify-between px-[60px] pt-[28px]">
      <div>
        <img src={logo} className="w-[30px] h-[44px]" />
      </div>
      <div className="items-center gap-4 text-[12px] flex font-bold new-font text-white">
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
        <img src={eyebutton} className="w-[64px] h-[36px]" />
      </div>
    </div>
  );
};
export default Header;
