import React from "react";
import {
  ProjectResponse,
  useGetProjectsByUserIdQuery,
} from "../../api/projectsApi";
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
      <Typography variant="h5">Projects:</Typography>
      {data?.map((project: ProjectResponse) => (
        <Card>
          <CardContent>
          <Typography>{project.title}</Typography>
          <Typography>{project.description}</Typography>
          <Typography>{project.explanation}</Typography>
          <Typography>{project.url}</Typography>
          <Typography>{project.title}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
