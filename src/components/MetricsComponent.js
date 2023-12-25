import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const MetricsComponent = () => {
  return (
    <Stack
      sx={{
        bgcolor: "#1E283A",
        width: "98.8vw",
        marginTop: "100px",
        padding: "10%",
      }}
    >
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "700", color: "#BFDAFF" }}>
          METRICS
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
          Our Achievments
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
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ paddingLeft: "5%" }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 350,
                  height: 300,
                },
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  bgcolor: "#111d38",
                  color: "white",
                  textAlign: "left",
                  padding: 3,
                }}
              >
                <Typography variant="h5">
                  Leverage Large Language Models (LLMs)
                </Typography>
                <Typography sx={{ marginTop: 2, color: "#95A3B9" }}>
                  Good documentation is crucial for any open-source project. If
                  you have a knack for clear, concise writing, you could help us
                  improve our documentation. This would make it easier for new
                  contributors to understand our project and get involved.
                </Typography>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 350,
                  height: 300,
                },
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  bgcolor: "#111d38",
                  color: "white",
                  textAlign: "left",
                  padding: 3,
                }}
              >
                <Typography variant="h5">
                  Leverage Large Language Models (LLMs)
                </Typography>
                <Typography sx={{ marginTop: 2, color: "#95A3B9" }}>
                  Good documentation is crucial for any open-source project. If
                  you have a knack for clear, concise writing, you could help us
                  improve our documentation. This would make it easier for new
                  contributors to understand our project and get involved.
                </Typography>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 350,
                  height: 300,
                },
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  bgcolor: "#111d38",
                  color: "white",
                  textAlign: "left",
                  padding: 3,
                }}
              >
                <Typography variant="h5">
                  Leverage Large Language Models (LLMs)
                </Typography>
                <Typography sx={{ marginTop: 2, color: "#95A3B9" }}>
                  Good documentation is crucial for any open-source project. If
                  you have a knack for clear, concise writing, you could help us
                  improve our documentation. This would make it easier for new
                  contributors to understand our project and get involved.
                </Typography>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 350,
                  height: 300,
                },
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  bgcolor: "#111d38",
                  color: "white",
                  textAlign: "left",
                  padding: 3,
                }}
              >
                <Typography variant="h5">
                  Leverage Large Language Models (LLMs)
                </Typography>
                <Typography sx={{ marginTop: 2, color: "#95A3B9" }}>
                  Good documentation is crucial for any open-source project. If
                  you have a knack for clear, concise writing, you could help us
                  improve our documentation. This would make it easier for new
                  contributors to understand our project and get involved.
                </Typography>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 350,
                  height: 300,
                },
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  bgcolor: "#111d38",
                  color: "white",
                  textAlign: "left",
                  padding: 3,
                }}
              >
                <Typography variant="h5">
                  Leverage Large Language Models (LLMs)
                </Typography>
                <Typography sx={{ marginTop: 2, color: "#95A3B9" }}>
                  Good documentation is crucial for any open-source project. If
                  you have a knack for clear, concise writing, you could help us
                  improve our documentation. This would make it easier for new
                  contributors to understand our project and get involved.
                </Typography>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 350,
                  height: 300,
                },
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  bgcolor: "#111d38",
                  color: "white",
                  textAlign: "left",
                  padding: 3,
                }}
              >
                <Typography variant="h5">
                  Leverage Large Language Models (LLMs)
                </Typography>
                <Typography sx={{ marginTop: 2, color: "#95A3B9" }}>
                  Good documentation is crucial for any open-source project. If
                  you have a knack for clear, concise writing, you could help us
                  improve our documentation. This would make it easier for new
                  contributors to understand our project and get involved.
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default MetricsComponent;
