import React, { useState, useEffect } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { Button, Card, Container, TextField ,Grid } from '@mui/material'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { getChangePassword, resetChangePassword } from 'src/requests/ChangePassword/ChangePassword';
import { IChangePasswordBody } from 'src/Interface/ChangePassword';
import { toast } from 'react-toastify';
import ErrorMessageForm from 'src/library/ErrorMessage/ErrorMessageForm';
import { ButtonPrimary } from 'src/library/StyledComponents/CommonStyled';

function ChangePassword() {
    const dispatch = useDispatch();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [erroroldPassword, setErroroldPassword] = useState('')
    const [errornewPassword, setErrornewPassword] = useState('')
    const [errorconfirmPassword, setErrorconfirmPassword] = useState('')
    const GetChangePassword: any = useSelector(
        (state: RootState) => state.ChangePassword.ChangePassword
    );


    useEffect(() => {
        if (GetChangePassword !== '') {
            toast.success(GetChangePassword, { toastId: 'success1' })
            dispatch(resetChangePassword());
        }
    }, [GetChangePassword])

    const ValidatePassword = (value) => {
        let returnVal = ''
        if (value === '') {
            returnVal = 'Field is required';
        } else if (value.length < 6) {
            returnVal = 'Enter more than 6 characters'
        }
        return returnVal;
    }

    const Submit = () => {
        let isError = false;
        let sReturn = '';
        if (newPassword === oldPassword && newPassword !== "") {
            setErroroldPassword("Old and New password cannot be same")
            isError = true
        } else
        if (newPassword !== confirmPassword && newPassword !== "") {
            setErrornewPassword("New and Confirm password are not same")
            isError = true
        } else {
            sReturn = ValidatePassword(oldPassword)
            setErroroldPassword(sReturn)
            if (sReturn !== '')
                isError = true
            sReturn = ValidatePassword(newPassword)
            setErrornewPassword(sReturn)
            if (sReturn !== '')
                isError = true
            sReturn = ValidatePassword(confirmPassword)
            setErrorconfirmPassword(sReturn)
            if (sReturn !== '')
                isError = true
        }
        if (!isError) {
            const getChangePasswordBody: IChangePasswordBody =
            {
                UserId: sessionStorage.getItem("UserId"),
                NewPassword: newPassword,
                OldPassword: oldPassword
            }
            dispatch(getChangePassword(getChangePasswordBody));

        }
    }
    return (
        <div>
            <Container>
             
                <PageHeader heading={'Change Password'} />
                <Grid container>
                   <Grid item md={3}></Grid>
                    <Grid item xs={12} md={6}>
                    <Card sx={{ padding: 2 }} >
                    <TextField type='password' fullWidth label="Old Password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)} variant="standard" />
                    <ErrorMessageForm error={erroroldPassword} />
                    <TextField fullWidth label="New Password" value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)} variant="standard" />
                    <ErrorMessageForm error={errornewPassword} />
                    <TextField type='password' fullWidth label="Confirm Password" value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} variant="standard" />
                    <ErrorMessageForm error={errorconfirmPassword} />
                    <br></br>
                   
                    <ButtonPrimary onClick={Submit} variant='contained'>
                        Submit
                    </ButtonPrimary>
                </Card>
                    </Grid>
                </Grid>
           
            </Container>


        </div>
    )
}

export default ChangePassword