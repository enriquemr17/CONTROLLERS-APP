import express from "express";
import cors from "cors";
import gamesRoutes from "./routes/games.routes.js"
const app = express();

app.use(cors());
app.use(express.json());

app.use ("/api/games", gamesRoutes); 

const PORT = 3001;

app.listen(PORT, () => {
  console.log("INDEX OK");
});