import { Document, ObjectId } from "mongoose";
export interface Urls extends Document {
  longUrl: string;
  shortUrl: string;
  createdAt: Date;
  expiresAt: Date;
  clicks: number;
}
export interface Users extends Document {
  userName: string;
  email: string;
  password: string;
  urls: ObjectId[];
}
export interface Config {
  PORT?: string;
  MONGOURL?: string;
  DBNAME?: string;
}
