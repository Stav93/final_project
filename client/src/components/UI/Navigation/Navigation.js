import React, {useContext} from 'react'
import { useAuthContext} from "../../Login/AuthContext"

function Navigation() {
  const ctx =  useAuthContext()
  return (
    <nav>
      <ul>
        {ctx.userLoggedObj.isLoggedIn && (
          <li>
            <a href="/">My Profile</a>
          </li>
        )}
        {ctx.userLoggedObj.isLoggedIn && (
          <li>
            <a href="/">Parks</a>
          </li>
        )}
        {ctx.userLoggedObj.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navigation