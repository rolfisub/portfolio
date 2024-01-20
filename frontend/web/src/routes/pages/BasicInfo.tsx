import React from "react";
import { useGetBasicInfoByUserQuery } from "../../api/basicInfoApi";

export default function BasicInfo() {
  const { data, error, isLoading } = useGetBasicInfoByUserQuery("1");

  return (
    <div>
      {error ? (
        <>Error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>{data?.name}</>
      ) : null}
    </div>
  );
}
