import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import { useNavigate } from 'react-router';

function SignUp() {
    const navigate = useNavigate()
    const [list, setList] = useState({ name: '', contact: '', password: '', email: '' })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setList({ ...list, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const convert = `${list.contact}:${list.password}`
        const token = btoa(convert);
        var formdata = new FormData();
        formdata.append("name", list.name);
        formdata.append("contact", list.contact);
        formdata.append("email", list.email);
        formdata.append("password", list.password);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://safestree.herokuapp.com/api/register/", requestOptions)
            .then(response => response.json())
            .then(result => {
                localStorage.setItem('token', token)
                if (result.name) {
                    navigate('/contactlist')
                }
            })
            .catch(error => console.log('error', error));

    }
    return (
        <>
            <Grid container style={{ padding: '15px', width: '100vw', height: '100vh', position: 'relative' }}>
                <Grid item style={{ background: 'linear-gradient(140.85deg, #6464CA -16.02%, rgba(128, 128, 255, 0.54) 112.29%)', width: '100%', height: '100%', borderRadius: '7px' }}>
                    <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%' }}>
                        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#F1F1F1', width: { md: '50vw', sm: '60vw', xs: '80vw' }, padding: '2%', borderRadius: '3.5px', marginTop: '5%' }}>
                            <Grid item style={{ fontWeight: 'bold', marginBottom: '3%', fontSize: '1.5em', color: '#8080FF' }}>Sign Up</Grid>
                            <Grid item style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Grid container spacing={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%' }}>
                                    <Grid item style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', rowGap: '1.5rem' }}>
                                        <Grid container spacing={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                                            <Grid item md={6}>
                                                <TextField required label="Name" id='name' name='name' value={list.name} style={{ width: '100%' }} onChange={handleChange} autoFocus />
                                            </Grid>
                                            <Grid item md={6}>
                                                <TextField required label="Phone Number" id='contact' name='contact' value={list.contact} style={{ width: '100%' }} onChange={handleChange} />
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                                            <Grid item md={6}>
                                                <TextField required label="Email" id='email' name='email' value={list.email} style={{ width: '100%' }} onChange={handleChange} />
                                            </Grid>
                                            <Grid item md={6}>
                                                <TextField required label="Password" type='password' id='password' name='password' value={list.password} style={{ width: '100%' }} onChange={handleChange} />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <p style={{ textAlign: 'center', fontSize: '0.89rem', color: '#1F2128' }}>Already have an account? <span style={{ cursor: 'pointer', color: '#8080FF', fontWeight: 'bold' }} onClick={() => navigate('/login')}>Login</span></p>
                            </Grid>
                            <Grid item style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Button style={{ width: '50%', border: '2px solid #8080FF', background: 'rgba(128, 128, 255, 0.2)', marginTop: '2%', color: '#8080FF', fontWeight: '600', fontSize: '1.1em' }} onClick={handleSubmit}>Sign Up</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default SignUp