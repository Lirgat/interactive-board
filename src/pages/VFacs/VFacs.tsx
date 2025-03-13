import React, { FC, JSX } from "react";
import { store, StoreItem } from "../../store/store.ts";
import { Link } from "react-router";
import style from "./style.module.css";

const VFacs: FC = (): JSX.Element => {
    const faculties: StoreItem[] = store.faculties;
    
  return (
    <div className={style.MainWrapper}>
      <div className={style.Wrapper}>
        {faculties.map((faculty) => (
          <Link
            className={style.Wrapper__fac}
            to={`/interactive-board/facultets/fac-detail/${faculty.id}`}
          >
            <img
              className={style.Image}
              src={faculty.logo}
              alt={faculty.name}
            />
            <h3 className={style.Name}>{faculty.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VFacs;
