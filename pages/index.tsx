import { Button } from '@material-ui/core'
import React from 'react'
import MainLayout from '../layouts/MainLayout'

const index = () => {
    return (
        <>
            <div className='center'>
                <MainLayout>
                    <h1>Welcome!</h1>
                    <h3>Here are the best tracks ever to find</h3>
                    <Button>Button</Button>
                </MainLayout>
            </div>
            <style jsx>
                {
                    `.center{
                        margin-top:150px;
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                        justify-content:center;
                    }`
                }
            </style>
        </>
    )
}

export default index