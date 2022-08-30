import React from "react";
import classes from "./Stats.module.scss";
import { useTranslation } from "react-i18next";

const Stats = () => {
  const { t } = useTranslation();
  return (
    <section className={`${classes.Stats} container`}>
      <div className={`${classes.Stats__contentElement} container-fluid`}>
        <h2 className="Title-bold">{t("stats.first.title")}</h2>
        <p className={`Paragraph-text`}>{t("stats.first.paragraph")}</p>
      </div>
      <div className={`${classes.Stats__contentElement} container-fluid`}>
        <h2 className="Title-bold">{t("stats.second.title")}</h2>
        <p className={`Paragraph-text`}>{t("stats.second.paragraph")}</p>
      </div>
      <div className={`${classes.Stats__contentElement} container-fluid`}>
        <h2 className="Title-bold">{t("stats.third.title")}</h2>
        <p className={`Paragraph-text`}>{t("stats.third.paragraph")}</p>
      </div>
    </section>
  );
};

export default Stats;
