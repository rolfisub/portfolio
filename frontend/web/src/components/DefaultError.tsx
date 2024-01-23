import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

export interface DefaultErrorProps {
  message: string;
}

export function DefaultError({ message }: DefaultErrorProps) {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography>Error: {message}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
