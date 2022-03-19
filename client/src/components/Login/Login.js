import React, {useEffect, useReducer, useContext, useState} from 'react'
import classes from './Login.module.css'
import Input from "../Input/Input.js"
import Button from "../UI/Button/Button.js"
import {useAuthContext} from "./AuthContext.js"


// reducerFunc => (prevState, action) [via dispatchFunc]
// state - האחרון שנמצא שם, לא הראושני, כמו ביוז סטייס
const nameReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 0 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 0 };
  }
  return { value: '', isValid: false };
};

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

// ----------------------------------------------------------------------------------

const Login = (props) => {
  const ctx = useAuthContext();
  const [formIsValid, setFormIsValid] = useState(false);

  // USE_REDUCER
  // const [state, dispatchFunc] = useReducer(reducerFunc, initialState);

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: '', //nameState.value
    isValid: null, //nameState.isValid
  });

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '', //emailState.value
    isValid: null, //emailState.isValid
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '', //passwordState.value
    isValid: null, //passwordState.isValid
  });
  
  const { isValid: nameIsValid} = nameState;
  const { isValid: emailIsValid} = emailState;
  const { isValid: passwordIsValid} = passwordState;

  useEffect(() => {
    // רוצים לנקות את הטיימר כל פעם שהיוזר סיים להקליד
    const identifier = setTimeout(() => {
      console.log("checking for validity")
      setFormIsValid(
        nameIsValid && emailIsValid && passwordIsValid
      );
    }, 500)
    // מחזירים פונקציה אחת
    // cleanup function
    // תרוץ לפני שיוז אפקט תרוץ פעם הבאה
    // חוץ מבפעם הראשונה
    return () => {
      console.log("cleanup")
      clearTimeout(identifier);
    };
  }, [nameIsValid, emailIsValid, passwordIsValid]);

  // פונקציות שמשתמשים בהן כדי לשלוח דרך הדיספאצ 
  //  את האובייקט אקשן שבו יש טייפ ומה שנרצה עוד שישפיע על הסטייט החדש
  const nameChangeHandler = (event) => {
    // actionObj: {type: "", payload: .. }
    dispatchName({type: 'USER_INPUT', val: event.target.value});
  };
  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});
  };
  const passwordChangeHandler = (event) => {
    dispatchPassword({type:"USER_INPUT", val: event.target.value});
  };

  const validateNameHandler = () => {
    dispatchName({type: 'INPUT_BLUR'});
  };
  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };
  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(nameState.value, emailState.value, passwordState.value);
  };
  
  return (
    <>
    <form onSubmit={submitHandler}>
      <Input
      id="name"
      label="Name" 
      type="text" 
      isValid={nameIsValid} 
      value={nameState.value}
      onChange={nameChangeHandler}
      onBlur={validateNameHandler}
      />
     <Input
      id="email"
      label="Email" 
      type="email" 
      isValid={emailIsValid} 
      value={emailState.value}
      onChange={emailChangeHandler}
      onBlur={validateEmailHandler}
      />
      <Input
      id="password"
      label="password" 
      type="password" 
      isValid={passwordIsValid} 
      value={passwordState.value}
      onChange={passwordChangeHandler}
      onBlur={validatePasswordHandler}
      />
      <div className={classes.actions}>
      <Button type="submit" className={classes.btn} disableBtn={!formIsValid}>
          Login
       </Button>
      {/* <Button type="submit" className={classes.btn} disableBtn={!formIsValid}>
          Crate A New Acount
       </Button> */}
      </div>
    </form>
  </>
  );
};

export default Login;
