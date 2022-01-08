import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
class NavBar extends Component {
    navBarData = {
        techBlogs: "Tech Blogs"
    }
    state = {
    }
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            <a class="nav-item nav-link" href="#">{this.navBarData.techBlogs}</a>
                            <a class="nav-item nav-link" href="#">Tech-Talks</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;