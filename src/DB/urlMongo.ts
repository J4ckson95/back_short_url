import { Urls } from "../types";
import urlModel from "./models/urlModel";

export const getUrlsId = async (id: string) => {
  try {
    return await urlModel.findById(id);
  } catch (error) {
    return console.error("Error en getUrls");
  }
};
export const addLongUrl = async (newUrl: Urls) => {
  try {
    await urlModel.create(newUrl);
  } catch (error) {
    return console.error("Error en addLongUrl");
  }
};
export const deleteUrl = async (id: string) => {
  try {
    return urlModel.deleteOne({ id: id });
  } catch (error) {
    return console.error("Error en deleteUrl");
  }
};
