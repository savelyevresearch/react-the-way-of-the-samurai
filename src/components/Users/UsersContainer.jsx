import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';

import { followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersState.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;