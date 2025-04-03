import { WeatherDataType } from "./types/types";

export const getCorrectValue = (
  detail: string,
  weatherData: WeatherDataType
): string => {
  if (detail === "City:") {
    return weatherData?.address;
  }
  if (detail === "Datetime:") {
    return weatherData?.currentConditions?.datetime;
  }
  if (detail === "Temperature:") {
    const temp = weatherData?.currentConditions?.temp;
    const tempToCelcius = Math.round((temp - 32) / 1.8);
    return temp ? `${tempToCelcius}℃` : "";
  }
  const hum = weatherData?.currentConditions?.humidity;
  return hum ? `${hum}%` : "";
};
