"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const test={
    "Tushar_Jha4.pdf": 117.9,
    "Aryan__Sethi1.pdf": 101.8,
    "Nayra_Sethi2.pdf": 100,
    "Gunika_Dhingra3.pdf": 80.4
}

const page = () => {
    const [loading,setLoading]=useState(true)
    const [candidateInformation,setCandidateInformation]=useState(test)
    useEffect(() => {
        if (candidateInformation !== null) {
            setLoading(false);
            return;
        }
    
        setLoading(true); 
        const getCandidateInformation = async () => {
            try {
                const res = await axios.post('http://192.168.1.37:5000/getRankedResumes');
                if (res && res.data && res.data.Rankings) {
                    console.log(res.data.Rankings)
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

    if(loading){
        return(
            <div>Loading...</div>
        )
    }
  return (
    <div>page</div>
  )
}

export default page