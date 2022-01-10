import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './navBar';
import PostForm from './postForm';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <PostForm/>
            </div>
        );
    }
}

export default LandingPage;