import axios from "axios";

const React_app_api_url = process.env.REACT_APP_API_URL;

const URL = React_app_api_url;

export const authenticateUser = async (data) => {
  try {
    return await axios.post(`${URL}/`, data);
  } catch (error) {
    console.log("Error while calling dataAuthenticateUser api", error);
  }
};
