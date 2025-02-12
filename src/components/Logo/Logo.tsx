import React, { FC, JSX } from "react"
import logo from "../../assets/icons/logo.svg"
import style from "./style.module.css"

const Logo:FC = ():JSX.Element => {
    return (
        <>
            <img src={logo} className={style.Logo} alt="Логотип МВА" />
        </>
    )
}

export default Logo