import React from "react";
import classes from "./Form.module.scss";
import { useTranslation } from "react-i18next";

import { useState } from "react";

function Form() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section className={`${classes.formSection} `}>
      <h2 className={`Title-text`}>{t("form.title")}</h2>
      <form
        id="contact-form"
        action="https://formspree.io/f/mgedjbbr"
        method="POST"
        className={`${classes.formSection__form} `}
      >
        <div className={`${classes.formSection__form__inputs} Paragraph-text`}>
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              id="name"
              placeholder={t("form.placeholder.name")}
              onChange={(event) => setName(event.target.value)}
              value={name}
              required
            />
          </label>
          <label htmlFor="phone">
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder={t("form.placeholder.tel")}
              onChange={(event) => setPhone(event.target.value)}
              value={phone}
              required
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder={t("form.placeholder.email")}
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              required
            />
          </label>
        </div>
        <div className={classes.formSection__form__submitBtnContainer}>
          <input
            className={`${classes.formSection__form__submitBtnContainer__btn} Subtitle  `}
            type="submit"
            value={t("form.btn")}
          />
        </div>
      </form>
      <script src="https://smtpjs.com/v3/smtp.js"></script>
    </section>
  );
}

export default Form;
