import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src='https://proprikol.ru/wp-content/uploads/2020/08/kartinki-kyrgyzstan-3.jpg'
                />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava+description
            </div>
        </div>
    );
};

export default ProfileInfo;