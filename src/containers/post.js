import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPost, updatePost, deletePost } from '../actions';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    };

    this.deleteCurrentPost = this.deleteCurrentPost.bind(this);
    this.updateCurrentPost = this.updateCurrentPost.bind(this);
    this.deleteCurrentPost = this.deleteCurrentPost.bind(this);
    this.changeIsEditing = this.changeIsEditing.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onCoverURLChange = this.onCoverURLChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postID);
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

  deleteCurrentPost = () => {
    this.props.deletePost(this.props.match.params.postID, this.props.history);
  }

  updateCurrentPost = () => {
    this.props.updatePost(this.state, this.props.match.params.postID, this.props.history);
    this.setState({ isEditing: false });
    // this.props.fetchPost(this.props.match.params.postID);
  }

  changeIsEditing = () => {
    this.setState({ isEditing: true });
  }

  render() {
    if (this.state.isEditing === false) {
      return (
        <div className="post-container">
          <div>
            <img className="post-photo" src={this.props.post.cover_url} />
          </div>
          <div className="full-post-card">
            <div className="post-title">
              {this.props.post.title}
              {this.props.post.author}
            </div>
            <div className="post-content">
              {this.props.post.content}
            </div>
            <div className="post-tags">
              {this.props.post.tags}
            </div>
          </div>
          <button onClick={this.changeIsEditing} id="edit-button"><font color="white">Edit</font></button>
          <button onClick={this.deleteCurrentPost} id="delete-button"><font color="white">Delete Post</font></button>
        </div>
      );
    } else {
      return (
        <div className="new-post-container" >
          <input id="new-post-input" type="text" placeholder="title!" onChange={this.onTitleChange} value={this.state.title} />
          <input id="tags-input" type="text" placeholder="tags" onChange={this.onTagsChange} value={this.state.tags} />
          <input id="content-input" type="text" placeholder="content!" onChange={this.onContentChange} value={this.state.content} />
          <input id="cover-url-input" type="text" placeholder="cover url" onChange={this.onCoverURLChange} value={this.state.cover_url} />
          <button onClick={this.updateCurrentPost} id="update-button"><font color="white">Update</font></button>
        </div>
      );
    }
  }
}

const mapStateToProps = state => (
  {
    post: state.posts.post,
  }
);

export default withRouter(connect(mapStateToProps, { fetchPost, updatePost, deletePost })(Post));
// {this.props.post.content}
