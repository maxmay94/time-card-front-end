import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/projects`

export const showProjects = async(user) => {
  console.log('SHOW PROJECTS ',user)
  try{
    const res = await fetch(`${BASE_URL}/${user._id}`)
    const data = await res.json()
    return data
  } catch(err) {
    throw err
  }
}