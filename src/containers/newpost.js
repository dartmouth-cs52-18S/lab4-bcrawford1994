import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createPost } from '../actions';

class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      tags: '',
      content: '',
      cover_url: '',
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onCoverURLChange = this.onCoverURLChange.bind(this);
    this.createNewPost = this.createNewPost.bind(this);
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onTagsChange(event) {
    this.setState({ tags: event.target.value });
  }

  onContentChange(event) {
    this.setState({ content: event.target.value });
  }

  onCoverURLChange(event) {
    this.setState({ cover_url: event.target.value });
  }

  createNewPost = () => {
    this.props.createPost(this.state, this.props.history);
  }

  render() {
    return (
      <div className="new-post-container">
        <input id="new-post-input" type="text" placeholder="title!" onChange={this.onTitleChange} value={this.state.title} />
        <input id="tags-input" type="text" placeholder="tags" onChange={this.onTagsChange} value={this.state.tags} />
        <input id="content-input" type="text" placeholder="content!" onChange={this.onContentChange} value={this.state.content} />
        <input id="cover-url-input" type="text" placeholder="cover url" onChange={this.onCoverURLChange} value={this.state.cover_url} />
        <button onClick={this.createNewPost} id="submit-button"><font color="white">Create Post!</font></button>
      </div>
    );
  }
}

export default withRouter(connect(null, { createPost })(NewPost));
// New Post: {this.props.createPost()}
