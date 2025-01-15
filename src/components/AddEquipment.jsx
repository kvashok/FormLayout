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
import UploadIcon from "../assets/Upload_icon.svg";
import UploadSignature from "../assets/Upload_Signature.svg";

const AddEquipment = ({ setVisible, setValue }) => {
  const [expanded, setExpanded] = useState("panel1"); // State for expanded accordion

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [type, setType] = useState("own");
  const [category, setCategory] = useState("");
  const [purchaseInfoOpen, setPurchaseInfoOpen] = useState(false);
  const [otherInfoOpen, setOtherInfoOpen] = useState(false);
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleClick = () => {
    setVisible("table");
    setValue("Equipment Management");
  };
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      onClick={handleClick}
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
  const [selected, setSelected] = useState("");

  const handleChexckbox = (event) => {
    setSelected(event.target.name);
  };
  const handleSignatureChange = (e, type) => {
    const { name } = e.target;
    setSelected((prev) => (prev === name ? "" : name));
  };
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
            <Accordion
            expanded={expanded === "panel1"}
            onChange={handleAccordionChange("panel1")}
              sx={{ boxShadow: "none", border: "none" }}
              defaultExpanded
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                style={{ borderBottom: "1px solid #D3D3D3" }}
              >
                <Typography sx={{ mb: 3 }}>Equipment Information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* Type of Equipment */}
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    style={{ fontSize: "14px" }}
                  >
                    Type of Equipment{" "}
                    <span style={{ color: "#FF0000" }}>*</span>
                  </Typography>
                  <RadioGroup
                    row
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <FormControlLabel
                      value="own"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#FE634E", // Change the checkmark color
                              backgroundColor: "#FE634E", // Change background color for selected
                              "& .MuiSvgIcon-root": {
                                backgroundColor: "#FFF8F2", // Optional: icon background for contrast
                                borderRadius: "50%",
                                width: "1rem",
                                height: "1rem",
                              },
                            },
                            "&:not(.Mui-checked)": {
                              backgroundColor: "#FFF8F2", // Unselected background
                            },
                          }}
                        />
                      }
                      label="Own"
                      sx={{
                        backgroundColor: type === "own" ? "#FE634E" : "#FFF8F2",
                        borderRadius: 2,
                        px: 2,
                        py: 1,
                        color: type === "own" ? "#FFF" : "#000",
                        // '&:hover': {
                        //   backgroundColor: type === 'own' ? '#FE825B' : '#FFE0CC',
                        // },
                      }}
                      style={{ width: "5rem", height: "1.5rem" }}
                    />
                    <FormControlLabel
                      value="rent"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#FE634E",
                              backgroundColor: "#FE634E",
                              "& .MuiSvgIcon-root": {
                                backgroundColor: "#FFF8F2",
                                borderRadius: "50%",
                                width: "1rem",
                                height: "1rem",
                              },
                            },
                            "&:not(.Mui-checked)": {
                              backgroundColor: "#FFF8F2",
                            },
                          }}
                        />
                      }
                      label="Rent"
                      sx={{
                        backgroundColor:
                          type === "rent" ? "#FE634E" : "#FFF8F2",
                        borderRadius: 2,
                        px: 2,
                        py: 1,
                        color: type === "rent" ? "#FFF" : "#000",
                        // '&:hover': {
                        //   backgroundColor: type === 'rent' ? '#FE825B' : '#FFE0CC',
                        // },
                      }}
                      style={{ width: "5rem", height: "1.5rem" }}
                    />
                  </RadioGroup>
                </Box>

                {/* Equipment Name and Category */}
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      style={{ fontSize: "14px" }}
                    >
                      Equipment Name <span style={{ color: "#FF0000" }}>*</span>
                    </Typography>
                    <TextField
                      fullWidth
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            border: "none",
                          },
                        },
                      }}
                      style={{ background: "#FAFAFA" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      style={{ fontSize: "14px" }}
                    >
                      Equipment Category{" "}
                      <span style={{ color: "#FF0000" }}>*</span>
                    </Typography>
                    <FormControl
                      fullWidth
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            border: "none",
                          },
                        },
                      }}
                      style={{ background: "#FAFAFA" }}
                    >
                      {/* <InputLabel>Equipment Category <span style={{color:'#FF0000'}}>*</span></InputLabel> */}
                      <Select value={category} onChange={handleCategoryChange}>
                        <MenuItem value="vehicle">Vehicle</MenuItem>
                        <MenuItem value="machinery">Machinery</MenuItem>
                        <MenuItem value="essentials">Essentials</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                {/* Description */}
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    style={{ fontSize: "14px" }}
                  >
                    Descriptions
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "none",
                        },
                      },
                    }}
                    style={{ background: "#FAFAFA" }}
                  />
                </Box>

                {/* Equipment Image */}
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{ fontSize: "14px" }}
                >
                  Equipment Image
                </Typography>
                <Box
                  sx={{
                    mb: 2,
                    border: "1px dashed #ccc",
                    borderRadius: 2,
                    p: 2,
                    textAlign: "center",
                  }}
                >
                  <Button component="label">
                    <img src={UploadIcon} />
                    <input type="file" hidden />
                  </Button>
                </Box>
              </AccordionDetails>
            </Accordion>
            {/* Collapsible Sections */}

            <Box>
              <Accordion
              expanded={expanded === "panel2"}
              onChange={handleAccordionChange("panel2")}
                sx={{
                  boxShadow: "none",
                  border: "none",
                  borderBottom: "1px solid #D3D3D3",
                }}
              >
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
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        style={{ fontSize: "14px" }}
                      >
                        Purchase number (PO. No)
                      </Typography>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                          },
                        }}
                        style={{ background: "#FAFAFA" }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        style={{ fontSize: "14px" }}
                      >
                        Serial Number
                      </Typography>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                          },
                        }}
                        style={{ background: "#FAFAFA" }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        style={{ fontSize: "14px" }}
                      >
                        Purchase Type
                      </Typography>
                      <FormControl
                        fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                          },
                        }}
                        style={{ background: "#FAFAFA" }}
                      >
                        <Select defaultValue="In store" label="Purchase Type">
                          <MenuItem value="In store">In store</MenuItem>
                          <MenuItem value="Online">Online</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        style={{ fontSize: "14px" }}
                      >
                        Date of Purchase
                      </Typography>
                      <TextField
                        fullWidth
                        type="date"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                          },
                        }}
                        style={{ background: "#FAFAFA" }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        style={{ fontSize: "14px" }}
                      >
                        Purchase Price
                      </Typography>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                          },
                        }}
                        style={{ background: "#FAFAFA" }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        style={{ fontSize: "14px" }}
                      >
                        Vendor/Supplier
                      </Typography>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                          },
                        }}
                        style={{ background: "#FAFAFA" }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        style={{ fontSize: "14px" }}
                      >
                        Vendor/Supplier Locality
                      </Typography>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                          },
                        }}
                        style={{ background: "#FAFAFA" }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        style={{ fontSize: "14px" }}
                      >
                        Vendor Contact Number
                      </Typography>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                          },
                        }}
                        style={{ background: "#FAFAFA" }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography>Warranty Availability</Typography>
                      <Box sx={{ display: "flex", gap: 2 }}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={selected === "Yes"}
                              onChange={handleChexckbox}
                              name="Yes"
                            />
                          }
                          label="Yes"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={selected === "No"}
                              onChange={handleChexckbox}
                              name="No"
                            />
                          }
                          label="No"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        style={{ fontSize: "14px" }}
                      >
                        Warranty Period
                      </Typography>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                          },
                        }}
                        style={{ background: "#FAFAFA" }}
                      />
                    </Grid>
                    <Grid item xs={24} sm={12}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        style={{ fontSize: "14px" }}
                      >
                        Warranty Period
                      </Typography>
                      <FormControl
                        fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                          },
                        }}
                        style={{ background: "#FAFAFA" }}
                      >
                        <Select defaultValue="Online">
                          <MenuItem value="Online">Online</MenuItem>
                          <MenuItem value="Offline">Offline</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Box sx={{ mt: 3 }}>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      style={{ fontSize: "14px" }}
                    >
                      Warranty Period
                    </Typography>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            border: "none",
                          },
                        },
                      }}
                      style={{ background: "#FAFAFA" }}
                    />
                  </Box>

                  {/* Upload Section */}
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    style={{ fontSize: "14px" }}
                  >
                    Upload bill (if any)
                  </Typography>
                  <Box
                    sx={{
                      mb: 2,
                      border: "1px dashed #ccc",
                      borderRadius: 2,
                      p: 2,
                      textAlign: "center",
                    }}
                  >
                    <Button component="label">
                      <img src={UploadIcon} />
                      <input type="file" hidden />
                    </Button>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        style={{ fontSize: "14px" }}
                      >
                        Address Line 1
                      </Typography>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                          },
                        }}
                        style={{ background: "#FAFAFA" }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        style={{ fontSize: "14px" }}
                      >
                        Adderss Line 2
                      </Typography>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                          },
                        }}
                        style={{ background: "#FAFAFA" }}
                      />
                    </Grid>
                    <Grid item xs={8} sm={4}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        style={{ fontSize: "14px" }}
                      >
                        City
                      </Typography>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                          },
                        }}
                        style={{ background: "#FAFAFA" }}
                      />
                    </Grid>
                    <Grid item xs={8} sm={4}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        style={{ fontSize: "14px" }}
                      >
                        State
                      </Typography>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                          },
                        }}
                        style={{ background: "#FAFAFA" }}
                      />
                    </Grid>
                    <Grid item xs={8} sm={4}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        style={{ fontSize: "14px" }}
                      >
                        Zip Code
                      </Typography>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none",
                            },
                          },
                        }}
                        style={{ background: "#FAFAFA" }}
                      />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Box>

            <Box>
              <Accordion
              expanded={expanded === "panel3"}
              onChange={handleAccordionChange("panel3")}
                sx={{
                  boxShadow: "none",
                  border: "none",
                  borderBottom: "1px solid #D3D3D3",
                }}
              >
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
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{ fontSize: "14px" }}
                >
                  Memo
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "none",
                      },
                      mb: 3,
                    },
                  }}
                  style={{ background: "#FAFAFA" }}
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
                          checked={selected === "addDocument"}
                          onChange={(e) =>
                            handleSignatureChange(e, "addDocument")
                          }
                          name="addDocument"
                        />
                      }
                      label="Add Document"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selected === "addSignature"}
                          onChange={(e) =>
                            handleSignatureChange(e, "addSignature")
                          }
                          name="addSignature"
                        />
                      }
                      label="Add Signature"
                    />
                  </Box>

                  {/* Signature Area */}
                  {selected === "addSignature" && (
                    <Box>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        style={{ fontSize: "14px" }}
                      >
                        Draw Your Signature
                      </Typography>
                      <Box
                        sx={{
                          mb: 2,
                          border: "1px dashed #ccc",
                          borderRadius: 2,
                          p: 2,
                          textAlign: "center",
                        }}
                      >
                        <Button component="label">
                          <img src={UploadSignature} />
                          <input type="file" hidden />
                        </Button>
                      </Box>
                    </Box>
                  )}
                </AccordionDetails>
              </Accordion>
            </Box>

            {/* Buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Button
                variant="outlined"
                style={{
                  margin: "0rem 1rem",
                  color: "#18283D",
                  border: "1px solid #18283D",
                  width: "180px",
                  height: "55px",
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                style={{
                  background: "#FE634E",
                  margin: "0rem 1rem",
                  width: "180px",
                  height: "55px",
                }}
              >
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
