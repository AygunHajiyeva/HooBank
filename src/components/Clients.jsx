import React from "react";
import styles from "../styles";
import { clients } from "../constants";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4 `}>
      <div className="flex items-center w-full justify-between flex-wrap sm:flex-nowrap">
        {clients.map((client) => (
          <div key={client.id} className="sm:mx-4 mb-4 mx-1">
            {" "}
            <img
              src={client.logo}
              alt="logo"
              className="sm:w-[190px] w-[100px] object-contain "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
