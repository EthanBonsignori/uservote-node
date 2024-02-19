import { Box, LinearProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { FeatureRequestGetResponse } from "../api/generated";
import FeatureRequest from "../components/FeatureRequest";
import Layout from "../components/Layout";

const Root: FC = () => {
  const featureRequestsQuery = (): Promise<FeatureRequestGetResponse[]> =>
    fetch(`${import.meta.env.VITE_API_ROOT}/api/v1/feature-request`).then(
      (res) => res.json()
    );

  const { isLoading, error, data } = useQuery({
    queryKey: ["feature-requests"],
    queryFn: featureRequestsQuery,
  });

  if (isLoading)
    return (
      <Layout>
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      </Layout>
    );

  if (error) return <Layout>Error: {error.message}</Layout>;

  if (!data)
    return <Layout>No data yet, try creating a feature request</Layout>;

  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12} key={1}>
          {data.map((featureRequest) => (
            <FeatureRequest
              key={featureRequest.id}
              featureRequest={featureRequest}
            />
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Root;
