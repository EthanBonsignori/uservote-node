import Grid from "@mui/material/Grid";
import { FC } from "react";
import Layout from "../components/Layout";

const Root: FC = () => {
  // const apiRoot = import.meta.env.VITE_API_ROOT;
  // console.log("🚀 ~ apiRoot:", apiRoot);
  // fetch(new URL(`${apiRoot}/api/v1/feature-request`))
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
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
