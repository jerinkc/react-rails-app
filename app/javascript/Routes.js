import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import PostsList from './bundles/posts/index';
import PostDetails from './bundles/posts/postDetails';

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <PostsList/>
      </Route>
      <Route path="/api/posts/:id">
        <PostDetails/>
      </Route>
    </Switch>
  );
}
