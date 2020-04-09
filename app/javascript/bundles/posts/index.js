import React from  'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class PostsList extends React.Component{
  state = {posts: []}

  componentDidMount(){
    this.fetchPosts()
  }

  render(){
    return(
      <table className="table">
        <thead>
          <tr>
            <th>
              Title
            </th>
            <th>
              Description
            </th>
            <th>
              isPublished
            </th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.posts.map((post)=>{
              return(
                <tr key={post.id}>
                  <td>
                    <Link to={`/posts/${post.id}`}>
                      {post.title}
                    </Link>
                  </td>
                  <td>
                    {post.description}
                  </td>
                  <td>
                    {post.is_published ? 'Yes' : 'No'}
                  </td>
                  <td>
                    <button type="button" onClick={()=>this.deletePost(post.id)}>Delete</button>
                    <Link to={`/posts/${post.id}/edit`}>
                    Edit
                    </Link>
                  </td>
                </tr>
              )
            })
          }
          <tr>
            <td>
              <Link to="/posts/new">Create new post</Link>
            </td>
          </tr>

        </tbody>
      </table>
    )
  }

  fetchPosts(){
    axios.get('/api/posts').then(response => this.setState({posts: response.data}))
  }

  deletePost(id){
    axios.delete(`/api/posts/${id}`).then(response=>this.fetchPosts())
  }

}
