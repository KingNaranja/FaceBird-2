import React, { Component } from 'react'

// create a context object for user's Facebird posts
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

  removePost = text => {
    // finds the post by text and remove from state
    this.setState( prevState => ({
      posts: prevState.posts.filter(post => post.text != text)
    }))
    
  }

  render() {
    return (
      // consumers can access data from this value prop
      <PostContext.Provider value={{
        posts: this.state.posts,
        addPosts: this.addPosts,
        removePost: this.removePost
      }}>
        {this.props.children}
      </PostContext.Provider>
    )
  }
}

export const PostConsumer = PostContext.Consumer
