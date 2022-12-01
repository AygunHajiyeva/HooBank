import React from "react";
import styles from "../styles";
import { stats } from "../constants";

const Stats = () => (
  <section
    className={`${styles.flexCenter} flex-wrap sm:mb-20 mb-6`}
  >
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex flex-1 items-center flex-row m-3`}
      >
        <h4 className=" font-poppins font-semibold md:text-[40.89px] text-[26.89px] md:leading-[53.16px] leading-[39.16px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal md:text-[20.45px] text-[11.45px] md:leading-[26.58px] leading-[19.58px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
