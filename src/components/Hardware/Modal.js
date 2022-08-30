import React from "react";
// import classes from "./DevicePage.module.scss";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";

function Modal({ active, setActive, children }) {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setActive(false);
    }
  });

  return (
    <div
      className={active ? "modal active" : "modal inactive"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content">
        <div
          className={window.innerWidth > 768 ? "container_X" : "none_display"}
        >
          <AiOutlineClose className="X" onClick={() => setActive(false)} />
        </div>
        {children}
      </div>
    </div>
  );
}
export default Modal;
