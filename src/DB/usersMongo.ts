import { Users } from "../types";
import urlModel from "./models/urlModel";
import usersModel from "./models/usersModel";

export const createUser = async (user: Users) => {
  try {
    await usersModel.create(user);
  } catch (error) {
    return console.error("Error en createdUser");
  }
};
export const getUser = async (id: string) => {
  try {
    return await urlModel.findById(id);
  } catch (error) {
    return console.error("Error en getUser");
  }
};
