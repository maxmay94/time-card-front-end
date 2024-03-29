// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import AddProject from './pages/AddProject/AddProject'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as projectService from './services/projectService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [projects, setProjects] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleShowProjects = async(user) => {
    const projects = await projectService.showProjects(user)
    setProjects(projects)
  }

  const handleAddProject = async(user, project) => {
    await projectService.addProject(user, project)
    const projectData = await projectService.showProjects(user)
    setProjects(projectData)    
  }

  const handleClockIn = async(user, project) => {
    await projectService.clockIn(user, project)
  }

  const handleClockOut = async(user, project) => {
    await projectService.clockOut(user, project)
  }

  const handleDeleteProject = async(user, projectID) => {
    try{
      await projectService.deleteProject(user, projectID)
      const projectData = await projectService.showProjects(user)
      setProjects(projectData)    
    } catch(err) {
      throw err
    }
  }

  useEffect(() => {
    if(user) handleShowProjects(user)
    else setProjects([])
  }, [user])


  return (
    <div className='bg-slate-100 h-fit'>
      <NavBar user={user} handleLogout={handleLogout} />
      
      <Routes>

        <Route 
          path="/" 
          element={
            <Landing 
              user={user} 
              handleShowProjects={handleShowProjects} 
              projects={projects} 
              deleteProject={handleDeleteProject}
              clockIn={handleClockIn}
              clockOut={handleClockOut}
            />
          } 
        />

        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />

        <Route
          path="/login"
          element={
            <Login handleSignupOrLogin={handleSignupOrLogin} />
          }
        />

        <Route 
          path="/addProject"
          element={
            <ProtectedRoute user={user}>
              <AddProject user={user} handleAddProject={handleAddProject} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />

        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />

      </Routes>
    </div>
  )
}

export default App
