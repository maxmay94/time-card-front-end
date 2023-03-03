import { useEffect } from 'react'
import styles from './Landing.module.css'

const Landing = ({ user, projects }) => {

  console.log(user)

  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      {
        projects &&
        <div>     
          <h2>Projects</h2>
          <ul>
            {projects.map((project) => (
              <li key={project._id}>
                <h1>{project.name}</h1>
              </li>
            ))}
          </ul>
        </div>
      }
    </main>
  )
}

export default Landing
