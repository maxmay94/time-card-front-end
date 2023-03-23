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

export const deleteProject = async(user, project) => {
  if(user.profile === project.profile) {
    try{
      await fetch(`${BASE_URL}/${project._id}`, {
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
}

export const clockIn = async(user, project) => {

  console.log('PROJECT SERVICE ---> CLOCK IN: ', project.name, dateTime())
  try {
    const res = await fetch(`${BASE_URL}/clock-in/${project._id}`, {
      method: 'POST',
      headers: { 
        'content-type': 'application/json' ,
        Authorization: `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify({
        in: dateTime(),
      }),
    })
    const data = await res.json()
    return data
  } catch(err) {
    throw err
  }
}
export const clockOut = async(user, project) => {

  console.log('PROJECT SERVICE ---> CLOCK OUT: ', project.name, dateTime())
  try {
    const res = await fetch(`${BASE_URL}/clock-out/${project._id}`, {
      method: 'POST',
      headers: { 
        'content-type': 'application/json' ,
        Authorization: `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify({
        out: dateTime(),
      }),
    })
    const data = await res.json()
    return data
  } catch(err) {
    throw err
  }
}


const dateTime = () => {
  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return date +' '+ time;
}
