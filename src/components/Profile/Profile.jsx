import React from "react";

import profileStyleClasses from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={profileStyleClasses.profileContent}>
      <ProfileInfo
        isOwner={props.isOwner}
        profileInfo={props.profileInfo}
        status={props.status}
        getUserStatus={props.getUserStatus}
        updateUserStatus={props.updateUserStatus}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
