import axios from "axios";

const baseURL = "https://api.cookieparking.com/";

const postLogin = async (headers, body) => {
    try{
        const { data } = await axios({
            baseURL,
            url: `auth/google`,
            method: "post",
            headers,
            data: body
        });
        console.log("[SUCCESS] POST LOGIN", data);
        return data;
    }catch(e){
        console.error("[FAIL] LOGIN", e);
        return e;
    }
}

const loginAPI = {
    postLogin,
};

export default loginAPI;