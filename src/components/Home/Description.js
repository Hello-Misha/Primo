import React from "react";
import classes from "./Description.module.scss";

import { useTranslation } from "react-i18next";

const Description = () => {
  const { t } = useTranslation();
  return (
    <section className={classes.description} id="Description">
      <div className={`${classes.description__illustration}`}></div>
      <div className={classes.description__content}>
        <h2 className={`${classes.description__content__header} Title-text `}>
          {t("description.title")}
        </h2>
        <ul className={classes.description__content__list}>
          <li
            className={`${classes.description__content__list__item} Paragraph-text  `}
          >
            {t("description.ul.1")}
          </li>
          <li
            className={`${classes.description__content__list__item} Paragraph-text  `}
          >
            {t("description.ul.2")}
          </li>
          <li
            className={`${classes.description__content__list__item} Paragraph-text  `}
          >
            {t("description.ul.3")}
          </li>
          <li
            className={`${classes.description__content__list__item} Paragraph-text  `}
          >
            {t("description.ul.4")}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Description;
