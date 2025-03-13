import React, { FC, JSX } from "react"
import style from "./style.module.css"
import {  FacultyKafedraList, store } from "../../store/store.ts"
import { Link } from "react-router"

const Kafedry:FC = ():JSX.Element => {
    const kafedras:FacultyKafedraList[] = store.kafedry
    
    if(!kafedras) {
        return(
            <div>ОШИБКА!!!</div>
        )
    }

    return(
        <div className={style.KafedraWrapper}>
            {kafedras.map((fac) => {
                return(
                    <div key={fac.facultyName} className={style.KafedraBlock}>
                        <h2 className={style.KafedraBlock__h2}><img className={style.FacLogo} src={fac.facLogo} alt={fac.facultyName} />{fac.facultyName}</h2>
                        <div className={style.KafedraList}>
                        {fac.kafedraList.map((kafedra) => {
                            return(
                                <Link to={`/interactive-board/kafedry/kafedra-detail/${kafedra.id}`} key={kafedra.id} className={style.KafedraItem}>
                                    <img className={style.KafedraItem__img} src={kafedra.preview} alt={kafedra.name} />
                                    <h3 className={style.KafedraItem__h3}>{kafedra.name}</h3>
                                </Link>
                            )
                        })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Kafedry