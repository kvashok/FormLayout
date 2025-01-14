import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  InputLabel,
  Paper,
  Checkbox,
  FormControl,
  Stack,
  Breadcrumbs,
  Link,
  Card,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AddEquipment = ({ setVisible }) => {
  const [type, setType] = useState("own");
  const [category, setCategory] = useState("");
  const [purchaseInfoOpen, setPurchaseInfoOpen] = useState(false);
  const [otherInfoOpen, setOtherInfoOpen] = useState(false);
  const [warranty, setWarranty] = useState("Yes");
  const [addSignature, setAddSignature] = useState(false);
  const [addDocument, setAddDocument] = useState(false);
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleClick = () => {
    setVisible("table");
  };
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      onClick={() => handleClick("table")}
      style={{ cursor: "pointer", fontSize: "0.75rem" }}
    >
      Equipment Management
    </Link>,
    <Typography
      key="2"
      sx={{ color: "text.primary" }}
      style={{ fontSize: "0.75rem" }}
    >
      Fire Extinguishers
    </Typography>,
  ];
  return (
    <>
      <Box sx={{ py: 1, px: 3, mt: 2 }}>
        <Stack spacing={2} style={{ marginTop: "1rem" }}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
        {/* Form Content */}
        <Card sx={{ mx: 6, my: 2 }}>
          <Box sx={{ p: 2, maxWidth: 1200, mx: "auto" }}>
            <Accordion sx={{ boxShadow: "none", border: "none" }} defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                style={{borderBottom:'1px solid #D3D3D3'}}
              >
                <Typography sx={{ mb: 3 }}>Equipment Information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* Type of Equipment */}
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Type of Equipment
                  </Typography>
                  <RadioGroup
                    row
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <FormControlLabel
                      value="own"
                      control={<Radio />}
                      label="Own"
                    />
                    <FormControlLabel
                      value="rent"
                      control={<Radio />}
                      label="Rent"
                    />
                  </RadioGroup>
                </Box>

                {/* Equipment Name and Category */}
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Equipment Name"
                      variant="outlined"
                      defaultValue="Yellow Tent"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>Equipment Category</InputLabel>
                      <Select
                        value={category}
                        onChange={handleCategoryChange}
                        label="Equipment Category"
                      >
                        <MenuItem value="vehicle">Vehicle</MenuItem>
                        <MenuItem value="machinery">Machinery</MenuItem>
                        <MenuItem value="essentials">Essentials</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                {/* Description */}
                <Box sx={{ mb: 2 }}>
                  <TextField
                    fullWidth
                    label="Description"
                    multiline
                    rows={4}
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    variant="outlined"
                  />
                </Box>

                {/* Equipment Image */}
                <Box
                  sx={{
                    mb: 2,
                    border: "1px dashed #ccc",
                    borderRadius: 2,
                    p: 2,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Add Logo/Image
                  </Typography>
                  <Button variant="contained" component="label">
                    Upload Image
                    <input type="file" hidden />
                  </Button>
                </Box>
              </AccordionDetails>
            </Accordion>
            {/* Collapsible Sections */}

            <Box>
              <Accordion sx={{ boxShadow: "none", border: "none", borderBottom:'1px solid #D3D3D3' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    variant="subtitle1"
                    onClick={() => setPurchaseInfoOpen(!purchaseInfoOpen)}
                    sx={{ cursor: "pointer", mb: 1 }}
                  >
                    Purchase Information
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Purchase Number (PO No)"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Serial Number"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Purchase Type</InputLabel>
                        <Select defaultValue="In store" label="Purchase Type">
                          <MenuItem value="In store">In store</MenuItem>
                          <MenuItem value="Online">Online</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Date of Purchase"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Purchase Price"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Vendor/Supplier"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Vendor/Supplier Locality"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Vendor Contact Number"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography>Warranty Availability</Typography>
                      <RadioGroup
                        row
                        value={warranty}
                        onChange={(e) => setWarranty(e.target.value)}
                      >
                        <FormControlLabel
                          value="Yes"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="No"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Warranty Period"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Payment Method</InputLabel>
                        <Select defaultValue="Online" label="Payment Method">
                          <MenuItem value="Online">Online</MenuItem>
                          <MenuItem value="Offline">Offline</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Box sx={{ mt: 3 }}>
                    <TextField
                      fullWidth
                      label="Description"
                      multiline
                      rows={4}
                      variant="outlined"
                      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                  </Box>

                  {/* Upload Section */}
                  <Box
                    sx={{
                      mt: 3,
                      border: "1px dashed #ccc",
                      borderRadius: 2,
                      p: 2,
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      Upload Bill (if any)
                    </Typography>
                    <Button variant="contained" component="label">
                      Upload Image
                      <input type="file" hidden />
                    </Button>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>

            <Box>
              <Accordion sx={{ boxShadow: "none", border: "none", borderBottom:'1px solid #D3D3D3' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  {/* Other Information */}
                  <Typography
                    variant="subtitle1"
                    onClick={() => setOtherInfoOpen(!otherInfoOpen)}
                    sx={{ cursor: "pointer", mb: 1 }}
                  >
                    Other Information
                  </Typography>
                </AccordionSummary>
                <TextField
                  fullWidth
                  label="Memo"
                  multiline
                  rows={4}
                  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                  variant="outlined"
                  sx={{ mb: 3 }}
                />
                <AccordionDetails>
                  {/* Acknowledgment Section */}
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Acknowledgment: By signing below, I confirm that the
                    service/maintenance has been performed as described above.
                  </Typography>

                  {/* Signature Type */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                      Signature Type
                    </Typography>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={addDocument}
                          onChange={(e) => setAddDocument(e.target.checked)}
                        />
                      }
                      label="Add Document"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={addSignature}
                          onChange={(e) => setAddSignature(e.target.checked)}
                        />
                      }
                      label="Add Signature"
                    />
                  </Box>

                  {/* Signature Area */}
                  {addSignature && (
                    <Paper
                      elevation={1}
                      sx={{
                        border: "1px dashed #ccc",
                        borderRadius: 2,
                        p: 4,
                        textAlign: "center",
                        mt: 2,
                      }}
                    >
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        Draw your signature
                      </Typography>
                      <Box
                        sx={{
                          width: "100%",
                          height: "150px",
                          backgroundColor: "#f9f9f9",
                        }}
                      />
                    </Paper>
                  )}
                </AccordionDetails>
              </Accordion>
            </Box>

            {/* Buttons */}
            <Box sx={{ display: "flex", justifyContent: "space-between",mt:2 }}>
              <Button variant="outlined">Cancel</Button>
              <Button variant="contained" style={{ background: "#FE634E" }}>
                Submit
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default AddEquipment;
