import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://www.dailynewsread.com/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json"
  }
});

export default {
  getDegrees() {
    return apiClient.get("/degrees");
  },
  contactMe(formData) {
    return apiClient.post("/contact", formData);
  }
};
