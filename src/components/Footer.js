import React from "react";
import classes from "./Footer.module.scss";
// import Text from "./Text";
import { useTranslation } from "react-i18next";

import Logo from "../img/logo.png";

import Apple from "../img/btn-apple.png";
import Google from "../img/btn-google.png";

import FB from "../img/FB1.png";
import Linkedin from "../img/IN1.png";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={classes.Footer}>
      <div className={`${classes.Footer__product}`}>
        <img src={Logo} alt="logo" />
        <div>
          <h2 className={`Title-footer`}>{t("footer.product.title")}</h2>
          <p className={`Paragraph-text`}>
            <a href="#main">{t("footer.product.company")}</a>
          </p>
          <p className={`Paragraph-text`}>
            <a href="/">{t("footer.product.privacy")}</a>
          </p>
          <p className={`Paragraph-text`}>
            <a href="/">{t("footer.product.faq")}</a>
          </p>
        </div>
      </div>
      <div className={`${classes.Footer__support}`}>
        <div>
          <h2 className={`Title-footer`}>{t("footer.support.title")}</h2>
          <div className={`${classes.Footer__support__contacts}`}>
            <p className={`Paragraph-text`}>{t("footer.support.tel")}</p>
            <p className={`Paragraph-text`}>{t("footer.support.email")}</p>
          </div>
        </div>
        <div className={`${classes.Footer__support__address}`}>
          <h2 className={`Title-footer`}>{t("footer.location.title")}</h2>
          <p className={`Paragraph-text`}>{t("footer.location.address")}</p>
        </div>
      </div>
      <div className={`${classes.Footer__app}`}>
        <h2 className={`Title-footer`}>{t("footer.app")}</h2>
        <div className={classes.Footer__app__AppStors}>
          <div className={classes.Footer__app__AppStors__btn}>
            <a
              href="https://apps.apple.com/ua/app/primodoor/id1469373883"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Apple} alt="" />
            </a>
          </div>

          <div className={classes.Footer__app__AppStors__btn}>
            <a
              href="https://play.google.com/store/apps/details?id=com.primonet.primodoor"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Google} alt="" />
            </a>
          </div>
        </div>
        <div className={classes.Footer__app__socials}>
          <div className={classes.Footer__app__socials__btn}>
            <a
              href="https://www.facebook.com/Primonet-109864530812066"
              target="_blank"
              rel="noreferrer"
            >
              <img src={FB} alt="" />
            </a>
          </div>
          <div className={classes.Footer__app__socials__btn}>
            <a
              href="https://www.linkedin.com/company/primonet/about/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
