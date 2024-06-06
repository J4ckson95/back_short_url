import mongoose from "mongoose";
import { Urls } from "../../types";

const urlSchema = new mongoose.Schema<Urls>({
  longUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  clicks: { type: Number, default: 0 },
});
const urlModel = mongoose.model<Urls>("url", urlSchema);
export default urlModel;
