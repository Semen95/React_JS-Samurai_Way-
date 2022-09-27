import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://proprikol.ru/wp-content/uploads/2020/08/kartinki-kyrgyzstan-3.jpg'/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;