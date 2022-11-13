import { ApiHeaders, ApiMethods } from "../utils/constants";
import { keys } from "../utils/keys";
import fetchRequest from "./fetchRequest";
import { urls } from "./urls";

const getVehicleGroups = async(token) => {
  try {
    const response  = await fetchRequest({
      method:ApiMethods.get,
      baseURL:keys.baseUrl,
      url:urls.vehiclesGroup,
      headers:{...ApiHeaders,authorization:`Bearer ${token}`}
    })
    return response;
  } catch (error) {
    throw error;
  }
}



export const vehicleService = {
  getVehicleGroups
};