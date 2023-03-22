import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  const buttonStyle = 'p-3 rounded hover:bg-slate-300 transition duration-900'
  return (
    <nav className='font-light'>
      {user ?
        <ul className='flex bg-slate-200 p-5'>
          <li className='flex-1 pl-5'>Welcome, {user.name}</li>
          <li className='flex-1'><Link to="/" className={buttonStyle}>Home</Link></li>
          <li className='flex-1'><Link to="/addProject"  className={buttonStyle}>Add Project</Link></li>
          <li className='flex-1'><Link to="/change-password" className={buttonStyle}>Change Password</Link></li>
          <li className='pr-5'><Link to="" onClick={handleLogout} className={buttonStyle}>Log Out</Link></li>
        </ul>
      :
        <ul className='flex p-5 bg-slate-200'>
          <li className='flex-1'><Link to="/login" className={buttonStyle}>Log In</Link></li>
          <li><Link to="/signup" className={buttonStyle}>Sign Up</Link></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
