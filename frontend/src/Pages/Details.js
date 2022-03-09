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
    const navigate = useNavigate();
    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("x-rapidapi-host", "linkedin-profiles-and-company-data.p.rapidapi.com");
        myHeaders.append("x-rapidapi-key", "739808cfc6mshcfc8d16566f9a9ep148889jsn7ef08c2b588d");
        myHeaders.append("Content-Type", "application/json");
        const data = JSON.parse(localStorage.getItem('User'))
        console.log(data);
        var raw = JSON.stringify({
            "profile_id": data.linkedIn,
            "profile_type": "personal",
            "contact_info": false,
            "recommendations": false,
            "related_profiles": false
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://linkedin-profiles-and-company-data.p.rapidapi.com/profile-details", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result.awards);
                setCompanyArray(result.position_groups)
                setItems(result.skills)
                setAchivementArray(result.awards)
            })
            .catch(error => console.log('error', error));
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




    // const handleCompanyChange = (e) => {
    //     const name = e.target.name
    //     const value = e.target.value
    //     // setCompanies({ ...companies, [name]: value })
    // }

    // const handleAchivementChange = (e) => {
    //     const name = e.target.name
    //     const value = e.target.value
    //     setAchivements({ ...achivements, [name]: value })
    // }

    // const addToList = (e) => {
    //     e.preventDefault();
    //     if (list) {
    //         const newRequirement = { ...list };
    //         setItems([...items, newRequirement]);
    //         setList()
    //     }
    // }

    // const addToCompanyList = (e) => {
    //     e.preventDefault();
    //     if (companies.company_name && companies.title) {
    //         const newRequirement = { ...companies, id: new Date().getTime().toString() };
    //         setCompanyArray([...companyArray, newRequirement]);
    //         setCompanies({ company_name: '', title: '' })
    //         setEditSingleCompany('Add');
    //     }
    // }

    // const addToAchivementList = (e) => {
    //     e.preventDefault();
    //     if (achivements.issuer && achivements.title && achivements.description) {
    //         const newRequirement = { ...achivements, id: new Date().getTime().toString() };
    //         setAchivementArray([...achivementArray, newRequirement]);
    //         setAchivements({ issuer: '', title: '', description: '' })
    //         setEditSingleAchivement('Add');
    //     }
    // }

    // const handleAchivementDelete = (id) => {
    //     const newList = achivementArray.filter((singleAchivement) => singleAchivement.id !== id);
    //     setAchivementArray(newList);
    // };

    // const handleCompanyDelete = (id) => {
    //     const newList = companyArray.filter((singleCompany) => singleCompany.id !== id);
    //     setCompanyArray(newList);
    // };

    // const handleDelete = (id) => {
    //     const newList = items.filter((singleItems, index) => index !== id);
    //     setItems(newList);
    // };

    // const handleCompanyEdit = (id) => {
    //     setEditSingleCompany('Edit');
    //     const filteredItems = companyArray.filter(filterItem => filterItem.id !== id);
    //     const selectedItem = companyArray.find(findItem => findItem.id === id);
    //     setCompanies({ company_name: selectedItem.company_name, title: selectedItem.title })
    //     setCompanyArray(filteredItems);
    // }

    // const handleAchivementEdit = (id) => {
    //     setEditSingleAchivement('Edit');
    //     const filteredItems = achivementArray.filter(filterItem => filterItem.id !== id);
    //     const selectedItem = achivementArray.find(findItem => findItem.id === id);
    //     setAchivements({ issuer: selectedItem.issuer, title: selectedItem.title, description: selectedItem.description })
    //     setAchivementArray(filteredItems);
    // }


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
                        achivementArray ? '' : achivementArray.map((achivement, index) => {
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
                        })
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

export default Details