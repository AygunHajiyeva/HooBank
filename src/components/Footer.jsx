import React from "react";
import { socialMedia, footerLinks } from "../constants";
import styles from "../styles";
import { logo } from "../assets";

const Footer = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} relative flex-col`}
    >
      <div className="flex w-full md:flex-row flex-col mb-8">
        <div className={` ${styles.flexStart}  flex-col mb-8`}>
          <img src={logo} alt="hoobank" className="w-[262px] object-contain" />
          <p className={`${styles.paragraph}`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className=" w-full flex justify-between  md:ml-[180px] ">
          {footerLinks.map((footerLink) => (
            <div className="font-poppins xs:text-[18px] text-[14px] font-mediumxs:leading-[28px]">
              {footerLink.title}
              <ul>
                {footerLink.links.map((link) => (
                  <li
                    key={link.name}
                    className="hover:text-secondary cursor-pointer xs:leading-[28px]  xs:text-[16px] text-[12px] font-normal  text-dimWhite"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full justify-between border-t-[1px] border-[#3F3E45] pt-[30px] mb-[-30px]">
        <p>2021 HooBank. All Rights Reserved.</p>
        <div className={`flex ${styles.paragraph}`}>
          {socialMedia.map((item, index) => (
            <a href={item.link} key={item.id} className="sm:ml-[30px] ml-[15px]">
              <img src={item.icon} title="icon" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
