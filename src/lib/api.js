import axios from "axios";

const baseURL = "https://www.cookieparking.com/api";

export const getDirCookies = async (headers, dirId) => {
  try {
    const { data } = await axios({
      baseURL,
      url: `directories/${dirId}`,
      method: "get",
      headers,
    });
    console.log("[SUCCESS] GET COOKIES", data);
    return data;
  } catch (e) {
    console.error("[FAIL] GET COOKIES", e);
    return e;
  }
};
