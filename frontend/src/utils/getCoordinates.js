import axios from "axios";

const OPEN_CAGE_API_KEY = "41b913d5c49d4924aa5687d0f74189d4";

export const getCoordinates = async (address) => {
  try {
    const response = await axios.get("https://api.opencagedata.com/geocode/v1/json", {
      params: {
        q: address,
        key: OPEN_CAGE_API_KEY,
      },
    });

    if (response.data.results.length === 0) {
      throw new Error("No results found for the given address");
    }

    const { lat, lng } = response.data.results[0].geometry;
    return { latitude: lat, longitude: lng };
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    return { latitude: null, longitude: null };
  }
};
