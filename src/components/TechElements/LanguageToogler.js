import React, { useEffect } from "react";
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";

import classes from "../Header.module.scss";

const languages = [
  {
    code: "UA",
    country_code: "ua",
  },
  {
    code: "EN",
    country_code: "en",
  },
];

function LanguageToogler() {
  const currentLanguageCode = cookies.get("i18next") || "ua";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <>
      {languages.map(({ code, country_code }) => (
        <div
          className={classes.header__content__nav__LangSwitcher}
          key={country_code}
        >
          <h3
            // className={`Small-title`}
            onClick={() => i18next.changeLanguage(country_code)}
            disabled={code === currentLanguageCode}
          >
            {code}
          </h3>
        </div>
      ))}
    </>
  );
}

export default LanguageToogler;
