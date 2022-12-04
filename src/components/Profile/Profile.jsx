import React from "react";

import profileStyleClasses from "./Profile.module.css";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={profileStyleClasses.profileContent}>
      <ProfileInfo
        backgroundImgUrl={props.state.profileInfoState[0].backgroundImgUrl}
        backgoroundImgAlt={props.state.profileInfoState[0].backgroundImgAlt}
      />
      <MyPosts state={props.state.postState} updateNewPostText={props.updateNewPostText} newPostText={props.state.newPostText} addPost={props.addPost}/>
    </div>
  );
};

export default Profile;
