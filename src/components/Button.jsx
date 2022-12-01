import React from "react";
import styles from "../styles";
const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`outline-none flex justify-center py-4 px-6 rounded-[10px] bg-blue-gradient font-poppins text-[18px] text-primary font-[500] ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
