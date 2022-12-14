import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfileThunkCreator, setUserProfileAC } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import withAuthRedirect from "../../hoc/AuthRedirect";

class ProfileAPI extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;

    this.props.getProfile(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileAPI);

const mapStateToProps = (state) => {
  return {
    profileInfo: state.profileState.profileInfoState,
  };
};

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

const ProfileContainer = connect(mapStateToProps, {
  setUserProfile: setUserProfileAC,
  getProfile: getProfileThunkCreator,
})(WithUrlDataContainerComponent);

export default ProfileContainer;
