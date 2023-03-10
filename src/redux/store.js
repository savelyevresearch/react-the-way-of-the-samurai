import profileReducer from "./profileReducer.js";
import dialogsReducer from "./dialogsReducer.js";
import navbarReducer from "./navbarReducer.js";

const store = {
  _state: {
    profileState: {
      profileInfoState: {
        backgroundImgUrl:
          "https://1stwebdesigner.com/wp-content/uploads/2019/07/css-background-effects-thumb.jpg",
        backgroundImgAlt: "some image",
      },
      postState: [
        {
          message: "Hi, how are you? Today I'm learning JS",
          likeCount: 10,
          userAvatarUrl:
            "https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png",
          userAvatarAlt: "some avatar",
        },
        {
          message: "It's my first post",
          likeCount: 5,
          userAvatarUrl:
            "https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png",
          userAvatarAlt: "some avatar",
        },
      ],
      newPostText: "Type a text...",
    },
    dialogsState: {
      dialogItemState: [
        { userId: 1, userFirstName: "Vadim", isActive: true },
        { userId: 2, userFirstName: "John", isActive: false },
        { userId: 3, userFirtName: "Stanis", isActive: false },
        { userId: 4, userFirstName: "Eddard", isActive: false },
      ],
      messageState: [
        { messageText: "Hi" },
        { messageText: "Hello, how are you?" },
        { messageText: "Wassup.." },
        { messageText: "I think that you're right in this case." },
      ],
      messageInputField: "Type a message...",
    },
    navbarState: {
      friendsBlockState: [
        {
          friendAvatarUrl:
            "https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
          friendAvatarAl: "some avatar",
          friendFirstName: "Elizabeth",
        },
        {
          friendAvatarUrl:
            "https://cdn0.iconfinder.com/data/icons/unigrid-flat-human-vol-2/90/011_101_anonymous_anonym_hacker_vendetta_user_human_avatar-1024.png",
          friendAvatarAl: "some avatar",
          friendFirstName: "Gerbert",
        },
        {
          friendAvatarUrl:
            "https://www.shareicon.net/data/2016/08/05/806962_user_512x512.png",
          friendAvatarAl: "some avatar",
          friendFirstName: "Karl",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {
    console.log("State is changed");
  },
  dispatch(action) {
    this._state.profileState = profileReducer(this._state.profileState, action);
    this._state.dialogsState = dialogsReducer(this._state.dialogsState, action);
    this._state.navbarState = navbarReducer(this._state.navbarState, action);

    this._callSubscriber(this._state);
  },
};

export default store;