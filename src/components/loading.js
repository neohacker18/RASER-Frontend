import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from "../app/page.module.css";

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' ,color:'pink',marginTop:'20%',marginLeft:'48%'}} className={styles.circular_progress}>
      <CircularProgress className={styles.circular_progress}/>
    </Box>
  );
}