import React from "react";
import classes from "./Main.module.scss";

import Man from "../../img/1.png";
import Logo from "../../img/logo.png";

import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();
  return (
    <section id="main" className={`${classes.main} `}>
      <div className={`${classes.main__content}`}>
        <img src={Logo} alt="logo" />
        <h1 className="Title-text">{t("main")}</h1>
      </div>
      <div className={`${classes.main__illustration}`}>
        <img src={Man} alt="Чоловік з телефоном" />
      </div>
    </section>
  );
};

export default Main;
