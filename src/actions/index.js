import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

// keys for actiontypes
const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const API_KEY = '?key=robert_crawford';

export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  UPDATE_POST: 'UPDATE_POST',
  CREATE_POST: 'CREATE_POST',
  DELETE_POST: 'DELETE_POST',
};

export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
    }).catch((error) => {
      console.log('error fetching posts');
    });
  };
}

export function createPost(post, history) {
  return (dispatch) => {
    const fields = { title: '', contents: '', tags: '' };
    axios.post(`${ROOT_URL}/posts/${API_KEY}`, post).then((response) => {
      history.push('/');
      fetchPosts();
      dispatch({ type: ActionTypes.CREATE_POST, payload: response.data });
    }).catch((error) => {
      console.log('error creating post');
    });
  };
}

export function updatePost(post, id, history) {
  return (dispatch) => {
    const fields = { title: '', contents: '', tags: '' };
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, post).then((response) => {
      history.push('/');
      dispatch({ type: ActionTypes.UPDATE_POST, payload: response.data });
    }).catch((error) => {
      console.log('error updating post');
    });
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
    }).catch((error) => {
      console.log('error fetching post');
    });
  };
}

export function deletePost(id, history) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      history.push('/');
      dispatch({ type: ActionTypes.DELETE_POST, payload: response.data });
    }).catch((error) => {
      console.log('error deleting post');
    });
  };
}
