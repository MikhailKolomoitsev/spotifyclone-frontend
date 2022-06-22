import { Card, Grid } from '@material-ui/core'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { ITrack } from '../../types/track'

const index = () => {
    const router = useRouter()
    const tracks: ITrack[] = [
        {
            _id: '1',
            name: "track 1",
            artist: "50 cent",
            text: "Tesxt",
            listens: 5,
            audio: 'http://localhost:5555/audio/',
            picture: 'http://localhost:5555/audio/',
            comments: []
        },
        {
            _id: '1',
            name: "track 1",
            artist: "50 cent",
            text: "Tesxt",
            listens: 5,
            audio: 'http://localhost:3000/audio/',
            picture: 'http://localhost:3000/audio/',
            comments: []
        },
        {
            _id: '1',
            name: "track 1",
            artist: "50 cent",
            text: "Tesxt",
            listens: 5,
            audio: 'http://localhost:3000/audio/',
            picture: 'http://localhost:3000/audio/',
            comments: []
        }
    ]
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