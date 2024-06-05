import mongoose from "mongoose";
import { UrlDbInfo } from "../types";
//import config from "../config/config.js";

const urlSchema: mongoose.Schema<UrlDbInfo> = new mongoose.Schema({
  userInfo: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  data: {
    type: [
      {
        urlOrigin: { type: String, required: true },
        shortUrl: { type: String, required: true },
      },
    ],
  },
});

const urlModel = mongoose.model<UrlDbInfo>("ERROR", urlSchema);
export default urlModel;
