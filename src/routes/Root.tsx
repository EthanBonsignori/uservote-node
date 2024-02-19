import { Box, LinearProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import Layout from "../components/Layout";

const Root: FC = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["feature-requests"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_ROOT}/api/v1/feature-request`).then(
        (res) => res.json()
      ),
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

  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12} key={1}>
          <h2>{"test"}</h2>
          <p>{"testste"}</p>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Root;
