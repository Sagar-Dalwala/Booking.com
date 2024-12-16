import { useState } from "react";
import axios from "axios";
import { config } from "../../utils/env.js";

export const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const signIn = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${config.api_url}/auth/signin`,
        { email, password }, 
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      localStorage.setItem("token", response.data.token);

      return response.data;
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { signIn, isLoading, error };
};
