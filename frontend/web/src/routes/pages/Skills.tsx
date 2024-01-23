import React from "react";
import { SkillsResponse, useGetSkillsByUserIdQuery } from "../../api/skillsApi";
import { DefaultLoading } from "../../components/DefaultLoading";
import { DefaultError } from "../../components/DefaultError";
import { Box, Card, CardContent, Chip, Typography } from "@mui/material";

export default function Skills() {
  const userId = 1;
  const { data, error, isLoading } = useGetSkillsByUserIdQuery(userId);

  if (isLoading) {
    return <DefaultLoading />;
  }

  if (error) {
    return <DefaultError message={(error as any).error} />;
  }

  return (
    <Box sx={{ maxWidth: 575 }}>
      <Typography variant="h5" sx={{ margin: 1 }}>
        Skills:
      </Typography>
      <Card variant={"outlined"} sx={{ margin: 1 }}>
        <CardContent>
          {data?.map((skill: SkillsResponse) => (
            <Chip key={skill.id} label={skill.skill}></Chip>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}
