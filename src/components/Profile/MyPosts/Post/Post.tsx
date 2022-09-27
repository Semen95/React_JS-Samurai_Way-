import React from 'react';
import s from './Post.module.css';

const Post = (props:any) => {
    return (
        <div className={s.item}>
            <img src="https://dic.academic.ru/pictures/wiki/files/98/butters_south_park.jpg"/>
            {props.message}
            <div>
                <span>like:{props.likesCount}</span>
            </div>
        </div>
    );
};

export default Post;