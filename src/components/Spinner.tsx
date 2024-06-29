import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";


const Spinner: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
    >
      <CircularProgress />
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        Loading..........
      </Typography>
    </Box>
  );
};

export default Spinner;
