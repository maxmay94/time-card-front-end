import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProject = ( props ) => {
  const navigate = useNavigate()
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    profile: props.user.profile
  })

  const handleTextChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddProject(props.user, formData)
    navigate('/')
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  return(
    <div className="text-center p-5 font-light bg-slate-300 w-fit mx-auto rounded my-20">
      <h1 className="m-5 text-2xl">Add a new project</h1>
      <form 
        onSubmit={handleSubmit}
        ref={formElement}
      >
        <div>
          <label htmlFor="name-input" className=''>Project Name:</label>
          <input 
            className='m-5 rounded p-1'
            type="text" 
            name="name"
            autoComplete="off"
            id="name-input"
            value={formData.name}
            onChange={handleTextChange}
            placeholder="Project Name"
            required={true}
          />
        </div>
        <div>
          <label htmlFor="description-input" className=''>Project Description:</label>
          <br />
          <textarea 
            className=' rounded my-3 p-2 h-20 w-full focus:ring-red-500 text-sm'
            type="text" 
            name="description"
            autoComplete="off"
            id="description-input"
            value={formData.description}
            onChange={handleTextChange}
            placeholder="Write a short descriptions of the project here..."
            required={false}
          />
        </div>

        <button 
          className="m-5 bg-slate-400 hover:bg-slate-900 hover:text-slate-200 transition duration-500 p-3 rounded"
          type="submit"
          disabled={!validForm}
          // onClick={handleSubmit}
        >
          Add Project
        </button>
      </form>

    </div>
  )
}

export default AddProject