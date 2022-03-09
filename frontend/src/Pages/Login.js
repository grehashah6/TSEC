import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const pages = ['News', 'Nearby safe spots'];

const Login = () => {
    const navigate = useNavigate()
    const [list, setList] = useState({ email: '', password: '' });
    const [first_name, setFirstName] = useState('');
    const [personCreds, setPersonCreds] = useState({})

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setList({ ...list, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (list.email && list.password) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "email": list.email,
                "password": list.password
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://tsec-hacks-devhub.herokuapp.com/api/user/login", requestOptions)
                .then(response => response.text())
                .then(result => {
                    localStorage.setItem('token', result)
                    navigate('/dashboard')
                })
                .catch(error => console.log('error', error));
        }
    }
    return (
        <>
            <Navbar color={'white'} />
            <Grid container style={{ padding: '15px', width: '100vw', height: '100vh', position: 'relative' }}>
                <Grid item style={{ background: 'linear-gradient(140.85deg, #6464CA -16.02%, rgba(128, 128, 255, 0.54) 112.29%)', width: '100%', height: '100%', borderRadius: '7px' }}>
                    <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%' }}>
                        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#F1F1F1', width: { md: '40vw', sm: '60vw', xs: '80vw' }, padding: '2%', borderRadius: '3.5px', marginTop: '5%' }}>
                            <Grid item style={{ fontWeight: 'bold', marginBottom: '3%', fontSize: '1.5em', color: '#8080FF' }}>Login</Grid>
                            <Grid item style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Grid container spacing={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%' }}>
                                    <Grid item style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', rowGap: '1.5rem' }}>
                                        <Grid container spacing={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', flexDirection: 'column' }}>
                                            <Grid item style={{ width: '100%' }}>
                                                <TextField required label="Email" id='email' name='email' value={list.email} autoFocus style={{ width: '100%' }} onChange={handleChange} />
                                            </Grid>
                                            <Grid item style={{ width: '100%' }}>
                                                <TextField type='password' required label="Password" id='password' name='password' value={list.password} style={{ width: '100%' }} onChange={handleChange} />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <p style={{ textAlign: 'center', fontSize: '0.89rem', color: '#1F2128' }}>Don't have an account? <span style={{ cursor: 'pointer', color: '#8080FF', fontWeight: 'bold' }} onClick={() => navigate('/signup')}>Sign Up</span></p>
                            </Grid>
                            <Grid item style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {/* <Link to={'/contactlist'} style={{ width: '50%', marginTop: '2%', background: 'linear-gradient(149.06deg, #E02768 5.36%, #C71C7A 85.52%)', color: 'white', fontWeight: '600', width: '100%', fontSize: '1.1em', display: 'flex', justifyContent: 'center', alignItems: 'center' }} state={personCreds} onClick={handleSubmit}>Sign In</Link> */}
                                <Button style={{ width: '87%', height: '45px', border: '2px solid #8080FF', color: '#8080FF', marginTop: '2%', background: 'rgba(128, 128, 255, 0.2)', fontWeight: '600', fontSize: '1.1em' }} onClick={handleSubmit}>Sign In</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Login;