import axios from "axios";

const KEY = "AIzaSyBDQ91K04T72Bs2AS_RTS_LuKs1-LuXZNw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
