import express from "express";
import cors from "cors";
import router from "./routes/routes.js";
const app = express();
//parser
app.use(express.json());
app.use(cors());

//application routes
app.use("/api/v1", router);

app.use("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcom to my server",
  });
});

export default app;
