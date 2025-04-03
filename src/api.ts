import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

const sendPrompt = async (location: string) => {
  const response = await axios.get(`${url}/${location}?key=${API_KEY}`);
  return response.data;
};

export default sendPrompt;
