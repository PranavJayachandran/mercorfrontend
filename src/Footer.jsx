import React from "react";
import apple from "./assets/apple.png";
import googleplay from "./assets/googleplay.png";
import downarrow from "./assets/downarrow.png";
import sender from "./assets/sender.png";
import twitter from "./assets/twitter.png";
import insta from "./assets/insta.png";

const Footer = () => {
  return (
    <div className="-mt-20 flex justify-between px-[60px]">
      <div className="flex-1 flex gap-6">
        <div className="bg-black w-[170px] w-[50px] flex justify-center items-center gap-4 rounded-lg border border-white text-white flex h-[50px]">
          <img src={apple} className="w-[20px] h-[22px] " />
          <div className="new-font font-bold ">APP STORE</div>
        </div>
        <div className="bg-black w-[170px] w-[50px] flex justify-center items-center gap-4 rounded-lg border border-white text-white flex h-[50px]">
          <img src={googleplay} className="w-[20px] h-[22px] " />
          <div className="new-font font-bold ">GOOGLE PLAY</div>
        </div>
      </div>
      <div className="flex-1 flex justify-center ">
        <div>
          <img src={downarrow} />
        </div>
      </div>
      <div className="flex-1 flex gap-10">
        <div className="text-[#B6B6B6] -ml-14 font-bold text-[10px] font-mulish leading-3">
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </div>
        <div className="">
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
