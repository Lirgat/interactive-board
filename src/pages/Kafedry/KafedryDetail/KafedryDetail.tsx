import React, { FC, JSX } from "react";
import { useParams } from "react-router";
import { store } from "../../../store/store.ts";
import style from "./style.module.css";
import labFirst from "../../../assets/images/labsShi.png";
import labSecond from "../../../assets/images/lab2.png";
import BackBtn from "../../../components/BackBtn/BackBtn.tsx";

const KafedryDetail: FC = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  const kafedra = store.kafedry
    .flatMap((faculty) => faculty.kafedraList)
    .find((kafedra) => kafedra.id.toString() === id);

    if(!kafedra){
        return <div>ОШИБКА!!!</div>
    }

    return (
        <div className={style.DetailPage}>
          <iframe
            title="Video"
            className={style.VideFrame}
            src={kafedra.videoLink}
            width="90%"
            height="750"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className={style.TextBlock}>
            <div className={style.DescriptionBlock}>
              <h2 className={style.Name}>{kafedra.name} - </h2>
              <p className={style.Description}>{kafedra.description}</p>
              <img className={style.LabsShi} src={labFirst} alt="." />
            </div>
            <div className={style.OptionalDescriptionBlock}>
              <p className={style.Description}>{kafedra.optionalDescription}</p>
              <img className={style.Lab2} src={labSecond} alt="." />
            </div>
          </div>
          <BackBtn></BackBtn>
        </div>
      );
};

export default KafedryDetail;
