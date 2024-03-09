import express from "express";
import cors from "cors";
import router from "./routes/routes.js";
import { globalErrorHandler } from "./middleware/globalErrorHandler.js";
import notFound from "./middleware/notFound.js";
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
//globalErrorHandler
app.use(globalErrorHandler);
//not found routes
app.use(notFound);
export default app;
