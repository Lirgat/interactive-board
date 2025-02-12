import React, { FC, JSX } from "react";
import { store } from "../../../store/store.ts";
import { useParams } from "react-router";
import style from "./style.module.css";
import labFirst from "../../../assets/images/labsShi.png";
import labSecond from "../../../assets/images/lab2.png";

const FacultyDetail: FC = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const faculty = store.faculties.find((faculty) => faculty.id === id);

  if (!faculty) {
    return <div>Непредвиденная ошибка</div>;
  }

  return (
    <div className={style.DetailPage}>
      <iframe
        title="Video"
        className={style.VideFrame}
        src={faculty.videoLink}
        width="90%"
        height="750"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className={style.TextBlock}>
        <div className={style.DescriptionBlock}>
          <h2 className={style.Name}>{faculty.name} - </h2>
          <p className={style.Description}>{faculty.description}</p>
          <img className={style.LabsShi} src={labFirst} alt="." />
        </div>
        <div className={style.OptionalDescriptionBlock}>
          <p className={style.Description}>{faculty.optionalDescription}</p>
          <img className={style.Lab2} src={labSecond} alt="." />
        </div>
      </div>
    </div>
  );
};

export default FacultyDetail;
