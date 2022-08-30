import React from "react";
import classes from "./AppStors.module.scss";

import Apple from "../../img/btn-apple.png";
import Google from "../../img/btn-google.png";

const AppStors = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container__btn}>
        <a
          href="https://apps.apple.com/ua/app/primodoor/id1469373883"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Apple} alt="" />
        </a>
      </div>
      <div className={classes.container__btn}>
        <a
          href="https://play.google.com/store/apps/details?id=com.primonet.primodoor"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Google} alt="" />
        </a>
      </div>
    </div>
  );
};

export default AppStors;
