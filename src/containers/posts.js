import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { fetchPosts } from '../actions';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <ul className="post-list-container">
        {this.props.post_list.map(post => (
          <label key={post.id} className="post-list-item">
            <Link to={`/posts/${post.id}`}>
              <img className="post-coverURL" src={post.cover_url} />
            </Link>
            <div className="post-card">
              {post.title}
              {post.tags}
            </div>
          </label>))};
      </ul>
    );
  }
}

const mapStateToProps = state => (
  {
    post_list: state.posts.all,
  }
);

export default withRouter(connect(mapStateToProps, { fetchPosts })(Posts));
//             <div className="post-coverURL">

// <a href=`/posts/:${post.id}`>
// Current Posts: {props.post_list}
// (<div />))}
