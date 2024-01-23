import { Box, CircularProgress } from "@mui/material";
import React from "react";

export function DefaultLoading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <CircularProgress size={48} />
    </Box>
  );
}
