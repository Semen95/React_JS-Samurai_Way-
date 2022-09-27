import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        <img src="https://dic.academic.ru/pictures/wiki/files/98/butters_south_park.jpg"/>
                        post 1
                    </div>
                    <div className={s.item}>
                        <img src="https://dic.academic.ru/pictures/wiki/files/98/butters_south_park.jpg"/>
                        post 2
                    </div>
                    <div className={s.item}>
                        <img src="https://dic.academic.ru/pictures/wiki/files/98/butters_south_park.jpg"/>
                        post 3
                    </div>
                    <div className={s.item}>
                        <img src="https://dic.academic.ru/pictures/wiki/files/98/butters_south_park.jpg"/>
                        post 4
                    </div>
                    <div className={s.item}>
                        <img src="https://dic.academic.ru/pictures/wiki/files/98/butters_south_park.jpg"/>
                        post 5
                    </div>
                </div>
            </div>
    );
};

export default MyPosts;