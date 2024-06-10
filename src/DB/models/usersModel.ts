import mongoose from "mongoose";
import { Users } from "../../types";

const userSchema = new mongoose.Schema<Users>({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  urls: [{ type: mongoose.Schema.Types.ObjectId, ref: "url" }],
});
const usersModel = mongoose.model<Users>("users", userSchema);
export default usersModel;
