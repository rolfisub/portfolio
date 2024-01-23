import React from "react";
import { useGetBasicInfoByUserQuery } from "../../api/basicInfoApi";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { DefaultError } from "../../components/DefaultError";
import { DefaultLoading } from "../../components/DefaultLoading";

export default function BasicInfo() {
  const userId = 1; // Todo get from session
  const { data, error, isLoading } = useGetBasicInfoByUserQuery(userId);

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
          <Typography variant="h5">Basic Info</Typography>
          <Typography>Name: {data?.name}</Typography>
          <Typography>Title: {data?.title}</Typography>
          <Typography>Email: {data?.email}</Typography>
          <Typography>Phone: {data?.phone}</Typography>
          <Typography>Location: {data?.location}</Typography>
          <Typography>Website: {data?.website}</Typography>
          <Typography>Github: {data?.github}</Typography>
          <Typography>Linkedin: {data?.linkedin}</Typography>
          <Typography>Summary / About Me: {data?.summary}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
