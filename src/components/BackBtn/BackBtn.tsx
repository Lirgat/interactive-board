import React, { FC, JSX } from "react"
import style from "./style.module.css"
import backBtnimg from "../../assets/images/back.png"
import { useNavigate } from "react-router"

const BackBtn:FC = ():JSX.Element => {
    const navigate = useNavigate()

    return(
        <button className={style.Back__btn} onClick={() => navigate(-1)}>
            <img className={style.Back__btn_img} src={backBtnimg} alt="Кнопка назад" />
        </button>
    )
}

export default BackBtn