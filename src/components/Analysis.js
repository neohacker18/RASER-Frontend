import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Image from "next/image";
import NERDetection from "../images/actualvsdetected.png";
import F1Score from "../images/f1score.png";
import Recall from "../images/recall.png";
import Precision from "../images/precision.png";

function TitlebarBelowImageList() {
  return (
    <>
      <ImageListItem>
        <Image
          src={NERDetection}
          loading="lazy"
          alt=""
          height={350}
          width={450}
        />
        <ImageListItemBar
          title={"Custom SpaCy NER: Detected v/s Actual Entities"}
          position="below"
        />
      </ImageListItem>
      <ImageList sx={{ paddingLeft: "10%" }} >
        <ImageListItem sx={{ height: 220, width: 400 }}>
          <Image src={F1Score} loading="lazy" alt="" height={220} width={400} />
          <ImageListItemBar
            title={"F1score: Ours v/s Vinita et al."}
            position="below"
          />
        </ImageListItem>
        <ImageListItem sx={{ height: 220, width: 400 }}>
          <Image
            src={Precision}
            loading="lazy"
            alt=""
            height={220}
            width={400}
          />
          <ImageListItemBar
            title={"Precision: Ours v/s Vinita et al."}
            position="below"
          />
        </ImageListItem>
      </ImageList>
    </>
  );
}

const AnalysisComponent = () => {
  return (
    <Stack
      sx={{
        width: "98.8vw",
        marginTop: "100px",
        padding: "10%",
      }}
    >
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "700", color: "#BFDAFF" }}>
          ANALYSIS
        </Typography>
        <Typography
          variant="h3"
          sx={{
            marginTop: 2,
            color: "#CBD4E0",
            fontSize: "3rem",
            fontWeight: "700",
          }}
        >
          Our Findings
        </Typography>
        <Typography
          sx={{
            padding: "30px 250px",
            fontSize: "1.5rem",
            color: "#95A3B9",
            fontWeight: 500,
          }}
          variant="h6"
        >
          Our comprehensive analysis offers valuable insights into the
          effectiveness and efficiency of our resume screening system. Following
          are some of the key findings.
        </Typography>
        <TitlebarBelowImageList />
      </Box>
    </Stack>
  );
};

export default AnalysisComponent;
