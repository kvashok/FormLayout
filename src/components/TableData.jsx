import React, { useState } from "react";
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
  Menu,
  Checkbox
} from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";

const TableData = ({ initialColumn, data, handleAction }) => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default to 'All' categories
  const [selectedRow, setSelectedRow] = useState([]);
  const [selected, setSelected] = React.useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = filteredData.map((row) => row.id);
      setSelected(newSelected);
      // Console log all selected objects
      console.log('Selected Objects:', filteredData);
      return;
    }
    setSelected([]);
    console.log('Selected Objects:', []);
  };

  const handleMenuClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  const handleCheckboxClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
    
    // Get and console log the selected objects
    const selectedObjects = filteredData.filter(row => 
      newSelected.includes(row.id)
    );
    console.log('Selected Objects:', selectedObjects);
  };

  // Filter data based on selected category and search term
  const filteredData = data.filter((row) => {
    const matchesCategory =
      selectedCategory === "All" || row.equipment_category === selectedCategory;
    const matchesSearch = search
      ? Object.values(row).some((value) =>
          value?.toString().toLowerCase().includes(search.toLowerCase())
        )
      : true;
    return matchesCategory && matchesSearch;
  });
  
  return (
    <Box sx={{ py: 1, px: 3, mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Equipment
        </Typography>
        <Box sx={{ display: "flex", mb: 2 }}>
          <Select
            size="small"
            sx={{ width: 150, marginRight: "1rem" }}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <MenuItem value="All">All</MenuItem>
            {data
              .map((item) => item.equipment_category || "N/A")
              .filter(
                (value, index, self) => value && self.indexOf(value) === index
              )
              .map((category, index) => (
                <MenuItem key={index} value={category}>
                  {category}
                </MenuItem>
              ))}
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
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                indeterminate={selected.length > 0 && selected.length < filteredData.length}
                checked={filteredData.length > 0 && selected.length === filteredData.length}
                onChange={handleSelectAllClick}
                inputProps={{
                  'aria-label': 'select all equipment',
                }}
              />
            </TableCell>
              {initialColumn.map((col, index) => (
                <TableCell
                  key={index}
                  style={{ fontSize: "0.75rem", fontWeight: "700" }}
                >
                  {col.toUpperCase()}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.length > 0 ? (
              filteredData.map((row, rowIndex) => {
                const isItemSelected = selected.includes(row.id);
                return(
                <TableRow key={rowIndex}>
                  <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        onChange={(event) => handleCheckboxClick(event, row.id)}
                        inputProps={{
                          'aria-labelledby': `table-checkbox-${row.id}`,
                        }}
                      />
                    </TableCell>
                  <TableCell style={{ fontSize: "0.75rem" }}>
                    {row.equipment_name || "N/A"}
                  </TableCell>
                  <TableCell style={{ fontSize: "0.75rem" }}>
                    {row.equipment_category || "N/A"}
                  </TableCell>
                  <TableCell style={{ fontSize: "0.75rem" }}>
                    {row.equipment_type || "N/A"}
                  </TableCell>
                  <TableCell style={{ fontSize: "0.75rem" }}>
                    {row.vendor_supplier_location || "N/A"}
                  </TableCell>
                  <TableCell style={{ fontSize: "0.75rem" }}>
                    {row.equipment_descriptions || "N/A"}
                  </TableCell>
                  <TableCell style={{ fontSize: "0.75rem" }}>
                    {row.equipment_name || "N/A"}
                  </TableCell>
                  <TableCell style={{ fontSize: "0.75rem" }}>
                    {row.changed_by_detail.full_name || "N/A"}
                  </TableCell>
                  <TableCell style={{ fontSize: "0.75rem" }}>
                    {row.equipment_deactivated_date || "N/A"}
                  </TableCell>
                  <TableCell style={{ fontSize: "0.75rem" }}>
                    {row.equipment_status === "available" ? (
                      <Chip
                        label={row.equipment_status || "N/A"}
                        sx={{
                          background: "#EBFFF3",
                          color: "#16B681",
                          borderRadius: "0.25rem",
                          border: "1px solid #16B681",
                        }}
                      />
                    ) : (
                      <Chip
                        label={row.equipment_status || "N/A"}
                        sx={{
                          background: "#FFF1E7",
                          color: "#FE634E",
                          borderRadius: "0.25rem",
                          border: "1px solid #FE634E",
                        }}
                      />
                    )}
                  </TableCell>
                  <TableCell style={{ fontSize: "0.75rem" }}>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      onClick={(e) => handleMenuClick(e, row)}
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                    >
                      <MoreVert />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      MenuListProps={{ "aria-labelledby": "long-button" }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      slotProps={{
                        paper: {
                          style: {
                            width: "15ch",
                          },
                        },
                      }}
                    >
                      <MenuItem
                        key="View"
                        onClick={(e) => handleAction(e, "view", selectedRow)}
                        style={{ fontSize: "0.75rem" }}
                      >
                        View
                      </MenuItem>
                      <MenuItem
                        key="Track Equipment"
                        onClick={(e) => handleAction(e, "track", selectedRow)}
                        style={{ fontSize: "0.75rem" }}
                      >
                        Track Equipment
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              )})
            ) : (
              <TableRow>
                <TableCell
                  colSpan={initialColumn.length}
                  style={{ textAlign: "center" }}
                >
                  Loading....
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableData;
