import p from "axios";

/** Base url to make requests to the cosmos db */
const instance = p.create({
  baseURL: "http://10.47.0.183/api",
});

export default instance;
