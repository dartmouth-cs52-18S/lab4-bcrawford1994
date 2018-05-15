import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signinUser } from '../actions';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.signUserIn = this.signUserIn.bind(this);
  }

  onUsernameChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  signUserIn = () => {
    this.props.signinUser(this.state, this.props.history);
  }

  render() {
    return (
      <div className="sign-in-container">
        <input className="username-input" type="text" placeholder="Username" onChange={this.onUsernameChange} value={this.state.username} />
        <input className="password-input" type="text" placeholder="Password" onChange={this.onPasswordChange} value={this.state.password} />
        <button onClick={this.signUserIn} id="sign-in-button">Sign In</button>
      </div>
    );
  }
}

export default withRouter(connect(null, { signinUser })(SignIn));
