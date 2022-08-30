import React from "react";
import classes from "./Connection.module.scss";
import { useTranslation } from "react-i18next";

import Apple from "../../img/btn-apple.png";
import Google from "../../img/btn-google.png";

const Connection = () => {
  const { t } = useTranslation();
  return (
    <section className={`${classes.Connection}`} id="Connection">
      <h2 className={`${classes.Connection__title} Title-text`}>
        {t("connection.title")}
      </h2>
      <div className={classes.Connection__phone}>
        <img alt="телефон" />
      </div>
      {/*  */}
      <div className={classes.Connection__container}>
        <div className={classes.Connection__container__AppStors}>
          <div className={classes.Connection__container__AppStors__btn}>
            <a href="https://apps.apple.com/ua/app/primodoor/id1469373883">
              <img src={Apple} alt="" />
            </a>
          </div>

          <div className={classes.Connection__container__AppStors__btn}>
            <a href="https://play.google.com/store/apps/details?id=com.primonet.primodoor">
              <img src={Google} alt="" />
            </a>
          </div>
        </div>
        <div className={classes.Connection__container__text}>
          <div
            className={`${classes.Connection__container__text__contentElement}`}
          >
            <h2 className="Title-bold">{t("connection.steps.first.title")}</h2>
            <p className={`Paragraph-text`}>
              {t("connection.steps.first.paragraph")}
            </p>
          </div>
          <div
            className={`${classes.Connection__container__text__contentElement}`}
          >
            <h2 className="Title-bold">{t("connection.steps.second.title")}</h2>
            <p className={`Paragraph-text`}>
              {t("connection.steps.second.paragraph")}
            </p>
          </div>
          <div
            className={`${classes.Connection__container__text__contentElement}`}
          >
            <h2 className="Title-bold">{t("connection.steps.third.title")}</h2>
            <p className={`Paragraph-text`}>
              {t("connection.steps.third.paragraph")}
            </p>
          </div>
        </div>
      </div>

      <span className={classes.lineImg} />
    </section>
  );
};

export default Connection;
