import React from "react";

import profileStatusStyleClasses from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      ...this.state,
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      ...this.state,
      editMode: false,
    });

    this.props.updateUserStatus(this.state.status);
  };

  onStatusChange = (event) => {
    this.setState({
      ...this.state,
      status: event.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        ...this.state,
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "Set a new status"}
            </span>
          </div>
        ) : (
          <div>
            <input
              autoFocus
              onBlur={this.deactivateEditMode}
              value={this.state.status}
              onChange={this.onStatusChange}
            />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
