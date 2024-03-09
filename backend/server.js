import app from "./app.js";
import mongoose from "mongoose";
import config from "./config/config.js";
const connectToDB = async () => {
  try {
    await mongoose.connect(config.database_url);
    app.listen(config.port, () => {
        console.log('listening on port ' + config.port + ' Connected to DB')
    });
  } catch (error) {
    console.log(error);
  }
};
connectToDB();
