import { BrowserRouter as Roxuter, Route, NavLink, Switch } from 'react-router-dom';
import React from 'react';
import ReactDom from 'react-dom';
import '../style.scss';

const NavBar = (props) => {
  return (
    <nav>
      <ul id="navigation">
        <NavLink exact to="/">Blog Home</NavLink>
        <NavLink to="/posts/new">new post</NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
