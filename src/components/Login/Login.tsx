import React, { useState } from 'react'
import {  Grid, TextField } from '@mui/material';
import { UserLogin, resetUserLogin } from 'src/requests/Admin/RequestUserLogin';
import { IUserLoginBody } from 'src/Interface/Admin/IUserLogin';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ErrorMessageForm from 'src/library/ErrorMessage/ErrorMessageForm';
import { Container } from '@mui/material';
import { ButtonPrimary } from 'src/library/StyledComponents/CommonStyled';
function Login() {
  const dispatch = useDispatch();
  const [username, setUserName] = useState('');
  const [usernameError, setUserNameError] = useState('');
  const [password, setPassword] = useState('');
  const [passworderror, setPassworderror] = useState('')
  const navigate = useNavigate();

  const GetUserLogin: any = useSelector(
    (state: RootState) => state.UserLogin.UserLogin
  );


  const UserLoginBody: IUserLoginBody =
  {
    EmailIdOrPhone: username,
    LoginPassword: password
  }

  useEffect(() => {
    if (localStorage.getItem("auth") !== null) {
      setSession(JSON.parse(localStorage.getItem("auth")));
      NavigateByRole();
    }
    else
      if (GetUserLogin !== null) {
        if (GetUserLogin.UserRoleId === 0)
          toast.error("UserId and or Password is incorrect", { toastId: 'success1' })
        else {
          localStorage.setItem("auth", JSON.stringify(GetUserLogin));
          setSession(GetUserLogin);
          // setSession()
          dispatch(resetUserLogin());
          NavigateByRole();
        }
      }
}, [GetUserLogin])

  const NavigateByRole = () => {
    if (sessionStorage.getItem("UserRoleId") === "3")
      navigate('/extended-sidebar/Student/HomeWork');
    else if (sessionStorage.getItem("UserRoleId") === "2")
      navigate('/extended-sidebar/Student/AddHomeWork');
    else
      navigate('/extended-sidebar/Student/AddPhoto');
  }
  const setSession = (GetUserLogin) => {
    sessionStorage.setItem("UserId", GetUserLogin.UserId)
    sessionStorage.setItem("UserRoleId", GetUserLogin.UserRoleId)
    sessionStorage.setItem("ClassId", GetUserLogin.ClassId)
    sessionStorage.setItem("UserName", GetUserLogin.UserName)
    sessionStorage.setItem("ClassDivisionName", GetUserLogin.ClassDivisionName)
    sessionStorage.setItem("ClassDivisionId", GetUserLogin.ClassDivisionId)
    sessionStorage.setItem("EmailId", GetUserLogin.EmailId)
    sessionStorage.setItem("BirthDate", GetUserLogin.BirthDate)
    sessionStorage.setItem("PhoneNo", GetUserLogin.PhoneNo)
  }

  const emailRegExp = /^\S+@\S+\.\S+$/;
  const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  const onSubmit = () => {
    let isError = false;
    if (password === '') {
      setPassworderror("Password is Required")
      isError = true
    } else {
      setPassworderror('')
    }

    if (username === '') {
      setUserNameError("Username is Required")
      isError = true
    }
    else if (!emailRegExp.test(username) && !phoneRegExp.test(username)) {
      setUserNameError('Invalid email address or Phone number');
      isError = true
    }
    else {
      setUserNameError('')

    }
    if (!isError)
      dispatch(UserLogin(UserLoginBody));

  }



  return (
    <Container maxWidth={'xs'} >
      <Grid container   alignItems="center" >
      <Grid item xs={12} sx={{ mt: "30px" }} display={'flex'}  justifyContent={'center'}>
        <img src='/images/CarService1.png' style={{ width: 200 }} />
      </Grid>
    
      <Grid item xs={12} alignContent={'center'} >
      <TextField value={username} onChange={(e) => {setUserName(e.target.value) }}
        label={'username'} />

      <TextField type='password' value={password} 
      onChange={(e) => {setPassword(e.target.value) }}
        label={'password'} />
      <ErrorMessageForm error={passworderror} />
      </Grid>
      <Grid item xs={12} alignContent={'center'} mt={1} >

      <ButtonPrimary onClick={onSubmit} >Login</ButtonPrimary>
      </Grid>
      </Grid>
    </Container>
  )
}

export default Login