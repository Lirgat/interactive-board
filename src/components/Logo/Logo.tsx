import React, { FC, JSX } from "react"
import logo from "../../assets/icons/logo.svg"
// import priority from "../../assets/images/priority.png"
import style from "./style.module.css"

const Logo:FC = ():JSX.Element => {
    return (
        <>
        <img src={logo} className={style.Logo} alt="Логотип МВА" />
            {/* <div className={style.RowWrapper}>
                <img src={logo} className={style.Logo} alt="Логотип МВА" />
                <img src={priority} className={style.Logo} alt="Логотип приоритета 2030" />
            </div> */}
        </>
    )
}

export default Logo