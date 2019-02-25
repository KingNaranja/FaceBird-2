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
  // adds a post to the the state
  addPosts = posts => {
    // remove duplicate keys if any 
    this.setState( prevState => ({
      posts: posts.filter((post)=> post !== posts)
    }))
   
  }
  // finds the post and remove it from state
  removePost = text => {
    
    this.setState( prevState => ({
      posts: prevState.posts.filter(post => post.text != text)
    }))
    
  }

  // update the state of a post
  editPost = (id, post) => {
    const { posts } = this.state
    const { user } = this.props

    // finds the index of the old post within current state
    const postIndex = posts.findIndex( post => post._id == id ) 
    // grab post and owner ID from patch response
    // and create new a  updated post object
    const { post:newPost, post:{ owner:_id } } = post
    newPost.owner = { 
      nickname: user.nickname,
      _id
    }
    // replace the old post from the current state 
    const newPosts = [...posts] // copy of posts
    newPosts[postIndex] = newPost
    // set the state with the new posts
    this.setState({
      posts: newPosts
    })

  }

  render() {
    return (
      // consumers can access data from this value prop
      <PostContext.Provider value={{
        posts: this.state.posts,
        addPosts: this.addPosts,
        removePost: this.removePost,
        editPost: this.editPost
      }}>
        {this.props.children}
      </PostContext.Provider>
    )
  }
}

export const PostConsumer = PostContext.Consumer
