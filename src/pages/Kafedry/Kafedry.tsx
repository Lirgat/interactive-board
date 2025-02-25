import React, { FC, JSX } from "react"
import style from "./style.module.css"
import {  FacultyKafedraList, store } from "../../store/store.ts"

const Kafedry:FC = ():JSX.Element => {
    const kafedras:FacultyKafedraList[] = store.kafedry



    return(
        <div className={style.KafedraWrapper}>
            {kafedras.map((fac) => {
                return(
                    <div className={style.KafedraBlock}>
                        <h2 className={style.KafedraBlock__h2}>{fac.facultyName}</h2>
                        {fac.kafedraList.map((kafedra) => {
                            return(
                                <div key={kafedra.id} className={style.KafedraItem}>
                                    <img className={style.KafedraItem__img} src={kafedra.preview} alt={kafedra.name} />
                                    <h3 className={style.KafedraItem__h3}>{kafedra.name}</h3>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Kafedry