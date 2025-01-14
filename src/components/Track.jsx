import React from 'react'
import {
    Box,
    Breadcrumbs,
    Typography,
    Link,
    Stack,
    Button,
    Card,
    Grid,
    LinearProgress,
    Chip,
    Stepper,
    Step,
    StepLabel
  } from "@mui/material";
  import { CheckCircle } from "@mui/icons-material";
  import { styled } from '@mui/system';
  import TrackLogo from '../assets/Track_Logo.svg'
  
  const CustomStepIcon = styled(CheckCircle)(({ theme }) => ({
    color: '#4caf50',
    fontSize: '32px',
  }));
  
const Track = ({setVisible}) => {
    const handleClick=()=>{
        setVisible('table')
    }
    const breadcrumbs = [
        <Link
          underline="hover"
          key="1"
          color="inherit"
          onClick={handleClick}
          style={{cursor:"pointer",fontSize:'0.75rem'}}
        >
          Equipment Management
        </Link>,
        <Typography key="2" sx={{ color: 'text.primary' }} style={{fontSize:'0.75rem'}}>
          Small group (Item name)
        </Typography>,
      ];
  return (
    <Box sx={{ py: 1, px: 3, mt: 2 }}>
        <Stack spacing={2} style={{marginTop:'1rem'}}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>

    {/* Main Card */}
    <Card sx={{ mt: 2, p: 1.5 }}>
        <Grid container spacing={2}>
          <Grid item xs={1} sm={1}>
          <Card sx={{ mt: 1, p: 1 }}><img src={TrackLogo} style={{width:'4rem',height:'4rem'}}/></Card>
          </Grid>
          <Grid item xs={13} sm={9}>
            <Typography variant="h5" fontWeight="bold">
              UL Fire Extinguishers
              &nbsp;<Chip label="In Use" style={{background:'#FFF1E7',color:'#FE634E',borderRadius:'30px',fontSize:'0.75rem',fontWeight:'400',border:'1px solid #FE634E'}} />
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 2.5 }} style={{fontSize:'12px'}}>
              Program name: <Link href="#">Fire Relief Training</Link> | Current
              Holding: <Link href="#">(Program Manager name)</Link> | Last
              updated date: 12/12/2024
            </Typography>
            <Typography variant="body2" sx={{ mt: 2.5 }} style={{fontSize:'12px'}}>
              Equipment for solid fire accidents includes fire extinguishers,
              hoses, foam agents, protective gear, and tools like axes and
              shovels. Thermal cameras, bulldozers, and communication devices
              enhance firefighting efficiency and ensure responder safety.
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
          <Button variant="contained" style={{background:'#FE634E',color:'#FFFFFF',width:'150px',height:'40px',fontWeight:"400",fontSize:'0.75rem'}}>
            View Details
          </Button>
          </Grid>
        </Grid>

        {/* Progress Bar */}
        <Box sx={{ width: '100%', py: 4 }}>
        <Stepper alternativeLabel>
        <Step active>
          <StepLabel
            StepIconComponent={() => <CustomStepIcon />}
            sx={{ paddingRight: 0 }}
          >
            <Typography variant="body2" textAlign="center" style={{fontSize:'12px',fontWeight:'400'}}>
              Equipment Assigned to <Link href="#">(Program name)</Link>
            </Typography>
            <Typography variant="caption" textAlign="center" style={{fontSize:'10px',fontWeight:'400',color:'#A9A9A9'}}>
              Assigned by <Link href="#">(Program Manager name)</Link>
            </Typography>
          </StepLabel>
        </Step>

        {/* <CustomStepConnector /> */}

        <Step active>
          <StepLabel
            StepIconComponent={() => <CustomStepIcon />}
            sx={{ paddingRight: 0 }}
          >
            <Typography variant="body2" textAlign="center" style={{fontSize:'12px',fontWeight:'400',color:'#353F4F'}}>
              Program Start Date
            </Typography>
            <Typography variant="caption" textAlign="center" style={{fontSize:'12px',fontWeight:'400',color:'#A9A9A9'}}>
              12/05/2024 | 12:05 PM
            </Typography>
          </StepLabel>
        </Step>

        {/* <IncompleteStepConnector /> */}

        <Step>
          <StepLabel
            StepIconComponent={() => (
              <CheckCircle sx={{ color: '#e0e0e0', fontSize: '32px' }} />
            )}
          >
            <Typography variant="body2" textAlign="center" style={{fontSize:'12px',fontWeight:'400',color:'#353F4F'}}>
              Program End Date
            </Typography>
            <Typography variant="caption" textAlign="center" style={{fontSize:'12px',fontWeight:'400',color:'#A9A9A9'}}>
              12/05/2024 | 12:05 PM
            </Typography>
          </StepLabel>
        </Step>
      </Stepper>
      </Box>
      </Card>

    </Box>
  )
}

export default Track