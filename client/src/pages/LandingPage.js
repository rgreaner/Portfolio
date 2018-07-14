import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Landing extends Component {
    render () {
        return (
            <div>
            <h1>Landing Page</h1>
            </div>
        )
    }
}

export default withRouter(Landing);