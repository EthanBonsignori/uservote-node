import { FC } from "react";
import "./App.css";
import Layout from "./components/Layout";
import mockPosts from "./posts.json";
import { Grid } from "@mui/material";

const App: FC = () => {
  return (
    <Layout>
      <Grid container spacing={2}>
        {mockPosts.data.map((post) => (
          <Grid item xs={12} key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default App;
