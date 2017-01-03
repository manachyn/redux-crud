import React from 'react';
import { connect } from 'react-redux';
import UsersList from '../components/Users/UsersList';

const mapStateToProps = function(store) {
    return {
        users: store.userState.users
    };
}

export default connect(mapStateToProps)(UsersList);

