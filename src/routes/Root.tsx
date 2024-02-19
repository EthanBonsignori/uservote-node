import { Box, LinearProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { getFeatureRequests } from "../api/api";
import FeatureRequest from "../components/FeatureRequest";
import Layout from "../components/Layout";

const Root: FC = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["feature-requests"],
    queryFn: getFeatureRequests,
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
