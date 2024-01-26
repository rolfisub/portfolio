import React from "react";
import { DefaultError } from "../../components/DefaultError";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { DefaultLoading } from "../../components/DefaultLoading";
import {
  EducationResponse,
  useGetEducationByUserIdQuery,
} from "../../api/educationApi";

export default function Education() {
  const userId = 1;
  const { data, error, isLoading } = useGetEducationByUserIdQuery(userId);

  if (isLoading) {
    return <DefaultLoading />;
  }

  if (error) {
    return <DefaultError message={(error as any).error} />;
  }

  return (
    <Box sx={{ maxWidth: 575 }}>
      <Typography variant="h5" sx={{ margin: 1 }}>
        Projects:
      </Typography>
      {data?.map((education: EducationResponse) => (
        <Card key={education.id} variant={"outlined"} sx={{ margin: 1 }}>
          <CardContent>
            <Typography>{education.degree}</Typography>
            <Typography>{education.school}</Typography>
            <Typography>{education.graduation_date}</Typography>
            <Typography>{education.location}</Typography>
            <Typography>{education.example_link}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
