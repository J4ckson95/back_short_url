import dotenv from "dotenv";
import { Config } from "../types";

dotenv.config();

const config: Config = {
  PORT: process.env.PORT,
  MONGOURL: process.env.MONGOURL,
  DBNAME: process.env.DBNAME,
};
export default config;
