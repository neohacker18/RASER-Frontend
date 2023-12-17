"use client";
import RankingTableComponent from "@/components/RankingTableComponent";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CircularIndeterminate from "../../components/loading";
import { Button } from "@mui/material";
import writeXlsxFile from 'write-excel-file'

const schema = [
    {
      column: 'Candidate Name',
      type: String,
      value: candidate => candidate.name
    },
    {
      column: 'Direct Matching Score',
      type: Number,
      value: candidate => candidate.dms
    },
    {
        column: 'Semantic Similarity Score',
        type: Number,
        value: candidate => candidate.sss
    },
    {
        column: 'Total Score',
        type: Number,
        value: candidate => candidate.ts
    }
  ]

const test = [
  { id: 1, name: "aryan", dms: 117.9, sss: 82, ts: 117 },
  { id: 2, name: "tushar", dms: 117.9, sss: 72, ts: 107 },
  { id: 3, name: "gunjan", dms: 117.9, sss: 62, ts: 107 },
  { id: 4, name: "gunika", dms: 127.9, sss: 52, ts: 105 },
];

const handleDownloadRankingResults=async()=>{
    await writeXlsxFile(test,{
        schema,
        fileName:'ranking-results.xlsx'
    })
}

const page = () => {
  const [rows, setRows] = useState(test);
  const [loading, setLoading] = useState(true);
  const [candidateInformation, setCandidateInformation] = useState(test);
  useEffect(() => {
    if (candidateInformation !== null) {
      setLoading(false);

      return;
    }
    setLoading(true);
    const getCandidateInformation = async () => {
      try {
        const res = await axios.post(
          "http://192.168.1.37:5000/getRankedResumes"
        );
        if (res && res.data && res.data.Rankings) {
          console.log(res.data.Rankings);
          setCandidateInformation(res.data.Rankings);
        }
      } catch (err) {
        console.error(`An error occurred: ${err}`);
      } finally {
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
    <div >
      <RankingTableComponent rows={rows} />
      <Button variant="outline" sx={{border:'1px solid grey'}} onClick={handleDownloadRankingResults}>Import Ranking Data</Button>
    </div>
  );
};

export default page;
