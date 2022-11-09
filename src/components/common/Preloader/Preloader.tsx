import React from 'react';
import preloader from "../../../assets/images/loading-gif.gif";
import s from "../../Users/users.module.css";

const Preloader = (props) => {
    return (
        <div>
            <img src={preloader} className={s.preloader}/>
        </div>
    );
};

export default Preloader;