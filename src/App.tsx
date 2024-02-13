import { Grid } from "@mui/material";
import { FC } from "react";
import "./App.css";
import Layout from "./components/Layout";
import mockPosts from "./posts.json";

const App: FC = () => {
  const apiroot = import.meta.env.VITE_API_ROOT;
  console.log("🚀 ~ apiroot:", apiroot);
  fetch(new URL(`${import.meta.env.VITE_API_ROOT}/api/v1/feature-requests`))
    .then((res) => res.json())
    .then((data) => console.log(data));
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
