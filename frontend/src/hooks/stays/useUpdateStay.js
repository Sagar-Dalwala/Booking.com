import axios from "axios";
import { useState } from "react";
import { config } from "../../utils/env";

export const useUpdateStay = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateStay = async (id, formData) => {
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");

      const response = await axios.patch(
        `${config.api_url}/stays/update-stay/${id}`,
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
      console.error("Error updating stay: ", err);
      setError(err.response?.data?.message || "Failed to update stay");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { updateStay, isLoading, error };
};
