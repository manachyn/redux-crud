import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import ValidateEmailAlertContainer from '../containers/ValidateEmailAlertContainer';
import PostsList from '../containers/Posts/PostsListContainer';

class PostsIndex extends Component {
    render() {
        return (
            <div>
                {/*<HeaderContainer type="posts_index"/>*/}
                {/*<ValidateEmailAlertContainer/>*/}
                <PostsList />
            </div>
        );
    }
}


export default PostsIndex;
