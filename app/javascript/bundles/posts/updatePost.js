import React from 'react';
import axios from 'axios'

export default class UpdatePost extends React.Component {
    state = {
      title: '',
      description: '',
      is_published: true
    }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    axios.get(`/api/posts/${id}`).
      then((response) => this.setState({ ...response.data }));
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  updatePostRequest = () => {
    axios.put(`/api/posts/${this.state.id}`, this.state).then((response) => {
      alert('Post updated successfully');
      location.href = '/';
    });
  }

  render() {
    const {title, description, is_published} = this.state;
    return (
      <div>
        <h3>New Post</h3>
        <div>
          <label>Title: </label>
          <input
            type='text'
            name='title'
            value={title}
            onChange={this.handleInputChange}
            />
        </div>
        <div>
          <label>Description: </label>
          <input
            type='text'
            name='description'
            value={description}
            onChange={this.handleInputChange}
            />
        </div>
        <div>
          <label>Is Published: </label>
          <input
            type='text'
            name='is_published'
            value={is_published}
            onChange={this.handleInputChange}
            />
        </div>
        <button onClick={this.updatePostRequest}>Update</button>
      </div>
    );
  }
}
