import { Grid } from '@mui/material'
import React from 'react'
import DashboardComp from './DashboardComp'
function Dashboard() {
    return (
        <>
            <DashboardComp color={'white'} />
            <Grid container sx={{ paddingTop: '10%' }}>
                <Grid item>
                    <div></div>
                    <b>Khushi Mehta's </b>repo is forked by <b>Vismay Vora</b>
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard