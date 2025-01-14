import React from 'react'
import {
    Box,
    AppBar,
    Toolbar,
    Select,
    MenuItem,
    FormControl
  } from "@mui/material";
  

const SubHeader = ({setVisible}) => {
  const handleChange=(e)=>{
    if(e.target.value="Equipment Management"){
      setVisible('table')
    }
  }
  return (
    <Box sx={{ mt:0.25 }}>
      <AppBar position="static" sx={{ background: "#fff", color: "#000",height:'4.8125rem',display:'flex',justifyContent:'center' }}>
      <Toolbar>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
        {/* <InputLabel id="demo-simple-select-autowidth-label">Add Equipment</InputLabel> */}
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
        //   value={management}
          label="Management"
          onChange={handleChange}
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
              backgroundColor: 'transparent', 
              color: '#000',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: '#FE634E',
              color: '#000',
              backgroundColor: 'transparent', // Change to a slightly lighter gray on hover
              
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: 'none',
              backgroundColor: 'transparent', // Keep the same hover color on focus
              color: '#000',
            },
          }}
        >
          <MenuItem value="Add Equipment">Add Equipment</MenuItem>
          <MenuItem value="Equipment Management">Equipment Management</MenuItem>
        </Select>
      </FormControl>
        </Toolbar>
      </AppBar>
      </Box>
  )
}

export default SubHeader