import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { checkAndNavigate } from "../utils/helper";

let accessToken;
const baseUrl = window.location.origin;
console.log(baseUrl);

const api = axios.create({
  baseURL: `${baseUrl}`,
});

// Interceptor to handle dynamic Content-Type
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken, "=> api accessToken ");

    // Set Authorization header if accessToken exists
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    // Conditionally set the Content-Type header based on data type
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Refresh  access Token function
const refreshAccessToken = (accessToken) => {
  localStorage.setItem("accessToken", accessToken);
};

// Custom hook to handle navigation
export const useAxiosInterceptors = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  useEffect(() => {
    const responseInterceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401) {
          const errorMessage = error.response.data.message;

          // Check if the error is due to an expired access token
          if (errorMessage === "Token required.") {
            localStorage.setItem("accessToken", "");
            setUser(false);
            checkAndNavigate(navigate);
          } else if (
            errorMessage === "Token expired." &&
            !originalRequest._retry
          ) {
            originalRequest._retry = true;

            try {
              const { data } = await axios.get("/auth/refresh-token", {
                withCredentials: true,
                headers: { Authorization: `Bearer ${accessToken}` },
              });
              console.log("api.js----- refresh token data", data);

              refreshAccessToken(data.accessToken);

              api.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${data.accessToken}`;

              return api(originalRequest);
            } catch (refreshError) {
              console.error("Refresh token error:", refreshError);
              navigate("/app");
              checkAndNavigate(navigate);

              console.log("Refresh token error:  navigate it");

              return Promise.reject(refreshError);
            }
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      // Eject the interceptor when the component unmounts
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [navigate, setUser]);
};

// Example component using the custom hook
export const ApiComp = () => {
  useAxiosInterceptors();
  return <></>;
};

export const postApi = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    console.log("response", response.data);

    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const patchApi = async (endpoint, data) => {
  try {
    const response = await api.patch(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

export const getApi = async (endpoint, params = {}) => {
  try {
    const query = new URLSearchParams(params).toString();
    const response = await api.get(`${endpoint}?${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const deleteApi = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
