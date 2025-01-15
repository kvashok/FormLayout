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
  Dialog,
  DialogContent,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import UploadIcon from "../assets/Upload_icon.svg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const AddEquipment = ({ setVisible, setValue }) => {
  const [expanded, setExpanded] = useState("panel1");
  const [formData, setFormData] = useState({
    equipment_type: "own",
    equipment_category: "",
    equipment_name: "",
    equipment_descriptions: "",
    purchase_number: "",
    ssn_number: "",
    purchase_type: "In store",
    date_of_purchase: "",
    purchase_price: "",
    vendor_supplier: "",
    vendor_supplier_location: "",
    vendor_supplier_contact: "",
    warranty_avaiability: "",
    warranty_period: "",
    memo: "",
    signature_type: "",
    equipment_image: null,
    purchase_bill: null,
  });
  const [open, setOpen] = useState(false);
  const formSections = [
    {
      title: "Equipment Information",
      fields: [
        {
          label: "Type of Equipment",
          type: "radio",
          options: [
            { value: "own", label: "Own" },
            { value: "rent", label: "Rent" },
          ],
          key: "equipment_type",
        },
        {
          label: "Equipment Name",
          type: "text",
          key: "equipment_name",
        },
        {
          label: "Equipment Category",
          type: "select",
          options: ["Vehicle", "Machinery", "Essentials"],
          key: "equipment_category",
        },
        {
          label: "Descriptions",
          type: "textarea",
          key: "equipment_descriptions",
        },
        {
          label: "Equipment Image",
          type: "file",
          key: "equipment_image",
        },
      ],
    },
    {
      title: "Purchase Information",
      fields: [
        { label: "Purchase Number (PO. No)", type: "text", key: "purchase_number" },
        { label: "Serial Number", type: "text", key: "ssn_number" },
        {
          label: "Purchase Type",
          type: "select",
          options: ["In store", "Online"],
          key: "purchase_type",
        },
        { label: "Date of Purchase", type: "date", key: "date_of_purchase" },
        { label: "Purchase Price", type: "text", key: "purchase_price" },
        { label: "Vendor/Supplier", type: "text", key: "vendor_supplier" },
        { label: "Vendor/Supplier Locality", type: "text", key: "vendor_supplier_location" },
        { label: "Vendor Contact Number", type: "text", key: "vendor_supplier_contact" },
        {
          label: "Warranty Availability",
          type: "checkbox",
          options: ["Yes", "No"],
          key: "warranty_avaiability",
        },
        { label: "Warranty Period", type: "text", key: "warranty_period" },
        {
          label: "Upload Bill (if any)",
          type: "file",
          key: "purchase_bill",
        },
      ],
    },
    {
      title: "Other Information",
      fields: [
        { label: "Memo", type: "textarea", key: "memo" },
        {
          label: "Signature Type",
          type: "checkbox",
          options: ["Add Document", "Add Signature"],
          key: "signature_type",
        },
        {
          label: "Draw Your Signature",
          type: "file",
          key: "signature_document",
        },
      ],
    },
  ];

  const handleInputChange = (key) => (event) => {
    setFormData({ ...formData, [key]: event.target.value });
  };

  const handleCheckboxChange = (key, value) => () => {
    setFormData({ ...formData, [key]: formData[key] === value ? "" : value });
  };

  const handleFileChange = (key) => (event) => {
    setFormData({ ...formData, [key]: event.target.files[0] });
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    setOpen(true);
    console.log("Form submitted with data:", Object.fromEntries(data.entries()));
  };

  const handleClose = () => {
    setOpen(false); // Close the modal
  };

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      onClick={() => {
        setVisible("table");
        setValue("Equipment Management");
      }}
      style={{ cursor: "pointer", fontSize: "0.75rem" }}
    >
      Equipment Management
    </Link>,
    <Typography
      key="2"
      sx={{ color: "text.primary" }}
      style={{ fontSize: "0.75rem" }}
    >
      Add Equipment
    </Typography>,
  ];

  return (
    <Box sx={{ py: 1, px: 3, mt: 2 }}>
      <Stack spacing={2} style={{ marginTop: "1rem" }}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <Card sx={{ mx: 6, my: 2 }}>
        <Box sx={{ p: 2, maxWidth: 1200, mx: "auto" }}>
          {formSections.map((section, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index + 1}`}
              onChange={handleAccordionChange(`panel${index + 1}`)}
              sx={{ boxShadow: "none", border: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}bh-content`}
                id={`panel${index + 1}bh-header`}
                style={{ borderBottom: "1px solid #D3D3D3" }}
              >
                <Typography>{section.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  {section.fields.map((field, fieldIndex) => {
                    // Side-by-side layout for specific fields
                    if (
                      field.key === "equipment_name" ||
                      field.key === "purchase_number" ||
                      field.key === "ssn_number" ||
                      field.key === "purchase_type" ||
                      field.key === "date_of_purchase" ||
                      field.key === "purchase_price" ||
                      field.key === "vendor_supplier" ||
                      field.key === "vendor_supplier_location" ||
                      field.key === "vendor_supplier_contact" ||
                      field.key === "warranty_avaiability" ||
                      field.key === "warranty_period" ||
                      field.key === "equipment_category"
                    ) {
                      return (
                        <Grid item xs={12} sm={6} key={fieldIndex}>
                          <Typography
                            variant="subtitle1"
                            gutterBottom
                            style={{ fontSize: "14px" }}
                          >
                            {field.label} <span style={{ color: "#FF0000" }}>*</span>
                          </Typography>
                          {field.type === "select" && (
                            <FormControl
                              fullWidth
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  "& fieldset": { border: "none" },
                                },
                              }}
                              style={{ background: "#FAFAFA" }}
                            >
                              <Select
                                value={formData[field.key]}
                                onChange={handleInputChange(field.key)}
                              >
                                {field.options.map((option, optionIndex) => (
                                  <MenuItem key={optionIndex} value={option}>
                                    {option}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          )}
                          {field.type === "radio" && (
                          <RadioGroup
                            row
                            value={formData[field.key]}
                            onChange={handleInputChange(field.key)}
                          >
                            {field.options.map((option, optionIndex) => (
                              <FormControlLabel
                                key={optionIndex}
                                value={option.value}
                                control={<Radio />}
                                label={option.label}
                              />
                            ))}
                          </RadioGroup>
                        )}
                        {field.type === "text" && (
                          <TextField
                            fullWidth
                            value={formData[field.key]}
                            onChange={handleInputChange(field.key)}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": { border: "none" },
                              },
                            }}
                            style={{ background: "#FAFAFA" }}
                          />
                        )}
                        {field.type === "textarea" && (
                          <TextField
                            fullWidth
                            multiline
                            rows={4}
                            value={formData[field.key]}
                            onChange={handleInputChange(field.key)}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": { border: "none" },
                              },
                            }}
                            style={{ background: "#FAFAFA" }}
                          />
                        )}
                        {field.type === "date" && (
                          <TextField
                            fullWidth
                            type="date"
                            value={formData[field.key]}
                            onChange={handleInputChange(field.key)}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": { border: "none" },
                              },
                            }}
                            style={{ background: "#FAFAFA" }}
                          />
                        )}
                        {field.type === "checkbox" && (
                          <Box>
                            {field.options.map((option, optionIndex) => (
                              <FormControlLabel
                                key={optionIndex}
                                control={
                                  <Checkbox
                                    checked={formData[field.key] === option}
                                    onChange={handleCheckboxChange(field.key, option)}
                                  />
                                }
                                label={option}
                              />
                            ))}
                          </Box>
                        )}
                        {field.type === "file" && (
                          <Box
                            sx={{
                              border: "1px dashed #ccc",
                              borderRadius: 2,
                              p: 2,
                              textAlign: "center",
                            }}
                          >
                            <Button component="label">
                              <img src={UploadIcon} alt="Upload Icon" />
                              <input
                                type="file"
                                hidden
                                onChange={handleFileChange(field.key)}
                              />
                            </Button>
                          </Box>
                        )}
                        </Grid>
                      );
                    }

                    // Full-width layout for all other fields
                    return (
                      <Grid item xs={12} key={fieldIndex}>
                        <Typography
                          variant="subtitle1"
                          gutterBottom
                          style={{ fontSize: "14px" }}
                        >
                          {field.label}{" "}
                          {field.type !== "file" && (
                            <span style={{ color: "#FF0000" }}>*</span>
                          )}
                        </Typography>
                        {field.type === "radio" && (
                          <RadioGroup
                            row
                            value={formData[field.key]}
                            onChange={handleInputChange(field.key)}
                          >
                            {field.options.map((option, optionIndex) => (
                              <FormControlLabel
                                key={optionIndex}
                                value={option.value}
                                control={<Radio />}
                                label={option.label}
                              />
                            ))}
                          </RadioGroup>
                        )}
                        {field.type === "text" && (
                          <TextField
                            fullWidth
                            value={formData[field.key]}
                            onChange={handleInputChange(field.key)}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": { border: "none" },
                              },
                            }}
                            style={{ background: "#FAFAFA" }}
                          />
                        )}
                        {field.type === "textarea" && (
                          <TextField
                            fullWidth
                            multiline
                            rows={4}
                            value={formData[field.key]}
                            onChange={handleInputChange(field.key)}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": { border: "none" },
                              },
                            }}
                            style={{ background: "#FAFAFA" }}
                          />
                        )}
                        {field.type === "date" && (
                          <TextField
                            fullWidth
                            type="date"
                            value={formData[field.key]}
                            onChange={handleInputChange(field.key)}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": { border: "none" },
                              },
                            }}
                            style={{ background: "#FAFAFA" }}
                          />
                        )}
                        {field.type === "checkbox" && (
                          <Box>
                            {field.options.map((option, optionIndex) => (
                              <FormControlLabel
                                key={optionIndex}
                                control={
                                  <Checkbox
                                    checked={formData[field.key] === option}
                                    onChange={handleCheckboxChange(field.key, option)}
                                  />
                                }
                                label={option}
                              />
                            ))}
                          </Box>
                        )}
                        {field.type === "file" && (
                          <Box
                            sx={{
                              border: "1px dashed #ccc",
                              borderRadius: 2,
                              p: 2,
                              textAlign: "center",
                            }}
                          >
                            <Button component="label">
                              <img src={UploadIcon} alt="Upload Icon" />
                              <input
                                type="file"
                                hidden
                                onChange={handleFileChange(field.key)}
                              />
                            </Button>
                          </Box>
                        )}
                      </Grid>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
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
              onClick={handleSubmit}
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
      {/* Modal Popup */}
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogContent
          sx={{
            textAlign: "center",
            p: 4,
          }}
        >
          <CheckCircleIcon
            sx={{ fontSize: 64, color: "#FE634E", mb: 2 }}
          />
          <Typography variant="h6" sx={{ mb: 1 }}>
            Equipment saved!
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default AddEquipment;
