import apiUrl from '../apiConfig.js'
// take user auth token
// and fetch posts data for Feed 

export const getAllPosts = ( user ) => {
  return fetch(apiUrl + '/posts',{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token token=${user.token}`}
  })
}

export const getLatestPost = ( user ) => {
  return fetch(apiUrl + '/posts/myLatestPost',{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token token=${user.token}`}
  })
}

export const getAllMyPosts = ( user ) => {
  return fetch(apiUrl + '/posts/myPosts',{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token token=${user.token}`}
  })
}

