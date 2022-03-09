import { Button, Card, CardContent, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router";

function Details() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('User'))
        fetch("https://linkedin-profiles-and-company-data.p.rapidapi.com/profile-details", {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "x-rapidapi-host": "linkedin-profiles-and-company-data.p.rapidapi.com",
                "x-rapidapi-key": "5849f2e9c5msha2c0d9a7beb48fdp1a4187jsn9ac52e504279"
            },

            "body": {
                "profile_id": data.linkedinId,
                "profile_type": "personal",
                "contact_info": false,
                "recommendations": false,
                "related_profiles": false
            }
        })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            });
    }, [])

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            background: 'rgba(128, 128, 255, 0.2)',
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: '#F1F1F1',
        },
        '&:nth-of-type(even)': {
            backgroundColor: '#EBEBEB',
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const [list, setList] = useState();
    const companies = [];
    const [achivements, setAchivements] = useState({ issuer: '', title: '', description: '' })
    const [items, setItems] = useState([]);
    const [companyArray, setCompanyArray] = useState([]);
    const [achivementArray, setAchivementArray] = useState([])
    const [editSingleCompany, setEditSingleCompany] = useState('Add');
    const [editSingleAchivement, setEditSingleAchivement] = useState('Add');



    return (
        <><Grid container sx={{ padding: '30px' }}>
            <Grid container>
                <Grid item sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                    <h3>Tech skills</h3>
                </Grid>
                <Grid item sx={{ width: '100%' }}>
                    <Card sx={{ width: '100%' }}>
                        <CardContent>
                            {
                                items ? items.map((item, index) => {
                                    return <Chip label={item} key={item.index} sx={{ backgroundColor: 'rgba(128, 128, 255, 0.2)', marginLeft: '5px', marginBottom: '5px' }} variant="outlined" avatar={<Avatar sx={{ backgroundColor: '#212124', color: 'black' }}>.</Avatar>} />
                                }) : ''
                            }
                        </CardContent>
                    </Card>

                </Grid>
            </Grid>
            <Grid container sx={{ marginTop: '5%' }}>
                <Grid item sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                    <h3>Companies</h3>
                </Grid>
                <Grid container spacing={5}>
                    {companyArray ? companyArray.map((singleCompany, index) => (
                        <Grid item md={3}>
                            <Card>
                                <CardContent>
                                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Grid item>
                                            <img src={singleCompany.company.logo} width={50} height={50} />
                                        </Grid>
                                        <Grid item >
                                            <h6 style={{ textAlign: 'right', margin: '0', padding: '0' }}>{singleCompany.company.name}</h6>
                                            <p style={{ textAlign: 'right', margin: '0', padding: '0', fontSize: '10px' }}>{singleCompany.profile_positions[0].title}</p>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    )) : ''}
                </Grid>
            </Grid>
            <Grid container sx={{ marginTop: '5%' }}>
                <Grid item sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                    <h3>Achievements</h3>
                </Grid>
                <Grid container spacing={5}>
                    {
                        achivementArray ? achivementArray.map((achivement, index) => {
                            return <Grid item key={index}>
                                <Card>
                                    <CardContent>
                                        <h3>{achivement.issuer}</h3>
                                        <p style={{ margin: '0', padding: '0', fontSize: '10px' }}>{achivement.title}</p>
                                        <hr />
                                        <p style={{ margin: '0', padding: '0', textAlign: 'justify' }}>{achivement.description}</p>
                                    </CardContent>
                                </Card>
                            </Grid>
                        }) : ""
                    }
                </Grid>
            </Grid>
        </Grid>
            <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button style={{ width: '50%', marginBottom: '5%', height: '45px', border: '2px solid #8080FF', color: '#8080FF', marginTop: '2%', background: 'rgba(128, 128, 255, 0.2)', fontWeight: '600', fontSize: '1.1em' }} onClick={() => navigate('/dashboard')}>Confirm & Proceed</Button>
            </Grid>


        </>
    )

}

export default Details;
