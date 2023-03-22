import { useEffect } from "react"

import { ProjectCard } from "../../components/ProjectCard/ProjectCard"

const Landing = ({ user, projects, deleteProject }) => {

  useEffect(() => { 
    
  }, [user, projects])

  return (
    <main className='p-10 text-center font-black text-6xl'>
      <h1>hello {user ? user.name + `, these are you current projects.` : 'friend'}</h1>
      {
        projects &&
        <div className='my-10'>     
          <ul className='m-5 mx-auto w-4/5'>
            {projects.map((project) => (
              <ProjectCard project={project} key={project._id} deleteProject={deleteProject}/>
            ))}
          </ul>
        </div>
      }
    </main>
  )
}

export default Landing
