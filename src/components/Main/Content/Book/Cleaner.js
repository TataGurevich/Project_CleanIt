import React, {useState} from 'react';
import style from './cleaner.module.css'
import {cleaners} from "../../../../Constants/constants";

const Cleaner = (props) => {
    const [isActiv, setIsActive] = useState(false)
    const open = () => {
        setIsActive(!isActiv)
    }
    return (
        <div className={style.card} onClick={() => open()}>
            {/*<div>*/}
            {/*    <img src={props.cleaners.Image} alt={'photo'}/>*/}
            {/*</div>*/}
            <div>
                <img src={props.cleaners.Image} alt={'photo'}/>
                <div className={style.inf}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <h2 style={{fontSize: "24px", fontWeight: "600"}}>{props.cleaners.Name}</h2>
                        <h3>{props.cleaners.Role}</h3>
                    </div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <h3>Rating{"  "}</h3>
                        <p> {props.cleaners.Rating}</p>
                    </div>
                </div>
            </div>
            <div className={style.time}>
                <div className={style.timeSection}>
                    {
                        props.cleaners.Time.map((item, index) => {
                            return <h4>{item}</h4>
                        })
                    }
                </div>
                <h3>{props.cleaners.Salary}</h3>
            </div>
            {
                isActiv && (
                    <div className={style.dopInf}>
                        <p>I am sweet and gentle, young passionate girl. I am girl with gorgeous tanned body, long legs and
                            sensitive breasts. I will clean your home properly. See you …</p>
                        <button>CleanIt!</button>
                    </div>
                )
            }
        </div>
    )
};
export default Cleaner;

