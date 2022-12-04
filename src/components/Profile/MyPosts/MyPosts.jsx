import React from "react";

import myPostsStyleClasses from "./MyPosts.module.css";

import Post from "./Post/Post";

const MyPosts = (props) => {
  const newPostElement = React.createRef();

  const addPostHandler = () => {
    const text = newPostElement.current.value;
    
    props.addPost(text);
  };

  const textAreaValueChangeHandler = () => {
    const text = newPostElement.current.value;

    props.updateNewPostText(text);
  };

  return (
    <div className={myPostsStyleClasses.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea
            onChange={textAreaValueChangeHandler}
            ref={newPostElement}
            value={props.newPostText}
          ></textarea>
        </div>
        <div>
          <button onClick={addPostHandler}>Add post</button>
        </div>
      </div>
      <div className={myPostsStyleClasses.posts}>
        {props.state.map((post, index) => (
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
