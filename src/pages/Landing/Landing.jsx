import { useEffect } from "react"

const Landing = ({ user, projects }) => {

  useEffect(() => { 
    
  }, [user])

  return (
    <main className='p-10 text-center font-black text-6xl'>
      <h1>hello {user ? user.name + `, these are you current projects.` : 'friend'}</h1>
      {
        projects &&
        <div className=''>     
          <ul className='m-5'>
            {projects.map((project) => (
              <li key={project._id} className='p-5'>
                <h1 className='text-4xl'>{project.name}</h1>
                <p className='text-xl'>{project.description}</p>
              </li>
            ))}
          </ul>
        </div>
      }
    </main>
  )
}

export default Landing
