import React from "react";
import { feedback } from "../constants";
import styles from "../styles";
import { quotes } from "../assets";

const FeedbackCard = ({ name, title, content, img }) => {
  return (
    <div className="flex justify-between rounded-[20px] flex-col feedback-card md:px-10 px-6 md:py-12 py-8 relative sm:max-w-[370px] ">
      <img src={quotes} alt="quote" className="md:mb-10 mb-6 w-[42px] " />
      <p className={`${styles.paragraph} `}>{content}</p>
      <div className="flex flex-row mt-6">
        <img
          src={img}
          alt="image"
          className="w-[48px] h-[48px] object-contain"
        />
        <div className="flex flex-col md:ml-6  ml-4">
          <h5 className="md:leading-[32px] font-poppins font-semibold text-white md:text-[20px]">
            {name}
          </h5>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
