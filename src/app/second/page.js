"use client";
import RankingTableComponent from "@/components/RankingTableComponent";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CircularIndeterminate from "../../components/loading";
import { Button } from "@mui/material";
const test = [
  { id: 1, name: "aryan", dms: 117.9, sss: 82, ts: 117 },
  { id: 2, name: "tushar", dms: 117.9, sss: 72, ts: 107 },
  { id: 3, name: "gunjan", dms: 117.9, sss: 62, ts: 107 },
  { id: 4, name: "gunika", dms: 127.9, sss: 52, ts: 105 },
];

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
    <div>
      <RankingTableComponent rows={rows} />
      <Button variant="contained" sx={{bgcolor:'grey','&hover':{bgcolor:'black'}}}>Import the sheet containing this information</Button>
    </div>
  );
};

export default page;
