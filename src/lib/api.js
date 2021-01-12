import axios from "axios";

const baseURL = "https://api.cookieparking.com/";

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

export const postCookieRead = async (headers, id) => {
  try {
    const { data } = await axios({
      baseURL,
      url: `cookies/${id}/read`,
      method: "post",
      headers,
    });
    console.log("[SUCCESS] POST COOKIES READ", data);
  } catch (e) {
    console.error("[FAIL] POST COOKIES READ", e);
    return e;
  }
};

export const deleteCookies = async (headers, id) => {
  try {
    const { data } = await axios({
      baseURL,
      url: `/cookies/${id}`,
      method: "delete",
      headers,
    });
    console.log("[SUCCESS] DELETE COOKIES", data);
    return data;
  } catch (e) {
    console.error("[FAIL] DELETE COOKIES", e);
    return e;
  }
};

export const deleteDir = async (headers, id) => {
  try {
    const { data } = await axios({
      baseURL,
      url: `/directories/${id}`,
      method: "delete",
      headers,
    });
    console.log("[SUCCESS] DELETE DIRECTORIES", data);
    return data;
  } catch (e) {
    console.error("[FAIL] DELETE DIRECTORIES", e);
    return e;
  }
};

export const addCookieToDir = async (headers, body) => {
  try {
    const { data } = await axios({
      baseURL,
      url: `/directories/add/cookie`,
      method: "post",
      headers,
      data: body,
    });
    console.log("[SUCCESS] ADD COOKIE TO DIRECTORIES", data);
    return data;
  } catch (e) {
    console.error("[FAIL] ADD COOKIE TO DIRECTORIES", e);
    return e;
  }
};

export const postDir = async (headers, body) => {
  try {
    const { data } = await axios({
      baseURL,
      url: "/directories",
      method: "post",
      headers,
      data: body,
    });
    console.log("[SUCCESS] POST DIRECTORIES", data);
    return data;
  } catch (e) {
    console.error("[FAIL] POST DIRECTORIES", e);
    return e;
  }
};

export const getDirAll = async (headers) => {
  try {
    const { data } = await axios({
      baseURL,
      url: `/directories`,
      method: "get",
      headers,
    });
    console.log("[SUCCESS] GET ALL DIRECTORIES", data);
    return data;
  } catch (e) {
    console.error("[FAIL] GET ALL DIRECTORIES", e);
    return e;
  }
};

export const updateDir = async (headers, body, id) => {
  try {
    const { data } = await axios({
      baseURL,
      url: `/directories/${id}`,
      method: "put",
      headers,
      data: body,
    });
    console.log("[SUCCESS] UPDATE DIRECTORIES", data);
    return data;
  } catch (e) {
    console.error("[FAIL] UPDATE DIRECTORIES", e);
    return e;
  }
};
