import express from "express";
import mountRoutes from "./routes";

const PORT = 4001;

const app = express();
app.use(express.json());

mountRoutes(app);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
