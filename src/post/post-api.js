import apiUrl from '../apiConfig.js'
// takes user token
// to CRUD posts 

export const createPost = ( user, post ) => {
  return fetch(apiUrl + '/posts',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token token=${user.token}`
    },
    body: JSON.stringify({
      post: {
        text: post
      }
    })
  })
}

export const updatePost = ( user, newPost, postId ) => {
  return fetch(apiUrl + `/posts/${postId}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token token=${user.token}`
    },
    body: JSON.stringify({
      post: {
        text: newPost
      }
    })
  })
}

export const deletePost = ( user, postId )=> {
  return fetch(apiUrl + `/posts/${postId}`,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token token=${user.token}`}
  })
}

export const getOnePost = ( user, postId ) => {
  return fetch(apiUrl + `/posts/${postId}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token token=${user.token}`}
  })
}