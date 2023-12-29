"use client";
import RankingTableComponent from "@/components/RankingTableComponent";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CircularIndeterminate from "../../components/loading";
import { Button } from "@mui/material";
import writeXlsxFile from "write-excel-file";
import styles from "../page.module.css";
import { useRouter, useSearchParams } from "next/navigation";

const schema = [
  {
    column: "Candidate Name",
    type: String,
    value: (candidate) => candidate.name,
  },
  {
    column: "Direct Matching Score",
    type: Number,
    value: (candidate) => candidate.dms,
  },
  {
    column: "Semantic Similarity Score",
    type: Number,
    value: (candidate) => candidate.sss,
  },
  {
    column: "Total Score",
    type: Number,
    value: (candidate) => candidate.ts,
  },
];


const handleDownloadRankingResults = async (output) => {
  await writeXlsxFile(output, {
    schema,
    fileName: "ranking-results.xlsx",
  });
};

const page = () => {
  const router=useRouter()
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [candidateInformation, setCandidateInformation] = useState(null);
  const searchParams = useSearchParams()
  useEffect(() => {
    if(candidateInformation!==null){
      setLoading(false)
      return;
    }
    const getCandidateInformation = async () => {
      //check here if router's prev address sent some flag data( send flag data to denote uploading docs was successful)
      try {
        setLoading(true);
        const res = await axios.post(
          "http://127.0.0.1:5000/getRankedResumes",{
            excelUrl:searchParams.get('excel'),
            jdUrl:searchParams.get('jd'),
            excelToken:searchParams.get('excelToken'),
            jdToken:searchParams.get('jdToken'),
          }
        );
        if (res && res.data) {
          console.log(res.data);
          setRows(res.data)
          // setCandidateInformation(res.data)
          setLoading(false)
        }
      } catch (err) {
        console.error(`An error occurred: ${err}`);
        setLoading(false);
      } 
    };

    getCandidateInformation();
  }, [candidateInformation]);

  if (loading) {
    return (
      <div>
        <CircularIndeterminate />
      </div>
    );
  }
  return (
    <div>
      <RankingTableComponent rows={rows} />
      <Button
        className={styles.process_button}
        variant="outlined"
        sx={{ border: "1px solid grey", marginLeft: "10%" }}
        onClick={()=>handleDownloadRankingResults(rows)}
      >
        Export Ranking Data
      </Button>
    </div>
  );
};

export default page;
