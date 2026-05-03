import express from "express";
import cors from "cors";
import apiRoutes from "./index";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
