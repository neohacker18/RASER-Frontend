"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Switch from "@mui/material/Switch";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { Grid, Stack } from "@mui/material";

const drawerWidth = 240;
const navItems = ["Github", "About", "Metrics","Contact"];

export default function Home(props) {
  const router = useRouter();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        RASER
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div style={{ margin: 0 }}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            bgcolor: "#12295c",
            fontSize: 20,
            background:
              "-webkit-linear-gradient(45deg, #12295c 30%, #12485c 90%)",
            webkitBackgroundClip: "text",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            ></IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              RASER
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
      <div className={styles.container}>
        <Typography variant="h1" sx={{ fontWeight: "700", fontSize: "5rem",color:'#E5E7EB' }}>
          Your Tool for Finding the Perfect Candidates for your Needs
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginTop: 4,color:'#E5E7EB'
          }}
        >
          RASER empowers you to choose the best candidates that match perfectly
          for each job you hire for.
        </Typography>
        <Button
          variant="outlined"
          sx={{ marginTop: 4 }}
          onClick={() => {
            router.push("/uploadDocs");
          }}
        >
          Start the process
        </Button>
      </div>
      <Stack className={styles.container}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "700", color: "#BFDAFF" }}>
            GOAL
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
            Our Mission
          </Typography>
          <Typography
            sx={{
              padding: "30px 100px",
              fontSize: "1.5rem",
              color: "#95A3B9",
              fontWeight: 500,
            }}
            variant="h6"
          >
            Our goal is to empower developers with a deeper understanding of
            their resumes and skill sets. By comparing your resume to a range of
            job descriptions, we highlight the similarities and differences,
            enabling you to make informed, data-driven decisions.
          </Typography>
        </Box>
        <Stack
          direction={"row"}
          useFlexGap
          justifyContent={"space-between"}
          sx={{ width: "100%", padding: "0 150px" }}
        >
          <Grid
            marginTop={8}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 5 }}
          >
            <Grid item xs={6}>
              <Box sx={{ textAlign: "left", height: "250px" }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700 }}
                  color={"#CBD4E0"}
                >
                  Natural Language Processing
                </Typography>
                <Typography sx={{marginTop:2,color:'#95A3B9'}}>
                  We leverage state-of-the-art natural language processing
                  techniques to extract and comprehend the context of resumes
                  and job descriptions. This technology allows us to provide you
                  with precise and meaningful insights.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700 }}
                  color={"#CBD4E0"}
                >
                  User-Friendly Interface
                </Typography>
                <Typography sx={{marginTop:2,color:'#95A3B9'}}>
                  We understand the importance of a seamless user experience.
                  Our web page is designed to be intuitive and user-friendly,
                  allowing you to interact with the project with ease.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700 }}
                  color={"#CBD4E0"}
                >
                  Python-Based
                </Typography>
                <Typography sx={{marginTop:2,color:'#95A3B9'}}>
                  Our project is currently written in Python, a powerful and
                  versatile programming language known for its readability and
                  efficiency.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700 }}
                  color={"#CBD4E0"}
                >
                  Semantic Similarity
                </Typography>
                <Typography sx={{marginTop:2,color:'#95A3B9'}}>
                  Our text similarity feature provides a detailed comparison
                  between your resume and job descriptions. This feature helps
                  you identify the areas where your resume aligns with the job
                  requirements and where it needs improvement.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </div>
  );
}
