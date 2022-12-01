import React from "react";
import styles from "../styles";
import Button from "./Button";

const CTA = () => {
  return (
    <section
      className={`${styles.marginY} ${styles.padding}  flex flex-col md:flex-row justify-between items-center bg-pink-500 rounded-[20px] box-shadow bg-black-gradient-2`}
    >
      <div className="">
        <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph}`}>
          Everything you need to accept card payments and grow your{" "}
          <br className="md:block hidden" /> business anywhere on the planet.
        </p>
      </div>
      <div className="w-full md:w-max mt-6 md:mt-0 ">
        <Button />
      </div>
    </section>
  );
};

export default CTA;
