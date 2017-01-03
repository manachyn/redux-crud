import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions/posts'

import PostsList from '../../components/Posts/PostsList';

const loadData = props => {
    props.fetchPosts();
};

class PostsListContainer extends Component {
    static propTypes = {
        posts: PropTypes.array.isRequired
    };

    componentWillMount() {
        loadData(this.props);
    }

    render() {
        const { posts } = this.props;
        if (!posts) {
            return <p><i>Loading posts...</i></p>
        }

        return <PostsList posts={posts} />;
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.postsList
    };
};

export default connect(mapStateToProps, {
    fetchPosts
})(PostsListContainer)