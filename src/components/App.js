import React, { Component, PropTypes } from 'react'

export default class App extends Component {
    static propTypes = {
        loadUserFromToken: PropTypes.func.isRequired
    }

    componentWillMount() {
        this.props.loadUserFromToken();
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}