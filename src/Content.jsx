import React from "react";
import introcube1 from "./assets/intro-cube 1.png";
import introstairs1 from "./assets/intro-stairs 1.png";
import introcubes1 from "./assets/intro-cubes 1.png";
import intropillar1 from "./assets/intro-pillar 1.png";
import introphone1 from "./assets/intro-phone 1.png";
const Content = () => {
  return (
    <div>
      <div className="mt-10 sm:mt-[0px] flex items-center justify-between sm:px-[160px]">
        <img
          src={introcube1}
          className="sm:w-[72px] sm:h-[72px] h-[60px] w-[60px]"
        />
        <img
          src={introstairs1}
          className=" sm:w-[200px] sm:h-[240.9px] w-[100px] h-[140px]"
        />
      </div>
      <div className="sm:-mt-52 -mt-4">
        <div className="text-center text-[80px] sm:text-[193px] new-font text-white">
          <div>CASH</div>
          <div className="flex justify-center ">
            <img
              src={introphone1}
              className="sm:-mt-72 -mt-28 sm:w-[370px] w-[148px] h-[180px] sm:h-[450px]"
            />
          </div>
          <div className="sm:-mt-72 -mt-28">APP</div>
        </div>
      </div>
      <div className="flex justify-between  sm:px-[160px] -mt-4 sm:-mt-32">
        <img
          src={introcubes1}
          className=" sm:w-[188px] sm:h-[176px] h-[100px] w-[100px] "
        />
        <img
          src={intropillar1}
          className="sm:mr-28 sm:w-[240px] sm:h-[230px] h-[100px] w-[100px] "
        />
      </div>
    </div>
  );
};

export default Content;
