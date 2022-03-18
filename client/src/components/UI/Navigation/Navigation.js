import React, {useContext} from 'react'
import AuthContext from "../../Login/AuthContext"

function Navigation() {
  const ctx = useContext(AuthContext)
  return (
    <nav>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">My Profile</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Parks</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navigation