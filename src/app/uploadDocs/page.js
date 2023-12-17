"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CircularIndeterminate from "@/components/loading";

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

const ExcelInputComponent = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [excelSheet, setExcelSheet] = useState(null);
  const [jobDescription, setJobDescription] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    if (!excelSheet || !jobDescription) {
      return;
    }
    router.push("/raserAnalysis");
  }, [excelSheet, jobDescription]);

  const handleExcelSheetSubmitted = (e) => {
    if (!e.target.value.endsWith(".xlsx")) {
      alert("Please submit only an xlsx type file.");
      return false;
    }
    setExcelSheet(e.target.value);
  };
  const handlePDFUploaded = (e) => {
    if (!e.target.value.endsWith(".pdf")) {
      alert("Please submit only an pdf type file.");
      return false;
    }
    setJobDescription(e.target.value);
  };

  if (loading) {
    return (
      <div>
        <CircularIndeterminate />
      </div>
    );
  }
  return (
    <div style={{ backgroundColor: "#0e172b" ,height:'100vh',color:'white'}}>
      <Typography variant="h5">
        Enter Excel Sheet containing Candidate Information (.xlsx) and then the
        pdf containing the job description (.pdf)
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "200px",
          alignItems: "center",
          width: "300px",
          marginTop: "100px",
        }}
      >
        <Button component="label" variant="contained">
          Upload Excel Sheet
          <VisuallyHiddenInput
            type="file"
            accept=".xlsx"
            onInput={handleExcelSheetSubmitted}
          />
        </Button>
        <Button component="label" variant="contained">
          Upload Job Description
          <VisuallyHiddenInput
            type="file"
            accept=".pdf"
            onInput={handlePDFUploaded}
          />
        </Button>
      </Container>
    </div>
  );
};

export default ExcelInputComponent;
