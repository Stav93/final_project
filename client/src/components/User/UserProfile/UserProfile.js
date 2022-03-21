import React, { useContext, useState } from 'react'
import Button from '../../UI/Button/Button.js'
import { useAuthContext } from "../../Login/AuthContext"
// import { useUsersContext } from "../../../Context/UsersContext"
import classes from "./UserProfile.module.css"

function UserProfile() {
  const LoginCtx = useAuthContext();
  // const UserCtx = useUsersContext();
  // console.log(UserCtx)
  // const usersArray = [
  //   {
  //     "id": "622cf265ec0d6b987dd8405a",
  //     "name": "Stav Librowski",
  //     "email": "stavush93@hotmail.com",
  //     "city": "תל-אביב",
  //     "dogs": [],
  //     "favouriteParks":[]
  // },
  // {
  //     "id": "622cf336ec0d6b987dd8405b",
  //     "name": "Yair Walden",
  //     "email": "Yair@myEmail.com",
  //     "city": "תל-אביב",
  //     "dogs": [],
  //     "favouriteParks":[]
  // },
  // {
  //     "id": "622cf351ec0d6b987dd8405c",
  //     "name": "Dima Ruban",
  //     "email": "Dima@mail.com",
  //     "city": "תל-אביב",
  //     "dogs": [],
  //     "favouriteParks":[]
  // },
  // {
  //     "id": "622f7d1aec0d6b987dd8407f",
  //     "name": "Boaz Sachs",
  //     "email": "boaz@mail.com",
  //     "city": "תל-אביב",
  //     "dogs": [],
  //     "favouriteParks":[]
  // }
  // ]; 

  return (
    <>
    <h1>{LoginCtx.userLoggedObj.name}</h1>
    {/* {LoginCtx.users
        .map(user => {
        return (
          <h1>{user.name}</h1>
        );
      })} */}
    {/* <Button onClick={ctx.onLogout}>Log Out</Button> */}
    </>
  )
}

export default UserProfile