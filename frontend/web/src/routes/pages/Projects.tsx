import React from "react";
import { useGetProjectsByUserIdQuery } from "../../api/projectsApi";
import { DefaultError } from "../../components/DefaultError";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { DefaultLoading } from "../../components/DefaultLoading";

export default function Projects() {
  const userId = 1;
  const { data, error, isLoading } = useGetProjectsByUserIdQuery(userId);

  if (isLoading) {
    return <DefaultLoading />;
  }

  if (error) {
    return <DefaultError message={(error as any).error} />;
  }

  return (
    <Box sx={{ maxWidth: 575 }}>
      <Card>
        <CardContent>
          <Typography variant="h5">Projects:</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
