import React, { useEffect, useState } from "react";
import classes from "./Header.module.scss";

import { useTranslation } from "react-i18next";
import LanguageToogler from "./TechElements/LanguageToogler.js";

import Logo from "../img/logo-header.png";
import flag from "../img/flag-ukraine.png";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import AppStors from "./TechElements/AppStors.js";
import Socials from "./TechElements/Socials.js";

import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={classes.header}>
      <div className={`${classes.header__content}`}>
        <div
          className={`${classes.header__content__logo} ${
            menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <Link
            to="/#main"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <img
              className={`${classes.header__content__logo__primodoor}`}
              src={Logo}
              alt="logo"
            />
          </Link>
          <div className={`${classes.header__content__logo__ukraine}`}>
            <h2>{t("navigation.bage")}</h2>
            <img src={flag} alt="ukraine flag" />
          </div>
        </div>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link
                to="/hardware"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                {t("navigation.hardware")}
              </Link>
            </li>
            <li>
              <Link
                to="/#Description"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                {t("navigation.product")}
              </Link>
            </li>
            <li>
              <Link
                to="/#Connection"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                {t("navigation.connection")}
              </Link>
            </li>
          </ul>
          <div className={classes.header__content__nav__LangSwitcher}>
            <LanguageToogler />
          </div>
          <AppStors className={"AppStors"} />
          <Socials />
        </nav>
        <div className={classes.header__content__toogle}>
          {/* {BurgerMenu} */}
          {menuOpen ? (
            <AiOutlineClose onClick={menuToggleHandler} />
          ) : (
            <BiMenu onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
