import React from "react";
import apple from "./assets/apple.png";
import googleplay from "./assets/googleplay.png";
import downarrow from "./assets/downarrow.png";
import sender from "./assets/sender.png";
import twitter from "./assets/twitter.png";
import insta from "./assets/insta.png";

const Footer = () => {
  return (
    <div className="mb-4 mt-4 flex sm:flex-row flex-col justify-between sm:px-[60px] gap-2 sm:gap-[0px]">
      <div className="sm:text-sm text-[8px] justify-center  flex-1 flex gap-6">
        <div className="bg-black w-24 sm:w-[170px] flex justify-center items-center gap-4 rounded-lg border border-white text-white flex h-[50px]">
          <img src={apple} className="w-4 h-4 sm:w-[20px] sm:h-[22px] " />
          <div className="new-font font-bold ">APP STORE</div>
        </div>
        <div className="bg-black w-24 sm:w-[170px] flex justify-center items-center gap-1 sm:gap-4 rounded-lg border border-white text-white flex h-[50px]">
          <img src={googleplay} className="w-[20px] h-[22px] " />
          <div className="new-font font-bold ">GOOGLE PLAY</div>
        </div>
      </div>
      <div className="w-[0px] sm:flex-1 flex justify-center ">
        <div>
          <img src={downarrow} />
        </div>
      </div>
      <div className="flex-1 justify-center sm:flex-row flex-col flex gap-10">
        <div className="text-[#B6B6B6] sm:px-[0px] px-4 sm:-ml-28 font-bold text-[10px] font-mulish leading-3">
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </div>
        <div className="sm:ml-10">
          <div className="gap-6 flex h-full justify-center items-center">
            <img src={sender} />
            <img src={twitter} />
            <img src={insta} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
