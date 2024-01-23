import React from "react";
import {
  WorkExperienceResponse,
  useGetWorkExperienceByUserIdQuery,
} from "../../api/workExperienceApi";
import { DefaultLoading } from "../../components/DefaultLoading";
import { DefaultError } from "../../components/DefaultError";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default function WorkExperience() {
  const userId = 1;
  const { data, error, isLoading } = useGetWorkExperienceByUserIdQuery(userId);

  if (isLoading) {
    return <DefaultLoading />;
  }

  if (error) {
    return <DefaultError message={(error as any).error} />;
  }

  return (
    <Box sx={{ maxWidth: 575 }}>
      <Typography variant="h5" sx={{ margin: 1 }}>
        WorkExperience:
      </Typography>
      {data?.map((we: WorkExperienceResponse) => (
        <Card key={we.id} variant={"outlined"} sx={{ margin: 1 }}>
          <CardContent>
            <Typography>{we.position}</Typography>
            <Typography>{we.company}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
