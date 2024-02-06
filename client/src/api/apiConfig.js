import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000";

export const requestMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

export const sendRequest = async ({
  method = requestMethods.GET,
  route,
  body,
  includeHeader = false,
}) => {

  if (!route) {
    throw new Error("Route is required");
  }

  try {
    const response = await axios({
      method,
      url: route,
      data: body,
    });

    return response.data;
  } catch (error) {
    console.error("Error in sendRequest", error);
    throw error;
  }
}