"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CircularIndeterminate from "@/components/loading";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { FaArrowLeft } from "react-icons/fa";
import { FaFileExcel, FaFilePdf, FaArrowDown } from "react-icons/fa";
import styles from "../page.module.css";
import axios from "axios";

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
    setLoading(false);
    if (!excelSheet || !jobDescription) {
      return;
    }
    setLoading(true);
    if (localStorage.getItem("resumePath")) {
      localStorage.removeItem("resumePath");
    }
    if (localStorage.getItem("jdPath")) {
      localStorage.removeItem("jdPath");
    }
    localStorage.setItem("resumePath", excelSheet);
    localStorage.setItem("jdPath", jobDescription);
    router.push(`/raserAnalysis`);
  }, [excelSheet, jobDescription]);

  const handleExcelSheetSubmitted = (e) => {
    if (!e.target.value.endsWith(".xlsx")) {
      alert("Please submit only an xlsx type file.");
      return false;
    }
    setMessage("Candidate Excel sheet successfully uploaded.");
    setExcelSheet(e.target.files[0]);
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          marginTop: 5,
        }}
      >
        <Button
          component="label"
          variant="outlined"
          className={`${
            !excelSheet ? styles.upload_button : styles.submitted_button
          }`}
        >
          <FaFileExcel style={{ marginRight: 8, height: 35, width: 20 }} />
          Upload Excel Sheet
          <VisuallyHiddenInput
            type="file"
            accept=".xlsx"
            onInput={handleExcelSheetSubmitted}
          />
        </Button>

        <Button
          component="label"
          variant="outlined"
          className={`${
            !jobDescription ? styles.upload_button : styles.submitted_button
          }`}
        >
          <FaFilePdf style={{ marginRight: 8, height: 35, width: 20 }} />
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
    <Stack
      style={{
        backgroundColor: "#0e172b",
        color: "white",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{
            marginTop: 10,
            color: "#BFDAFF",
            fontSize: "2.8rem",
            fontWeight: "700",
            textAlign:'center'
          }}
        >
          Upload your essentials here <FaArrowDown />
        </Typography>
      </Box>
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
        <Box sx={{ minWidth: 275, marginTop: "30%" }}>{card}</Box>
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
    </Stack>
  );
};

export default ExcelInputComponent;
