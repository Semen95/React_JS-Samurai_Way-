import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props: any) => {
    return (
        //КОНТЕЙНЕРНАЯ КОМПОНЕНТА
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;