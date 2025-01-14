import React from 'react'
import {
    Box,
    AppBar,
    Toolbar,
    Select,
    MenuItem,
    FormControl,
    InputLabel
  } from "@mui/material";
  import { styled } from "@mui/system";
  

const SubHeader = ({setVisible}) => {
  // const handleChange=(e)=>{
  //   if(e.target.value="Equipment Management"){
  //     setVisible('table')
  //   }
  // }

  const [value, setValue] = React.useState("Equipment Management");

  const handleChange = (e) => {
    if(e.target.value === "Equipment Management"){
          setVisible('table')
        }
    setValue(e.target.value);
  };

  const CustomFormControl = styled(FormControl)(({ theme }) => ({
    minWidth: 200,
    height:"3rem",
    backgroundColor: "#FFF4E5",
    borderRadius: "8px",
    padding: "0px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  }));
  
  const CustomSelect = styled(Select)({
    color: "#FF5722",
    fontWeight: "bold",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "&:focus": {
      backgroundColor: "#FFF4E5",
    },
    fontSize:'0.8rem'
  });

  return (
    <Box sx={{ mt:0.25 }}>
      <AppBar position="static" sx={{ background: "#fff", color: "#000",height:'4.8125rem',display:'flex',justifyContent:'center' }}>
      <Toolbar>
      <CustomFormControl>
      <CustomSelect
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Equipment Management" }}
      >
        <MenuItem value="Equipment Management">Equipment Management</MenuItem>
        <MenuItem value="Add Equipment">Add Equipment</MenuItem>
      </CustomSelect>
    </CustomFormControl>
        </Toolbar>
      </AppBar>
      </Box>
  )
}

export default SubHeader