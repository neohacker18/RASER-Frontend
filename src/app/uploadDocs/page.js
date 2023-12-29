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
import { app, storage } from "../../firebase";
import {
  getDownloadURL,
  getStorage,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";

const handleUploadDocsToFirebase = async (filename, file) => {
  const storage = getStorage();
  const storageRef = ref(storage, `raserDocs/${filename}`);
  await uploadBytes(storageRef, file).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
  let url;
  await getDownloadURL(storageRef)
    .then((res) => {
      console.log(res)
      url=res
    })
    .catch((err) => {
      console.error("Error getting download url:", err);
      return err;
    });
    return url;
};

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
  const [excelSheetToken, setExcelSheetToken] = useState(null);
  const [jdToken, setJdToken] = useState(null);
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
    setTimeout(() => {
      router.push(`/raserAnalysis?excel=${excelSheet}&jd=${jobDescription}&excelToken=${excelSheetToken}&jdToken=${jdToken}`);
    }, 2000);
  }, [excelSheet, jobDescription]);

  const handleExcelSheetSubmitted = async (e) => {
    if (!e.target.value.endsWith(".xlsx")) {
      alert("Please submit only an xlsx type file.");
      return false;
    }
    const excelFileName = `excel_${Math.round(Math.random() * 10000)}`;
    setMessage("Candidate Excel sheet successfully uploaded.");
    // setExcelSheet(excelFileName);
    const res=await handleUploadDocsToFirebase(excelFileName, e.target.files[0])
    setExcelSheet(excelFileName)
    setExcelSheetToken(res.split('token=')[1])
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };
  const handlePDFUploaded = async (e) => {
    if (!e.target.value.endsWith(".pdf")) {
      alert("Please submit only an pdf type file.");
      return false;
    }
    const jdFileName = `resume_${Math.round(Math.random() * 10000)}`;
    setMessage("PDF Successfully uploaded.");
    // setJobDescription(pdfFileName);
    const res=await handleUploadDocsToFirebase(jdFileName, e.target.files[0]);
    setJobDescription(jdFileName)
    setJdToken(res.split('token=')[1])
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
            textAlign: "center",
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
