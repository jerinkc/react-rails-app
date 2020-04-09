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
        <PostsList/>
      </Route>
      <Route path="/api/posts">
        <PostsList/>
      </Route>
    </Switch>
  );
}
