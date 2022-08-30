import React from "react";
import classes from "./Partners.module.scss";
import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t } = useTranslation();
  return (
    <section className={`${classes.Partners}`}>
      <h2 className={`${classes.Partners__title} Title-text`}>
        {t("partners.title")}
      </h2>
      <div className={classes.Partners__row}>
        <img className={`${classes.Partners__row__item1}`} alt="logo" />
        <img className={`${classes.Partners__row__item2} `} alt="logo" />
        <img className={`${classes.Partners__row__item3} `} alt="logo" />
      </div>
    </section>
  );
};

export default Partners;
