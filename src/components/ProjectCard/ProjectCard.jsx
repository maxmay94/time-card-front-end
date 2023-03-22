export const ProjectCard = ({ project, deleteProject }) => {

  return(
    <li key={project._id} className='p-8 m-5 bg-slate-200 hover:bg-slate-300 transition duration-700 rounded text-left flex'>
      <div className="flex-1">
        <h1 className='text-4xl'>{project.name}</h1>
        <p className='text-xl'>{project.description}</p>
      </div>
      <div className="text-3xl">
        <button className="bg-emerald-500 hover:bg-emerald-600 transition duration-700 p-3 rounded mx-3">Clock In</button>
        <button className="bg-yellow-500 hover:bg-yellow-600 transition duration-700 p-3 rounded mx-3">Edit</button>
        
        <button 
          className="bg-red-500 hover:bg-red-600 transition duration-700 p-3 rounded mx-3"
          onClick={() => deleteProject(project._id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}