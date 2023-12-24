"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CircularIndeterminate from "@/components/loading";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { FaArrowLeft } from "react-icons/fa";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ExcelInputComponent = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [excelSheet, setExcelSheet] = useState(null);
  const [jobDescription, setJobDescription] = useState(null);
  const [message, setMessage] = useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    if (!excelSheet || !jobDescription) {
      return;
    }
    setTimeout(() => {
      router.push("/raserAnalysis");
    }, 2000);
  }, [excelSheet, jobDescription]);

  const handleExcelSheetSubmitted = (e) => {
    if (!e.target.value.endsWith(".xlsx")) {
      alert("Please submit only an xlsx type file.");
      return false;
    }
    setMessage("Candidate Excel sheet successfully uploaded.");
    setExcelSheet(e.target.value);
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };
  const handlePDFUploaded = (e) => {
    if (!e.target.value.endsWith(".pdf")) {
      alert("Please submit only an pdf type file.");
      return false;
    }
    setMessage("PDF Successfully uploaded.");
    setJobDescription(e.target.value);
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const card = (
    <React.Fragment>
      <Button
        sx={{ width: 10, marginLeft: "35%" }}
        onClick={() => {
          router.push("/");
        }}
      >
        <FaArrowLeft style={{ color: "pink", cursor: "pointer" }} />
      </Button>
      <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'60%',marginTop:5}}>
        <Button component="label" variant="outlined">
          Upload Excel Sheet
          <VisuallyHiddenInput
            type="file"
            accept=".xlsx"
            onInput={handleExcelSheetSubmitted}
          />
        </Button>

        <Button component="label" variant="outlined">
          Upload Job Description
          <VisuallyHiddenInput
            type="file"
            accept=".pdf"
            onInput={handlePDFUploaded}
          />
        </Button>
      </Box>
    </React.Fragment>
  );

  if (loading) {
    return (
      <div>
        <CircularIndeterminate />
      </div>
    );
  }

  return (
    <div
      style={{ backgroundColor: "#0e172b", height: "100vh", color: "white" }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "200px",
          alignItems: "center",
          width: "300px",
        }}
      >
        <Box sx={{ minWidth: 275, marginTop: "60%" }}>
          <Card
            variant="outlined"
            sx={{
              bgcolor: "#111e3b",
              height: "270px",
              boxShadow: 10,
              display: "flex",
              flexDirection: "column",
              padding: 2,
              borderRadius: 3,
            }}
          >
            {card}
          </Card>
        </Box>
        {message && (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "240px", marginTop: 10 }}
          >
            {message}
          </Alert>
        )}
      </Container>
    </div>
  );
};

export default ExcelInputComponent;
