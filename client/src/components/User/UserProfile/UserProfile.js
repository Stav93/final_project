import React, { useContext } from 'react'
import Button from '../../UI/Button/Button.js'
import { useAuthContext } from "../../Login/AuthContext"
import { useUsersContext } from "../../../Context/UsersContext"
import classes from "./UserProfile.module.css"

function UserProfile() {
  const LoginCtx = useAuthContext();
  const UserCtx = useUsersContext();
  console.log(UserCtx.users)
  return (
    <>
    {/* <h1>{LoginCtx.userLoggedObj.name}</h1> */}
    {UserCtx.users
        .map(user => {
        return (
          <h1>{user.name}</h1>
        );
      })}
    {/* <Button onClick={ctx.onLogout}>Log Out</Button> */}
    </>
  )
}

export default UserProfile