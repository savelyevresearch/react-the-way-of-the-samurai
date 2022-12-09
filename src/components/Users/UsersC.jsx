import React from "react";

import axios from "axios";

import usersStyleClasses from "./Users.module.css";

import userPhoto from "../../assets/imgs/userAvatar.png";

class UsersC extends React.Component {
  constructor(props) {
    super(props);
    
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  getUsers = () => {
    if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.getUsers}>Get Users</button>
        {this.props.users.map((user, index) => {
          return (
            <div key={index}>
              <span>
                <div>
                  <img
                    className={usersStyleClasses.userPhoto}
                    src={
                      user.photos.small != null ? user.photos.small : userPhoto
                    }
                  />
                </div>
                <div>
                  {user.followed ? (
                    <button
                      onClick={() => {
                        this.props.unfollow(user.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(user.id);
                      }}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </span>
              <span>
                <span>
                  <div>{user.name}</div>
                  <div>{user.status}</div>
                </span>
                <span>
                  <div>{"user.location.country"}</div>
                  <div>{"user.location.city"}</div>
                </span>
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UsersC;
