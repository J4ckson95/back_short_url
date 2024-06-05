import { Document } from "mongoose";
type userInfo = {
  name: string;
  email: string;
  password: string;
};
type DB = {
  urlOrigin: string;
  shortUrl: string;
};
export interface UrlDbInfo extends Document {
  userInfo: userInfo;
  data: DB[];
}
