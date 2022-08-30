import React from "react";
import classes from "./Socials.module.scss";

import FB from "../../img/FB1.png";
import Linkedin from "../../img/IN1.png";

const Socials = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container__btn}>
        <a
          href="https://www.facebook.com/Primonet-109864530812066"
          target="_blank"
          rel="noreferrer"
        >
          <img src={FB} alt="" />
        </a>
      </div>
      <div className={classes.container__btn}>
        <a
          href="https://www.linkedin.com/company/primonet/about/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Linkedin} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
