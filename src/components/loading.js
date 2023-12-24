import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' ,color:'pink',marginTop:'20%',marginLeft:'48%'}}>
      <CircularProgress sx={{color:'pink'}}/>
    </Box>
  );
}