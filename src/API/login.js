import { ApiHeaders, ApiMethods } from "../utils/constants"
import { keys } from "../utils/keys";
import fetchRequest from "./fetchRequest";
import { urls } from "./urls";

const loginWithCredentials = async  (user) => {
  try {
      const response = await fetchRequest({
        method:ApiMethods.post,
        baseURL:keys.baseUrl,
        url: urls.authLogin,
        body:user,
        headers:ApiHeaders
      });
      return response
    } catch (error) {
      throw error
    }
}

export const loginApi = {
  loginWithCredentials
}