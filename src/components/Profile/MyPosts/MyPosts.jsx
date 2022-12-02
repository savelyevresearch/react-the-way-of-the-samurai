import React from "react";

import myPostsStyleClasses from "./MyPosts.module.css";

import Post from "./Post/Post";

import { state } from "../../../index.js";

const MyPosts = () => {
  return (
    <div className={myPostsStyleClasses.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={myPostsStyleClasses.posts}>
        {state.postState.map((post, index) => (
          <Post
            key={index}
            userAvatarUrl={post.userAvatarUrl}
            userAvatarAlt={post.userAvatarAlt}
            message={post.message}
            likeCount={post.likeCount}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
