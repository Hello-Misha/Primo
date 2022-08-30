import React from "react";
import classes from "./DeviceCardComponent.module.scss";
import { HashLink as Link } from "react-router-hash-link";

function DeviceComponent(props) {
  return (
    <article className={classes.device}>
      <Link to={props.link} className={classes.Link}>
        <div className={classes.device__img}>
          <img src={props.img} alt="Device" />
        </div>
        <h3 className={`Title-footer `}>{props.title}</h3>
        <p className={`Paragraph-text link`}>{props.description}</p>
      </Link>
    </article>
  );
}

export default DeviceComponent;
