import { useState, useEffect, useRef } from 'react'

const AddProject = (props) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
  })

  const handleTextChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    console.log(formData)
    e.preventDefault()
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }

  return(
    <div className="text-center p-5 font-light bg-slate-300 w-fit mx-auto rounded my-20">
      <h1 className="m-5 text-2xl">Add a new project</h1>
      <form 
        onSubmit={handleSubmit}
        ref={formElement}
      >
        <div>
          <label htmlFor="projectName-input" className=''>Project Name:</label>
          <input 
            className='m-5 rounded p-1'
            type="text" 
            name="projectName"
            autoComplete="off"
            id="projectName-input"
            value={formData.projectName}
            onChange={handleTextChange}
            placeholder="Project Name"
            required={true}
          />
        </div>
        <div>
          <label htmlFor="projectDescription-input" className=''>Project Description:</label>
          <br />
          <textarea 
            className=' rounded my-3 p-2 h-20 w-full focus:ring-red-500 text-sm'
            type="text" 
            name="projectDescription"
            autoComplete="off"
            id="projectDescription-input"
            value={formData.projectDescription}
            onChange={handleTextChange}
            placeholder="Write a short descriptions of the project here..."
          />
        </div>

        <button 
          className="m-5 bg-slate-400 hover:bg-slate-900 hover:text-slate-200 transition duration-500 p-3 rounded"
          type="submit"
          disabled={!validForm}
        >
          Add Project
        </button>
      </form>

    </div>
  )
}

export default AddProject