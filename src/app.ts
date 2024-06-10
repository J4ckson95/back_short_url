import Express from "express";
import mongoose from "mongoose";
import config from "./config/config";

const app = Express();
app.use(Express.json());

mongoose.connect(config.MONGOURL, { dbName: config.DBNAME }).then(() => {
  console.log("DB Connected");
  app.listen(config.PORT, () =>
    console.log(`Running Server at port: ${config.PORT}`)
  );
});
