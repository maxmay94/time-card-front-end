import { useEffect } from "react"

import { ProjectCard } from "../../components/ProjectCard/ProjectCard"

const Landing = ({ user, projects, deleteProject, clockIn, clockOut }) => {

  useEffect(() => { 
    
  }, [user, projects])

  return (
    <main className='p-10 text-center font-black text-7xl'>
      <h1 className="drop-shadow-md">hello {user ? user.name + `, these are you current projects.` : 'friend'}</h1>
      {
        projects &&
        <div className='my-10'>     
          <ul className='m-5 mx-auto w-4/5'>
            {projects.map((project) => (
              <ProjectCard 
                key={project._id} 
                deleteProject={deleteProject}
                project={project} 
                user={user}
                clockIn={clockIn}
                clockOut={clockOut}
              />
            ))}
          </ul>
        </div>
      }
    </main>
  )
}

export default Landing
