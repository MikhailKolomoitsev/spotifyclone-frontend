import { Button, Grid, TextField } from '@material-ui/core'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { ITrack } from '../../types/track'

const TrackPage = () => {
    const router = useRouter()
    const track: ITrack = {
        _id: '1',
        name: "track 1",
        artist: "50 cent",
        text: "Tesxt",
        listens: 5,
        audio: 'http://localhost:5555/audio/',
        picture: 'http://localhost:5555/audio/',
        comments: [{ _id: 'unique id', username: 'First User', text: 'Text Wow what?' }]
    }
    return (
        <MainLayout>
            <Button
                variant='outlined'
                style={{ fontSize: 32 }}
                onClick={() => router.push('/tracks')}>
                To List
            </Button>
            <Grid style={{ margin: '20px 0' }}>
                <img src={track.picture} alt='' width={200} height={200} />
                <div style={{ margin: '20px 0' }} >
                    <h1>Name - {track.name} </h1>
                    <h2>Singer - {track.artist} </h2>
                    <h2>Listned  - {track.listens} </h2>
                </div>
            </Grid>
            <h2>Lyrics</h2>
            <p>{track.text}</p>
            <h2>Comments</h2>
            <Grid>
                <TextField label='Your name' fullWidth ></TextField>
                <TextField label='Comment' fullWidth multiline rows={4}></TextField>
                <Button>Send</Button>
            </Grid>
            <div>
                {track.comments.map(c =>
                    <div key={c._id}>
                        <h4>{c.username}</h4>
                        <div>{c.text}</div>
                    </div>
                )}
            </div>
        </MainLayout>
    )
}

export default TrackPage