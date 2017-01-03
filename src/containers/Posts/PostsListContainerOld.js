import { connect } from 'react-redux'
import { fetchPosts, fetchPostsSuccess, fetchPostsFailure } from '../../actions/posts';

import PostsList from '../../components/Posts/PostsList';

const mapStateToProps = (state) => {
    return {
        postsList: state.posts.postsList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => {
            dispatch(fetchPosts()).then((response) => {
                if (!response.error) {
                    dispatch(fetchPostsSuccess(response.payload))
                } else {
                    dispatch(fetchPostsFailure(response.payload))
                }
            });
        }
    }
};

const PostsListContainerOld = connect(mapStateToProps, mapDispatchToProps)(PostsList);

export default PostsListContainerOld
