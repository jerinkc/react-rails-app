import React from 'react';
import axios from 'axios';

export default class PostDetails extends React.Component {
  state = { post:{} }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    axios.get(`/api/posts/${id}`).then(response=> this.setState({post: response.data}))
  }

  render() {
    const { post } = this.state;
    return (
      <div>
        <div>
          <label> Title: {post.title}</label>
        </div>
        <div>
          <label> Description: {post.description}</label>
        </div>

        <div>
          <label>Is Published: {post.is_published ? 'Yes' : 'No'} </label>
        </div>
      </div>
    );
  }
}
