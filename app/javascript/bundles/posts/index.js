import React from  'react'

export default class PostsList extends React.Component{
  state = {posts: []}

  componentDidMount(){
    fetch('/api/posts').then(response=> response.json()).
      then(posts => this.setState({posts}))
  }

  render(){
    return(
      <h1>inside index PostsList component</h1>
    )
  }
}
