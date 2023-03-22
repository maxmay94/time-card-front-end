import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/projects`

export const showProjects = async(user) => {
  try{
    const res = await fetch(`${BASE_URL}/${user.profile}`)
    const data = await res.json()
    return data
  } catch(err) {
    throw err
  }
}

export const addProject = async(user, project) => { 
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: { 
        'content-type': 'application/json' ,
        Authorization: `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify({
        name: project.name,
        description: project.description,
        profile: project.profile,
      }),
    })
    const data = await res.json()
    return data
  } catch(err) {
    throw err
  }
}

export const deleteProject = async(projectId) => {
  try{
    await fetch(`${BASE_URL}/${projectId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${tokenService.getToken()}`
      }
    })
  } catch(err) {
    throw err
  }
}

