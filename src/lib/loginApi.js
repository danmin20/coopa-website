import axios from "axios";

const baseURL = "https://api.cookieparking.com";

const postLogin = async (headers, body) => {
  try {
    const { data } = await axios({
      baseURL,
      url: `/auth/google`,
      method: "post",
      headers,
      data: body,
    });
    console.log("[SUCCESS] POST LOGIN", data);
    return data;
  } catch (e) {
    console.error("[FAIL] LOGIN", e);
    return e;
  }
};

const getUsers = async (headers) => {
  try {
    const { data } = await axios({
      baseURL,
      url: `/users`,
      method: "get",
      headers,
    });
    console.log("[SUCCESS] GET USERS", data);
    return data;
  } catch (e) {
    console.error("[FAIL] GET USERS", e);
    return e;
  }
};

const putUsers = async (headers, body) => {
  try {
    const data = await axios({
      baseURL,
      url: `/users`,
      method: "put",
      headers,
      data: body,
    });
    console.log("[SUCCESS] PUT USERS", data);
    return data;
  } catch (e) {
    console.error("[FAIL] PUT USERS", e);
    return e;
  }
};

const loginAPI = {
  postLogin,
  getUsers,
  putUsers,
};

export default loginAPI;
