import React from "react";
import classes from "./ModelLineBlock.module.scss";
import { useTranslation } from "react-i18next";

import DeviceCardComponent from "./DeviceCardComponent";

// IMGS
import IMG from "../../img/Device.png";

function ModelLineBlock(props) {
  const { t } = useTranslation();

  const devicesArr = t("hardware.line-one.device", { returnObjects: true });
  const DeviceIMG = [IMG, IMG, IMG, IMG];

  return (
    <section className={classes.LineBlock}>
      <h1 className={`Title-text`}>{props.title}</h1>
      <div className={classes.LineBlock__mainContainer}>
        <p
          className={`Paragraph-text ${classes.LineBlock__mainContainer__text}`}
        >
          {props.description}
        </p>
        <img
          src={props.img}
          alt="ilustration"
          className={classes.LineBlock__mainContainer__img}
        />
      </div>
      <div className={classes.LineBlock__deviceContainer}>
        {devicesArr.map((device, index) => {
          return (
            <DeviceCardComponent
              key={device.title}
              className={classes.LineBlock__deviceContainer__item}
              title={device.title}
              description={device.description}
              img={DeviceIMG[index]}
              link={`/hardware/${device.link}`}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ModelLineBlock;
