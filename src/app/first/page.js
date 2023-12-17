"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
const page = () => {
  const router=useRouter()

  const [excelSheet,setExcelSheet]=useState(null)
  useEffect(()=>{
    if(!excelSheet){
      router.push('/second')
    }
  },[excelSheet])
  const handleExcelSheetSubmitted = (e) => {
    if (!e.target.value.endsWith(".xlsx")) {
      alert("Please submit only an xlsx type file.");
      return false;
    }
    setExcelSheet(e.target.value)
  };
  return (
    <div>
      <h1>Enter Excel Sheet containing Candidate Information (.xlsx)</h1>
      <input
        type="file"
        name=""
        id=""
        accept=".xlsx"
        placeholder="Enter Candidate Information"
        onInput={handleExcelSheetSubmitted}
      />
    </div>
  );
};

export default page;
