import React, { FC, JSX } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router";
import { store, StoreItem } from "../../store/store.ts";
import style from "./style.module.css";
import { Autoplay } from "swiper/modules";

const Facultets: FC = (): JSX.Element => {
  const faculties: StoreItem[] = store.faculties;

  return (
    <Swiper
      className={style.Swiper}
      spaceBetween={0}
      slidesPerView="auto"
      direction="horizontal"
      watchSlidesProgress
      loop
      modules={[Autoplay]}
      autoplay={
        {
            delay: 15000,
            disableOnInteraction: false
        }
      }
    >
      {faculties.map((faculty) => (
        <SwiperSlide className={style.Slide} key={faculty.id}>
          <Link className={style.Link} to={`/interactive-board/facultets/fac-detail/${faculty.id}`}>
            <img
              className={style.Image}
              src={faculty.preview}
              alt={faculty.name}
            />
            <h2 className={style.Name}>{faculty.name}</h2>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Facultets;
