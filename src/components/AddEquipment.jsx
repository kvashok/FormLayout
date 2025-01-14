import React, { useState } from "react";
import {
  Box,
  Typography,
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Breadcrumbs,
  Link,
  Card,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const formConfig = {
  sections: [
    {
      title: "Equipment Information",
      fields: [
        {
          type: "radio",
          label: "Type of Equipment",
          name: "type",
          options: [
            { value: "own", label: "Own" },
            { value: "rent", label: "Rent" },
          ],
          defaultValue: "own",
        },
        {
          type: "text",
          label: "Equipment Name",
          name: "equipmentName",
          defaultValue: "Yellow Tent",
        },
        {
          type: "select",
          label: "Equipment Category",
          name: "category",
          options: [
            { value: "vehicle", label: "Vehicle" },
            { value: "machinery", label: "Machinery" },
            { value: "essentials", label: "Essentials" },
          ],
          defaultValue: "",
        },
        {
          type: "textarea",
          label: "Description",
          name: "description",
          defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
    {
      title: "Purchase Information",
      fields: [
        { type: "text", label: "Purchase Number (PO No)", name: "purchaseNo" },
        { type: "text", label: "Serial Number", name: "serialNo" },
        {
          type: "select",
          label: "Purchase Type",
          name: "purchaseType",
          options: [
            { value: "inStore", label: "In Store" },
            { value: "online", label: "Online" },
          ],
          defaultValue: "inStore",
        },
        { type: "date", label: "Date of Purchase", name: "purchaseDate" },
        { type: "text", label: "Purchase Price", name: "purchasePrice" },
      ],
    },
  ],
};

const AddEquipmentDynamic = ({ setVisible }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  return (
    <Box sx={{ py: 1, px: 3, mt: 2 }}>
      <Stack spacing={2} style={{ marginTop: "1rem" }}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" onClick={() => setVisible("table")} style={{ cursor: "pointer", fontSize: "0.75rem" }}>
            Equipment Management
          </Link>
          <Typography sx={{ color: "text.primary", fontSize: "0.75rem" }}>
            Fire Extinguishers
          </Typography>
        </Breadcrumbs>
      </Stack>

      <Card sx={{ mx: 6, my: 2 }}>
        <Box sx={{ p: 2, maxWidth: 1200, mx: "auto" }}>
          {formConfig.sections.map((section, index) => (
            <Accordion key={index} sx={{ boxShadow: "none", border: "none" }} defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`} id={`panel${index}-header`} style={{ borderBottom: '1px solid #D3D3D3' }}>
                <Typography>{section.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  {section.fields.map((field, idx) => {
                    switch (field.type) {
                      case "text":
                        return (
                          <Grid item xs={12} sm={6} key={idx}>
                            <TextField
                              fullWidth
                              label={field.label}
                              defaultValue={field.defaultValue || ""}
                              onChange={(e) => handleChange(field.name, e.target.value)}
                            />
                          </Grid>
                        );
                      case "select":
                        return (
                          <Grid item xs={12} sm={6} key={idx}>
                            <FormControl fullWidth>
                              <InputLabel>{field.label}</InputLabel>
                              <Select
                                value={formData[field.name] || field.defaultValue}
                                onChange={(e) => handleChange(field.name, e.target.value)}
                              >
                                {field.options.map((option, optIdx) => (
                                  <MenuItem value={option.value} key={optIdx}>
                                    {option.label}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>
                        );
                      case "radio":
                        return (
                          <Grid item xs={12} key={idx}>
                            <Typography>{field.label}</Typography>
                            <RadioGroup
                              row
                              value={formData[field.name] || field.defaultValue}
                              onChange={(e) => handleChange(field.name, e.target.value)}
                            >
                              {field.options.map((option, optIdx) => (
                                <FormControlLabel
                                  key={optIdx}
                                  value={option.value}
                                  control={<Radio />}
                                  label={option.label}
                                />
                              ))}
                            </RadioGroup>
                          </Grid>
                        );
                      case "textarea":
                        return (
                          <Grid item xs={12} key={idx}>
                            <TextField
                              fullWidth
                              label={field.label}
                              multiline
                              rows={4}
                              defaultValue={field.defaultValue || ""}
                              onChange={(e) => handleChange(field.name, e.target.value)}
                            />
                          </Grid>
                        );
                      case "date":
                        return (
                          <Grid item xs={12} sm={6} key={idx}>
                            <TextField
                              fullWidth
                              label={field.label}
                              type="date"
                              InputLabelProps={{ shrink: true }}
                              onChange={(e) => handleChange(field.name, e.target.value)}
                            />
                          </Grid>
                        );
                      default:
                        return null;
                    }
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}

          {/* Buttons */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button variant="outlined" onClick={() => setVisible("table")}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSubmit} style={{ background: "#FE634E" }}>
              Submit
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default AddEquipmentDynamic;
