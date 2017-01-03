import React from 'react';
import _ from 'lodash';
import UsersList from '../components/Users/UsersList';
import * as usersApi from '../api/usersApi';

const SimpleUserListContainer = React.createClass({

    getInitialState: function() {
        return {
            users: []
        }
    },

    componentDidMount: function() {
        usersApi.getUsers().then(users => {
            this.setState({users: users})
        });
    },

    deleteUser: function(userId) {
        usersApi.deleteUser(userId).then(() => {
            const newUsers = _.filter(this.state.users, user => user.id != userId);
            this.setState({users: newUsers})
        });
    },

    render: function() {
        return (
            <UsersList users={this.state.users} deleteUser={this.deleteUser} />
        );
    }

});

export default SimpleUserListContainer;