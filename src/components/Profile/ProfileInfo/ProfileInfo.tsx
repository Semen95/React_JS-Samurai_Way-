import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://proprikol.ru/wp-content/uploads/2020/08/kartinki-kyrgyzstan-3.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
};

export default ProfileInfo;