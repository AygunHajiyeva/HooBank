import React from "react";
import styles, { layout } from "../styles";
import { bill, apple, google } from "../assets";

const Billing = () => {
  return (
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="bill"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        {/* gradient */}

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />

        {/* graddient ends */}
      </div>
      <div className={`${layout.sectionInfo} `}>
        <h2 className={styles.heading2}>
          Easily control your billing & invoicing.
        </h2>
        <p className={`{styles.paragraph } max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="mt-8 sm:mt-10 flex flex-row">
          <img src={apple} alt="apple" className="cursor-pointer" />
          <img src={google} alt="google" className="cursor-pointer ml-6" />
        </div>
      </div>
    </section>
  );
};

export default Billing;
