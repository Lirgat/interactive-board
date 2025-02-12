import React, { FC, JSX } from "react"
import { NavLink } from "react-router"
import style from "./style.module.css"

const LinkList:FC = ():JSX.Element => {
    return(
        <nav className={style.Navigation}>
            <NavLink className={style.Navigation__link} to="/interactive-board/kafedry">кафедры</NavLink>
            <NavLink className={style.Navigation__link} to="/interactive-board/facultets">факультеты</NavLink>
        </nav>
    )
}

export default LinkList