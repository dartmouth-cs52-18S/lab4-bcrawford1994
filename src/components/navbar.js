import { BrowserRouter as Roxuter, Route, NavLink, Switch, withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import '../style.scss';

import { signoutUser, signinUser, signupUser } from '../actions';

class NavBar extends Component {
  constructor(props) {
    super(props);

    /*
    this.state = {

    };
    */

    this.signOut = this.signOut.bind(this);
  }

  signOut = () => {
    this.props.signoutUser(this.props.history);
  }

  render() {
    if (this.props.authenticated) {
      return (
        <nav>
          <ul id="navigation">
            <NavLink exact to="/">Blog Home</NavLink>
            <NavLink to="/posts/new">new post</NavLink>
            <button onClick={this.signOut} id="sign-out-button">Sign Out</button>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav>
          <ul id="navigation">
            <NavLink exact to="/">Blog Home</NavLink>
            <NavLink to="/posts/new">new post</NavLink>
            <NavLink to="/signin">Sign In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </ul>
        </nav>
      );
    }
  }
}

const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default withRouter(connect(mapStateToProps, { signoutUser, signinUser, signupUser })(NavBar));
// export default withRouter(connect(null, { signoutUser })(NavBar));
// export default NavBar;
// <button onClick={this.signIn} id="sign-in-button">Sign In</button>
// <button onClick={this.signUp} id="sign-up-button">Sign Up</button>
// signIn = () => {
// this.props.signinUser(this.state, this.props.history);
// }

// signUp = () => {
//  this.props.signupUser(this.state, this.props.history);
// }
