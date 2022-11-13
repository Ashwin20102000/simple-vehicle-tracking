const fetchRequest = async({
  method,
  baseURL,
  url,
  body,
  headers
}) => {
  try {
    const request = body ? {method,headers,body:JSON.stringify(body)}:{method,headers};
    const response = await fetch(baseURL+url,request);
    return response.json();
  } catch (error) {
    throw {
      success: false,
      message:  "Internal Server Error, Please try again",
      status: error || 500,
    };
  }
}

export default fetchRequest;