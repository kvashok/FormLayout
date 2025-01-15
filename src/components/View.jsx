import React from "react";
import {
  Box,
  Breadcrumbs,
  Typography,
  Link,
  Stack,
  Button,
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Chip,
} from "@mui/material";
import TrackLogo from "../assets/Track_Logo.svg";

const View = ({ setVisible, rowData }) => {
  const handleClick = (type) => {
    if (type === "table") {
      setVisible("table");
      setValue("Equipment Management");
    }else if(type==="back"){
      setVisible("table");
    }else if(type==="track") {
      setVisible("TrackForm");
    } else {
      setVisible("TrackForm");
    }
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
    <Link
      underline="hover"
      key="1"
      color="inherit"
      onClick={() => handleClick("TrackForm")}
      style={{ cursor: "pointer", fontSize: "0.75rem" }}
    >
      Small group(Item name)
    </Link>,
    <Typography
      key="2"
      sx={{ color: "text.primary" }}
      style={{ fontSize: "0.75rem" }}
    >
      Item name(Detail Page)
    </Typography>,
  ];
  return (
    <Box sx={{ py: 1, px: 6, mt: 2 }}>
      <Stack spacing={2} style={{ marginTop: "1rem" }}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>

      {/* Main Card */}
      <Card sx={{ mt: 2, p: 6 }}>
        <Grid container spacing={2}>
          <Grid item xs={1} sm={1}>
            <Card sx={{ mt: 1, p: 1 }}>
              <img src={TrackLogo} style={{ width: "4rem", height: "4rem" }} />
            </Card>
          </Grid>
          <Grid item xs={13} sm={9}>
            <Typography variant="h5" fontWeight="bold">
              UL Fire Extinguishers &nbsp;
              {rowData.equipment_status === "available" ? (
                <Chip
                  label={rowData.equipment_status}
                  style={{
                    background: "#EBFFF3",
                    color: "#16B681",
                    borderRadius: "30px",
                    fontSize: "0.75rem",
                    fontWeight: "400",
                    border: "1px solid #16B681",
                  }}
                />
              ) : (
                <Chip
                  label={rowData.equipment_status}
                  style={{
                    background: "#FFF1E7",
                    color: "#FE634E",
                    borderRadius: "30px",
                    fontSize: "0.75rem",
                    fontWeight: "400",
                    border: "1px solid #FE634E",
                  }}
                />
              )}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ mt: 2.5 }}
              style={{ fontSize: "12px" }}
            >
              Program name: <Link href="#">Fire Relief Training</Link> | Current
              Holding: <Link href="#">(Program Manager name)</Link> | Last
              updated date: 12/12/2024
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 2.5 }}
              style={{ fontSize: "12px" }}
            >
              Equipment for solid fire accidents includes fire extinguishers,
              hoses, foam agents, protective gear, and tools like axes and
              shovels. Thermal cameras, bulldozers, and communication devices
              enhance firefighting efficiency and ensure responder safety.
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Button
              variant="contained"
              style={{
                background: "#FE634E",
                color: "#FFFFFF",
                width: "150px",
                height: "40px",
                fontWeight: "400",
                fontSize: "0.75rem",
              }}
              onClick={()=>handleClick('track')}
            >
              Track
            </Button>
          </Grid>
        </Grid>

        {/* Table Equipment */}
        <Box sx={{ borderRadius: 2, boxShadow: 3, my: 2 }}>
          <Table
            sx={{
              border: "1px solid #ccc", // Outer border for the table
              "& th, & td": {
                border: "1px solid #ccc", // Inner cell borders
              },
            }}
          >
            <TableHead>
              <TableRow sx={{ backgroundColor: "#fef9f4" }}>
                <TableCell colSpan={2}>Equipment Information</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ width: "50%" }}>Type</TableCell>
                <TableCell sx={{ width: "50%" }}>
                  {rowData.equipment_type || "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: "50%" }}>Category</TableCell>
                <TableCell sx={{ width: "50%" }}>
                  {rowData.equipment_category || "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: "50%" }}>Equipment Owner</TableCell>
                <TableCell sx={{ width: "50%" }}>
                  {rowData.equipment_owner || "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: "50%" }}>
                  Owner Contact Number
                </TableCell>
                <TableCell sx={{ width: "50%" }}>
                  {rowData.equipment_owner_contact || "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: "50%" }}>Rent Start Date</TableCell>
                <TableCell sx={{ width: "50%" }}>
                  {rowData.rental_start_date || "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: "50%" }}>Rent End Date</TableCell>
                <TableCell sx={{ width: "50%" }}>
                  {rowData.rental_end_date || "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: "50%" }}>Description</TableCell>
                <TableCell sx={{ width: "50%" }}>
                  {rowData.equipment_descriptions || "N/A"}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>

        {/* Table Purchase */}
        <Box sx={{ borderRadius: 2, boxShadow: 3, my: 2 }}>
          <Table
            sx={{
              border: "1px solid #ccc", // Outer border for the table
              "& th, & td": {
                border: "1px solid #ccc", // Inner cell borders
              },
            }}
          >
            <TableHead>
              <TableRow sx={{ backgroundColor: "#fef9f4" }}>
                <TableCell colSpan={2}>Purchase Information</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ width: "50%" }}>
                  Purchase number (PO. No)
                </TableCell>
                <TableCell sx={{ width: "50%" }}>
                  {rowData.purchase_number || "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: "50%" }}>Serial Number</TableCell>
                <TableCell sx={{ width: "50%" }}>
                  {rowData.ssn_number || "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: "50%" }}>Daily Rent</TableCell>
                <TableCell sx={{ width: "50%" }}>
                  {rowData.rent || "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: "50%" }}>Total Amount Due</TableCell>
                <TableCell sx={{ width: "50%" }}>
                  {rowData.total_amount_due || "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: "50%" }}>Deposit Amount</TableCell>
                <TableCell sx={{ width: "50%" }}>
                  {rowData.deposit_amount || "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: "50%" }}>Paid</TableCell>
                <TableCell sx={{ width: "50%" }}>
                  {rowData.paid || "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: "50%" }}>Payment Method</TableCell>
                <TableCell sx={{ width: "50%" }}>
                  {rowData.payment_method || "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: "50%" }}>Bill</TableCell>
                <TableCell sx={{ width: "50%" }}>
                  {rowData.purchase_bill || "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: "50%" }}>Address Line 1</TableCell>
                <TableCell sx={{ width: "50%" }}>
                  {rowData.address_line1 || "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: "50%" }}>Address Line 2</TableCell>
                <TableCell sx={{ width: "50%" }}>
                  {rowData.address_line_2 || "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: "50%" }}>City</TableCell>
                <TableCell sx={{ width: "50%" }}>
                  {rowData.city || "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: "50%" }}>State</TableCell>
                <TableCell sx={{ width: "50%" }}>
                  {rowData.state || "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: "50%" }}>Zip code</TableCell>
                <TableCell sx={{ width: "50%" }}>
                  {rowData.zip_code || "N/A"}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>

        {/* Table Others */}
        <Box sx={{ borderRadius: 2, boxShadow: 3, my: 2 }}>
          <Table
            sx={{
              border: "1px solid #ccc", // Outer border for the table
              "& th, & td": {
                border: "1px solid #ccc", // Inner cell borders
              },
            }}
          >
            <TableHead>
              <TableRow sx={{ backgroundColor: "#fef9f4" }}>
                <TableCell colSpan={2}>Other Information</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ width: "50%" }}>Memo</TableCell>
                <TableCell sx={{ width: "50%" }}>
                  {rowData.memo || "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: "50%" }}>Acknowledgment Mode</TableCell>
                <TableCell sx={{ width: "50%" }}>
                  {rowData.signature_type || "N/A"}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 6,
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
            onClick={()=>handleClick('back')}
          >
            Back
          </Button>
          <Button
            variant="contained"
            style={{
              background: "#FE634E",
              margin: "0rem 1rem",
              width: "180px",
              height: "55px",
            }}
            onClick={()=>handleClick('track')}
          >
            Track
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default View;
