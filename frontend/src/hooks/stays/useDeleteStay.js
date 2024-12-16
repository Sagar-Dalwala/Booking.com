import axios from "axios";
import { useState } from "react";
import { config } from "../../utils/env";

export const useDeleteStay = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteStay = async (id) => {
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");

      const response = await axios.delete(
        `${config.api_url}/stays/delete-stay/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

      return response.data;
    } catch (error) {
      console.log("Delete Stay Error: ", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteStay, isLoading, error };
};
