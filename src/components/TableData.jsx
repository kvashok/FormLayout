import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Paper,
  Menu
} from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";

const TableData = ({ initialColumn, data, handleAction }) => {
  console.log(data);
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ py: 1, px: 3, mt: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Equipment
        </Typography>
        <Box sx={{ display: "flex", mb: 2 }}>
          <Select size="small" sx={{ width: 150, marginRight: "1rem" }}>
            <MenuItem value="">All</MenuItem>
            {/* {data.map((category,rowIndex)=>{
              return(
              <MenuItem key={`${rowIndex}`} value={category.equipment_category}>{category.equipment_category}</MenuItem>
              )}
              )}; */}
          </Select>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <Search />
                </IconButton>
              ),
            }}
            sx={{ width: "300px" }}
          />
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#fff4e6" }}>
              {initialColumn.map((col, index) => (
                <TableCell key={index} style={{fontSize:'0.75rem'}}>{col.toUpperCase()}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                  <TableCell key={`${rowIndex}`} style={{fontSize:'0.75rem'}}>{row.equipment_name || "N/A"}</TableCell>
                  <TableCell key={`${rowIndex}`} style={{fontSize:'0.75rem'}}>{row.equipment_category || "N/A"}</TableCell>
                  <TableCell key={`${rowIndex}`} style={{fontSize:'0.75rem'}}>{row.equipment_type || "N/A"}</TableCell>
                  <TableCell key={`${rowIndex}`} style={{fontSize:'0.75rem'}}>{row.vendor_supplier_location || "N/A"}</TableCell>
                  <TableCell key={`${rowIndex}`} style={{fontSize:'0.75rem'}}>{row.equipment_descriptions || "N/A"}</TableCell>
                  <TableCell key={`${rowIndex}`} style={{fontSize:'0.75rem'}}>{row.equipment_name || "N/A"}</TableCell>
                  <TableCell key={`${rowIndex}`} style={{fontSize:'0.75rem'}}>{row.changed_by_detail.full_name || "N/A"}</TableCell>
                  <TableCell key={`${rowIndex}`} style={{fontSize:'0.75rem'}}>{row.equipment_deactivated_date || "N/A"}</TableCell>
                  <TableCell key={`${rowIndex}`} style={{fontSize:'0.75rem'}}><Chip label={row.equipment_status || "N/A"} style={{background:'#FFF1E7',color:'#FE634E',borderRadius:'0.25rem'}} /></TableCell>
                  <TableCell key={`${rowIndex}`} style={{fontSize:'0.75rem'}}><IconButton aria-label="more" id="long-button" onClick={handleClick} aria-controls={open ? 'long-menu' : undefined}aria-expanded={open ? 'true' : undefined}aria-haspopup="true"><MoreVert /></IconButton>
                  <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              width: '15ch',
            },
          },
        }}
      >
          <MenuItem key="View" onClick={(e)=>handleAction(e,'view')} style={{fontSize:'0.75rem'}}>View</MenuItem>
          <MenuItem key="Track Equipment" onClick={(e)=>handleAction(e,'track')} style={{fontSize:'0.75rem'}}>Track Equipment</MenuItem>
      </Menu>
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableData;
