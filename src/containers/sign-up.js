import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signupUser } from '../actions';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  signUserUp = () => {
    console.log(this.state.email);
    console.log(this.state.username);
    console.log(this.state.password);
    this.props.signupUser(this.state, this.props.history);
  }

  render() {
    return (
      <div className="sign-up-container">
        <input className="email-input" type="text" placeholder="Email Address" onChange={this.onEmailChange} value={this.state.email} />
        <input className="username-input" type="text" placeholder="Username" onChange={this.onUsernameChange} value={this.state.username} />
        <input className="password-input" type="text" placeholder="Password" onChange={this.onPasswordChange} value={this.state.password} />
        <button onClick={this.signUserUp} id="sign-up-button">Sign Up</button>
      </div>

    );
  }
}

export default withRouter(connect(null, { signupUser })(SignUp));
