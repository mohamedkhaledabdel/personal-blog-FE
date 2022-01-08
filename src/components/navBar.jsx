import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactMarkdown from 'react-markdown';

class NavBar extends Component {
    navBarData = {
        techBlogs: "Tech Blogs"
    }
    state = {
        text: "# Markdown \n" +
        "## This is the my 1st markdown \n"
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
            <ReactMarkdown>{this.state.text}</ReactMarkdown>
            </div>
        );
    }
}

export default NavBar;