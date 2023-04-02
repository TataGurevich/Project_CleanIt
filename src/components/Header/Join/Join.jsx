import React, {useState} from 'react';
import style from './Join.module.css'

const Join = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('')

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChangeEmail = event => {
        if (!isValidEmail(event.target.value)) {
            setEmailError('Email is invalid');
        } else {
            setEmailError(null);
        }

        setEmail(event.target.value);
    };
    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };
    return (
        <div className={style.pos}>
            <form className={style.form}>
                <button id={style.btn_close} onClick={() =>props.close() }></button>
                <p>Join our team</p>
                <div className={style.inputs_area}>
                    <input placeholder="Name" type="text"/>
                    <input placeholder="Last name" type="text"/>
                    <input placeholder="Address" type="text"/>
                    <input
                        placeholder="Enter email"
                        type="email"
                        value={email}
                        onChange={handleChangeEmail}
                    />
                    {emailError && <h2 style={{color: 'red'}}>{emailError}</h2>}
                    <label>Choose cleaning type</label>
                    <div className={style.cleaningList}>
                        <div>
                            <input name="regularly cleaning" type="checkbox"/>
                            <label>regularly cleaning</label>
                        </div>
                        <div>
                            <input name="deep cleaning" type="checkbox"/>
                            <label>deep cleaning</label>
                        </div>
                        <div>
                            <input name="office cleaning" type="checkbox"/>
                            <label>office cleaning</label>
                        </div>
                        <div>
                            <input name="windows cleaning" type="checkbox"/>
                            <label>windows cleaning</label>
                        </div>
                    </div>
                    <button type="submit">
                        join
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Join;