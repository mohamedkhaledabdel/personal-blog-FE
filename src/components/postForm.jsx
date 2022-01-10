
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactMarkdown from 'react-markdown';
import axios from 'axios'
class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '', description: '', author: '', content: '' };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.setTitle = this.setTitle.bind(this);
        this.setDesciption = this.setDesciption.bind(this);
        this.setAuthor = this.setAuthor.bind(this);
        this.setContent = this.setContent.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post(`http://localhost:8000/posts`, this.state)
        .then(res => {
          console.log("Sent request to BE");
          console.log(res.data);
        })
    }
    setTitle(event) {
        this.setState({ title: event.target.value });
    }
    setDesciption(event) {
        this.setState({ ...this.state, description: event.target.value })
    }
    setAuthor(event) {
        this.setState({ ...this.state, author: event.target.value })
    }
    setContent(event) {
        this.setState({ ...this.state, content: event.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>
                            Title:
                        </label>
                        <input type="text" className="form-control" value={this.state.title} onChange={this.setTitle} />
                    </div>
                    <div className='form-group'>
                        <label>
                            Description:
                        </label>
                        <input type="text" className="form-control" value={this.state.description} onChange={this.setDesciption} />
                    </div>
                    <div className='form-group'>
                        <label>
                            Author:
                        </label>
                        <input type="text" className="form-control" value={this.state.author} onChange={this.setAuthor} />
                    </div>
                    <div className='form-group'>
                        <label>
                            Content:
                        </label>
                        <textarea className="form-control" value={this.state.content} onChange={this.setContent}>
                        </textarea>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
                <ReactMarkdown>{this.state.content}</ReactMarkdown>

            </div>);
    }
}



export default PostForm;