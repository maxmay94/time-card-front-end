import { useEffect, useState } from "react"

export const ProjectCard = ({ user, project, deleteProject, clockIn, clockOut }) => {
  const [inOut, setInOut] = useState(true)

  useEffect(() => {

  },[inOut])

  const timeIn = () => {
    setInOut(!inOut)
    clockIn(user, project)
  }
  const timeOut = () => {
    setInOut(!inOut)
    clockOut(user, project)
  }


  return(
    <li className='p-8 m-5 bg-slate-200 hover:bg-slate-300 transition duration-700 rounded text-left'>
      <div className="flex">
        <div className="flex-1 w-fit">

          <h1 className='text-4xl'>{project.name}</h1>
          <p className='text-xl'>{project.description}</p>
          
        </div>

        <div className="text-2xl">
          {
            !project.clockedIn ?
              <button 
                className="bg-emerald-500 hover:bg-emerald-600 transition duration-700 p-3 rounded mx-3"
                onClick={() => timeIn()}
                // onClick={() => clockIn(user, project)}
              >
                Clock In
              </button>
            :
              <button 
                className="bg-red-500 hover:bg-red-600 transition duration-700 p-3 rounded mx-3"
                onClick={() => timeOut()}
                // onClick={() => clockOut(user, project)}
              >
                Clock Out
              </button>
          }

          <button 
            className="bg-yellow-500 hover:bg-yellow-600 transition duration-700 p-3 rounded mx-3"
          >
            More
          </button>
          
          <button 
            className="bg-red-500 hover:bg-red-600 transition duration-700 p-3 rounded mx-3"
            onClick={() => deleteProject(user, project)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 text-center text-xl mt-5">
        total time: 00:00:00
        </div>
        <div className="flex-1 text-center text-xl mt-5">
        this week: 00:00:00
        </div>
      </div>
    </li>
  )
}
