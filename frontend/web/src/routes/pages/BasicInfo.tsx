import React from "react";
import { useGetBasicInfoByUserQuery } from "../../api/basicInfoApi";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default function BasicInfo() {
  const { data, error, isLoading } = useGetBasicInfoByUserQuery(1);

  console.log("data", data);
  console.log("error", error);
  console.log("isLoading", isLoading);

  if (error) {
    return (
      <Box sx={{ minWidth: 275 }}>
        <Card>
          <CardContent>
            <Typography>Error loading data: {(error as any).error}</Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 275 }}>
      <Card>
        <CardContent>
          <Typography variant="h5">Basic Info</Typography>
          <Typography>Name: {data?.name}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
