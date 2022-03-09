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

function CustomisedDetails() {

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

    const [list, setList] = useState({ skill: '' });
    const [companies, setCompanies] = useState({ company_name: '', title: '' });
    const [achivements, setAchivements] = useState({ issuer: '', title: '', description: '' })
    const [items, setItems] = useState([]);
    const [companyArray, setCompanyArray] = useState([]);
    const [achivementArray, setAchivementArray] = useState([])
    const [editSingleCompany, setEditSingleCompany] = useState('Add');
    const [editSingleAchivement, setEditSingleAchivement] = useState('Add');



    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setList({ ...list, [name]: value })
    }

    const handleCompanyChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setCompanies({ ...companies, [name]: value })
    }

    const handleAchivementChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setAchivements({ ...achivements, [name]: value })
    }

    const addToList = (e) => {
        e.preventDefault();
        if (list.skill) {
            const newRequirement = { ...list, id: new Date().getTime().toString() };
            setItems([...items, newRequirement]);
            setList({ skill: '' })
        }
    }

    const addToCompanyList = (e) => {
        e.preventDefault();
        if (companies.company_name && companies.title) {
            const newRequirement = { ...companies, id: new Date().getTime().toString() };
            setCompanyArray([...companyArray, newRequirement]);
            setCompanies({ company_name: '', title: '' })
            setEditSingleCompany('Add');
        }
    }

    const addToAchivementList = (e) => {
        e.preventDefault();
        if (achivements.issuer && achivements.title && achivements.description) {
            const newRequirement = { ...achivements, id: new Date().getTime().toString() };
            setAchivementArray([...achivementArray, newRequirement]);
            setAchivements({ issuer: '', title: '', description: '' })
            setEditSingleAchivement('Add');
        }
    }

    const handleAchivementDelete = (id) => {
        const newList = achivementArray.filter((singleAchivement) => singleAchivement.id !== id);
        setAchivementArray(newList);
    };

    const handleCompanyDelete = (id) => {
        const newList = companyArray.filter((singleCompany) => singleCompany.id !== id);
        setCompanyArray(newList);
    };

    const handleDelete = (id) => {
        const newList = items.filter((singleItems) => singleItems.id !== id);
        setItems(newList);
    };

    const handleCompanyEdit = (id) => {
        setEditSingleCompany('Edit');
        const filteredItems = companyArray.filter(filterItem => filterItem.id !== id);
        const selectedItem = companyArray.find(findItem => findItem.id === id);
        setCompanies({ company_name: selectedItem.company_name, title: selectedItem.title })
        setCompanyArray(filteredItems);
    }

    const handleAchivementEdit = (id) => {
        setEditSingleAchivement('Edit');
        const filteredItems = achivementArray.filter(filterItem => filterItem.id !== id);
        const selectedItem = achivementArray.find(findItem => findItem.id === id);
        setAchivements({ issuer: selectedItem.issuer, title: selectedItem.title, description: selectedItem.description })
        setAchivementArray(filteredItems);
    }


    return (
        <>

            <Grid container sx={{ padding: '30px' }}>
                <Grid container>
                    <Grid item sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                        <h3>Tech skills</h3>
                        <div>
                            <TextField margin="normal" required id="skill" label="Skill Name" name="skill" value={list.skill} onChange={handleChange} />
                            <Button style={{ border: '3px solid #8080FF', color: '#8080FF', marginLeft: '5px', marginTop: '8%', background: 'rgba(128, 128, 255, 0.2)', fontWeight: '600', fontSize: '1.1em', height: '54px', marginTop: '6%' }} onClick={addToList}>Add +</Button>
                        </div>
                    </Grid>
                    <Grid item sx={{ width: '100%' }}>
                        <Card sx={{ width: '100%' }}>
                            <CardContent>
                                {
                                    items ? <Stack direction="row" spacing={1}>
                                        {
                                            items.map((item) => {
                                                return <Chip label={item.skill} key={item.id} sx={{ backgroundColor: 'rgba(128, 128, 255, 0.2)', marginLeft: '5px' }} variant="outlined" onDelete={() => { handleDelete(item.id) }} />
                                            })
                                        }
                                    </Stack> : <h1>No skills Mentioned</h1>
                                }

                            </CardContent>
                        </Card>

                    </Grid>
                </Grid>
                <Grid container sx={{ marginTop: '5%' }}>
                    <Grid item sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                        <h3>Companies</h3>
                        <div>
                            <TextField margin="normal" required id="company_name" label="Company Name" name="company_name" value={companies.company_name} onChange={handleCompanyChange} />
                            <TextField margin="normal" required id="title" label="Title" name="title" style={{ marginLeft: '5px' }} value={companies.title} onChange={handleCompanyChange} />
                            <Button style={{ border: '3px solid #8080FF', color: '#8080FF', marginLeft: '5px', marginTop: '3%', background: 'rgba(128, 128, 255, 0.2)', fontWeight: '600', fontSize: '1.1em', height: '54px', marginTop: '3%' }} onClick={addToCompanyList}>{editSingleCompany}</Button>
                        </div>
                    </Grid>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell style={{ fontWeight: 'bolder', color: '#212124' }}>Company Names</StyledTableCell>
                                    <StyledTableCell align="right" style={{ fontWeight: 'bolder', color: '#212124' }}>Title</StyledTableCell>
                                    <StyledTableCell align="right" style={{ fontWeight: 'bolder', color: '#212124' }}>Edit Options</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {companyArray.map((singleCompany) => (
                                    <StyledTableRow key={singleCompany.id}>
                                        <StyledTableCell component="th" scope="row">
                                            {singleCompany.company_name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{singleCompany.title}</StyledTableCell>
                                        <StyledTableCell align="right">
                                            <Grid container style={{ display: 'flex', columnGap: '2%', justifyContent: 'flex-end' }}>
                                                <Grid item>
                                                    <DeleteIcon style={{ cursor: 'pointer', color: 'green' }} onClick={() => handleCompanyDelete(singleCompany.id)} />
                                                </Grid>
                                                <Grid item>
                                                    <EditIcon style={{ cursor: 'pointer', color: 'red' }} onClick={() => handleCompanyEdit(singleCompany.id)} />
                                                </Grid>
                                            </Grid>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid container sx={{ marginTop: '5%' }}>
                    <Grid item sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                        <h3>Achivements</h3>
                        <div>
                            <TextField margin="normal" required id="issuer" label="Issuer" name="issuer" value={achivements.issuer} onChange={handleAchivementChange} />
                            <TextField margin="normal" required id="title" label="Title" name="title" style={{ marginLeft: '5px' }} value={achivements.title} onChange={handleAchivementChange} />
                            <TextField margin="normal" required id="description" label="description" name="description" style={{ marginLeft: '5px' }} value={achivements.description} onChange={handleAchivementChange} />
                            <Button style={{ border: '3px solid #8080FF', color: '#8080FF', marginLeft: '5px', marginTop: '3%', background: 'rgba(128, 128, 255, 0.2)', fontWeight: '600', fontSize: '1.1em', height: '54px', marginTop: '2%' }} onClick={addToAchivementList}>{editSingleAchivement}</Button>
                        </div>
                    </Grid>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell style={{ fontWeight: 'bolder', color: '#212124' }}>Issuer</StyledTableCell>
                                    <StyledTableCell align="right" style={{ fontWeight: 'bolder', color: '#212124' }}>Title</StyledTableCell>
                                    <StyledTableCell align="right" style={{ fontWeight: 'bolder', color: '#212124' }}>Description</StyledTableCell>
                                    <StyledTableCell align="right" style={{ fontWeight: 'bolder', color: '#212124' }}>Edit Options</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {achivementArray.map((singleAchivement) => (
                                    <StyledTableRow key={singleAchivement.id}>
                                        <StyledTableCell component="th" scope="row">
                                            {singleAchivement.issuer}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{singleAchivement.title}</StyledTableCell>
                                        <StyledTableCell align="right">{singleAchivement.description}</StyledTableCell>

                                        <StyledTableCell align="right">
                                            <Grid container style={{ display: 'flex', columnGap: '2%', justifyContent: 'flex-end' }}>
                                                <Grid item>
                                                    <DeleteIcon style={{ cursor: 'pointer', color: 'green' }} onClick={() => handleAchivementDelete(singleAchivement.id)} />
                                                </Grid>
                                                <Grid item>
                                                    <EditIcon style={{ cursor: 'pointer', color: 'red' }} onClick={() => handleAchivementEdit(singleAchivement.id)} />
                                                </Grid>
                                            </Grid>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    )
}

export default CustomisedDetails