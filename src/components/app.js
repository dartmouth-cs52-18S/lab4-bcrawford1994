import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import React from 'react';
import { Switch } from 'react-router';
import ReactDOM from 'react-dom';
import NavBar from '../components/navbar';
import Posts from '../containers/posts';
import NewPost from '../containers/newpost';
import Post from '../containers/post';
import SignIn from '../containers/sign-in';
import SignUp from '../containers/sign-up';
import RequireAuth from '../containers/requireAuth';
import '../style.scss';

const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/posts/new" component={RequireAuth(NewPost)} />
          <Route path="/posts/:postID" component={Post} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route render={() => (<div>post not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
