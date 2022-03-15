import React from 'react'
import {Link} from "react-router-dom"

function MainHeader() {
  return (
  <>
    <nav >
      <ul>
        {/* {props.isLoggedIn && (
          <li>
            <Link to="/profile">הפרופיל שלי</Link> 
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <Link to="/parks">גינות כלבים</Link>
          </li>
        )} */}
         <li><a href="/">הפרופיל שלי</a></li> 
         <li><a href="/">גינות כלבים</a></li>
      </ul>
    </nav>
  </>
  )
}

export default MainHeader