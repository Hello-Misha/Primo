import React from "react";

import { useTranslation } from "react-i18next";

// import classes from "./Hardware.module.scss";

import ModelLineBlock from "./Hardware/ModelLineBlock";

//IMGS
import IMG_1 from "../img/ModelLineBlock-img1.png";

function Hardware() {
  const { t } = useTranslation();
  return (
    <main>
      <ModelLineBlock
        title={t("hardware.line-one.title")}
        description={t("hardware.line-one.description")}
        img={IMG_1}
      />
    </main>
  );
}

export default Hardware;
