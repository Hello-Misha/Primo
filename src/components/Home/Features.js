import React, { useState } from "react";
import classes from "./Features.module.scss";
import { useTranslation } from "react-i18next";

import img1 from "../../img/3-1.png";
import img2 from "../../img/3-2.png";
import img3 from "../../img/3-3.png";
import img4 from "../../img/3-4.png";

function Features() {
  const { t } = useTranslation();
  const img = [img1, img2, img3, img4];
  const [count, setCount] = useState(0);
  const [appState, changeState] = useState({
    activeObject: 0,
    objects: [0, 1, 2, 3],
  });

  function toogleActive(index) {
    changeState({ ...appState, activeObject: appState.objects[index] });
  }

  function toogleActiveStyles(index) {
    if (appState.objects[index] === appState.activeObject) {
      return `${classes.selected}`;
    } else {
      return `${classes.unselected}`;
    }
  }

  return (
    <section className={classes.Features}>
      <div className={classes.Features__containerMain__menuContainer}>
        <div className={classes.Features__containerMain__menuContainer}>
          <h2
            className={`${classes.Features__containerMain__menuContainer__title} Title-text`}
          >
            {t("features.title")}
          </h2>
          <div
            className={
              classes.Features__containerMain__menuContainer__selectors
            }
          >
            <h3
              className={`${toogleActiveStyles(0)} Paragraph-text`}
              onClick={() => {
                toogleActive(0);
                setCount(0);
              }}
            >
              {t("features.text.0.name")}
            </h3>
            <h3
              className={`${toogleActiveStyles(1)} Paragraph-text`}
              onClick={() => {
                toogleActive(1);
                setCount(1);
              }}
            >
              {t("features.text.1.name")}
            </h3>
            <h3
              className={`${toogleActiveStyles(2)} Paragraph-text`}
              onClick={() => {
                toogleActive(2);
                setCount(2);
              }}
            >
              {t("features.text.2.name")}
            </h3>
            <h3
              className={`Paragraph-text ${toogleActiveStyles(3)} `}
              onClick={() => {
                toogleActive(3);
                setCount(3);
              }}
            >
              {t("features.text.3.name")}
            </h3>
          </div>
        </div>
        <div className={`${classes.Features__containerMain__description}`}>
          <p
            className={`${classes.Features__containerMain__description__text} Paragraph-text`}
          >
            {t(`features.text.${count}.description`)}
          </p>
          <img src={img[count]} alt="" />
        </div>
      </div>
      <span className={classes.lineImg} />
    </section>
  );
}

export default Features;
