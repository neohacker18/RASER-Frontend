"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

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

  const [excelSheet, setExcelSheet] = useState(null);
  const [jobDescription, setJobDescription] = useState(null);
  useEffect(() => {
    if (!excelSheet || !jobDescription) {
      return;
    }
    router.push("/second");
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
  return (
    <div>
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
