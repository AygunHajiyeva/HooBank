import React from "react";
import styles, { layout } from "../styles";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      className={`flex-col relative ${styles.paddingY} ${styles.flexCenter}`}
      id="clients"
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="flex justify-between w-full items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={`${styles.heading2} ${layout.sectionInfo}`}>
          What people are <br className="hidden sm:block" /> saying about us
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] `}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row w-full feedback-container mt-6 justify-between">
        {feedback.map((item, index) => (
          <FeedbackCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
