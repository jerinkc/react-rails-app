import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import PostsList from './bundles/posts/index';
import PostDetails from './bundles/posts/postDetails';
import CreatePost from './bundles/posts/createPost'

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <PostsList/>
      </Route>
      <Route path="/posts/new" exact component={CreatePost}/>
      <Route path="/posts/:id" exact component={PostDetails}/>
    </Switch>
  );
}
