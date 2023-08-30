import React from "react";
import introcube1 from "./assets/intro-cube 1.png";
import introstairs1 from "./assets/intro-stairs 1.png";
import introcubes1 from "./assets/intro-cubes 1.png";
import intropillar1 from "./assets/intro-pillar 1.png";
import introphone1 from "./assets/intro-phone 1.png";
const Content = () => {
  return (
    <div>
      <div className="flex justify-between px-[160px]">
        <img src={introcube1} className=" w-[72px] h-[72px]" />
        <img src={introstairs1} className="w-[200px] h-[240.9px]" />
      </div>
      <div className="-mt-52">
        <div className="text-center  text-[193px] new-font text-white">
          <div>CASH</div>
          <div className="flex justify-center ">
            <img src={introphone1} className="-mt-72 w-[370px] h-[450px]" />
          </div>
          <div className="-mt-72">APP</div>
        </div>
      </div>
      <div className="flex justify-between px-[160px] -mt-32">
        <img src={introcubes1} className=" w-[188px] h-[176px]" />
        <img src={intropillar1} className="mr-28 w-[240px] h-[230px]" />
      </div>
    </div>
  );
};

export default Content;
