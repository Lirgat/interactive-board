import React, { FC, JSX } from "react"
import style from "./style.module.css"
import georg from "../../assets/images/georg.png"

const GeorgLent:FC = ():JSX.Element => {
    return (
        <div className={style.GeorgLentWrapper}>
            <img className={style.GeorgLent} src={georg} alt="Георгиевская ленточка" />
        </div>
    )
}

export default GeorgLent