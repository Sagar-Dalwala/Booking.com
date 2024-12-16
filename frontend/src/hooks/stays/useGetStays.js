import { useState } from "react";
import { config } from "../../utils/env.js";
import axios from "axios";

export const useGetStays = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getStays = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(`${config.api_url}/stays/get-stays`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response === "") {
        return;
      }


      return response.data;
    } catch (error) {
      console.log("Get Stays Error: ", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { getStays, isLoading, error };
};
