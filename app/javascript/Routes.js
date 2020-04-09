import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import PostsList from './bundles/posts/index';

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <h3>Root Path Component</h3>
      </Route>
      <Route path="/api/posts">
        <PostsList/>
      </Route>
    </Switch>
  );
}
