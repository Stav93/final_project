import React, {useContext} from 'react'
import Button from '../../UI/Button/Button.js'
import AuthContext from "../../Login/AuthContext"

function UserProfile() {
  const ctx = useContext(AuthContext)
  return (
    <>
    <h1>User Name</h1>
    <Button onClick={ctx.onLogout}>Log Out</Button>
    </>
  )
}

export default UserProfile