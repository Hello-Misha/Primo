import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Modal from "./Modal.js";

import { useState } from "react";
import classes from "./DevicePage.module.scss";
import imageSet from "./DevicePageImages";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay, Pagination } from "swiper";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
SwiperCore.use([Navigation]);

function DevicePage() {
  const { t } = useTranslation();
  const { device } = useParams();
  const [modalActive, setModalActive] = useState(false);
  const [index, setIndex] = useState(0);
  const downloads = t(`devicePageItems.${device}.downloads`, {
    returnObjects: true,
  });

  const breakPoints = {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  };
  return (
    <main>
      <section>
        <div className={classes.DevicePage}>
          <div className={classes.DevicePage__titleContainer}>
            <h1 className={` Title-text `}>
              {t(`devicePageItems.${device}.title`)}
            </h1>
            <h2 className={` Subtitle `}>
              {t(`devicePageItems.${device}.subtitle`)}
            </h2>
          </div>
          <Swiper
            modules={Navigation}
            spaceBetween={50}
            breakpoints={breakPoints}
            navigation={true}
          >
            {imageSet[device].map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <div>
                    <img
                      className="Slider__img"
                      src={image}
                      alt={image}
                      onClick={() => {
                        setModalActive(true);
                        setIndex(index);
                      }}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Modal active={modalActive} setActive={setModalActive}>
            <img
              className={classes.DevicePage__modalItem}
              src={imageSet[device][index]}
              alt={imageSet[device][index]}
            />
          </Modal>

          <div className={classes.DevicePage__container}>
            <p
              className={` Paragraph-text ${classes.DevicePage__container__description}`}
            >
              {t(`devicePageItems.${device}.description`)}
            </p>
            <div
              className={` Paragraph-text ${classes.DevicePage__container__links}`}
            >
              {downloads.map((item, index) => {
                return (
                  <a
                    key={index}
                    className="link"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.title}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DevicePage;
