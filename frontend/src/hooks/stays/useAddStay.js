import axios from "axios";
import { useState } from "react";
import { config } from "../../utils/env.js";

export const useAddStay = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAddStay = async (formData) => {
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${config.api_url}/stays/create-stay`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      return response.data;
    } catch (err) {
      console.error("Error adding stay: ", err);
      setError(err.response?.data?.message || "Failed to add stay");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { handleAddStay, isLoading, error };
};
