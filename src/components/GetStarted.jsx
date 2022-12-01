import React from "react";
import styles from "../styles";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} bg-blue-gradient rounded-full w-[140px] h-[140px] cursor-pointer p-[2px]`}
    >
      <div
        className={`${styles.flexCenter}  rounded-full flex-col bg-primary w-[100%] h-[100%]`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient ">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>{" "}
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient ">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
