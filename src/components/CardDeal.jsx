import React from "react";
import styles, { layout } from "../styles";
import Button from "./Button";
import { card } from "../assets";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {" "}
          Find a better card deal <br  className="hidden sm:block"/> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" />
      </div>
    </section>
  );
};

export default CardDeal;
