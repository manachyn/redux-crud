import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


class Header extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillUnmount() {
        //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
        //always reset that global state back to null when you REMOUNT
        this.props.resetMe();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.deletedPost.error && nextProps.deletedPost.error.message) {//delete failure
            alert(nextProps.deletedPost.error.message || 'Could not delete. Please try again.');
        } else if(nextProps.deletedPost.post && !nextProps.deletedPost.error) {//delete success
            this.context.router.push('/');
        } else if(this.props.user.user && !nextProps.user.user) {//logout (had user(this.props.user.user) but no loger the case (!nextProps.user.user))
            this.context.router.push('/');
        }
    }

    renderSignInLinks(authenticatedUser) {
        if(authenticatedUser) {
            return (
                <ul className="nav nav-pills navbar-right">
                    <li role="presentation">
                        <Link role="presentation" to="/profile">
                            {authenticatedUser.name}
                        </Link>
                    </li>
                    <li role="presentation">
                        <a onClick={this.props.logout} href="#">
                            Log out
                        </a>
                    </li>
                </ul>
            );
        }

        return (
            <ul className="nav  nav-pills navbar-right">
                <li role="presentation">
                    <Link role="presentation" to="/signup">
                        Sign up
                    </Link>
                </li>
                <li role="presentation">
                    <Link to="/signin">
                        Sign in
                    </Link>
                </li>
            </ul>
        );
    }

    renderLinks() {
        const { type, authenticatedUser } = this.props;
        if(type === 'posts_index') {
            return (
                <div className="container">
                    <ul className="nav nav-pills navbar-right">
                        <li role="presentation">
                            <Link to="/posts/new">
                                New Post
                            </Link>
                        </li>
                    </ul>
                    {this.renderSignInLinks(authenticatedUser)}
                </div>
            );
        } else if(type === 'posts_new') {
            return (
                <div className="container">
                    {this.renderSignInLinks(authenticatedUser)}
                    <ul className="nav nav-pills navbar-left">
                        <li role="presentation">
                            <Link className="text-xs-right" to="/">Back To Index</Link>
                        </li>
                    </ul>
                </div>
            );
        } else if(type === 'posts_show') {
            return (
                <div className="container">
                    <ul className="nav nav-pills navbar-left">
                        <li role="presentation"><Link to="/">Back To Index</Link></li>
                    </ul>

                    <div className="navbar-form navbar-right">
                        <button className="btn btn-warning pull-xs-right" onClick={() => {this.props.onDeleteClick()}}>Delete Post</button>
                    </div>
                    {this.renderSignInLinks(authenticatedUser)}
                </div>
            );
        }
    };

    render() {
        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div id="navbar" className="navbar-collapse collapse">
                    {this.renderLinks()}
                </div>
            </nav>
        );
    }
}

export default Header
