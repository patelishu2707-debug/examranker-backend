import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://examranker-frontend.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ExamRanker Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});