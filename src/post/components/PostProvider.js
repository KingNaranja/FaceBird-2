import React, { Component } from 'react'
// import Post from '../components/Post'


// create a context object 
const PostContext = React.createContext()


export class PostProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  addPosts = posts => {
    // remove duplicate keys if any 
    this.setState( prevState => ({
      posts: posts.filter((post)=> post !== posts)
    }))
   
  }
  

  render() {
    return (
      // consumers can access data from this value prop
      <PostContext.Provider value={{
        posts: this.state.posts,
        addPosts: this.addPosts
      }}>
        {this.props.children}
      </PostContext.Provider>
    )
  }
}

export const PostConsumer = PostContext.Consumer
