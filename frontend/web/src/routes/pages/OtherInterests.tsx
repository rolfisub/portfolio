import React from "react";
import { DefaultLoading } from "../../components/DefaultLoading";
import { DefaultError } from "../../components/DefaultError";
import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import {
  OtherInterestsResponse,
  useGetOtherInterestsByUserIdQuery,
} from "../../api/otherInterestsApi";

export default function OtherInterests() {
  const userId = 1;
  const { data, error, isLoading } = useGetOtherInterestsByUserIdQuery(userId);

  if (isLoading) {
    return <DefaultLoading />;
  }

  if (error) {
    return <DefaultError message={(error as any).error} />;
  }

  return (
    <Box sx={{ maxWidth: 575 }}>
      <Typography variant="h5" sx={{ margin: 1 }}>
        OtherInterests:
      </Typography>
      <Card variant={"outlined"} sx={{ margin: 1 }}>
        <CardContent>
          {data?.map((interest: OtherInterestsResponse) => (
            <Chip key={interest.id} label={interest.name}></Chip>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}
