import React, { useState } from 'react'
import { Button, Grid } from '@material-ui/core'
import StepWrapper from '../../components/StepWrapper'
import MainLayout from '../../layouts/MainLayout'

const Create = () => {
  const [activeStep, setActiveStep] = useState(0)
  const next = () => { 
    if(activeStep<2){
      setActiveStep(prev => prev + 1)
    }
   }
  const back = () => { setActiveStep(prev => prev - 1) }
  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        <h1>Track download</h1>
      </StepWrapper>
      <Grid container justifyContent='space-between'>
        <Button disabled={activeStep === 0} onClick={back}>Back</Button>
        <Button onClick={next}>Next</Button>
      </Grid>
    </MainLayout>
  )
}

export default Create