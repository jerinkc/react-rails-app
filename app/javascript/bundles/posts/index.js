import React from  'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class PostsList extends React.Component{
  state = {posts: []}

  componentDidMount(){
    axios.get('/api/posts').then(response => this.setState({posts: response.data}))
    // fetch('/api/posts').then(response=> response.json()).
    //   then(posts => this.setState({posts}))
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
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}
