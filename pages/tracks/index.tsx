import { Card, Grid } from '@material-ui/core'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import MainLayout from '../../layouts/MainLayout'

const index = () => {
    const router = useRouter()
    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{ width: '900px' }}>
                    <Box p={2}>
                        <Grid container justifyContent='space-between'>
                            <h3>List of tracks</h3>
                            <Button onClick={() => router.push('/tracks/create')}>
                                Download
                            </Button>
                        </Grid>
                    </Box>
                </Card>
            </Grid>
        </MainLayout>
    )
}

export default index